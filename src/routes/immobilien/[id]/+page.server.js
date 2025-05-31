import db from '$lib/server/db.js';
import { error } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
  const id = params.id;
  const immobilie = await db.getImmobilieById(id);

  if (!immobilie) throw error(404, 'Immobilie nicht gefunden');

  const vertrag = await db.getVertraegeByImmobilienId(immobilie._id);

  return { immobilie, vertrag};
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');

    const updated = {
      bezeichnung: data.get('bezeichnung'),
      adresse: data.get('adresse'),
      art: data.get('art'),
      baujahr: parseInt(data.get('baujahr')),
      zimmer: parseFloat(data.get('zimmer')),
      wohnflaeche: parseFloat(data.get('wohnflaeche'))
    };

    await db.updateImmobilie(id, updated);
    return { success: true };
  }
};