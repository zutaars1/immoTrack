import db from "$lib/server/db.js";

export async function load({ params }) {
  const immobilie = await db.getImmobilieById(params.id);

  if (!immobilie) {
    return {
      status: 404,
      error: new Error("Immobilie nicht gefunden")
    };
  }

  return {
    immobilie
  };
}