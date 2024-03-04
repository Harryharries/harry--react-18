import React from 'react'
import appDownloadImage from "../assets/appDownload.png";

import landingImage from "../assets/landing.png";

export default function HomePage() {
  return (
    <div className='flex flex-col gap-12'>
        <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
            <div className='text-5xl font-bold tracking-tight text-orange-600'>
                Tuck into the way
            </div>
            <div className='text-xl'>Food is just a click away</div>

        </div>
        <div className='grid md:grid-cols-2 gap-5'>
            <img src={landingImage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
        </div>
    </div> 
  )
}
