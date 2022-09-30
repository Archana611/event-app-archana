import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import eventPoster from "../assets/images/birthdayCake.png";

const EventPage = () => {

    return (
        <div id="event-page" className="container mx-auto bg-secondary-light h-screen flex-1 flex place-content-top	justify-flex-start flex-col">
            <div className="w-screen h-6/12 h-auto self-center">
                <img className="inline" src={eventPoster} alt="..." />
            </div>
            <div className="flex flex-col px-4">
                <p className="self-flex-start text-text text-4xl px-4 py-4 self-start font-bold text-center">Birthday Bash</p>
                <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <AiOutlineCalendar class="h-12 w-12" />
                    </div>
                    <div>
                        <div class="text-xl font-medium text-black">18 August 6:00PM</div>
                        <p class="text-gray-500">to 19 August 1:00PM UTC +10</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export { EventPage };