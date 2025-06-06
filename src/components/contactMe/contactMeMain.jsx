import React from 'react'
import ContactMeText from './contactMeText'
import ContactMeLeft from './contactMeLeft'
import ContactMeRight from './contactMeRight'

const contactMeMain = () => {
  return (
    <div>
        {/* <ContactMeText /> */}

        <div className='flex md:flex-row sm:flex-col justify-evenly items-center gap-8 bg-lightBrown rounded-2xl max-w-[900px] mx-auto mt-8 p-4'>
            <ContactMeLeft />
            <ContactMeRight />
        </div>

    </div>
  )
}

export default contactMeMain
