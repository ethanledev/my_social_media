import EmptyDropdown from "../EmptyDropdown/EmptyDropdown";

const isEmpty = true;

const SearchDropdown = () => {
  const renderDropdownItems = () => {
    if (isEmpty) {
      return <EmptyDropdown message="No recent searches." />;
    }
  };

  return renderDropdownItems();
};

export default SearchDropdown;
