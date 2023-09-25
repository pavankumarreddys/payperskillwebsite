
import socialNet from '../../assets/images/ppnet.avif'

const Home = ()=>{
  return(
    <div className="container-fluid  home-bgm">
      <div className="row animate__animated  animate__bounceInUp">
        <div className="col-12 col-lg-7">
            <div>
            <h1 className='home-heading text-3xl md:text-5xl'>Turn Your Skills into Cash Flow with PayPerSkill</h1>
            <p className='text-base md:text-xl lg:text-lg text-slate-500'>Join us on this exciting journey PayPerSkill is designed to bridge the gap between individuals seeking skilled workers and those with unique talents looking for work opportunities.</p>
            <div className="flip-card hidden lg:block">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <button className="flip-button">Welcome</button>
              </div>
            <div className="flip-card-back">
              <button className="flip-button">Join With Us</button>
            </div>
            </div>
            </div>
            </div>
        </div>
        <div className="col-12 col-lg-5">
        <img className='money-manager-image mt-2 mb-2 ' src={socialNet}/>
        <button className='lg:hidden flex justify-center items-center std-button hover:bg-green-700'>Join with us</button>
        </div>
      </div>
    </div>
  )
}
export default Home

// import React from 'react'
// import 'animate.css';

// function Home() {
//   return (
//     <div name="home" className="h-screen w-full home-bgm">
//       <div className="items-center animate__animated  animate__slideInRight flex flex-col h-full px-4 md:flex-row">
//         <div className=' flex flex-col justify-center md:mt-5 h-2/3 w-1/2'>
//           <div>
//           <h1 className='home-heading '>Turn Skills into Cash Flow with PayPerSkill</h1>
//           <p className='home-para text-slate-500'>Join us on this exciting journey of skill discovery and professional growth. Together, we'll unlock the potential within your talent and create a thriving ecosystem where skills find their perfect matches. Start connecting, start building, and start shaping your future today!</p>
//           </div>
//           <div className='mt-5'>
//           <button className='std-button hover:bg-green-700'>Join with us</button>
//           </div>
          
//         </div>
//       <img className='w-1/2 money-manager-image ' src="https://img.freepik.com/free-photo/friendly-businesswoman-shakng-hands_23-2147636026.jpg?w=900&t=st=1695481175~exp=1695481775~hmac=94e8095407efee0d75e0bc0eaff933fa165f7d6dd547838778b6445cc8575a2e"/>
//       </div>
//     </div>
//   )
// }

// export default Home