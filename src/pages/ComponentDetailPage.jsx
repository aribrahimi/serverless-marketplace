import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components";
import { useComponentsData } from "../contexts/ComponentsDataContext";
import ComponentDetail from "../components/ComponentDetail";

const ComponentDetailPage = () => {
  const { componentId } = useParams(); 
  console.log('componentId==>',componentId)
  const { componentsData } = useComponentsData();
  const selectedComponent = componentsData.find(comp => comp.componentId === componentId); 

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title={selectedComponent?.name || 'Component Details'} />
      <ComponentDetail/>
    </div>
  );
};

export default ComponentDetailPage;
