import React from "react";
import eventDetail from "../assets/images/eventDetail.svg";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateEvent = (event) => {
    navigate('/create');
  }

  return (
    <div id="home-page" className="container mx-auto px-4 bg-secondary-light h-screen flex-1 flex place-content-center	justify-center flex-col">
      <div className="flex flex-col">
        <p className="text-4xl self-center font-bold text-primary-light">Imagine if <br /><span className="text-primary">Snapchat</span><br /> had events.</p>
        <p className="self-center text-text text-base px-4 py-4 self-center text-center">Easily host and share events with your friends across any social media.</p>
      </div>
      <div className="w-44 py-5 h-auto self-center">
        <img className="inline" src={eventDetail} alt="..." />
      </div>
      <div className="flex self-center py-2">
        <button className="bg-gradient-to-r from-primary to-primary-light py-4 px-5 rounded-xl" onClick={handleCreateEvent}>
          <p className="text-text-light text-base font-bold">🎉 Create my event</p>
        </button>
      </div>
    </div>
  );
}

export { HomePage };