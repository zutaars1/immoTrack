import db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const id = params.id;
  const contract = await db.getVertragByID(id);
  return { contract};
}

export const actions = {
  update: async ({ request }) => {
    const data = await request.formData();
    const id = data.get('id');

    const updated = {
      name_mieter: data.get('name_mieter'),
      startdatum: data.get('startdatum'),
      email: data.get('email'),
      telefonnummer: data.get('telefonnummer'),
      mietzins: data.get('mietzins')
    };

    await db.updateVertrag(id, updated);

    // Redirect to the contract page after updating
    return { success: true };
  }
}
