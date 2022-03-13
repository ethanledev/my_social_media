import dbConnect from "../../lib/mongodb";
import Conversation from "../../models/Conversation";

const handler = async (req, res) => {
  await dbConnect();

  try {
    const conversation = await new Conversation({ arr: [] }).save();
    res.send(conversation);
  } catch (error) {
    res.send(error);
  }
};

export default handler;
