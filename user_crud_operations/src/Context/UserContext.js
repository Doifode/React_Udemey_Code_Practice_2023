import { createContext, useState } from "react";
const UserContext = createContext();
const ProvideUser = ({ children }) => {
  const getLocalData = () => {
    const local = localStorage.getItem("userDetails");
    if (local) {
      return JSON.parse(localStorage.getItem("userDetails"));
    }
  };
  const [userArray, setUserArray] = useState(getLocalData());

  //  function EditUser(id){
  //  const   editUser = userArray.map((item)=>{
  //   return id !== item.id
  // })
  // setUserArray(editUser)
  // console.log(editUser)
  // }

  const CreateUser = (user) => {
    const updateUser = [
      ...userArray,
      {
        firstname: user.firstname,
        lastname: user.lastname,
        dateofbirth: user.dateofbirth,
        id: Math.round(Math.random() * 100),
      },
    ];

    setUserArray(updateUser);
    localStorage.setItem("userDetails", JSON.stringify(updateUser));
  };

  const deleteUserById = (users) => {
    const updateduser = userArray.splice(1, users);
    setUserArray(updateduser);
    localStorage.setItem("userDetails", JSON.stringify(updateduser));
  };
  const contextValue = {
    userArray,
    CreateUser,
    deleteUserById,
    // EditUser
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { ProvideUser };
export default UserContext;
