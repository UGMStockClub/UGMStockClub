// apps/frontend/src/routes/+page.server.ts
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
  console.log('Testing Supabase connection from frontend homepage load...');

  try {
    // Use the client from locals to perform a simple query
    const { data, error: dbError } = await locals.supabase
      .from('articles') // OR 'events', make sure the table exists!
      .select('id') // Select just the ID, we only care if the connection works
      .limit(1); // Only need one row to test connection

    if (dbError) {
      // If Supabase returned an error (wrong table, RLS issue, etc.)
      console.error('Supabase query error:', dbError);
      // You might want to return an error or specific message here for debugging
      return { connectionStatus: `Supabase query failed: ${dbError.message}` };
    } else {
      // If the query succeeded (even if no data was returned)
      console.log('Supabase connection successful! Data received:', data);
      return { connectionStatus: 'Supabase connection successful!', sampleData: data };
    }
  } catch (err: any) {
    // Catch any other potential errors during the process
    console.error('Error during Supabase test:', err);
    return { connectionStatus: `Failed to connect: ${err.message}` };
  }
};