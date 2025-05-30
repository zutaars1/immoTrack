import db from '$lib/server/db.js';

export async function load() {
  const vertraege = await db.getAllVertraege();
  return { vertraege };
}
