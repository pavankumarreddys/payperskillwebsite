import React from 'react'
import 'animate.css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import{Link} from 'react-scroll'

function Home() {
  return (
    <div name="home" className="h-screen w-full home-bgm">
      <div className="items-center animate__animated  animate__slideInRight flex flex-col h-full px-4 md:flex-row">
        <div className=' flex flex-col justify-center md:mt-5 h-2/3 w-1/2'>
          <div>
          <h1 className='home-heading '>Turn Skills into Cash Flow with PayPerSkill</h1>
          <p className='home-para text-slate-500'>Join us on this exciting journey of skill discovery and professional growth. Together, we'll unlock the potential within your talent and create a thriving ecosystem where skills find their perfect matches. Start connecting, start building, and start shaping your future today!</p>
          </div>
          <div className='mt-5'>
          <button className='std-button hover:bg-green-700'>Join with us</button>
          </div>
          
        </div>
      <img className='w-1/2 money-manager-image ' src="https://img.freepik.com/free-photo/friendly-businesswoman-shakng-hands_23-2147636026.jpg?w=900&t=st=1695481175~exp=1695481775~hmac=94e8095407efee0d75e0bc0eaff933fa165f7d6dd547838778b6445cc8575a2e"/>
      </div>
    </div>
  )
}

export default Home