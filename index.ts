import {
  Client,
  Collection,
  GatewayIntentBits,
  Guild,
  Invite,
  Partials,
} from "discord.js";
import type { Request, Response } from "express";
import express from "express";
import { supabase } from "./supabase";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
  partials: [Partials.GuildMember],
});

// 👉 Replace with your actual guild ID
const TARGET_GUILD_ID = process.env["DISCORD_GUILD_ID"] as string;

const invitesCache = new Map<string, Collection<string, Invite>>();

async function cacheGuildInvites(guild: Guild) {
  const invites = await guild.invites.fetch();
  console.log("📥 fetched invites");
  invitesCache.set(guild.id, invites);
  console.log(`✅ Cached ${invites.size} invites for guild ${guild.name}`);
}

client.once("ready", async () => {
  console.log(`🚀 Logged in as ${client.user?.tag}`);

  const guild = client.guilds.cache.get(TARGET_GUILD_ID);
  if (!guild) {
    console.error("❌ Bot is not in the target guild or invalid guild ID");
    return;
  }

  await cacheGuildInvites(guild);
});

client.on("guildMemberAdd", async (member) => {
  // Ignore members from other guilds
  if (member.guild.id !== TARGET_GUILD_ID) return;

  try {
    const cachedInvites = invitesCache.get(member.guild.id);
    const newInvites = await member.guild.invites.fetch();

    const usedInvite = newInvites.find(
      (inv) => (cachedInvites?.get(inv.code)?.uses ?? 0) < (inv.uses ?? 0)
    );

    // Update cache
    invitesCache.set(member.guild.id, newInvites);

    if (!usedInvite) {
      console.log(`⚠️ Could not detect invite for ${member.user.tag}`);
      return;
    }

    console.log(
      `👤 ${member.user.tag} joined using invite: ${usedInvite.code}`
    );

    const { data: inviteRecord, error } = await supabase
      .from("discord_invites")
      .select("*")
      .eq("invite_code", usedInvite.code)
      .single();

    if (error || !inviteRecord) {
      console.error("❌ No matching invite found in Supabase:", error);
      return;
    }

    const role = member.guild.roles.cache.get(inviteRecord.role_id);
    if (role) {
      await member.roles.add(role);
      console.log(`✅ Assigned role ${role.name} to ${member.user.tag}`);
    }
  } catch (err) {
    console.error("💥 Error handling guildMemberAdd:", err);
  }
});

client.login(process.env["DISCORD_BOT_TOKEN"]);

const PORT = process.env["PORT"] || 3002;
const ORIGIN = process.env["ORIGIN_URL"] || `http://localhost:${PORT}`;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// Self ping route to keep the server alive
app.get("/ping", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

// Set up self ping interval
setInterval(() => {
  fetch(`${ORIGIN}/ping`)
    .then((response) => response.json())
    .catch((error) => console.error("Self-ping failed:", error));
}, 15 * 60 * 1000); // 15 minutes in milliseconds

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
