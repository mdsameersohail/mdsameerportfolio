import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Oval} from 'react-loader-spinner'

class Home extends Component{
  state={
    loading: true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ loading : !this.state.loading })
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
    const{loading}=this.state
    AOS.init({duration:5000})
    return(
      <>
        <div className="home-container">
          <div className='header-layer'>
            <Header/>
          </div>
          <div className='bottom-layer'>
          {loading? this.loadingSpinner() :
          <>
            <div className="home-content">
              <p className='home-para1'>Hello, my name is</p>
              <h1 className="home-heading" data-aos='slide-up'>Md Sameer Sohail</h1>
              <img
                src="https://res.cloudinary.com/drn0l89xj/image/upload/v1685961127/my%20image/profile-pic_xwb4no.png"
                alt="clothes to be noticed"
                className="home-mobile-img" />
              <p className="home-description" data-aos='slide-up'>
                A Full Stack Web Developer 
              </p>
              <p className='home-para2'>
                I am a MERN Based Full stack Web Developer. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
              </p>
              <div className='contact-img-cont'>
                        <a href='https://www.linkedin.com/in/mdsameersohail' target='_blank'><img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-256.png' className='follow-img' /></a>
                        <a href='https://www.instagram.com/sameer_sohail_nawaabzada/' target='_blank'><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png' className='follow-img' /></a>
                        <a href='https://www.facebook.com/sameersohail143' target='_blank'><img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-256.png' className='follow-img' /></a>
                        <a href='https://wa.me/+917680817721' target='_blank'><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png' className='follow-img' /></a>
              </div>
              <div className='home-button-cont'>
                <Link to="/myworks" className='link'>
                  <button type="button" className="home-button" data-aos='slide-up'>
                    See My Work
                  </button>
                </Link>
                <Link to="/contact" className='link'>
                  <button type="button" className="home-button" data-aos='slide-up'>
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/drn0l89xj/image/upload/v1685961127/my%20image/profile-pic_xwb4no.png"
              alt="dresses to be noticed"
              className="home-desktop-img" data-aos='zoom-out-up' />
              </>
        }
          </div>
          </div>
  </>
  )
  }
}

export default Home
