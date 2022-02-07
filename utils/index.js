import Image from "next/image";

export const getProfileIcon = (size, isActive, handleOnClick = null) => {
  const sizes = {
    s: 35,
    m: 35,
    l: 35,
    xl: 35,
  };

  const profileIcon = (
    <div className="profilePicture">
      <Image
        src="/TK-Bored-Ape.jpg"
        width={sizes[size]}
        height={sizes[size]}
        alt="Profile Picture"
        onClick={handleOnClick}
        className={isActive ? "active" : null}
      />
    </div>
  );

  return profileIcon;
};
