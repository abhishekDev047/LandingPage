"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { MdArrowDropDown,MdArrowDropUp } from "react-icons/md";

function Navbar() {
    const [news, setNews] = useState(false);
    const [events, setEvents] = useState(false);
    const [jobs, setJobs] = useState(false);
    const Dropdown = (props)=>{
        if(props.target){
            return(
                <div className='mt-10 sm:mt-20 absolute top-0 bg-slate-200 p-3 flex flex-col items-center justify-center z-40 self-center mx-auto rounded-xl drop-shadow-2xl '>
                   <div className='mx-3 my-1 px-5'>Sub-segment 1</div>
                   <div className='mx-3 my-1 px-5'>Sub-segment 2</div>
                   <div className='mx-3 my-1 px-5'>Sub-segment 3</div>
                   <div className='mx-3 my-1 px-5'>Sub-segment 4</div>
                   <div className='mx-3 my-1 px-5'>Sub-segment 5</div>

                </div>
            )
        }
        else{};
    };
  return (
    <div className='flex flex-row text-base drop-shadow-xl sm:text-xl items-center justify-start sm:justify-center w-full h-10 sm:h-20 bg-white fixed top-0 left-0 text-black z-50'>
        <div className='mx-3'> <Link href={'/'}>Blogs</Link> </div>

        <div className='mx-3 flex flex-row' > <button onClick={()=>{setNews(news ? false : true);setEvents(false);setJobs(false)}}>News</button> {!news ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>)} <Dropdown target={news}/> </div>

        <div className='mx-3  flex flex-row'><button onClick={()=>{setEvents(events ? false : true);setJobs(false);setNews(false)}}>Events</button>{!events ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>)}
        <Dropdown target={events}/></div>

        <div className='mx-3  flex flex-row'> <button onClick={()=>{setJobs(jobs ? false : true);setEvents(false);setNews(false)}}>Jobs </button> {!jobs ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>)}
        <Dropdown target={jobs}/></div>
    </div>
  )
}

export default Navbar