import SidebarItem from "../SidebarItem";
import { useState } from "react";
import { sidebarItems, SidebarItemType, Theme } from "../../utils";
import arrowIcon from "../../icons/arrow.png";
const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<SidebarItemType | null>();
  const [theme, setTheme] = useState<Theme>(Theme.Large);

  const switchTheme = () => {
    setTheme((prevState) =>
      prevState === Theme.Small ? Theme.Large : Theme.Small
    );
  };

  return (
    <div
      className={
        theme === Theme.Large
          ? "h-full flex flex-col w-[200px] bg-[#eff0fc] border-r-2 border-[#ccf] p-4 box-border gap-1 relative"
          : "h-full flex flex-col w-[70px] bg-[#eff0fc] border-r-2 border-[#ccf] p-4 box-border gap-2 relative"
      }
    >
      {sidebarItems.map((item, index) => (
        <SidebarItem
          item={item}
          key={index}
          isSelected={selectedItem?.name === item.name}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          theme={theme}
        />
      ))}
      <div className="absolute bottom-10 cursor-pointer" onClick={switchTheme}>
        {theme === Theme.Large ? (
          <img src={arrowIcon} className="w-5 h-5" alt="img" />
        ) : (
          <img src={arrowIcon} className="w-5 h-5 rotate-180" alt="img" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
