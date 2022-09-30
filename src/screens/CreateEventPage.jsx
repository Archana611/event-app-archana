import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const CreateEventPage = () => {

    const [eventName,setEventName] = useState('');
    const [hostName,sethostName] = useState('');
    const [fromDate,setfromDate] = useState('');
    const [toDate,setToDate] = useState('');
    const [loacation,setLocation] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleNext = (event) => {
        navigate('/event',{ state: { 
            eventName: eventName, 
            hostName: hostName,
            fromDate:fromDate,
            toDate:toDate,
            loacation:loacation,
            imageUrl:imageUrl
         } });

    }

    return (
        <div id="createEvent-page" className="container mx-auto px-4 bg-secondary-light h-screen flex-1 flex place-content-center	justify-center flex-col">
            <div className="flex flex-row py-5 h-auto content-center justify-between">
                <p className="text-base text-xl px-2">Event Name </p>
                <input type='text' className="bg-primary-darkest text-text-light py-1 px-2" onBlur={(s)=>setEventName(s)}></input>
            </div>
            <div className="flex flex-row py-5 h-auto content-center justify-between">
                <p className="text-base text-xl px-2">Host Name </p>
                <input type='text' className="bg-primary-darkest text-text-light py-1 px-2" onBlur={(s)=>sethostName(s)}></input>
            </div>
            <div className="flex flex-row py-5 h-auto content-center justify-between">
                <p className="text-base text-xl px-2">Start Date</p>
                <input type='calender' className="bg-primary-darkest text-text-light py-1 px-2" onBlur={(s)=>setfromDate(s)}></input>
            </div>
            <div className="flex flex-row py-5 h-auto content-center justify-between">
                <p className="text-base text-xl px-2">End Date</p>
                <input type='text' className="bg-primary-darkest text-text-light py-1 px-2" onBlur={(s)=>setToDate(s)}></input>
            </div>
            <div className="flex flex-row py-5 h-auto content-center justify-between">
                <p className="text-base text-xl px-2">Location</p>
                <input type='text' className="bg-primary-darkest text-text-light py-1 px-2" onBlur={(s)=>setLocation(s)}></input>
            </div>
            <div className="flex flex-row py-5 h-auto content-center justify-between">
                <p className="text-base text-xl px-2">Upload Image</p>
                <input type='text' className="bg-primary-darkest text-text-light py-1 px-2" onBlur={(s)=>setImageUrl(s)}></input>
            </div>
            
            <button className="bg-gradient-to-r from-primary to-primary-light py-4 px-5 rounded-xl" onBlur={handleNext}>
                <p className="text-text-light text-base font-bold">next</p>
            </button>
        </div>
    );
}

export { CreateEventPage };