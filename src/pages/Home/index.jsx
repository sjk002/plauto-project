import React from 'react'
import './styles.scss'

import WinkIcon from '../../assets/images/wink_icon.png'
import UploadIcon from '../../assets/images/upload_icon.png'
import Docs from '../../assets/images/docs.png'
import ArrowDown from '../../assets/images/arrow_down.png'

import Navbar from '../../components/Navbar'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className="landing">
            <img src={WinkIcon} alt="Winking Icon" />
            <h1>Plan Automatically</h1>
            <h3>
                Introducing the Future of Project Management: <br />
                Unleash the Power of Multi-Modal Inputs!
            </h3>
            <p>
                Transform the way you manage projects. Try our platform today and 
                elevate your project management experience to new heights. 
                Efficiency, adaptability, and success awaits!
            </p>
        </div>
        <div className="steps">
            <div className="block">
                <img src={UploadIcon} alt="Upload Icon" className='first' />
                <h5><sb>UPLOAD</sb> your projects along with their deadlines</h5>
            </div>
            <div className="block">
                <h5 className='first'>Plauto will <sb>AUTOMATE</sb> a plan for you to start your work!</h5>
                <img src={Docs} alt="Upload Icon" />
            </div>
            <h5>
                But that's not all - we give you the <sb>FREEDOM</sb> to make 
                adjustments according to your own schedule 
                and adapt to any unexpected changes. 
            </h5>
        </div>
        <div className="register">
            <div className="border">
                <h1>At Plauto, we believe</h1>
                <h2>Starting Point is Key to Success.</h2>
                <h3>And we are here to help you get started!</h3>
            </div>
            <img src={ArrowDown} alt="" />
            <div className='button'>
                <h3>Register for Beta</h3>
            </div>
            <h3>Created by UCSD Students</h3>
        </div>
    </div>
  )
}

export default Home