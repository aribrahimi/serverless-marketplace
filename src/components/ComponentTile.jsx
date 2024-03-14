import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../data/product3.jpg';

const ComponentTile = ({ component }) => {
    // Function to truncate text to a specific length
    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + '...';
    };

    return (
        <Link to={`/${component.componentId}`}>
            <div className="flex flex-col m-4 border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in cursor-pointer sm:m-2 sm:w-auto md:w-auto lg:w-full">
                <img className="w-full h-48 object-cover" src={avatar} alt={component.name} />
                <div className="p-6">
                    <h2 className="font-bold text-xl mb-2">{component.name}</h2>
                    <p className="text-gray-700 text-base overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {truncateText(component.description, 100)} {/* Truncate the description to 100 characters */}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-gray-500">Type: {component.type}</span>
                        <span className="text-sm text-gray-400">Created: {new Date(component.createdDate).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ComponentTile;
