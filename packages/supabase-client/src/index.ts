// packages/supabase-client/src/index.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define a function that ACCEPTS the env variables
export function createSupabaseClient(
  supabaseUrl: string | undefined,
  supabaseAnonKey: string | undefined
): SupabaseClient {

  if (!supabaseUrl || !supabaseAnonKey) {
    // Throw error immediately if vars are missing during initialization
    throw new Error("Supabase URL or Anon Key was not provided to createSupabaseClient.");
  }

  // Create and return the Supabase client instance
  // We are not exporting the client directly anymore, but the function to create it.
  return createClient(supabaseUrl, supabaseAnonKey);
}

// Optional: Export the type for convenience
export type { SupabaseClient };
