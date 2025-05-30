import db from '$lib/server/db.js';

export async function load() {
  return {
    vertraege: await db.getAllVertraege()
  };

  
} 
