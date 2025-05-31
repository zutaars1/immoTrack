import db from '$lib/server/db.js';

export async function load({ params }) {
  const id = params.id;


  const vertrag = await db.getVertragByID(id);

  if (!vertrag) throw error(404, 'Vertrag nicht gefunden');

  const immobilie = await db.getImmobilieByVertragId(contract._id);



  return { immobilie, vertrag};
}
