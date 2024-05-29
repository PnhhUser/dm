import { CiUser } from "react-icons/ci";
import HeaderContent from "../components/headerContent";
import Content from "../components/wrapperContent";
import Functionbar from "../components/functionbar";
import { useEffect, useState } from "react";
import { useUser } from "../context/userContext";
import FormAdd from "../components/formAdd";

let selectIds = [];
const INDEX_ID = 1;
const ATTRIBUTE_NAME = "itemid";

export default function UserPage() {
  const [userIds, setUserIds] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const userData = useUser();

  useEffect(() => {
    let inputCheckBox = Array.from(
      document.getElementsByClassName("input-checkbox")
    );

    inputCheckBox.forEach((box) => {
      box.checked = isCheckAll;
      let itemId = Number(box.getAttribute(ATTRIBUTE_NAME));

      if (isCheckAll) {
        if (!selectIds.includes(itemId)) {
          selectIds.push(itemId);
        }
      } else {
        if (selectIds.includes(itemId)) {
          selectIds.splice(selectIds.indexOf(itemId), INDEX_ID);
        }
      }
    });

    setUserIds([...selectIds]);
  }, [isCheckAll]);

  const handleBtnCheckAll = () => {
    setIsCheckAll(!isCheckAll);
  };

  const handleInputCheck = (e) => {
    let selected = e.target.checked;

    let itemId = Number(e.target.getAttribute(ATTRIBUTE_NAME));

    if (selectIds.includes(itemId)) {
      if (!selected) {
        selectIds.splice(selectIds.indexOf(itemId), INDEX_ID);
      }
    } else {
      selectIds.push(itemId);
    }

    setUserIds([...selectIds]);
  };

  return (
    <Content>
      <HeaderContent
        text="user database"
        icon={<CiUser className="inline-block text-xl" strokeWidth={1} />}
      />
      <Functionbar
        userIds={userIds}
        handleSelect={handleBtnCheckAll}
        isCheckAll={isCheckAll}
      />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase bg-teaDark text-[#EEF7FF]">
            <tr>
              <th scope="col" className="px-2 py-3"></th>
              <th scope="col" className="px-1 py-3">
                ID
              </th>
              <th scope="col" className="px-1 py-3">
                Name
              </th>
              <th scope="col" className="px-1 py-3">
                Image
              </th>
              <th scope="col" className="px-1 py-3">
                Role
              </th>
              <th scope="col" className="px-1 py-3">
                Email
              </th>
              <th scope="col" className="px-1 py-3">
                Password
              </th>
              <th scope="col" className="px-1 py-3">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.init.map((item) => {
              return (
                <tr
                  key={item?.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="flex justify-center items-center h-[80px]">
                    <input
                      onChange={handleInputCheck}
                      itemID={item?.id}
                      name="select"
                      type="checkbox"
                      className="input-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </td>
                  <td className="px-1 py-4">{item?.id}</td>
                  <td className="px-1 py-4">{item?.name}</td>
                  <td className="px-1 py-4">
                    <div className="bg-tea w-10 h-10 rounded-sm overflow-hidden"></div>
                  </td>
                  <td className="px-1 py-4">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
                      {item?.role}
                    </span>
                  </td>
                  <td className="px-1 py-4">{item?.email}</td>
                  <td className="px-1 py-4">{item?.password}</td>
                  <td className="px-1 py-4">{item?.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <FormAdd />
    </Content>
  );
}
