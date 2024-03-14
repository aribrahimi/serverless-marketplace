import React, { useState } from 'react';
import { Header } from '../components';

const UploadStackToS3Page = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (file) {
      // Here you would typically call a function to handle the upload to S3.
      // This function would use the AWS SDK to perform the upload.
      console.log("File to upload:", file);
      // uploadToS3(file);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Upload Your Stack" />
      <p className="mb-4 text-sm text-gray-600">Select your stack .zip file and upload it directly to S3.</p>

      <form className="flex flex-col" onSubmit={handleUpload}>
        <label className="mb-2">
          <span className="text-blue-600 hover:text-blue-400 transition duration-300 cursor-pointer">
            <span className="mt-2 text-base leading-normal">Select a .zip file</span>
            <input type="file" className="hidden" accept=".zip" onChange={handleFileChange} />
          </span>
        </label>
        <button type="submit" className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Upload to S3
        </button>
      </form>
    </div>
  );
};

export default UploadStackToS3Page;
