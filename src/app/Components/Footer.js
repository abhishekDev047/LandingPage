import React from 'react';
import {SiGithub,SiLinkedin,SiInstagram,SiTwitter,SiGmail,SiFacebook} from "react-icons/si";

function Footer() {
    const string = "I have created this site/landing page in Next.js . And styled with TailwindCSS, react-icons.";
  return (
    <>
    <div className='flex flex-col flex-wrap items-center justify-center'>

<div className='my-3 px-2 flex-row flex flex-wrap text-lg sm:text-3xl'>
 
        <div className='m-3'>
        <SiGithub/>
        </div>

        <div className='m-3'>
            <SiLinkedin/>
        </div>
        <div className='m-3'>
            <SiInstagram/>
        </div>
        <div className='m-3'>
            <SiTwitter/>
        </div>
        <div className='m-3'>
            <SiGmail/>
        </div>
        <div className='m-3'>
            <SiFacebook/>
        </div>

</div>
<div className='my-3 px-2'>{string}</div>

    </div>
    </>
  )
}

export default Footer;