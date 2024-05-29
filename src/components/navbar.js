import {
  AiFillMessage,
  AiFillPieChart,
  AiFillProduct,
  AiOutlineAppstore,
  AiOutlineCaretDown,
  //   AiOutlineCaretUp,
  AiOutlineDatabase,
  AiOutlineLogout,
  AiOutlinePartition,
} from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-[1px] border-[#7AB2B2] w-full h-20 flex">
      <div className="w-1/3 h-full flex justify-end items-center">
        <div className="rounded-full bg-[#EEF7FF] w-[65px] h-[65px]"></div>
      </div>
      <div className="w-2/3 h-full">
        <div className="flex flex-col h-full justify-end pl-2 pb-1">
          <p className="capitalize text-sm text-[#EEF7FF]">huy hoang </p>
          <p className="text-[11px] text-[#EEF7FF]">28/05/2024 - 10:07 AM </p>
        </div>
      </div>
    </div>
  );
};

const ListNavLink = ({ text, icon, url }) => {
  return (
    <li className="capitalize text-[#EEF7FF] w-full">
      <Link
        to={url}
        className="flex items-center w-full h-10 border-b-[1px] border-[#7AB2B2] pl-2"
      >
        {icon}
        <span className="text-sm pl-1">{text}</span>
      </Link>
    </li>
  );
};

export default function Navbar() {
  return (
    <div className="fixed w-[20%] h-screen bg-[#4D869C]">
      <Header />
      <div>
        <ul>
          <ListNavLink
            text="dashboard"
            icon={<AiOutlineAppstore className="inline-block text-xl" />}
          />

          <li className="capitalize text-[#EEF7FF] w-full cursor-pointer flex items-center h-10 border-b-[1px] border-[#7AB2B2]">
            <p className="flex items-center pl-2 w-full">
              <AiOutlineDatabase className="inline-block text-xl" />
              <span className="text-sm pl-1">Database</span>
            </p>
            <AiOutlineCaretDown className="inline-block text-sm mr-3 mt-1" />
          </li>

          <ul className="pl-8">
            <ListNavLink
              url="user"
              text="user"
              icon={<CiUser className="inline-block text-xl" strokeWidth={1} />}
            />
            <ListNavLink
              text="category"
              icon={<AiOutlinePartition className="inline-block text-xl" />}
            />
            <ListNavLink
              text="product"
              icon={<AiFillProduct className="inline-block text-xl" />}
            />
          </ul>

          <ListNavLink
            text="statistical"
            icon={<AiFillPieChart className="inline-block text-xl" />}
          />
          <ListNavLink
            text="Message"
            icon={<AiFillMessage className="inline-block text-xl" />}
          />
          <ListNavLink
            text="Logout"
            icon={<AiOutlineLogout className="inline-block text-xl" />}
          />
        </ul>
      </div>
    </div>
  );
}
