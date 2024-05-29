import { createContext, useContext, useReducer } from "react";

const UserConText = createContext(null);

const UserDispatchContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(reducer, {
    init: dataVirtual,
    isFormClose: true,
  });

  return (
    <UserConText.Provider value={userData}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserConText.Provider>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_FORM": {
      return { ...state, isFormClose: action.isOpen };
    }
    case "OPEN_CLOSE": {
      return { ...state, isFormClose: action.isClose };
    }
    case "ADD": {
      console.log("ADD", state, action);

      return [...state];
    }
    default: {
      console.log("default");
      return state;
    }
  }
};

export function useUser() {
  return useContext(UserConText);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}

const dataVirtual = [
  {
    id: 1,
    name: "hoang",
    image: "",
    role: "admin",
    email: "admin@gmail.com",
    password: "1234567",
    phone: "",
  },
  {
    id: 2,
    name: "hoang",
    image: "",
    role: "admin",
    email: "admin@gmail.com",
    password: "1234567",
    phone: "",
  },
];
