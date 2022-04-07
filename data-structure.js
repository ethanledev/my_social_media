const User = {
  username: String,
  password: String,
  email: String,
  name: String,
  profileImage: String,
  followers: [User],
  following: [{ user: User, notification: Notification }],
  bio: String,
  savedPosts: [Post],
  recentSearches: [User],
};

const Notification = {
  isRead: { type: Boolean, default: false },
  hidden: { type: Boolean, default: true },
  for: { User, Post, Comment },
  actors: [User],
  notifier: User,
  action: String, // like, comment, follow
};

const Post = {
  author: User,
  images: {
    ratio: String,
    list: [String],
  },
  likes: [User],
  comments: [Comment],
};

const Comment = {
  author: User,
  content: String,
  likes: [User],
  replyTo: Comment,
  replies: [Comment],
};

const Conversation = {
  members: [User],
  messages: [Message],
  focus: [User],
};

const Message = {
  author: User,
  likes: [User],
  isReply: Boolean,
  replyTo: {
    user: User,
    message: Message,
  },
  content: {
    text: String,
    post: Post,
    image: String,
  },
};
