import { MongoClient, ObjectId } from 'mongodb';
import { DB_URI } from '$env/static/private';



const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db('immoTrackDB');

// Get all immobilien
async function getAllImmobilien() {
  let immobilien = [];
  try {
    const collection = db.collection("immobilien");
    const query = {};

    // Get all objects that match the query
    immobilien = await collection.find(query).toArray();
    immobilien.forEach((immo) => {
      immo._id = immo._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
  }
  return immobilien;
}

// Get immobilie by id
async function getImmobilieById(id) {
  let immobilie = null;
  try {
    const collection = db.collection("immobilien");
    const query = { _id: new ObjectId(id) }; // filter by id
    immobilie = await collection.findOne(query);

    if (!immobilie) {
      console.log("Keine Immobiliendetails hinterlegt mit der ID: " + id);
      // TODO: errorhandling
    } else {
      immobilie._id = immobilie._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return immobilie;
}

// Get all vertraege
async function getAllVertraege() {
  let vertraege = [];
  try {
    const collection = db.collection("vertraege");
    const query = {};

    // Get all objects that match the query
    vertraege = await collection.find(query).toArray();
    vertraege.forEach((vertrag) => {
      vertrag._id = vertrag._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
  }
  return vertraege;
}

// Get Vertrag by id
async function getVertragByID(id) {
  let contract = null;
  try {
    const collection = db.collection("vertraege");
    const query = { _id: new ObjectId(id) }; // filter by id
    contract = await collection.findOne(query);

    if (!contract) {
      console.log("Keine Vertragsdetails hinterlegt mit der ID: " + id);
      // TODO: errorhandling
    } else {
      contract._id = contract._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return contract;
}


async function getVertraegeByImmobilienId(mongoId) {
  const immo = await db.collection('immobilien').findOne({ _id: new ObjectId(mongoId) });
  if (!immo) return [];
  const vertrag = await db.collection('vertraege').findOne({ immobilien_id: immo.id });
  vertrag._id = vertrag._id.toString(); // convert ObjectId to String
  return vertrag
}


export default {
  getAllImmobilien,
  getImmobilieById,
  getAllVertraege,
  getVertragByID,
  getVertraegeByImmobilienId,

};

