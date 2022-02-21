import FullPage from "../../components/pages/MessengerPage/FullPage/FullPage";
import CompactPage from "../../components/pages/MessengerPage/CompactPage/CompactPage";

const Page = ({ windowWidth }) => {
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
