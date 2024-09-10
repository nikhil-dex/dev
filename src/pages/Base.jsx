import "../styles/Base.css"
import "../App.css"
import Footer from "../componentes/Footer/Footer"

const Base = () => {
  return (
    <>
     <div id="top"></div>
    <main>
      
      <div id="container" className="container-fluid mt-2 text-bg-dark">
        <kbd id="blink" className="text-secondary">base.js</kbd>
        <h1 className='text-center'>The <span className='text-danger'>No</span>yau</h1>
        <br />
      </div>
      <hr />
    
      <br />
      <div className="container">
        <div className="row">
          <h1>About Noyau</h1>
          <div className="col-md bg-light border-rounded rounded-3 ">

               <h2><kbd>What is Noyau?</kbd></h2>
               <p>
               Noyau is a team of developers passionate about cloud computing, artificial intelligence, web, and app  development. 
               We work on cutting-edge projects, constantly exploring new technologies. Although we are a team of fresh talent, 
               we are eager to learn, grow, and innovate together.
               </p>

          </div>
          <div className="col-md d-flex justify-content-center "><iframe src="https://lottie.host/embed/198fc59e-39d4-4ed5-967a-b6ffa594b6b7/0CuaTDUZ9s.json"></iframe></div>
          <div className="col bg-light border-rounded rounded-3 "><h2><kbd>What Exactly We Do?</kbd></h2>
                 <p>
Our mission is to bring together diverse expertise within our team, enabling us to take on new and exciting challenges. 
Our focus areas include AI, machine learning, MERN stack development, game development, cloud technologies, and more. 
In addition to technical skills, we invest in enhancing our team's soft skills, fostering collaboration, and personal growth.
                 </p>
                 <h2><kbd>Our Aim</kbd></h2>
             <p>
             Our primary goal is to excel in as many hackathons as possible, continuously improving through competition and teamwork.
             </p>

             </div>
           
        </div>
      </div>

     
    </main>
    <Footer/>
    </>
  )
}

export default Base