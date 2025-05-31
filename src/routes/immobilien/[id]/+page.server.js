import db from '$lib/server/db.js';

export async function load({ params }) {
  const id = params.id;


  const immobilie = await db.getImmobilieById(id);

  if (!immobilie) throw error(404, 'Immobilie nicht gefunden');

  const vertrag = await db.getVertraegeByImmobilienId(immobilie._id);



  return { immobilie, vertrag};
}
