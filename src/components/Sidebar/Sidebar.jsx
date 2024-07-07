import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState()
  const {onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context)

  const loadPrompt= async (prompt)=>{
    setRecentPrompt(prompt)
     await onSent(prompt) 
  }
  return (
    <div className='sidebar'>
      <div className="top">
        <div className="menu-container">
          <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="Menu Icon" className="menu-icon"/>
        </div>
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="Plus Icon" />
          {extended &&  <p>New chat</p>}
        </div>
        {
          extended  &&
          <div className="recent">
          <p className="recent-title">Recent</p>
          {prevPrompt.map((item, index) => (
              <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                <img src={assets.message_icon} alt="Message Icon" />
                <p>{item.slice(0,18)}</p>
              </div>
          ))}
          
        </div>
        }
        
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Question Icon" />
          {extended &&  <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="History Icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Settings Icon" />
          {extended && <p>Settings</p>}
        </div>  
      </div>
    </div>
  );
}

export default Sidebar;
