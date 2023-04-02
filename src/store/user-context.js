import React, { useState } from "react";

const UserContext = React.createContext({
  setTitle: () => {},
  setContent: () => {},
  setForm: () => {},
  deleteItem: () => {},
  setList:() => {},
  getItems:() => {},
  addItems:() => {},
  valueC:'',
  valueT:'',
  list: [],
});

export const UserContextProvider = (props) => {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const deleteItemFromStore = (id) => {
    const exitingList = JSON.parse(localStorage.getItem('list'));
    const newList = exitingList.filter((item) => item.id !== id);

    localStorage.setItem('list',JSON.stringify(newList));
  }



  const deleteItemHandler = (id) => {
      const newList = list.filter((item) => item.id !== id);
      localStorage.setItem('list',JSON.stringify(newList));
      
      deleteItemFromStore(id);
    setList(newList);
  };


  const getItemsFromStore = () => {
    const storeList =JSON.parse(localStorage.getItem('list')) || [];
    setList(storeList);
  }

  const addItemToStore = (list) => {
      const exitingList =JSON.parse(localStorage.getItem('list')) || [];
      const newList = [...exitingList,list]

      localStorage.setItem('list',JSON.stringify(newList));
  }


  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = {
      title,
      content,
      id: Math.floor(Math.random() * 100),
    };
    setList((prevState) => {
      return [...prevState, data];
    });
    addItemToStore(data);
    setTitle("");
    setContent("");
    
    console.log(list, data);
  };

  return (
    <UserContext.Provider
      value={{
        setTitle: titleHandler,
        setContent: contentHandler,
        setForm: onSubmitHandler,
        deleteItem: deleteItemHandler,
        setList:setList,
        getItems:getItemsFromStore,
        addItems: addItemToStore,
        valueT:title,
        valueC:content,
        list: list,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
