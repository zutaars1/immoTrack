import db from '$lib/server/db.js';

export async function load({ params }) {
  const id = params.id;

  const contract = await db.getVertragByID(id);
  
  return { contract};
}
