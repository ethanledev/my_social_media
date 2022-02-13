import EmptyDropdown from "../EmptyDropdown/EmptyDropdown";

const isEmpty = true;

const Searches = () => {
  const renderDropdownItems = () => {
    if (isEmpty) {
      return <EmptyDropdown message="No recent searches." />;
    }
  };

  return renderDropdownItems();
};

export default Searches;
