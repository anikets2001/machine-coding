import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

export const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try{
        const response = await fetch(`${API_URL}${endPoint}`);
        const json = await response.json();
        if(response.ok) setData(json.products);
    }catch(err){
        console.error(err)
    }
   
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
