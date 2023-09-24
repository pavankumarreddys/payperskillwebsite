import React from 'react'
import 'animate.css';

const About = () => {
  return (
      <div name='about' className='w-full h-screen about-bgm-main text-white'>
          <div className='animate__animated  animate__slideInRight p-3 flex flex-col w-full h-full justify-center' >
              <div className='text-center flex justify-center items-center bg-transparent h-[10rem]'>
                  {/* <p className='text-black text-5xl font-bold'>
                      About PayPerSkill
                  </p> */}
                  <div className="waviy">
                        <span style={{ "--i": "1" }}>A</span>
                        <span style={{ "--i": "2" }}>b</span>
                        <span style={{ "--i": "3" }}>o</span>
                        <span style={{ "--i": "4" }}>u</span>
                        <span style={{ "--i": "5" }}>t</span>
                        <span style={{ "--i": "5" }}>&nbsp;</span>
                        <span style={{ "--i": "6" }}>P</span>
                        <span style={{ "--i": "7" }}>a</span>
                        <span style={{ "--i": "8" }}>y</span>
                        <span style={{ "--i": "9" }}>P</span>
                        <span style={{ "--i": "10" }}>e</span>
                        <span style={{ "--i": "11" }}>r</span>
                        <span style={{ "--i": "12" }}>S</span>
                        <span style={{ "--i": "13" }}>k</span>
                        <span style={{ "--i": "14" }}>i</span>
                        <span style={{ "--i": "15" }}>l</span>
                        <span style={{ "--i": "16" }}>l</span>
                    </div>

                  
              </div>
              
                  <p className='text-xl mt-20'>PayPerSkill is a groundbreaking platform designed to bridge the gap between individuals seeking skilled workers and those with unique talents looking for work opportunities. Our platform is built on the simple premise that there are people with valuable skills ready to contribute, and there are individuals and businesses in need of their expertise. We facilitate these connections seamlessly, allowing work to be completed efficiently and to everyone's satisfaction.</p>
              <br/>
              <p className='text-xl'>
              PayPerSkill is designed to recognize and harness these talents, offering a platform where skills are not just valued but celebrated. By facilitating connections between skilled individuals and employers or project owners, we aim to match the right skills with the right opportunities, creating a win-win scenario for both parties.
              </p>
              
              
          </div>
    </div>
  )
}

export default About