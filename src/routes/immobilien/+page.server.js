import db from '$lib/server/db.js';

export async function load() {
  return {
    immobilien: await db.getAllImmobilien()
  };

  
} 
