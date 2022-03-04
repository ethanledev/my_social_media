import FullPage from "../../components/pages/MessengerPage/FullPage/FullPage";
import CompactPage from "../../components/pages/MessengerPage/CompactPage/CompactPage";
import { useSelector } from "react-redux";
import { selectWindowWidth } from "../../redux/app/app.selectors";

const Page = () => {
  const windowWidth = useSelector(selectWindowWidth);
  return (
    <div
      className={`pageContainer ${
        windowWidth <= 750 ? "mobileMessenger" : null
      }`}
    >
      {windowWidth > 750 ? <FullPage /> : <CompactPage />}
    </div>
  );
};

export default Page;
