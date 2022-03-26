import User from "../../../models/User";

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;

    default:
      res.status(405).send(`Method ${req.method} not allowed`);
      break;
  }
};

const handleGetRequest = async (req, res) => {
  try {
    const { username } = req.query;
    const user = await User.findOne({ username });
    if (user) {
      res.status(200).json(user);
    } else {
      throw new Error("No user with this username exists.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

export default handler;
