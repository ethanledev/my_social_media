import Image from "next/image";

import styles from "./PostTile.js";

const PostTile = () => (
  <Image src="/post.jpg" layout="responsive" width={0} height={0} alt="post" />
);

export default PostTile;
