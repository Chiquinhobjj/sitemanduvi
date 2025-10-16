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
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      ai_agent_task_runs: {
        Row: {
          finished_at: string | null
          id: string
          logs: string | null
          result: Json | null
          started_at: string | null
          status: Database["public"]["Enums"]["ai_task_status"]
          task_id: string
        }
        Insert: {
          finished_at?: string | null
          id?: string
          logs?: string | null
          result?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["ai_task_status"]
          task_id: string
        }
        Update: {
          finished_at?: string | null
          id?: string
          logs?: string | null
          result?: Json | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["ai_task_status"]
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_agent_task_runs_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "ai_agent_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agent_tasks: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          org_id: string
          prompt: string
          status: Database["public"]["Enums"]["ai_task_status"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          org_id: string
          prompt: string
          status?: Database["public"]["Enums"]["ai_task_status"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          org_id?: string
          prompt?: string
          status?: Database["public"]["Enums"]["ai_task_status"]
          updated_at?: string
        }
        Relationships: []
      }
      ai_embeddings: {
        Row: {
          chunk_id: string | null
          chunk_ix: number | null
          content: string
          created_at: string
          dim: number | null
          embedding: string
          id: string
          model: string | null
          org_id: string
          source_field: string | null
          source_record_id: string | null
          source_table: string | null
        }
        Insert: {
          chunk_id?: string | null
          chunk_ix?: number | null
          content: string
          created_at?: string
          dim?: number | null
          embedding: string
          id?: string
          model?: string | null
          org_id: string
          source_field?: string | null
          source_record_id?: string | null
          source_table?: string | null
        }
        Update: {
          chunk_id?: string | null
          chunk_ix?: number | null
          content?: string
          created_at?: string
          dim?: number | null
          embedding?: string
          id?: string
          model?: string | null
          org_id?: string
          source_field?: string | null
          source_record_id?: string | null
          source_table?: string | null
        }
        Relationships: []
      }
      articles: {
        Row: {
          body: string | null
          collected_at: string | null
          created_at: string | null
          hash: string
          id: string
          image_url: string | null
          is_opinion: boolean | null
          lang: string | null
          lead: string | null
          published_at: string
          source_id: string | null
          title: string
          url: string
        }
        Insert: {
          body?: string | null
          collected_at?: string | null
          created_at?: string | null
          hash: string
          id?: string
          image_url?: string | null
          is_opinion?: boolean | null
          lang?: string | null
          lead?: string | null
          published_at: string
          source_id?: string | null
          title: string
          url: string
        }
        Update: {
          body?: string | null
          collected_at?: string | null
          created_at?: string | null
          hash?: string
          id?: string
          image_url?: string | null
          is_opinion?: boolean | null
          lang?: string | null
          lead?: string | null
          published_at?: string
          source_id?: string | null
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "articles_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "sources"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_log: {
        Row: {
          action: string
          actor_user_id: string | null
          created_at: string
          diff: Json | null
          id: number
          org_id: string | null
          row_pk: string
          table_name: string
        }
        Insert: {
          action: string
          actor_user_id?: string | null
          created_at?: string
          diff?: Json | null
          id?: number
          org_id?: string | null
          row_pk: string
          table_name: string
        }
        Update: {
          action?: string
          actor_user_id?: string | null
          created_at?: string
          diff?: Json | null
          id?: number
          org_id?: string | null
          row_pk?: string
          table_name?: string
        }
        Relationships: []
      }
      banners: {
        Row: {
          click_count: number | null
          created_at: string | null
          description: string | null
          display_order: number
          end_date: string | null
          id: string
          image_url: string
          impression_count: number | null
          is_active: boolean | null
          link_url: string | null
          start_date: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          click_count?: number | null
          created_at?: string | null
          description?: string | null
          display_order: number
          end_date?: string | null
          id?: string
          image_url: string
          impression_count?: number | null
          is_active?: boolean | null
          link_url?: string | null
          start_date?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          click_count?: number | null
          created_at?: string | null
          description?: string | null
          display_order?: number
          end_date?: string | null
          id?: string
          image_url?: string
          impression_count?: number | null
          is_active?: boolean | null
          link_url?: string | null
          start_date?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      content_item_tags: {
        Row: {
          item_id: string
          tag_id: string
        }
        Insert: {
          item_id: string
          tag_id: string
        }
        Update: {
          item_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_item_tags_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "content_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_item_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "content_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      content_items: {
        Row: {
          body: string | null
          cover_url: string | null
          created_at: string
          created_by: string | null
          excerpt: string | null
          id: string
          is_public: boolean
          org_id: string
          published_at: string | null
          slug: string
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          body?: string | null
          cover_url?: string | null
          created_at?: string
          created_by?: string | null
          excerpt?: string | null
          id?: string
          is_public?: boolean
          org_id: string
          published_at?: string | null
          slug: string
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          body?: string | null
          cover_url?: string | null
          created_at?: string
          created_by?: string | null
          excerpt?: string | null
          id?: string
          is_public?: boolean
          org_id?: string
          published_at?: string | null
          slug?: string
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      content_tags: {
        Row: {
          id: string
          name: string
          org_id: string
          slug: string
        }
        Insert: {
          id?: string
          name: string
          org_id: string
          slug: string
        }
        Update: {
          id?: string
          name?: string
          org_id?: string
          slug?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string | null
          id: string
          last_message: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_message?: string | null
          title?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_message?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      data_consents: {
        Row: {
          granted: boolean
          granted_at: string
          id: string
          purpose: string
          revoked_at: string | null
          subject_id: string
          subject_type: string
        }
        Insert: {
          granted: boolean
          granted_at?: string
          id?: string
          purpose: string
          revoked_at?: string | null
          subject_id: string
          subject_type: string
        }
        Update: {
          granted?: boolean
          granted_at?: string
          id?: string
          purpose?: string
          revoked_at?: string | null
          subject_id?: string
          subject_type?: string
        }
        Relationships: []
      }
      dataset_indicators: {
        Row: {
          created_at: string | null
          dataset_slug: string | null
          id: string
          indicator_key: string
          label: string
          metadata: Json | null
          reference_date: string | null
          unit: string | null
          value: number | null
        }
        Insert: {
          created_at?: string | null
          dataset_slug?: string | null
          id?: string
          indicator_key: string
          label: string
          metadata?: Json | null
          reference_date?: string | null
          unit?: string | null
          value?: number | null
        }
        Update: {
          created_at?: string | null
          dataset_slug?: string | null
          id?: string
          indicator_key?: string
          label?: string
          metadata?: Json | null
          reference_date?: string | null
          unit?: string | null
          value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "dataset_indicators_dataset_slug_fkey"
            columns: ["dataset_slug"]
            isOneToOne: false
            referencedRelation: "datasets"
            referencedColumns: ["slug"]
          },
        ]
      }
      datasets: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          frequency: string | null
          last_updated: string | null
          region: string | null
          schema: Json | null
          slug: string
          source_url: string | null
          summary: string
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          frequency?: string | null
          last_updated?: string | null
          region?: string | null
          schema?: Json | null
          slug: string
          source_url?: string | null
          summary: string
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          frequency?: string | null
          last_updated?: string | null
          region?: string | null
          schema?: Json | null
          slug?: string
          source_url?: string | null
          summary?: string
          title?: string
        }
        Relationships: []
      }
      editais: {
        Row: {
          applications_count: number | null
          category_slug: string | null
          city: string | null
          closed_at: string | null
          closing_date: string
          contact_email: string | null
          contact_person: string | null
          contact_phone: string | null
          country: string | null
          cover_image: string | null
          created_at: string | null
          currency: string | null
          description: string
          eligibility_criteria: string | null
          evaluation_criteria: string | null
          external_url: string | null
          featured: boolean | null
          full_content: string | null
          gallery_images: string[] | null
          id: string
          metadata: Json | null
          opening_date: string | null
          organization_cnpj: string | null
          organization_logo: string | null
          organization_name: string
          organization_type: string | null
          organization_website: string | null
          published_at: string | null
          reference_number: string | null
          region: string | null
          result_date: string | null
          slug: string
          state: string | null
          status: string | null
          submission_instructions: string | null
          subtitle: string | null
          tags: string[] | null
          terms_and_conditions: string | null
          title: string
          type: string
          updated_at: string | null
          value_max: number | null
          value_min: number | null
          views_count: number | null
          year: number | null
        }
        Insert: {
          applications_count?: number | null
          category_slug?: string | null
          city?: string | null
          closed_at?: string | null
          closing_date: string
          contact_email?: string | null
          contact_person?: string | null
          contact_phone?: string | null
          country?: string | null
          cover_image?: string | null
          created_at?: string | null
          currency?: string | null
          description: string
          eligibility_criteria?: string | null
          evaluation_criteria?: string | null
          external_url?: string | null
          featured?: boolean | null
          full_content?: string | null
          gallery_images?: string[] | null
          id?: string
          metadata?: Json | null
          opening_date?: string | null
          organization_cnpj?: string | null
          organization_logo?: string | null
          organization_name: string
          organization_type?: string | null
          organization_website?: string | null
          published_at?: string | null
          reference_number?: string | null
          region?: string | null
          result_date?: string | null
          slug: string
          state?: string | null
          status?: string | null
          submission_instructions?: string | null
          subtitle?: string | null
          tags?: string[] | null
          terms_and_conditions?: string | null
          title: string
          type: string
          updated_at?: string | null
          value_max?: number | null
          value_min?: number | null
          views_count?: number | null
          year?: number | null
        }
        Update: {
          applications_count?: number | null
          category_slug?: string | null
          city?: string | null
          closed_at?: string | null
          closing_date?: string
          contact_email?: string | null
          contact_person?: string | null
          contact_phone?: string | null
          country?: string | null
          cover_image?: string | null
          created_at?: string | null
          currency?: string | null
          description?: string
          eligibility_criteria?: string | null
          evaluation_criteria?: string | null
          external_url?: string | null
          featured?: boolean | null
          full_content?: string | null
          gallery_images?: string[] | null
          id?: string
          metadata?: Json | null
          opening_date?: string | null
          organization_cnpj?: string | null
          organization_logo?: string | null
          organization_name?: string
          organization_type?: string | null
          organization_website?: string | null
          published_at?: string | null
          reference_number?: string | null
          region?: string | null
          result_date?: string | null
          slug?: string
          state?: string | null
          status?: string | null
          submission_instructions?: string | null
          subtitle?: string | null
          tags?: string[] | null
          terms_and_conditions?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          value_max?: number | null
          value_min?: number | null
          views_count?: number | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "editais_category_slug_fkey"
            columns: ["category_slug"]
            isOneToOne: false
            referencedRelation: "editais_categories"
            referencedColumns: ["slug"]
          },
        ]
      }
      editais_categories: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          is_active: boolean | null
          name: string
          parent_slug: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          is_active?: boolean | null
          name: string
          parent_slug?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          is_active?: boolean | null
          name?: string
          parent_slug?: string | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "editais_categories_parent_slug_fkey"
            columns: ["parent_slug"]
            isOneToOne: false
            referencedRelation: "editais_categories"
            referencedColumns: ["slug"]
          },
        ]
      }
      initiatives: {
        Row: {
          beneficiaries: number | null
          category: string
          created_at: string | null
          description: string
          end_year: number | null
          featured: boolean | null
          image_url: string | null
          locations: string[] | null
          long_description: string | null
          name: string
          ods_goals: string[] | null
          order_index: number | null
          partners: string[] | null
          slug: string
          start_year: number | null
          status: string | null
          tagline: string
          updated_at: string | null
        }
        Insert: {
          beneficiaries?: number | null
          category: string
          created_at?: string | null
          description: string
          end_year?: number | null
          featured?: boolean | null
          image_url?: string | null
          locations?: string[] | null
          long_description?: string | null
          name: string
          ods_goals?: string[] | null
          order_index?: number | null
          partners?: string[] | null
          slug: string
          start_year?: number | null
          status?: string | null
          tagline: string
          updated_at?: string | null
        }
        Update: {
          beneficiaries?: number | null
          category?: string
          created_at?: string | null
          description?: string
          end_year?: number | null
          featured?: boolean | null
          image_url?: string | null
          locations?: string[] | null
          long_description?: string | null
          name?: string
          ods_goals?: string[] | null
          order_index?: number | null
          partners?: string[] | null
          slug?: string
          start_year?: number | null
          status?: string | null
          tagline?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      instituto_founders: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          name: string
          order_index: number | null
          role: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          order_index?: number | null
          role: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          order_index?: number | null
          role?: string
        }
        Relationships: []
      }
      instituto_projects: {
        Row: {
          beneficiaries: number | null
          category: string
          created_at: string | null
          description: string
          end_year: number | null
          id: string
          image_url: string | null
          name: string
          order_index: number | null
          start_year: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          beneficiaries?: number | null
          category: string
          created_at?: string | null
          description: string
          end_year?: number | null
          id?: string
          image_url?: string | null
          name: string
          order_index?: number | null
          start_year?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          beneficiaries?: number | null
          category?: string
          created_at?: string | null
          description?: string
          end_year?: number | null
          id?: string
          image_url?: string | null
          name?: string
          order_index?: number | null
          start_year?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      instituto_sections: {
        Row: {
          content: string
          created_at: string | null
          id: string
          order_index: number | null
          section_key: string
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          order_index?: number | null
          section_key: string
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          order_index?: number | null
          section_key?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      instituto_values: {
        Row: {
          created_at: string | null
          description: string
          icon_name: string | null
          id: string
          order_index: number | null
          title: string
        }
        Insert: {
          created_at?: string | null
          description: string
          icon_name?: string | null
          id?: string
          order_index?: number | null
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string
          icon_name?: string | null
          id?: string
          order_index?: number | null
          title?: string
        }
        Relationships: []
      }
      media_assets: {
        Row: {
          created_at: string
          id: string
          meta: Json | null
          mime: string | null
          org_id: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          meta?: Json | null
          mime?: string | null
          org_id: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          meta?: Json | null
          mime?: string | null
          org_id?: string
          url?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string | null
          id: string
          role: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string | null
          id?: string
          role: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string | null
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      pii_access_logs: {
        Row: {
          action: string
          actor_user_id: string | null
          created_at: string
          id: number
          org_id: string | null
          reason: string | null
          subject_id: string
          subject_type: string
        }
        Insert: {
          action: string
          actor_user_id?: string | null
          created_at?: string
          id?: number
          org_id?: string | null
          reason?: string | null
          subject_id: string
          subject_type: string
        }
        Update: {
          action?: string
          actor_user_id?: string | null
          created_at?: string
          id?: number
          org_id?: string | null
          reason?: string | null
          subject_id?: string
          subject_type?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          locale: string | null
          org_id: string | null
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          locale?: string | null
          org_id?: string | null
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          locale?: string | null
          org_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      role_assignments: {
        Row: {
          created_at: string | null
          id: string
          org_id: string
          role_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          org_id: string
          role_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          org_id?: string
          role_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_assignments_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          code: string
          id: string
          name: string
        }
        Insert: {
          code: string
          id?: string
          name: string
        }
        Update: {
          code?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          faq: Json | null
          is_active: boolean | null
          owner_org: string | null
          slug: string
          steps: Json | null
          summary: string
          tags: string[] | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          faq?: Json | null
          is_active?: boolean | null
          owner_org?: string | null
          slug: string
          steps?: Json | null
          summary: string
          tags?: string[] | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          faq?: Json | null
          is_active?: boolean | null
          owner_org?: string | null
          slug?: string
          steps?: Json | null
          summary?: string
          tags?: string[] | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      sources: {
        Row: {
          created_at: string | null
          id: string
          last_fetch_at: string | null
          name: string
          region: string | null
          reliability_score: number | null
          rss_url: string | null
          status: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_fetch_at?: string | null
          name: string
          region?: string | null
          reliability_score?: number | null
          rss_url?: string | null
          status?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_fetch_at?: string | null
          name?: string
          region?: string | null
          reliability_score?: number | null
          rss_url?: string | null
          status?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      study_plans: {
        Row: {
          created_at: string | null
          description: string | null
          goals: Json | null
          id: string
          progress: number | null
          status: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          goals?: Json | null
          id?: string
          progress?: number | null
          status?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          goals?: Json | null
          id?: string
          progress?: number | null
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      bytea_to_text: {
        Args: { data: string }
        Returns: string
      }
      cleanup_orphaned_embeddings: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      find_similar_content: {
        Args: {
          limit_results?: number
          org_id_param: string
          similarity_threshold?: number
          source_content_id: string
        }
        Returns: {
          chunk_content: string
          content_item_id: string
          excerpt: string
          similarity: number
          title: string
        }[]
      }
      get_embedding_stats: {
        Args: { org_id_param: string }
        Returns: {
          avg_chunks_per_item: number
          last_updated: string
          total_content_items: number
          total_embeddings: number
        }[]
      }
      get_supabase_url: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_delete: {
        Args:
          | { content: string; content_type: string; uri: string }
          | { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_get: {
        Args: { data: Json; uri: string } | { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
      }
      http_list_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_post: {
        Args:
          | { content: string; content_type: string; uri: string }
          | { data: Json; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_put: {
        Args: { content: string; content_type: string; uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_reset_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      process_pending_embeddings: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reindex_content_embeddings: {
        Args: { target_content_id: string }
        Returns: undefined
      }
      semantic_search: {
        Args: {
          limit_results?: number
          org_id_param: string
          query_text: string
          similarity_threshold?: number
        }
        Returns: {
          chunk_content: string
          content_item_id: string
          excerpt: string
          published_at: string
          similarity: number
          title: string
        }[]
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      supabase_secret: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      test_embedding_trigger: {
        Args: { content_id: string }
        Returns: Json
      }
      text_to_bytea: {
        Args: { data: string }
        Returns: string
      }
      urlencode: {
        Args: { data: Json } | { string: string } | { string: string }
        Returns: string
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      ai_task_status:
        | "pending"
        | "in_progress"
        | "completed"
        | "failed"
        | "cancelled"
      role_enum:
        | "admin"
        | "gestor_social"
        | "gestor_saude"
        | "gestor_esportivo"
        | "operador"
        | "auditor"
        | "leitor_parceiro"
      setor_enum: "PRIMEIRO" | "SEGUNDO" | "TERCEIRO"
      sexo_enum: "M" | "F" | "I" | "N"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown | null
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
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
      ai_task_status: [
        "pending",
        "in_progress",
        "completed",
        "failed",
        "cancelled",
      ],
      role_enum: [
        "admin",
        "gestor_social",
        "gestor_saude",
        "gestor_esportivo",
        "operador",
        "auditor",
        "leitor_parceiro",
      ],
      setor_enum: ["PRIMEIRO", "SEGUNDO", "TERCEIRO"],
      sexo_enum: ["M", "F", "I", "N"],
    },
  },
} as const
