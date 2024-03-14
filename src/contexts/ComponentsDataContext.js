import React, { createContext, useContext, useState, useEffect } from 'react';
import { API } from "aws-amplify";

const ComponentsDataContext = createContext();

export const ComponentsDataProvider = ({ children }) => {
  const [componentsData, setComponentsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await API.get("components", "/components");
        setComponentsData(apiData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <ComponentsDataContext.Provider value={{ componentsData, setComponentsData }}>
      {children}
    </ComponentsDataContext.Provider>
  );
};

export const useComponentsData = () => useContext(ComponentsDataContext);
