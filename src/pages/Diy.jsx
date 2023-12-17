// diy衣服的页面

import CanvasModel from '../canvas';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import config from '../config/config';
import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
export default function Diy() {
  const [file, setFile] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);
  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })
  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aipicker":
        return <AIPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }
  const handleSubmit = async (type) => {
    if(!prompt) return alert("Please enter a prompt");
    try {
      setGeneratingImg(true);
      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt,
        })
      })
      const data = await response.json();
      handleDecals(type, `data:image/png;base64,${data.photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }
  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];
    state[decalType.stateProperty] = result;
    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }
  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }
    // after setting the state, activeFilterTab is updated
    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }
  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  };
  return (
      <div className="welcome_page">
      <div className='welcome_container'>
        {/* 设置左侧边栏 */}
            <div
            key="custom"
            className="relative opacity-100 z-10 min-h-screen top-0 left-0   flex justify-center items-center "
            >
            <div className="mr-1 flex w-16 flex-col items-center justify-center gap-4 rounded-lg border-2 pt-4 pb-4 bg-white  shadow-[0_2px_30px_0_rgba(31,38,135,0.07)] backdrop-opacity-80  border-[#FFFFFF] border-solid" >
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}
                {generateTabContent()}
            </div>
        </div>
        {/* 设置右侧边栏 */}
        <div className='relative flex w-full  h-full  items-center text-center'>
          {/* 放置模型 */}
            <div className='absolute inset-0'>
              <CanvasModel />
            </div>
            {/* 设置右边栏的底栏 */}
          <div className='absolute bottom-[150px] left-0 w-full' >
    <div className='flex justify-center  gap-10' >
      {FilterTabs.map((tab) => (
        <Tab
          key={tab.name}
          tab={tab}
          isFilterTab
          isActiveTab={activeFilterTab[tab.name]}
          handleClick={() => handleActiveFilterTab(tab.name)}
        />
      ))}
    </div>
  </div>
        </div>
        </div>
    </div>
  )
};
