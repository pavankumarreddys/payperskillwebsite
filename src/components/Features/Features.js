import React from 'react'
import { Sliderify } from "react-sliderify";
const Features = () => {
  return (
      <div name='features' className='w-full h-screen features-bgm-main text-white'>
          <div className='animate__animated  animate__slideInRight p-3 flex flex-col w-full h-full justify-center' >
              <div className='text-center flex justify-center items-center bg-transparent h-[10rem]'>
                  {/* <p className='text-black text-5xl font-bold pt-5 border-b-4 border-gray-500'>
                      Features
                  </p> */}
                  <div className="waviy ">
                        <span style={{ "--i": "1" }}>F</span>
                        <span style={{ "--i": "2" }}>E</span>
                        <span style={{ "--i": "3" }}>A</span>
                        <span style={{ "--i": "4" }}>T</span>
                        <span style={{ "--i": "5" }}>U</span>
                        <span style={{ "--i": "5" }}>R</span>
                        <span style={{ "--i": "6" }}>E</span>
                        <span style={{ "--i": "7" }}>S</span>
                    </div>
              </div>
              
              <div className="flex flex-col justify-center ">
      <Sliderify showNavButtons={false}	>
        
        <div className='flex flex-col justify-center items-center'
          style={{ height: "300px",borderRadius:"10px 10px 10px 10px", backgroundColor: "transparent",border:"2px solid black", color: "white" }}
        >
          <h1 className='text-4xl'>Effortless Connection</h1><br/>
          <p>PayPerSkill simplifies the process of finding skilled professionals or work opportunities.</p>
        </div>
        <div
        className='flex flex-col justify-center items-center'
        style={{ height: "300px",borderRadius:"10px 10px 10px 10px", backgroundColor: "transparent",border:"2px solid black", color: "white" }}
        >
          <h1 className='text-4xl'>Free Service</h1><br/>
          <p>Our platform is entirely free for workers and employers, promoting equal access to opportunities</p>
        </div>
        <div
        className='flex flex-col justify-center items-center'
        style={{ height: "300px",borderRadius:"10px 10px 10px 10px", backgroundColor: "transparent",border:"2px solid black", color: "white" }}
        >
          <h1 className='text-4xl'>No Skill Limitations</h1><br/>
          <p>We welcome talents from all fields, ensuring that anyone with a skill can benefit from our platform.</p>
        </div>
      </Sliderify>
    </div>
              
              
          </div>
    </div>
  )
}

export default Features