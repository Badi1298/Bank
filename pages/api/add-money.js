import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://Badi:Noopgoogle123@cluster0.tgabpku.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const accountsCollection = db.collection('accounts');

    await accountsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Deposit inserted' });
  }
}

export default handler;
