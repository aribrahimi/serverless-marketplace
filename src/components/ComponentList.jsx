import React from "react";
import avatar from "../data/product3.jpg";
import { Link } from "react-router-dom";

const ComponentList = ({ component }) => {
      // Function to truncate text to a specific length
      const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

  return (
    <Link to={`/${component.componentId}`}>
      <div className="flex flex-row p-4 border-b border-gray-200 hover:bg-gray-100 transition duration-200 ease-in">
        <div className="w-20 h-20 bg-cover bg-center rounded">
          <img
            className="w-20 h-20 object-cover"
            src={avatar}
            alt={component.name}
          />
        </div>
        <div className="flex-grow pl-4">
          <h2 className="font-bold text-lg">{component.name}</h2>
          <p className="text-gray-700 text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {truncateText(component.description, 100)} {/* Truncate the description to 100 characters */}
          </p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-gray-500">Type: {component.type}</span>
            <span className="text-sm text-gray-400">
              Created: {new Date(component.createdDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ComponentList;
