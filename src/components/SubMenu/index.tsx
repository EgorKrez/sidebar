import { useState } from "react";
import { SidebarItemType, Theme } from "../../utils";

type Props = {
  isSelected: boolean;
  item: SidebarItemType;
  theme: Theme;
};

const SubMenu = (props: Props) => {
  const { isSelected, item, theme } = props;
  const [selectedSubItem, setSelectedSubItem] = useState<string>();

  return (
    <>
      {theme === Theme.Large && (
        <div className="flex flex-col pl-4 pt-2 gap-1 w-full">
          {isSelected &&
            item.children.map((it) => (
              <div
                className={it === selectedSubItem ? "text-sky-400" : ""}
                onClick={() => {
                  setSelectedSubItem(it);
                }}
              >
                {it}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default SubMenu;
