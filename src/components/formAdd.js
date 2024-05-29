import { AiOutlineCloseCircle } from "react-icons/ai";
import { useUser, useUserDispatch } from "../context/userContext";

export default function FormAdd() {
  const userData = useUser();
  const dispatch = useUserDispatch();

  const handleCloseForm = () => {
    dispatch({
      type: "OPEN_CLOSE",
      isClose: true,
    });
  };

  return (
    <div>
      {userData.isFormClose ? null : (
        <div className="w-[125%] h-screen bg-black absolute top-0 -left-[25%] opacity-55"></div>
      )}

      {userData.isFormClose ? null : (
        <form className="w-[400px] h-[500px] bg-white absolute top-[25%] left-[25%] rounded-lg">
          <div className="h-9 bg-teaDark rounded-t-md flex items-center">
            <div className="w-2/3">
              <p className="capitalize text-sm text-[#EEF7FF] ms-2">
                form - add user
              </p>
            </div>
            <div className="w-1/3 flex justify-end">
              <AiOutlineCloseCircle
                className="inline-block text-xl text-[#EEF7FF] cursor-pointer me-2"
                onClick={handleCloseForm}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
