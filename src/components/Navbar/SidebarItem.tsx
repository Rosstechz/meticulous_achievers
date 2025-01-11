import { IconType } from "react-icons";

interface SidebarItemProps {
  icon: IconType;
  label?: string;
  sublabel?: string;
}

const SidebarItem = ({ icon: Icon, label, sublabel }: SidebarItemProps) => {
  return (
    <div className="flex flex-col items-center gap-3 border-b-2 border-teal-500 pb-7 ">
      <Icon size={55} className="text-teal-500" />
      <span className="text-xl font-bold">{label}</span>
      <span className="text-md max-w-[300px] text-center leading-5 ">
        {sublabel}
      </span>
    </div>
  );
};

export default SidebarItem;
