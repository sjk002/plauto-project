import React from 'react'
import './styles.scss'

import { TypeAnimation } from 'react-type-animation'

import WinkIcon from '../../assets/images/wink_icon.png'
import UploadIcon from '../../assets/images/upload_icon.png'
import Docs from '../../assets/images/docs.png'
import EmptyDocs from '../../assets/images/empty_docs.png'
import ArrowDown from '../../assets/images/arrow_down.png'
import ArrowRight from '../../assets/images/arrow_right.png'

import Navbar from '../../components/Navbar'

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className="landing">
            <div className="circle" />
            <img src={WinkIcon} alt="Winking Icon" />
            <h1>Plan Automatically</h1>
            <h3>
                Introducing the Future of Project Management: <br />
                <de>Unleash the Power of Multi-Modal Inputs!</de>
            </h3>
            <h3><mo>Unleash the Power of Multi-Modal Inputs!</mo></h3>
            <p>
                Transform the way you manage projects. Try our platform today and 
                elevate your project management experience to new heights. 
                Efficiency, adaptability, and success awaits!
            </p>
            <img src={ArrowDown} alt="Down arrow image" className='arrow_down'/>
        </div>
        <div className="steps">
            <div className="block">
                <div className="circle" />
                <img src={UploadIcon} alt="Upload Icon" className='first' />
                <h5><sb>INPUT</sb> your projects along with their deadlines</h5>
            </div>
            <div className="border">
                <h2>Upload by Text</h2>
                <div className="inner">
                    <TypeAnimation
                        sequence={[
                            'Type or Paste Project',
                            2000,
                            '',
                            () => {
                                console.log('Sequence completed');
                            }
                        ]}
                        wrapper='p'
                        cursor={true}
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div className="border">
                <h2>Upload by Documents</h2>
                <div className="container">
                    <img src={EmptyDocs} alt="Docs image" className='docs' />
                    <img src={ArrowRight} alt="Right arrow image" className='arrow_right' />
                    <div className="inner">
                        <p>Upload your files <bb>here...</bb></p>
                    </div>

                </div>
            </div>
            <div className="block">
                <div className="circle left" />
                <h5 className='first'>Plauto will <sb>AUTOMATE</sb> a plan for you to start your work!</h5>
                <img src={Docs} alt="Upload Icon" />
            </div>
            <div className="border">
                <h2><g>DSGN100 - Kiosk Design</g></h2>
                <div className="inner">
                    <div className="container">
                        <h3>1. Fieldwork/Observation - 1 week</h3>
                        <div className="bullet">
                            <div className="rectangle" />
                            <p>Observe user's research; Monday - Tuesday</p>
                        </div>
                        <div className="bullet">
                            <div className="rectangle" />
                            <p>Talk to your audience; Tuesday - Wednesday</p>
                        </div>
                        <div className="bullet">
                            <div className="rectangle" />
                            <p>Analyze result; Thursday - Friday</p>
                        </div>
                        <h3>2. Online Research - 1 week</h3>
                        <div className="bullet">
                            <div className="rectangle" />
                            <p>Research competitors; Monday - Tuesday</p>
                        </div>
                        <div className="bullet">
                            <div className="rectangle" />
                            <p>Research on how to implement; Wednesday - Friday</p>
                        </div>
                        <div className='button'>
                            <h3>Adjust Timeline</h3>
                        </div>
                        <img src={ArrowDown} alt="" />
                    </div>
                </div>
            </div>
            <div className="block mtop">
                <div className="circle" />
                <h5>
                    But that's not all - we give you the <sb>FREEDOM</sb> to make 
                    adjustments according to your own schedule 
                    and adapt to any unexpected changes. 
                </h5>
            </div>
        </div>
        <div className="register">
            <div className="border">
                <h1>At Plauto, we believe</h1>
                <h2>Starting Point is Key to Success.</h2>
                <h3>And we are here to help you get started!</h3>
            </div>
            <div className="container">
                <img src={ArrowDown} alt="" />
                <h2 className='caption' >"Go Plauto it!"</h2>
            </div>
            <a 
                className='register_button'
            >
                <h3>Register for Beta</h3>
            </a>
            <h3>Created by UCSD Students</h3>
        </div>
    </div>
  )
}

export default Home