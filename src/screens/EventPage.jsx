import React from "react";
// import { MdCelebration } from "react-icons/md";
import eventPoster from "../assets/images/birthdayCake.png";

const EventPage = () => {

  return (
    <div id="event-page" className="container mx-auto bg-secondary-light h-screen flex-1 flex place-content-top	justify-flex-start flex-col">
    <div className="w-screen h-6/12 h-auto self-center">
      <img className="inline" src={eventPoster} alt="..." />
    </div>
    <div className="flex flex-col px-4">
      <p className="self-center text-text text-4xl px-4 py-4 self-center text-center">Birthday Bash</p>
    </div>
    
  </div>
  );
}

export { EventPage };