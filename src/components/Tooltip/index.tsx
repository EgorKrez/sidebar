import { useState } from "react";
import { SidebarItemType } from "../../utils";

type Props = {
  item: SidebarItemType;
};

const Tooltip = (props: Props) => {
  const { item } = props;

  const [selectedSubItem, setSelectedSubItem] = useState<string>();

  return (
    <>
      <div className="absolute w-[120px] bg-gray-200 left-9 flex flex-col gap-2 items-center py-4">
        {item.children.map((it) => (
          <div
            className={
              it === selectedSubItem
                ? "text-sky-400 w-full px-4"
                : "w-full px-4"
            }
            onClick={() => {
              setSelectedSubItem(it);
            }}
          >
            {it}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tooltip;
