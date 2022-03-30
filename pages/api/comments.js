import dbConnect from "../../lib/mongodb";
import Comment from "../../models/Comment";
import Notification from "../../models/Notification";
import User from "../../models/User";

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await handlePostMethod(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const handlePostMethod = async (req, res) => {
  const { authorId, content, replyTo } = req.body;
  let newComment = undefined;
  let newLikeNotification = undefined;
  let newReplyNotification = undefined;
  try {
    //check if author is an existing user
    const user = await User.findOne({ _id: authorId });
    if (user) {
      newComment = new Comment({
        author: authorId,
        content,
        replyTo,
      });
      await newComment.validate();
      newLikeNotification = new Notification({
        for: newComment._id,
        forModel: "Comment",
        notifier: newComment._id,
        action: "like",
      });
      await newLikeNotification.validate();
      newReplyNotification = new Notification({
        for: newComment._id,
        forModel: "Comment",
        notifier: newComment._id,
        action: "reply",
      });
      await newReplyNotification.validate();
      await newComment.save();
      await newLikeNotification.save();
      await newReplyNotification.save();
      res.status(200).json(newComment);
    } else {
      throw new Error("This user does not exist.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export default handler;
