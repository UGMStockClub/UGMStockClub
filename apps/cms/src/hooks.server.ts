// apps/cms/src/hooks.server.ts
import { createSupabaseClient } from '@ugm-stock-club/supabase-client'; // Import from shared package
import { env } from '$env/dynamic/public'; // Import SvelteKit public env handler
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Create a Supabase client instance for this server request
  event.locals.supabase = createSupabaseClient(
    env.PUBLIC_SUPABASE_URL,
    env.PUBLIC_SUPABASE_ANON_KEY
  );

  // Optional: Helper to get session conveniently server-side
  // event.locals.getSession = async () => {
  //   const { data: { session } } = await event.locals.supabase.auth.getSession();
  //   return session;
  // };

  // Run the normal SvelteKit request handler
  return resolve(event);
};