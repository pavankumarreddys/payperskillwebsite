import { Sliderify } from "react-sliderify";

const Features = () => {
  return (
    <div className='container-fluid features-bgm-main'>
        <div className='row animate__animated  animate__slideInRight '>
            <div className='col-12'>
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
            <div className='col-12 text-center p-3'>
            
              <Sliderify showNavButtons={false} showSlideStatus={true} 	slideDurationInSecs={20}>
        
        <div className='flex flex-col justify-center items-center'
          style={{ height: "300px",borderRadius:"10px 10px 10px 10px", backgroundColor: "transparent",border:"2px solid black", color: "white" }}
        >
          <h1 className='text-4xl'>Effortless Connection</h1><br/>
          <p>PayPerSkill takes the hassle out of the hiring process. Whether you're a business owner in need of specialized skills for a project or an individual looking for part-time work, our platform makes the process incredibly easy. You can browse through a diverse pool of skilled individuals and find the perfect match for your requirements. Say goodbye to long and tedious hiring processes; with PayPerSkill, it's just a few clicks away.</p>
        </div>
        <div
        className='flex flex-col justify-center items-center'
        style={{ height: "300px",borderRadius:"10px 10px 10px 10px", backgroundColor: "transparent",border:"2px solid black", color: "white" }}
        >
          <h1 className='text-4xl'>Free Service</h1><br/>
          <p>One of the standout features of PayPerSkill is that it's completely free of cost. We believe that talent should be accessible to everyone, regardless of budget constraints. You can post job listings, explore skilled workers' profiles, and connect with them without worrying about fees or hidden charges. Our commitment to keeping our platform free ensures that both employers and job seekers can fully utilize PayPerSkill's capabilities without any financial burden.</p>
        </div>
        <div
        className='flex flex-col justify-center items-center'
        style={{ height: "300px",borderRadius:"10px 10px 10px 10px", backgroundColor: "transparent",border:"2px solid black", color: "white" }}
        >
          <h1 className='text-4xl'>Skill Matching</h1><br/>
          <p>PayPerSkill is your go-to platform for finding skilled individuals across a wide range of professions. Whether you're searching for chefs to tantalize taste buds, carpenters to craft beautiful furniture, laborers for hands-on tasks, software experts for coding excellence, or reliable drivers to keep things moving, PayPerSkill has you covered. Our advanced skill matching algorithms ensure that you connect with professionals who possess the expertise you need. No matter the job, we'll help you find the right talent quickly and efficiently. Say goodbye to tedious searches; with PayPerSkill, skill matching has never been easier.</p>
        </div>
        <div
        className='flex flex-col justify-center items-center'
        style={{ height: "300px",borderRadius:"10px 10px 10px 10px", backgroundColor: "transparent",border:"2px solid black", color: "white" }}
        >
          <h1 className='text-4xl'>Part-time Jobs</h1><br/>
          <p>Flexibility is a core aspect of the modern work landscape, and PayPerSkill embraces this concept wholeheartedly. Many talented individuals prefer part-time or freelance work that allows them to showcase their skills while maintaining a work-life balance. With PayPerSkill, you can easily find part-time job opportunities that match your skills and availability. Whether you're a student, a stay-at-home parent, or simply looking to supplement your income, our platform opens doors to countless part-time work possibilities.</p>
        </div>
              </Sliderify>
     
            </div>
        </div>
    </div>
  )
}

export default Features