export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      devspot_feedback: {
        Row: {
          comments: string | null
          created_at: string
          email: string | null
          experience: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string
          email?: string | null
          experience?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string
          email?: string | null
          experience?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "devspot_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devspot_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devspot_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "devspot_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      discord_invites: {
        Row: {
          created_at: string
          guild_id: string
          hackathon_id: number
          id: number
          invite_code: string
          role_id: string
        }
        Insert: {
          created_at?: string
          guild_id: string
          hackathon_id: number
          id?: number
          invite_code: string
          role_id: string
        }
        Update: {
          created_at?: string
          guild_id?: string
          hackathon_id?: number
          id?: number
          invite_code?: string
          role_id?: string
        }
        Relationships: []
      }
      feature_requests: {
        Row: {
          created_at: string
          email: string | null
          feature: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          feature?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          feature?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feature_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feature_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      global_hackathon_feedback: {
        Row: {
          comments: string | null
          created_at: string
          hackathon_id: number
          id: number
          overall_devspot_rating: number
          overall_hackathon_rating: number
          recommend_devspot_rating: number
          recommend_hackathon_rating: number
          user_id: string
        }
        Insert: {
          comments?: string | null
          created_at?: string
          hackathon_id: number
          id?: number
          overall_devspot_rating: number
          overall_hackathon_rating: number
          recommend_devspot_rating: number
          recommend_hackathon_rating: number
          user_id: string
        }
        Update: {
          comments?: string | null
          created_at?: string
          hackathon_id?: number
          id?: number
          overall_devspot_rating?: number
          overall_hackathon_rating?: number
          recommend_devspot_rating?: number
          recommend_hackathon_rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "global_hackathon_feedback_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_hackathon_feedback_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_hackathon_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_hackathon_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_hackathon_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "global_hackathon_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_announcements: {
        Row: {
          author_avatar: string | null
          author_username: string
          communication_link_id: number | null
          content: string
          created_at: string | null
          hackathon_id: number
          id: number
          is_active: boolean | null
          platform_channel_id: string
          platform_message_id: string
          platform_timestamp: string
          platform_type: string
          updated_at: string | null
        }
        Insert: {
          author_avatar?: string | null
          author_username: string
          communication_link_id?: number | null
          content: string
          created_at?: string | null
          hackathon_id: number
          id?: number
          is_active?: boolean | null
          platform_channel_id?: string
          platform_message_id?: string
          platform_timestamp: string
          platform_type?: string
          updated_at?: string | null
        }
        Update: {
          author_avatar?: string | null
          author_username?: string
          communication_link_id?: number | null
          content?: string
          created_at?: string | null
          hackathon_id?: number
          id?: number
          is_active?: boolean | null
          platform_channel_id?: string
          platform_message_id?: string
          platform_timestamp?: string
          platform_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_announcements_communication_link_id_fkey"
            columns: ["communication_link_id"]
            isOneToOne: false
            referencedRelation: "hackathon_communication_links"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_announcements_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_announcements_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_application_answers: {
        Row: {
          answer: string
          created_at: string
          id: number
          participant_id: string | null
          question_id: number
          updated_at: string
        }
        Insert: {
          answer: string
          created_at?: string
          id?: number
          participant_id?: string | null
          question_id: number
          updated_at?: string
        }
        Update: {
          answer?: string
          created_at?: string
          id?: number
          participant_id?: string | null
          question_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_application_answers_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_application_answers_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_application_answers_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_application_answers_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_application_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "hackathon_application_questions"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_application_questions: {
        Row: {
          created_at: string
          hackathon_id: number
          id: number
          order: number
          question: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          hackathon_id: number
          id?: number
          order: number
          question: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          hackathon_id?: number
          id?: number
          order?: number
          question?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_application_questions_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_application_questions_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_challenge_bounties: {
        Row: {
          challenge_id: number
          company_partner_logo: string
          created_at: string
          id: number
          prize_custom: string | null
          prize_tokens: number | null
          prize_usd: number | null
          rank: number | null
          title: string
          updated_at: string
        }
        Insert: {
          challenge_id: number
          company_partner_logo: string
          created_at?: string
          id?: number
          prize_custom?: string | null
          prize_tokens?: number | null
          prize_usd?: number | null
          rank?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          challenge_id?: number
          company_partner_logo?: string
          created_at?: string
          id?: number
          prize_custom?: string | null
          prize_tokens?: number | null
          prize_usd?: number | null
          rank?: number | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_challenge_bounties_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_challenge_feedback: {
        Row: {
          challenge_id: number
          challenge_recommendation_rating: number | null
          comments: string | null
          created_at: string
          docs_rating: number | null
          hackathon_id: number
          id: number
          overall_rating: number | null
          support_rating: number | null
          user_id: string
        }
        Insert: {
          challenge_id: number
          challenge_recommendation_rating?: number | null
          comments?: string | null
          created_at?: string
          docs_rating?: number | null
          hackathon_id: number
          id?: number
          overall_rating?: number | null
          support_rating?: number | null
          user_id?: string
        }
        Update: {
          challenge_id?: number
          challenge_recommendation_rating?: number | null
          comments?: string | null
          created_at?: string
          docs_rating?: number | null
          hackathon_id?: number
          id?: number
          overall_rating?: number | null
          support_rating?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_challenge_feedback_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_challenge_feedback_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_challenge_feedback_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_challenge_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_challenge_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_challenge_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_challenge_feedback_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_challenges: {
        Row: {
          challenge_name: string
          created_at: string
          description: string | null
          example_projects: string | null
          hackathon_id: number
          id: number
          is_round_2_only: boolean
          judging_criteria: string[] | null
          label: string | null
          required_tech: string[] | null
          sponsors: Json[]
          submission_requirements: string[] | null
          technologies: string[]
          updated_at: string
        }
        Insert: {
          challenge_name: string
          created_at?: string
          description?: string | null
          example_projects?: string | null
          hackathon_id: number
          id?: number
          is_round_2_only?: boolean
          judging_criteria?: string[] | null
          label?: string | null
          required_tech?: string[] | null
          sponsors?: Json[]
          submission_requirements?: string[] | null
          technologies?: string[]
          updated_at?: string
        }
        Update: {
          challenge_name?: string
          created_at?: string
          description?: string | null
          example_projects?: string | null
          hackathon_id?: number
          id?: number
          is_round_2_only?: boolean
          judging_criteria?: string[] | null
          label?: string | null
          required_tech?: string[] | null
          sponsors?: Json[]
          submission_requirements?: string[] | null
          technologies?: string[]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_challenges_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_challenges_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_communication_links: {
        Row: {
          channel_id: string | null
          channel_name: string | null
          created_at: string | null
          hackathon_id: number
          id: number
          is_active: boolean | null
          is_primary: boolean | null
          link_url: string
          metadata: Json | null
          platform_type: string
          updated_at: string | null
        }
        Insert: {
          channel_id?: string | null
          channel_name?: string | null
          created_at?: string | null
          hackathon_id: number
          id?: number
          is_active?: boolean | null
          is_primary?: boolean | null
          link_url: string
          metadata?: Json | null
          platform_type: string
          updated_at?: string | null
        }
        Update: {
          channel_id?: string | null
          channel_name?: string | null
          created_at?: string | null
          hackathon_id?: number
          id?: number
          is_active?: boolean | null
          is_primary?: boolean | null
          link_url?: string
          metadata?: Json | null
          platform_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_communication_links_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_communication_links_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_community_partners: {
        Row: {
          created_at: string
          hackathon_id: number
          id: number
          logo_url: string
          partner_website: string
        }
        Insert: {
          created_at?: string
          hackathon_id: number
          id?: number
          logo_url: string
          partner_website: string
        }
        Update: {
          created_at?: string
          hackathon_id?: number
          id?: number
          logo_url?: string
          partner_website?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_community_partners_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_community_partners_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_faqs: {
        Row: {
          answer: string
          clicks: number | null
          created_at: string
          hackathon_id: number
          id: number
          question: string
          updated_at: string
        }
        Insert: {
          answer: string
          clicks?: number | null
          created_at?: string
          hackathon_id: number
          id?: number
          question: string
          updated_at?: string
        }
        Update: {
          answer?: string
          clicks?: number | null
          created_at?: string
          hackathon_id?: number
          id?: number
          question?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_faqs_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_faqs_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_notification_data: {
        Row: {
          created_at: string
          id: number
          payload: Json | null
          transaction_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          payload?: Json | null
          transaction_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          payload?: Json | null
          transaction_id?: string | null
        }
        Relationships: []
      }
      hackathon_participants: {
        Row: {
          application_status: Database["public"]["Enums"]["hackathon_participant_application_status"]
          created_at: string
          hackathon_id: number
          id: number
          looking_for_teammates: boolean
          participant_id: string | null
          updated_at: string
        }
        Insert: {
          application_status?: Database["public"]["Enums"]["hackathon_participant_application_status"]
          created_at?: string
          hackathon_id: number
          id?: number
          looking_for_teammates?: boolean
          participant_id?: string | null
          updated_at?: string
        }
        Update: {
          application_status?: Database["public"]["Enums"]["hackathon_participant_application_status"]
          created_at?: string
          hackathon_id?: number
          id?: number
          looking_for_teammates?: boolean
          participant_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_participants_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_resource_challenges: {
        Row: {
          challenge_id: number | null
          created_at: string | null
          id: number
          resource_id: number | null
        }
        Insert: {
          challenge_id?: number | null
          created_at?: string | null
          id?: number
          resource_id?: number | null
        }
        Update: {
          challenge_id?: number | null
          created_at?: string | null
          id?: number
          resource_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_resource_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_resource_challenges_resource_id_fkey"
            columns: ["resource_id"]
            isOneToOne: false
            referencedRelation: "hackathon_resources"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_resources: {
        Row: {
          challenge_id: number | null
          clicks: number
          created_at: string
          description: string | null
          hackathon_id: number
          has_external_link: boolean | null
          id: number
          is_downloadable: boolean | null
          sponsors: Json | null
          technologies: string[] | null
          title: string
          type: string | null
          updated_at: string
          url: string | null
        }
        Insert: {
          challenge_id?: number | null
          clicks?: number
          created_at?: string
          description?: string | null
          hackathon_id: number
          has_external_link?: boolean | null
          id?: number
          is_downloadable?: boolean | null
          sponsors?: Json | null
          technologies?: string[] | null
          title: string
          type?: string | null
          updated_at?: string
          url?: string | null
        }
        Update: {
          challenge_id?: number | null
          clicks?: number
          created_at?: string
          description?: string | null
          hackathon_id?: number
          has_external_link?: boolean | null
          id?: number
          is_downloadable?: boolean | null
          sponsors?: Json | null
          technologies?: string[] | null
          title?: string
          type?: string | null
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_resources_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_resources_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_resources_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_sessions: {
        Row: {
          can_rsvp: boolean
          created_at: string
          description: string | null
          end_time: string | null
          event_link: string | null
          hackathon_id: number
          id: number
          is_milestone: boolean
          location: Json | null
          start_time: string
          tags: string[]
          title: string
          updated_at: string
          virtual_link: string | null
        }
        Insert: {
          can_rsvp?: boolean
          created_at?: string
          description?: string | null
          end_time?: string | null
          event_link?: string | null
          hackathon_id: number
          id?: number
          is_milestone?: boolean
          location?: Json | null
          start_time: string
          tags?: string[]
          title: string
          updated_at?: string
          virtual_link?: string | null
        }
        Update: {
          can_rsvp?: boolean
          created_at?: string
          description?: string | null
          end_time?: string | null
          event_link?: string | null
          hackathon_id?: number
          id?: number
          is_milestone?: boolean
          location?: Json | null
          start_time?: string
          tags?: string[]
          title?: string
          updated_at?: string
          virtual_link?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_sessions_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_sessions_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_stakes: {
        Row: {
          amount: number
          created_at: string
          hackathon_id: number
          id: number
          participant_id: string | null
          status: Database["public"]["Enums"]["hackathon_stakes_status"]
          updated_at: string
          wallet_id: number | null
        }
        Insert: {
          amount: number
          created_at?: string
          hackathon_id: number
          id?: number
          participant_id?: string | null
          status?: Database["public"]["Enums"]["hackathon_stakes_status"]
          updated_at?: string
          wallet_id?: number | null
        }
        Update: {
          amount?: number
          created_at?: string
          hackathon_id?: number
          id?: number
          participant_id?: string | null
          status?: Database["public"]["Enums"]["hackathon_stakes_status"]
          updated_at?: string
          wallet_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_stakes_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_stakes_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_stakes_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_stakes_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_stakes_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_stakes_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_stakes_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "participant_wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_user_session_rsvp: {
        Row: {
          created_at: string
          id: number
          participant_id: string | null
          session_id: number
          status: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          participant_id?: string | null
          session_id: number
          status?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          participant_id?: string | null
          session_id?: number
          status?: boolean
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_user_session_rsvp_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_user_session_rsvp_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_user_session_rsvp_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_user_session_rsvp_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_user_session_rsvp_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "hackathon_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_vip_roles: {
        Row: {
          created_at: string
          hackathon_id: number
          role_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          hackathon_id: number
          role_id: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          hackathon_id?: number
          role_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_vip_roles_hackathon_id_user_id_fkey"
            columns: ["hackathon_id", "user_id"]
            isOneToOne: false
            referencedRelation: "hackathon_vips"
            referencedColumns: ["hackathon_id", "user_id"]
          },
          {
            foreignKeyName: "hackathon_vip_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_vips: {
        Row: {
          created_at: string
          hackathon_id: number
          is_featured: boolean
          office_hours: string | null
          office_hours_clicks: number
          status: Database["public"]["Enums"]["invitation_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          hackathon_id: number
          is_featured?: boolean
          office_hours?: string | null
          office_hours_clicks?: number
          status?: Database["public"]["Enums"]["invitation_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          hackathon_id?: number
          is_featured?: boolean
          office_hours?: string | null
          office_hours_clicks?: number
          status?: Database["public"]["Enums"]["invitation_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_vips_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_vips_invitations: {
        Row: {
          challenge_ids: number[] | null
          created_at: string | null
          email: string | null
          hackathon_id: number | null
          id: number
          is_featured: boolean | null
          office_hour: string | null
          payload: Json | null
          roles: string[] | null
          status: Database["public"]["Enums"]["invitation_status"]
          transaction_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          challenge_ids?: number[] | null
          created_at?: string | null
          email?: string | null
          hackathon_id?: number | null
          id?: number
          is_featured?: boolean | null
          office_hour?: string | null
          payload?: Json | null
          roles?: string[] | null
          status: Database["public"]["Enums"]["invitation_status"]
          transaction_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          challenge_ids?: number[] | null
          created_at?: string | null
          email?: string | null
          hackathon_id?: number | null
          id?: number
          is_featured?: boolean | null
          office_hour?: string | null
          payload?: Json | null
          roles?: string[] | null
          status?: Database["public"]["Enums"]["invitation_status"]
          transaction_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_vips_invitations_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_invitations_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_vips_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathons: {
        Row: {
          accepting_participants: boolean
          allow_multiple_teams: boolean
          application_method: Database["public"]["Enums"]["hackathon_application_method"]
          avatar_url: string
          banner_url: string
          communication_link: string | null
          created_at: string
          deadline_to_join: string | null
          deadline_to_submit: string | null
          description: string | null
          end_date: string
          grand_prizes: Json[] | null
          id: number
          leaderboard_standing_by: Database["public"]["Enums"]["hackathon_leader_board_standing_by"]
          location: string | null
          multi_projects: boolean | null
          name: string
          organizer_id: number
          participants_limit: number
          project_submission_deadline_countdown_trigger: boolean
          project_submission_opens_countdown_trigger: boolean
          registration_start_date: string | null
          rules: string | null
          show_leaderboard_comments: boolean
          show_leaderboard_score: boolean
          sponsors: Json[]
          stake_amount: number | null
          stake_refund_event:
            | Database["public"]["Enums"]["stake_refund_event_type"]
            | null
          start_date: string
          status: Database["public"]["Enums"]["hackathon_status"]
          subdomain: string
          submission_start_date: string | null
          tags: string[] | null
          team_limit: number | null
          technologies: string[] | null
          type: Database["public"]["Enums"]["hackathon_type"]
          updated_at: string
          use_judge_bot: boolean
          winners_announcement_date: string | null
        }
        Insert: {
          accepting_participants?: boolean
          allow_multiple_teams?: boolean
          application_method?: Database["public"]["Enums"]["hackathon_application_method"]
          avatar_url?: string
          banner_url?: string
          communication_link?: string | null
          created_at?: string
          deadline_to_join?: string | null
          deadline_to_submit?: string | null
          description?: string | null
          end_date: string
          grand_prizes?: Json[] | null
          id?: number
          leaderboard_standing_by?: Database["public"]["Enums"]["hackathon_leader_board_standing_by"]
          location?: string | null
          multi_projects?: boolean | null
          name: string
          organizer_id: number
          participants_limit?: number
          project_submission_deadline_countdown_trigger?: boolean
          project_submission_opens_countdown_trigger?: boolean
          registration_start_date?: string | null
          rules?: string | null
          show_leaderboard_comments?: boolean
          show_leaderboard_score?: boolean
          sponsors?: Json[]
          stake_amount?: number | null
          stake_refund_event?:
            | Database["public"]["Enums"]["stake_refund_event_type"]
            | null
          start_date: string
          status?: Database["public"]["Enums"]["hackathon_status"]
          subdomain: string
          submission_start_date?: string | null
          tags?: string[] | null
          team_limit?: number | null
          technologies?: string[] | null
          type: Database["public"]["Enums"]["hackathon_type"]
          updated_at?: string
          use_judge_bot?: boolean
          winners_announcement_date?: string | null
        }
        Update: {
          accepting_participants?: boolean
          allow_multiple_teams?: boolean
          application_method?: Database["public"]["Enums"]["hackathon_application_method"]
          avatar_url?: string
          banner_url?: string
          communication_link?: string | null
          created_at?: string
          deadline_to_join?: string | null
          deadline_to_submit?: string | null
          description?: string | null
          end_date?: string
          grand_prizes?: Json[] | null
          id?: number
          leaderboard_standing_by?: Database["public"]["Enums"]["hackathon_leader_board_standing_by"]
          location?: string | null
          multi_projects?: boolean | null
          name?: string
          organizer_id?: number
          participants_limit?: number
          project_submission_deadline_countdown_trigger?: boolean
          project_submission_opens_countdown_trigger?: boolean
          registration_start_date?: string | null
          rules?: string | null
          show_leaderboard_comments?: boolean
          show_leaderboard_score?: boolean
          sponsors?: Json[]
          stake_amount?: number | null
          stake_refund_event?:
            | Database["public"]["Enums"]["stake_refund_event_type"]
            | null
          start_date?: string
          status?: Database["public"]["Enums"]["hackathon_status"]
          subdomain?: string
          submission_start_date?: string | null
          tags?: string[] | null
          team_limit?: number | null
          technologies?: string[] | null
          type?: Database["public"]["Enums"]["hackathon_type"]
          updated_at?: string
          use_judge_bot?: boolean
          winners_announcement_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathons_organizer_id_fkey"
            columns: ["organizer_id"]
            isOneToOne: false
            referencedRelation: "technology_owners"
            referencedColumns: ["id"]
          },
        ]
      }
      issue_reports: {
        Row: {
          created_at: string
          email: string | null
          id: number
          issue: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          issue?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          issue?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "issue_reports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "issue_reports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "issue_reports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "issue_reports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      judging_bot_scores: {
        Row: {
          ai_judged: boolean
          business_feedback: string
          business_score: number
          business_summary: string
          challenge_id: number
          created_at: string
          flagged_reason: string | null
          general_comments: string
          general_comments_summary: string
          id: number
          innovation_feedback: string
          innovation_score: number
          innovation_summary: string
          project_id: number
          score: number
          suspicious_flags: string | null
          technical_feedback: string
          technical_score: number
          technical_summary: string
          updated_at: string | null
          ux_feedback: string
          ux_score: number
          ux_summary: string
        }
        Insert: {
          ai_judged?: boolean
          business_feedback?: string
          business_score?: number
          business_summary?: string
          challenge_id: number
          created_at?: string
          flagged_reason?: string | null
          general_comments?: string
          general_comments_summary?: string
          id?: number
          innovation_feedback?: string
          innovation_score?: number
          innovation_summary?: string
          project_id: number
          score?: number
          suspicious_flags?: string | null
          technical_feedback?: string
          technical_score?: number
          technical_summary?: string
          updated_at?: string | null
          ux_feedback?: string
          ux_score?: number
          ux_summary?: string
        }
        Update: {
          ai_judged?: boolean
          business_feedback?: string
          business_score?: number
          business_summary?: string
          challenge_id?: number
          created_at?: string
          flagged_reason?: string | null
          general_comments?: string
          general_comments_summary?: string
          id?: number
          innovation_feedback?: string
          innovation_score?: number
          innovation_summary?: string
          project_id?: number
          score?: number
          suspicious_flags?: string | null
          technical_feedback?: string
          technical_score?: number
          technical_summary?: string
          updated_at?: string | null
          ux_feedback?: string
          ux_score?: number
          ux_summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "judging_bot_scores_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judging_bot_scores_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      judging_challenges: {
        Row: {
          challenge_id: number
          created_at: string
          id: number
          is_winner_assigner: boolean
          judging_id: number
          submitted_winners: boolean
          updated_at: string | null
        }
        Insert: {
          challenge_id: number
          created_at?: string
          id?: number
          is_winner_assigner: boolean
          judging_id: number
          submitted_winners?: boolean
          updated_at?: string | null
        }
        Update: {
          challenge_id?: number
          created_at?: string
          id?: number
          is_winner_assigner?: boolean
          judging_id?: number
          submitted_winners?: boolean
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "judging_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judging_challenges_judging_id_fkey"
            columns: ["judging_id"]
            isOneToOne: false
            referencedRelation: "judgings"
            referencedColumns: ["id"]
          },
        ]
      }
      judging_entries: {
        Row: {
          business_feedback: string
          business_score: number
          business_summary: string
          challenge_id: number
          created_at: string
          flagged_comments: string | null
          flagged_reason: string | null
          general_comments: string
          general_comments_summary: string
          id: number
          innovation_feedback: string
          innovation_score: number
          innovation_summary: string
          judging_bot_scores_id: number | null
          judging_id: number | null
          judging_status: Database["public"]["Enums"]["judging_status"]
          project_hidden: boolean | null
          project_id: number
          score: number
          standing: string | null
          suspicious_flags: string | null
          technical_feedback: string
          technical_score: number
          technical_summary: string
          updated_at: string | null
          ux_feedback: string
          ux_score: number
          ux_summary: string
        }
        Insert: {
          business_feedback: string
          business_score: number
          business_summary?: string
          challenge_id: number
          created_at?: string
          flagged_comments?: string | null
          flagged_reason?: string | null
          general_comments: string
          general_comments_summary?: string
          id?: number
          innovation_feedback: string
          innovation_score: number
          innovation_summary?: string
          judging_bot_scores_id?: number | null
          judging_id?: number | null
          judging_status: Database["public"]["Enums"]["judging_status"]
          project_hidden?: boolean | null
          project_id: number
          score: number
          standing?: string | null
          suspicious_flags?: string | null
          technical_feedback: string
          technical_score: number
          technical_summary?: string
          updated_at?: string | null
          ux_feedback: string
          ux_score: number
          ux_summary?: string
        }
        Update: {
          business_feedback?: string
          business_score?: number
          business_summary?: string
          challenge_id?: number
          created_at?: string
          flagged_comments?: string | null
          flagged_reason?: string | null
          general_comments?: string
          general_comments_summary?: string
          id?: number
          innovation_feedback?: string
          innovation_score?: number
          innovation_summary?: string
          judging_bot_scores_id?: number | null
          judging_id?: number | null
          judging_status?: Database["public"]["Enums"]["judging_status"]
          project_hidden?: boolean | null
          project_id?: number
          score?: number
          standing?: string | null
          suspicious_flags?: string | null
          technical_feedback?: string
          technical_score?: number
          technical_summary?: string
          updated_at?: string | null
          ux_feedback?: string
          ux_score?: number
          ux_summary?: string
        }
        Relationships: [
          {
            foreignKeyName: "judging_entries_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judging_entries_judging_bot_scores_id_fkey"
            columns: ["judging_bot_scores_id"]
            isOneToOne: false
            referencedRelation: "judging_bot_scores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judging_entries_judging_id_fkey"
            columns: ["judging_id"]
            isOneToOne: false
            referencedRelation: "judgings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judging_entries_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      judgings: {
        Row: {
          created_at: string
          deadline: string | null
          hackathon_id: number
          id: number
          is_submitted: boolean
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          deadline?: string | null
          hackathon_id: number
          id?: number
          is_submitted: boolean
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          deadline?: string | null
          hackathon_id?: number
          id?: number
          is_submitted?: boolean
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "judgings_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judgings_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judgings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judgings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judgings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "judgings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      nonces: {
        Row: {
          address: string
          created_at: string
          expires_at: string
          id: number
          nonce: string
          used: boolean
        }
        Insert: {
          address: string
          created_at?: string
          expires_at: string
          id?: number
          nonce: string
          used?: boolean
        }
        Update: {
          address?: string
          created_at?: string
          expires_at?: string
          id?: number
          nonce?: string
          used?: boolean
        }
        Relationships: []
      }
      page_views: {
        Row: {
          created_at: string | null
          event_type: string
          id: number
          ip_address: unknown | null
          metadata: Json | null
          page_identifier: string | null
          page_type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: number
          ip_address?: unknown | null
          metadata?: Json | null
          page_identifier?: string | null
          page_type: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: number
          ip_address?: unknown | null
          metadata?: Json | null
          page_identifier?: string | null
          page_type?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "page_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "page_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "page_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "page_views_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      participant_profile: {
        Row: {
          connected_accounts: Json[] | null
          created_at: string
          description: string | null
          id: number
          is_open_to_project: boolean
          is_open_to_work: boolean
          lensfrens_url: string | null
          linkedin_url: string | null
          location: string | null
          participant_id: string
          portfolio_website: string | null
          profile_token_bonus: number
          skills: Json | null
          token_balance: number
          updated_at: string
          warpcast_url: string | null
          x_url: string | null
          years_of_experience: number | null
        }
        Insert: {
          connected_accounts?: Json[] | null
          created_at?: string
          description?: string | null
          id?: number
          is_open_to_project?: boolean
          is_open_to_work?: boolean
          lensfrens_url?: string | null
          linkedin_url?: string | null
          location?: string | null
          participant_id: string
          portfolio_website?: string | null
          profile_token_bonus?: number
          skills?: Json | null
          token_balance?: number
          updated_at?: string
          warpcast_url?: string | null
          x_url?: string | null
          years_of_experience?: number | null
        }
        Update: {
          connected_accounts?: Json[] | null
          created_at?: string
          description?: string | null
          id?: number
          is_open_to_project?: boolean
          is_open_to_work?: boolean
          lensfrens_url?: string | null
          linkedin_url?: string | null
          location?: string | null
          participant_id?: string
          portfolio_website?: string | null
          profile_token_bonus?: number
          skills?: Json | null
          token_balance?: number
          updated_at?: string
          warpcast_url?: string | null
          x_url?: string | null
          years_of_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "participant_profile_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_profile_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_profile_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_profile_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      participant_roles: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      participant_transactions: {
        Row: {
          created_at: string
          id: number
          participant_id: string | null
          title: string
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          participant_id?: string | null
          title: string
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          participant_id?: string | null
          title?: string
          type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "participant_transactions_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_transactions_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_transactions_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_transactions_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      participant_wallets: {
        Row: {
          created_at: string
          id: number
          network: string | null
          participant_id: string | null
          primary_wallet: boolean
          updated_at: string
          wallet_address: string
        }
        Insert: {
          created_at?: string
          id?: number
          network?: string | null
          participant_id?: string | null
          primary_wallet?: boolean
          updated_at?: string
          wallet_address: string
        }
        Update: {
          created_at?: string
          id?: number
          network?: string | null
          participant_id?: string | null
          primary_wallet?: boolean
          updated_at?: string
          wallet_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "participant_wallets_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_wallets_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_wallets_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "participant_wallets_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_invitations: {
        Row: {
          created_at: string
          email: string
          hackathon_id: number
          invitation_status: Database["public"]["Enums"]["invitation_status"]
          referrer: string | null
          role: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          hackathon_id?: number
          invitation_status?: Database["public"]["Enums"]["invitation_status"]
          referrer?: string | null
          role: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          hackathon_id?: number
          invitation_status?: Database["public"]["Enums"]["invitation_status"]
          referrer?: string | null
          role?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pending_invitations_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_invitations_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_invitations_referrer_fkey"
            columns: ["referrer"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_invitations_referrer_fkey"
            columns: ["referrer"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_invitations_referrer_fkey"
            columns: ["referrer"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_invitations_referrer_fkey"
            columns: ["referrer"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pending_invitations_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["name"]
          },
        ]
      }
      project_challenges: {
        Row: {
          challenge_id: number
          created_at: string
          id: number
          prize_id: number | null
          project_id: number
          rank: number | null
          updated_at: string
        }
        Insert: {
          challenge_id: number
          created_at?: string
          id?: number
          prize_id?: number | null
          project_id: number
          rank?: number | null
          updated_at?: string
        }
        Update: {
          challenge_id?: number
          created_at?: string
          id?: number
          prize_id?: number | null
          project_id?: number
          rank?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_challenges_prize_id_fkey"
            columns: ["prize_id"]
            isOneToOne: false
            referencedRelation: "hackathon_challenge_bounties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_challenges_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_invitations: {
        Row: {
          created_at: string
          id: number
          project_id: number
          status: Database["public"]["Enums"]["invitation_status"]
          type: Database["public"]["Enums"]["invitation_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          project_id: number
          status: Database["public"]["Enums"]["invitation_status"]
          type: Database["public"]["Enums"]["invitation_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          project_id?: number
          status?: Database["public"]["Enums"]["invitation_status"]
          type?: Database["public"]["Enums"]["invitation_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_invitations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_invitations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      project_notification_data: {
        Row: {
          created_at: string
          id: number
          payload: Json | null
          transaction_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          payload?: Json | null
          transaction_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          payload?: Json | null
          transaction_id?: string | null
        }
        Relationships: []
      }
      project_team_members: {
        Row: {
          created_at: string
          id: number
          is_project_manager: boolean
          prize_allocation: number
          project_id: number
          status: Database["public"]["Enums"]["team member invite status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_project_manager?: boolean
          prize_allocation?: number
          project_id: number
          status?: Database["public"]["Enums"]["team member invite status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          is_project_manager?: boolean
          prize_allocation?: number
          project_id?: number
          status?: Database["public"]["Enums"]["team member invite status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_team_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_team_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          accepting_participants: boolean
          created_at: string
          demo_url: string | null
          description: string | null
          hackathon_id: number
          header_url: string | null
          id: number
          logo_url: string | null
          name: string
          project_code_type:
            | Database["public"]["Enums"]["project_code_type"]
            | null
          project_url: string | null
          submitted: boolean
          tagline: string | null
          technologies: string[] | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          accepting_participants?: boolean
          created_at?: string
          demo_url?: string | null
          description?: string | null
          hackathon_id: number
          header_url?: string | null
          id?: number
          logo_url?: string | null
          name: string
          project_code_type?:
            | Database["public"]["Enums"]["project_code_type"]
            | null
          project_url?: string | null
          submitted?: boolean
          tagline?: string | null
          technologies?: string[] | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          accepting_participants?: boolean
          created_at?: string
          demo_url?: string | null
          description?: string | null
          hackathon_id?: number
          header_url?: string | null
          id?: number
          logo_url?: string | null
          name?: string
          project_code_type?:
            | Database["public"]["Enums"]["project_code_type"]
            | null
          project_url?: string | null
          submitted?: boolean
          tagline?: string | null
          technologies?: string[] | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      team_up_requests: {
        Row: {
          created_at: string
          hackathon_id: number
          id: number
          receiver_id: string
          sender_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          hackathon_id: number
          id?: number
          receiver_id: string
          sender_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          hackathon_id?: number
          id?: number
          receiver_id?: string
          sender_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_up_requests_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_up_requests_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      technologies: {
        Row: {
          created_at: string | null
          id: number
          name: string
          slug: string
          status: Database["public"]["Enums"]["technology_status"] | null
          status_changed_by: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          slug: string
          status?: Database["public"]["Enums"]["technology_status"] | null
          status_changed_by?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          slug?: string
          status?: Database["public"]["Enums"]["technology_status"] | null
          status_changed_by?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "technologies_status_changed_by_fkey"
            columns: ["status_changed_by"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technologies_status_changed_by_fkey"
            columns: ["status_changed_by"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technologies_status_changed_by_fkey"
            columns: ["status_changed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technologies_status_changed_by_fkey"
            columns: ["status_changed_by"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      technology_owner_user_following: {
        Row: {
          created_at: string
          id: number
          technology_owner_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          technology_owner_id: number
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: number
          technology_owner_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "technology_owner_user_following_technology_owner_id_fkey"
            columns: ["technology_owner_id"]
            isOneToOne: false
            referencedRelation: "technology_owners"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_user_following_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_user_following_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_user_following_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_user_following_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      technology_owner_users: {
        Row: {
          created_at: string
          email: string | null
          id: number
          status: Database["public"]["Enums"]["invitation_status"]
          technology_owner_id: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          status?: Database["public"]["Enums"]["invitation_status"]
          technology_owner_id: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          status?: Database["public"]["Enums"]["invitation_status"]
          technology_owner_id?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "technology_owner_users_technology_owner_id_fkey"
            columns: ["technology_owner_id"]
            isOneToOne: false
            referencedRelation: "technology_owners"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "technology_owner_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      technology_owners: {
        Row: {
          banner_url: string | null
          company_industry: string | null
          created_at: string
          description: string | null
          discord_url: string | null
          domain: string | null
          facebook_url: string | null
          id: number
          instagram_url: string | null
          link: string | null
          linkedin_url: string | null
          location: string | null
          logo: string | null
          name: string
          no_of_upcoming_hackathons: number | null
          num_employees: string | null
          slack_url: string | null
          tagline: string | null
          technologies: string[] | null
          telegram_url: string | null
          updated_at: string
          x_url: string | null
          youtube_url: string | null
        }
        Insert: {
          banner_url?: string | null
          company_industry?: string | null
          created_at?: string
          description?: string | null
          discord_url?: string | null
          domain?: string | null
          facebook_url?: string | null
          id?: number
          instagram_url?: string | null
          link?: string | null
          linkedin_url?: string | null
          location?: string | null
          logo?: string | null
          name: string
          no_of_upcoming_hackathons?: number | null
          num_employees?: string | null
          slack_url?: string | null
          tagline?: string | null
          technologies?: string[] | null
          telegram_url?: string | null
          updated_at?: string
          x_url?: string | null
          youtube_url?: string | null
        }
        Update: {
          banner_url?: string | null
          company_industry?: string | null
          created_at?: string
          description?: string | null
          discord_url?: string | null
          domain?: string | null
          facebook_url?: string | null
          id?: number
          instagram_url?: string | null
          link?: string | null
          linkedin_url?: string | null
          location?: string | null
          logo?: string | null
          name?: string
          no_of_upcoming_hackathons?: number | null
          num_employees?: string | null
          slack_url?: string | null
          tagline?: string | null
          technologies?: string[] | null
          telegram_url?: string | null
          updated_at?: string
          x_url?: string | null
          youtube_url?: string | null
        }
        Relationships: []
      }
      technology_references: {
        Row: {
          created_at: string | null
          entity_id: string
          entity_name: Database["public"]["Enums"]["entity_name"]
          id: number
          technology_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          entity_id: string
          entity_name: Database["public"]["Enums"]["entity_name"]
          id?: number
          technology_id: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          entity_id?: string
          entity_name?: Database["public"]["Enums"]["entity_name"]
          id?: number
          technology_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "technology_references_technology_id_fkey"
            columns: ["technology_id"]
            isOneToOne: false
            referencedRelation: "technologies"
            referencedColumns: ["id"]
          },
        ]
      }
      user_participant_roles: {
        Row: {
          created_at: string
          id: number
          is_primary: boolean
          participant_id: string
          role_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          is_primary?: boolean
          participant_id: string
          role_id: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          is_primary?: boolean
          participant_id?: string
          role_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_participant_roles_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_participant_roles_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_participant_roles_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_participant_roles_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_participant_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "participant_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_token_transactions: {
        Row: {
          amount: number
          category: string
          created_at: string
          id: number
          meta: Json | null
          reference_id: string | null
          user_id: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          id?: number
          meta?: Json | null
          reference_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          id?: number
          meta?: Json | null
          reference_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_wallet_id: boolean
          email: string | null
          full_name: string | null
          id: string
          main_role: string | null
          notification_preferences: string[]
          profile_header_url: string | null
          role_id: number
          slug: string | null
          terms_accepted: boolean | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_wallet_id?: boolean
          email?: string | null
          full_name?: string | null
          id: string
          main_role?: string | null
          notification_preferences?: string[]
          profile_header_url?: string | null
          role_id?: number
          slug?: string | null
          terms_accepted?: boolean | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_wallet_id?: boolean
          email?: string | null
          full_name?: string | null
          id?: string
          main_role?: string | null
          notification_preferences?: string[]
          profile_header_url?: string | null
          role_id?: number
          slug?: string | null
          terms_accepted?: boolean | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_role"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      discover_users_information: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string | null
          priority: number | null
          profile: Json | null
          project_count: number | null
          user_participant_roles: Json | null
        }
        Relationships: []
      }
      discover_users_information_view: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string | null
          profile: Json | null
          project_count: number | null
          user_participant_roles: Json | null
        }
        Relationships: []
      }
      hackathon_participants_sorted: {
        Row: {
          application_status:
            | Database["public"]["Enums"]["hackathon_participant_application_status"]
            | null
          created_at: string | null
          hackathon_id: number | null
          id: number | null
          looking_for_teammates: boolean | null
          participant_id: string | null
          updated_at: string | null
          users: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_participants_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathon_participants_with_project_counts: {
        Row: {
          application_status:
            | Database["public"]["Enums"]["hackathon_participant_application_status"]
            | null
          created_at: string | null
          hackathon_id: number | null
          id: number | null
          looking_for_teammates: boolean | null
          participant_id: string | null
          project_count: number | null
          updated_at: string | null
          users: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "hackathon_participants_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_hackathon_id_fkey"
            columns: ["hackathon_id"]
            isOneToOne: false
            referencedRelation: "hackathons_discover_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "hackathon_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      hackathons_discover_view: {
        Row: {
          id: number | null
          location: string | null
          name: string | null
          number_of_participant: number | null
          organizer: Json | null
          start_date: string | null
          status: Database["public"]["Enums"]["hackathon_status"] | null
          type: Database["public"]["Enums"]["hackathon_type"] | null
        }
        Relationships: []
      }
      top_people_view: {
        Row: {
          avatar_url: string | null
          completion_percentage: number | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string | null
          main_role: string | null
          notification_preferences: string[] | null
          profile: Json | null
          profile_header_url: string | null
          role_id: number | null
          roles: Json | null
          terms_accepted: boolean | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_role"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_balances: {
        Row: {
          balance: number | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "discover_users_information_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "top_people_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_token_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users_discover_view"
            referencedColumns: ["id"]
          },
        ]
      }
      users_discover_view: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string | null
          profile: Json | null
          project_count: number | null
          user_participant_roles: Json | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_user_completion_score: {
        Args: {
          profile_row: Database["public"]["Tables"]["participant_profile"]["Row"]
          user_row: Database["public"]["Tables"]["users"]["Row"]
        }
        Returns: number
      }
      discover_people: {
        Args: { fetch_limit: number }
        Returns: {
          avatar_url: string
          full_name: string
          id: string
          main_role: string
          profile_json: Json
        }[]
      }
      get_registration_stats: {
        Args: { p_gran: string; p_hackathon_id: number; p_start_date: string }
        Returns: {
          bucket: string
          registrations: number
        }[]
      }
      refresh_balance_for_user: {
        Args: { uid: string }
        Returns: undefined
      }
      update_all_fks: {
        Args: { on_delete_action: string }
        Returns: undefined
      }
    }
    Enums: {
      application_status: "pending" | "approved" | "rejected"
      entity_name: "project" | "hackathon" | "person"
      hackathon_application_method:
        | "join"
        | "stake"
        | "apply"
        | "apply_additional"
        | "apply_stake"
        | "apply_additional_stake"
      hackathon_leader_board_standing_by: "standing" | "score" | "challenge"
      hackathon_participant_application_status:
        | "pending"
        | "accepted"
        | "rejected"
      hackathon_stakes_status: "pending" | "confirmed" | "rejected" | "refunded"
      hackathon_status: "live" | "upcoming" | "ended" | "draft"
      hackathon_type: "virtual" | "physical" | "hybrid"
      invitation_status: "pending" | "accepted" | "rejected"
      invitation_type: "request" | "invite"
      join_type:
        | "join"
        | "stake"
        | "apply"
        | "apply_additional"
        | "apply_stake"
        | "apply_additional_stake"
      judging_status: "needs_review" | "judged" | "flagged"
      notification_type: "email" | "sms"
      project_code_type: "fresh_code" | "existing_code"
      questionnaire_status: "required" | "completed" | "not_required"
      stake_refund_event_type:
        | "check_in"
        | "project_submission"
        | "event_end"
        | "manual"
      stake_status: "pending" | "confirmed" | "failed" | "refunded"
      "team member invite status": "confirmed" | "pending" | "rejected"
      team_invitations_status: "pending" | "accepted" | "rejected"
      technology_status: "pending" | "approved" | "rejected"
      transaction_type: "withdrawal" | "deposit"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: ["pending", "approved", "rejected"],
      entity_name: ["project", "hackathon", "person"],
      hackathon_application_method: [
        "join",
        "stake",
        "apply",
        "apply_additional",
        "apply_stake",
        "apply_additional_stake",
      ],
      hackathon_leader_board_standing_by: ["standing", "score", "challenge"],
      hackathon_participant_application_status: [
        "pending",
        "accepted",
        "rejected",
      ],
      hackathon_stakes_status: ["pending", "confirmed", "rejected", "refunded"],
      hackathon_status: ["live", "upcoming", "ended", "draft"],
      hackathon_type: ["virtual", "physical", "hybrid"],
      invitation_status: ["pending", "accepted", "rejected"],
      invitation_type: ["request", "invite"],
      join_type: [
        "join",
        "stake",
        "apply",
        "apply_additional",
        "apply_stake",
        "apply_additional_stake",
      ],
      judging_status: ["needs_review", "judged", "flagged"],
      notification_type: ["email", "sms"],
      project_code_type: ["fresh_code", "existing_code"],
      questionnaire_status: ["required", "completed", "not_required"],
      stake_refund_event_type: [
        "check_in",
        "project_submission",
        "event_end",
        "manual",
      ],
      stake_status: ["pending", "confirmed", "failed", "refunded"],
      "team member invite status": ["confirmed", "pending", "rejected"],
      team_invitations_status: ["pending", "accepted", "rejected"],
      technology_status: ["pending", "approved", "rejected"],
      transaction_type: ["withdrawal", "deposit"],
    },
  },
} as const
