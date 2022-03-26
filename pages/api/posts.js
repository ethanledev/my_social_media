import dbConnect from "../../lib/mongodb";
import Notification from "../../models/Notification";
import Post from "../../models/Post";
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
  const { authorId, ratio, imageList } = req.body;
  let newPost = undefined;
  let newLikeNotification = undefined;
  let newCommentNotification = undefined;
  try {
    //check if author is an existing user
    const user = await User.findOne({ _id: authorId });
    if (user) {
      newPost = await new Post({
        author: authorId,
        images: {
          ratio,
          list: imageList,
        },
      });
      await newPost.validate();
      newLikeNotification = new Notification({
        for: newPost._id,
        forModel: "Post",
        notifier: authorId,
        action: "like",
      });
      await newLikeNotification.validate();
      newCommentNotification = new Notification({
        for: newPost._id,
        forModel: "Post",
        notifier: authorId,
        action: "comment",
      });
      await newCommentNotification.validate();
      await newPost.save();
      await newLikeNotification.save();
      await newCommentNotification.save();
      res.status(200).json(newPost);
    } else {
      throw new Error("This user does not exist.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export default handler;
