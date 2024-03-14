import React, { useState } from "react";
import ComponentTile from "../components/ComponentTile";
import ComponentList from "../components/ComponentList";
import { Header } from "../components";
import { useComponentsData } from "../contexts/ComponentsDataContext";

const ComponentsPage = () => {
  const { componentsData } = useComponentsData();
  const [isListView, setListView] = useState(false);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Components" />
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {/* Toggle Button */}
      <button 
        onClick={() => setListView(!isListView)} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isListView ? "Switch to Tile View" : "Switch to List View"}
      </button>
      
      {/* Render Based on View */}
      <div className={isListView ? "" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>
        {componentsData.map((item) => (
          <div key={item.componentId} className="p-4">
            {isListView ? <ComponentList component={item}/> : <ComponentTile component={item}/>}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ComponentsPage;
