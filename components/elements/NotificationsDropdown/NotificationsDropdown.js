import EmptyDropdown from "../EmptyDropdown/EmptyDropdown";

const isEmpty = true;

const NotificationsDropdown = () => {
  const renderDropdownItems = () => {
    if (isEmpty) {
      return <EmptyDropdown message="You have no notifications." />;
    }
  };

  return renderDropdownItems();
};

export default NotificationsDropdown;
