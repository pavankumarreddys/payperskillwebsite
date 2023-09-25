

function Contact() {
  return (
    <div className="container-fluid w-full h-full bg-gradient-to-b from-gray-800 via-black to-gray-800 p-4 text-white pt-40">
        <div className="row animate__animated  animate__bounceInLeft">
            <div className="col-12 pb-8">
            <div className="waviy ">
                        <span style={{ "--i": "1" }}>C</span>
                        <span style={{ "--i": "2" }}>O</span>
                        <span style={{ "--i": "3" }}>N</span>
                        <span style={{ "--i": "4" }}>T</span>
                        <span style={{ "--i": "5" }}>A</span>
                        <span style={{ "--i": "5" }}>C</span>
                        <span style={{ "--i": "6" }}>T</span>
                    
              </div>
            </div>
            <div className="col-12">
            <p className='py-6 text-xl text-center'>submit the form below to get in touch with us</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <form action="https://getform.io/f/74049272-7867-499c-a36b-b5f7a71f1a64" method='post' className='flex flex-col w-full md:w-1/2' >
                      <input type="text" name='name' placeholder='Enter your name'
                          className='p-2 bg-transparent border-2 text-white rounded-md  focus:outline-none '/>
                      <input type="email" name='email' placeholder='Enter your email'
                          className='my-4 p-2 bg-transparent border-2 text-white rounded-md  focus:outline-none ' />
                      <textarea name="message" id="" rows="10" placeholder='Enter your message' className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none '></textarea>
                      <button className='flex text-white bg-gradient-to-b from-cyan-500
                      to-blue-500 px-6 py-3 my-8 mx-auto items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>

        </div>

    </div>
      
  )
}

export default Contact