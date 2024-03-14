import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, Sidebar } from './components';
import './App.css';
import { useUIState } from './contexts/UIStateContext';
import ComponentsPage from './pages/ComponentsPage';
import ComponentDetailPage from './pages/ComponentDetailPage';
// import UploadStackToS3Page from './pages/UploadStackToS3Page';

const App = () => {
  const { activeMenu } = useUIState();


  return (
    <div >
      <HashRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<ComponentsPage/>)} />
                <Route path="/:componentId" element={<ComponentDetailPage/>} />
                {/* <Route path="/upload-stack" element={(<UploadStackToS3Page />)} /> */}
                {/* <Route path="/ListView" element={<ListView />} /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
