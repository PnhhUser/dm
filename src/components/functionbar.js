import { AiOutlineSearch } from "react-icons/ai";
import { useUserDispatch } from "../context/userContext";

export default function Functionbar({ userIds, handleSelect, isCheckAll }) {
  let isDisabled = userIds.length === 0 ? true : false;

  const dispatch = useUserDispatch();

  const handleAdd = () => {
    dispatch({
      type: "OPEN_FORM",
      isOpen: false,
    });
  };

  return (
    <div className="h-20 w-full flex border-b-[1px] border-teaLight pb-1">
      <div className="w-1/2 h-full flex gap-2 items-end pl-4">
        <button
          onClick={handleSelect}
          type="button"
          className="text-sm capitalize bg-blue-500 text-[#EEF7FF] rounded-sm w-[100px] h-[30px] active:scale-[0.95]"
        >
          {isCheckAll ? "deselect all" : "select all"}
        </button>
        <button
          onClick={handleAdd}
          type="button"
          className="text-sm capitalize bg-teaDark text-[#EEF7FF] rounded-sm w-[100px] h-[30px] active:scale-[0.95]"
        >
          Add User
        </button>
        {isDisabled ? null : (
          <button
            type="button"
            className="text-sm capitalize bg-blue-500 active:scale-[0.95] text-[#EEF7FF] rounded-sm w-[100px] h-[30px]"
          >
            Edit User
          </button>
        )}
        {isDisabled ? null : (
          <button
            type="button"
            className="text-sm capitalize bg-red-500 active:scale-[0.95] text-[#EEF7FF] rounded-sm w-[100px] h-[30px]"
          >
            Remove User
          </button>
        )}
      </div>
      <div className="w-1/2 h-full flex items-end">
        <div className="w-[350px] h-[35px] border-[1px] rounded-sm relative">
          <input
            name="search"
            type="text"
            className="w-full h-full outline-0 rounded-sm indent-2 text-sm"
          />
          <AiOutlineSearch className="absolute top-[10px] right-2 text-zinc-300" />
        </div>
      </div>
    </div>
  );
}
