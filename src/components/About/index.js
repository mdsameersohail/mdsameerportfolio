import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Oval} from 'react-loader-spinner'

class About extends Component{
  state={
    aboutLoading: true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ aboutLoading : !this.state.aboutLoading })
   }, 200);
  }

  loadingSpinner=()=>{
    return(
      <div className="products-loader-container">
            <Oval height="80" width="80" radius="9" color="green" ariaLabel="loading" />
        </div>
    )
  }


  render(){
    const{aboutLoading}=this.state
    AOS.init({duration:5000})
    return(
      <>
        <div className="home-container">
        <div className='header-layer'>
            <Header/>
          </div>
          <div className='about-layer'>
                {aboutLoading? this.loadingSpinner() :
                <>
                    <div className="about-content">
                        <h1 className='about-heading'>About Me</h1>
                        <div className='about-mobile-img-cont'>
                          <img
                            src="https://res.cloudinary.com/drn0l89xj/image/upload/v1685961127/my%20image/profile-pic_xwb4no.png"
                            alt="dresses to be noticed"
                            className="about-mobile-img" data-aos='zoom-out-up' />
                        </div>
                        <p className='about-para'>I am a graduate Civil Engineer and completed masters in Civil Engineering(Transportation Engineering) from Osmania University (Hyderabad).</p>
                        <p className='about-para'>I learnt FullStack Web Development course from NXTwave ccbp 4.0 Technologies.</p>
                        <p className='about-para'>I am a MERN stack web developer with a passion for creating efficient and user-friendly web applications. I have a strong foundation in front-end and back-end development, and I constantly strive to stay up to date with the latest technologies and best practices. I am passionate about leveraging my skills to create efficient and visually appealing web applications and I am confident in my ability to contribute to any web development project.</p>
                        <p className='about-para'>🚀 I specialize in building robust and scalable full-stack web applications.<br></br>
                        💻 Proficient in SQL, Express.js, React, and Node.js (MERN) stack.<br></br>
                        🌐 Experienced in developing RESTful APIs and integrating third-party APIs.<br></br>
                        🎨 Skilled in creating responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript.<br></br>
                        🔧 Familiar with version control systems like Git and collaborative workflows using GitHub.<br></br>
                        ⚙️ Always eager to learn and explore new technologies to enhance my development skills.
                        </p>
                    </div>
                    <img
                    src="https://res.cloudinary.com/drn0l89xj/image/upload/v1685961127/my%20image/profile-pic_xwb4no.png"
                    alt="dresses to be noticed"
                    className="about-desktop-img" data-aos='zoom-out-up' />
                    </>
                }
          </div>
          </div>
  </>
  )
  }
}

export default About