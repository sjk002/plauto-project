import React from 'react'
import './styles.scss'

import { TypeAnimation } from 'react-type-animation'

import WinkIcon from '../../assets/images/plauto_wink.png'
import LongDownArrow from '../../assets/images/long_down_arrow.png'
import ShortDownArrow from '../../assets/images/short_down_arrow.png'
import UploadIcon from '../../assets/images/upload.png'
import MilestoneIcon from '../../assets/images/milestone.png'

import Navbar from '../../components/Navbar'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className="landing">
            <img src={WinkIcon} alt="Winking Icon" />
            <div className="container">
                <h1>Plan Automatically</h1>
                <h3>
                    Introducing the Future of Project 
                    Planning: Unleash the Power of 
                    Multi-Modal Inputs!
                </h3>
                <p>
                    Have many different ongoing projects and dread 
                    the tedious planning? Don’t worry, “Go Plauto it!” with 
                    our Plan Automatically solution.
                </p>
            </div>
        </div>
        <div className="steps">
            <div className="short_arrow_container">
                <img src={ShortDownArrow} alt="short down arrow" className='short_down_arrow' />
            </div>
            <div className="block">
                <h5>
                    Picture this: you simply upload your 
                    relevant project documents
                </h5>
                <img src={UploadIcon} alt="Upload Icon" />
            </div>
            <h2><g>Voila!</g></h2>
            <div className="block">
                <h5>
                    Our AI kicks into high gear, 
                    generating timelines and milestones 
                    that are tailor-made just 
                    for you. 
                </h5>
                <img src={MilestoneIcon} alt="Milestone Icon" className='milestone' />
            </div>
        </div>
        <div className="register">
            <h2><g>So, why wait?</g></h2>
            <h5>
                Take a moment to make the smart move of registering for beta 
                access. Join us on this	exciting journey, and let's revolutionize the 
                way you manage projects
            </h5>
            <img src={LongDownArrow} alt="long down arrow" />
            <a 
                className="register_button"
                target='_blank'
                href='https://forms.gle/f4tNFfZZoDBqMk25A'
            >
                <h3>Register for Beta</h3>
            </a>
            <h3>Created by UC San Diego students</h3>
        </div>
    
    </div>
  )
}

export default Home