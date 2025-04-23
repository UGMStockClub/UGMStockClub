// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { SupabaseClient } from '@ugm-stock-club/supabase-client'; // Import the type


declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient; // Use the imported type
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
