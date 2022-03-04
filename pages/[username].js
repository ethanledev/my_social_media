import { useSelector } from "react-redux";
import ProfilePage from "../components/pages/ProfilePage/ProfilePage";
import { selectWindowWidth } from "../redux/app/app.selectors";

const Page = () => {
  const windowWidth = useSelector(selectWindowWidth);
  return (
    <div className="pageContainer">
      <ProfilePage windowWidth={windowWidth} />
    </div>
  );
};

export default Page;
