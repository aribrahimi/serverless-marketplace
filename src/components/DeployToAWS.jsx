import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeployToAWS = ({ componentId }) => {
  console.log("componentId==>>", componentId);

  const handleDeployClick = async () => {
    const apiUrl = `https://5hbzts9470.execute-api.us-east-1.amazonaws.com/dev/deploy/${componentId}`;
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // Include any other body data required by your Lambda function
        })
      });

      const result = await response.json();
      console.log("result::", result);
      // Check the HTTP status code for success
      if (response.ok) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error during deployment:", error);
      toast.error("Deployment error. Please check the console for more details.");
    }
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeployClick}>Deploy to AWS</button>
      <ToastContainer />
    </div>
  )
}

export default DeployToAWS;


// import React from 'react'
// import { API } from "aws-amplify"

// const DeployToAWS = ({ componentId }) => {
//   console.log("componentId==>>", componentId)
//   const handleDeployClick = async () => {
//     try {
//       // Construct the path with the componentId
//       const path = `deploy/${componentId}`;
      
//       // Make a request to your backend to initiate the deployment
//       const response = await API.post("/", path, {
//         headers: {
//           "Content-Type": "application/json"
//         },
//         // The body can contain additional data if needed
//         body: JSON.stringify({
//           // ... other data if needed
//         })
//       });

//       // Assuming the API returns the response directly without needing to call .json()
//       console.log("response::", response);
//       if (response.success) {
//         alert("Deployment initiated successfully!");
//       } else {
//         alert("Deployment failed. Please try again.");
//       }

//     } catch (error) {
//       console.error("Error during deployment:", error);
//       alert("Deployment error. Please check the console for more details.");
//     }
//   };

//   return (
//     <div>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         onClick={handleDeployClick}>Deploy to AWS</button>
//     </div>
//   )
// }

// export default DeployToAWS;
