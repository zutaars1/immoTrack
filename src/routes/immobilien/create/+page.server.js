import db from '$lib/server/db.js';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

export async function load() {
	const immobilien = await db.getAllImmobilien();
	const ids = immobilien
		.map(immo => immo.id)
		.filter(id => typeof id === 'number' && !isNaN(id));
	const maxId = ids.length > 0 ? Math.max(...ids) : 0;
	const nextId = maxId + 1;
	return { nextId };
}

export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const bezeichnung = data.get('bezeichnung');
		const bildUrl = data.get('bildUrl')?.trim();

		// Fallback, falls ID aus dem Formular fehlt
		let id = Number(data.get('id'));
		if (!id || isNaN(id)) {
			const immobilien = await db.getAllImmobilien();
			const ids = immobilien.map(i => i.id).filter(i => typeof i === 'number' && !isNaN(i));
			const maxId = ids.length > 0 ? Math.max(...ids) : 0;
			id = maxId + 1;
		}

		const newImmobilie = {
			id,
			bezeichnung,
			adresse: data.get('adresse'),
			baujahr: Number(data.get('baujahr')),
			zimmer: Number(data.get('zimmer')),
			wohnflaeche: Number(data.get('wohnflaeche')),
			art: data.get('art')
		};

		// Bild speichern
		if (bildUrl) {
			const bildDateiname = `${bezeichnung}.png`;
			try {
				const res = await fetch(bildUrl);
				if (!res.ok) throw new Error(`Bild konnte nicht geladen werden: ${res.statusText}`);

				const buffer = await res.buffer();
				const filePath = path.resolve('static/images', bildDateiname);
				fs.writeFileSync(filePath, buffer);
			} catch (err) {
				console.error("Bild konnte nicht gespeichert werden:", err.message);
			}
		}

		await db.createImmobilie(newImmobilie);
		return { success: true };
	}
};
