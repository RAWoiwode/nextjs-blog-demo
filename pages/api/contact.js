// Only executes on the server side
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    // Store data in DB
    const newMessage = {
      email,
      name,
      message,
    };

    // console.log(newMessage);
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://mongo-react:SxKkk93PBE2utZvX@cluster0.vrtleht.mongodb.net/nextjs-demo-blog?retryWrites=true&w=majority&appName=Cluster0"
      );
    } catch (error) {
      res.status(500).json({ message: "oops" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "oops" });
      return;
    }

    client.close();
    // Success and added resource
    res
      .status(201)
      .json({ message: "Successfully stored message", message: newMessage });
  }
};

export default handler;
