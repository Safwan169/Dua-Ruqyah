"use client";

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const my_context = createContext();

const ContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  // it is for get all data
  const [fetchData, setData] = useState([]);
  const [cartData, setDataToCart] = useState([]);

  // data fetch for category
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `https://islamic-server.vercel.app/api/categories`
      );
      try {
        setData(res?.data);
        setDataToCart(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  // this is for filter for search value
  useEffect(() => {
    if (searchValue) {
      const result = fetchData?.filter((item) =>
        item?.name.toLowerCase().includes(searchValue)
      );
      setDataToCart(result);
      console.log(result, "this is for search value");
    } else {
      setDataToCart(fetchData);
      // console.log(fetchData,'this is for no search value')
      // setData(fetchData)
    }
  }, [searchValue]);

  // this is for get duas by id
  const [categoryId, setCategoryId] = useState(1);

  const [dua, setDua] = useState([]);

  const [subCatId,setSubCatId] = useState(1);

const [duaId,setDuaId]=useState(1)
const [setting,setSetting]=useState(false)

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/duas/${categoryId}`
      );
      try {
        console.log(res?.data, "this is for dua ");
        // setData(res?.data);
        // setDataToCart(res?.data)
        setDua(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [categoryId]);

  const data = {
    searchValue,
    setSearchValue,
    fetchData,
    setData,
    cartData,
    setDataToCart,
    categoryId,
    setCategoryId,
    dua,
    setDua,
    subCatId,
    setSubCatId,
    duaId,
    setDuaId,
    setSetting,
    setting
   
  };
  return <my_context.Provider value={data}>{children}</my_context.Provider>;
};

export default ContextProvider;
