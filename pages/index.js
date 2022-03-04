import { useSelector } from "react-redux";
import HomePage from "../components/pages/HomePage/HomePage";
import { selectWindowWidth } from "../redux/app/app.selectors";

const Page = () => {
  const windowWidth = useSelector(selectWindowWidth);
  return (
    <div className="pageContainer">
      <HomePage windowWidth={windowWidth} />
    </div>
  );
};

export default Page;
