import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useComponentsData } from '../contexts/ComponentsDataContext';
import avatar from "../data/product3.jpg";
import DeployToAWS from './DeployToAWS';

const ComponentDetail = () => {
    const { componentsData } = useComponentsData();
    const { componentId } = useParams();
    const [showFullDescription, setShowFullDescription] = useState(false);

    const component = componentsData.find(item => item.componentId === componentId);

    if (!component) {
        return <p>Component not found!</p>;
    }

    // Function to toggle the full description view
    const toggleDescriptionView = () => {
        setShowFullDescription(!showFullDescription);
    };

    // Function to truncate description text
    const truncateDescription = (description) => {
        const maxChars = 250; // Maximum number of characters to display
        return description.length > maxChars ? description.substring(0, maxChars) + '...' : description;
    };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <h1 className="text-xl font-bold mb-4">{component.name}</h1>
            <img src={avatar} alt={component.name} className="w-full h-48 object-cover mb-4"/>
            <p className="text-gray-700 mb-4" style={{ overflowWrap: 'break-word' }}>
                {showFullDescription ? component.description : truncateDescription(component.description)}
            </p>
            {component.description.length > 250 && (
                <button className="text-l font-bold mb-4" onClick={toggleDescriptionView}>
                    {showFullDescription ? 'Show Less' : 'Read More...'}
                </button>
            )}
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="mb-4 md:mb-0">
                    <span className="mb-4 text-gray-500 ">Type: {component.type}</span>
                </div>
                <div>
                    <span className="text-sm text-gray-400">Created: {new Date(component.createdDate).toLocaleDateString()}</span>
                </div>
            </div>
            <DeployToAWS componentId={component.componentId}/>
        </div>
    );
}

export default ComponentDetail;



