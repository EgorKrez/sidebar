import { Dispatch, SetStateAction, useState } from "react";
import SubMenu from "../SubMenu";
import { ReactComponent as IconSVG } from "../../icons/svg1.svg";
import Tooltip from "../Tooltip";
import { SidebarItemType, Theme } from "../../utils";

type Props = {
  item: SidebarItemType;
  isSelected: boolean;
  selectedItem: SidebarItemType | null | undefined;
  setSelectedItem: Dispatch<SetStateAction<SidebarItemType | null | undefined>>;
  theme: Theme;
};

const SidebarItem = (props: Props) => {
  const { item, isSelected, selectedItem, setSelectedItem, theme } = props;
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const handleClick = () => {
    setSelectedItem(() => {
      return isSelected ? null : item;
    });
  };

  const onMouseEnterHandler = () => {
    if (theme === Theme.Large || selectedItem) {
      return;
    }
    setShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    if (theme === Theme.Large) {
      return;
    }
    setShowTooltip(false);
  };

  return (
    <div
      className="w-full flex justify-center cursor-pointer flex-col relative pl-2 pt-1 pb-1 hover:bg-gray-300 rounded"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div
        className={
          isSelected
            ? "text-sky-400 flex gap-2 items-center"
            : "flex gap-2 items-center"
        }
        onClick={handleClick}
      >
        <IconSVG
          fill={showTooltip || isSelected ? "rgb(56 189 248)" : "black"}
        />
        {theme === Theme.Large && item.name}
      </div>
      <SubMenu isSelected={isSelected} item={item} theme={theme} />
      {(showTooltip || (isSelected && theme === Theme.Small)) && (
        <Tooltip item={item} />
      )}
    </div>
  );
};

export default SidebarItem;
