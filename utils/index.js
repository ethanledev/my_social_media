import Image from "next/image";

export const getProfileIcon = (size, handleOnClick = null) => {
  const sizes = {
    s: 35,
    m: 35,
    l: 35,
    xl: 35,
  };

  const profileIcon = (
    <Image
      className="profile-picture"
      src="/TK-Bored-Ape.jpg"
      width={sizes[size]}
      height={sizes[size]}
      alt="Profile Picture"
      onClick={handleOnClick}
    />
  );

  return profileIcon;
};
