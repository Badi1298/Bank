import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { fromEmail, fromUserId, toEmail, amount, time } = data;

    const client = await MongoClient.connect(
      'mongodb+srv://Badi:Noopgoogle123@cluster0.tgabpku.mongodb.net/?retryWrites=true&w=majority'
    );
    const db = client.db();

    const accountsCollection = db.collection('accounts');

    const { userId } = await accountsCollection.findOne(
      { email: toEmail },
      { _id: 0, userId: 1 }
    );

    await accountsCollection.insertMany([
      {
        email: fromEmail,
        userId: fromUserId,
        amount: -amount,
        type: 'WITHDRAWAL',
        time: time,
      },
      {
        email: toEmail,
        userId: userId,
        amount: amount,
        type: 'RECEIVED',
        time: time,
      },
    ]);

    client.close();

    res.status(201).json({ message: 'Transfer complete' });
  }
}

export default handler;
