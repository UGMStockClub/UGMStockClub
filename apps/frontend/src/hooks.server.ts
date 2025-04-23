// apps/frontend/src/hooks.server.ts
import { createSupabaseClient } from '@ugm-stock-club/supabase-client';
import { env } from '$env/dynamic/public';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // --- DEBUGGING ---
  console.log('ENV VARS in hooks.server.ts:');
  console.log('PUBLIC_SUPABASE_URL:', env.PUBLIC_SUPABASE_URL);
  console.log('PUBLIC_SUPABASE_ANON_KEY:', env.PUBLIC_SUPABASE_ANON_KEY);
  // --- END DEBUGGING ---

  event.locals.supabase = createSupabaseClient(
    env.PUBLIC_SUPABASE_URL,
    env.PUBLIC_SUPABASE_ANON_KEY
  );

  return resolve(event);
};