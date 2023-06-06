import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Oval} from 'react-loader-spinner'
import axios from 'axios'

class Contact extends Component{
  state={
    aboutLoading: true,
    yourname:'',
    youremail:'',
    yournumber:'',
    complainMessage:'',
    complainSuccess:false,
    contactLoading:true
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
  onChangeYourName=(event)=>{
    this.setState({yourname:event.target.value})
    }
    onChangeYourNumber=(event)=>{
        this.setState({yournumber:event.target.value})
    }

    onChangeYourEmail=(event)=>{
        this.setState({youremail:event.target.value})
    }

    onChangeComplain=(event)=>{
        this.setState({complainMessage:event.target.value})
    }

    contactFormSubmit=(event)=>{
        event.preventDefault()
        const{yourname,yournumber,youremail,complainMessage}=this.state
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/mdsameersohail786@gmail.com', {
            name: yourname,
            mobileNumber:yournumber,
            email: youremail,
            message: complainMessage
        })
        this.setState({complainSuccess:true})
    }

    emailSendSuccess=()=>{
        this.setState({yourname:'', yournumber:'', youremail:'', complainMessage:'', complainSuccess:false})

    }


    render(){
    const{aboutLoading,yourname,yournumber,youremail,complainMessage,complainSuccess}=this.state
    AOS.init({duration:5000})
    const emailSuccess=(
        <div className='email-sent-cont'>
            <img src='https://purepng.com/public/uploads/large/purepng.com-ok-iconyestickiconokcorrectokayconfirm-4115201939019kiil.png' className='contact-img'/>
            <p className='email-sent-para'>Email sent Successful <br></br><span><a href='#ContactUS' onClick={this.emailSendSuccess}>Click Here</a> to send another response</span></p>
        </div>
    )
    return(
      <>
        <div className="home-container">
        <div className='header-layer'>
            <Header/>
          </div>
          <div className='about-layer contact-layer'>
                {aboutLoading? this.loadingSpinner() :
                <>
                    <div className="about-content">
                       <div className='text-cont'>
                            <img src='https://cdn0.iconfinder.com/data/icons/simpline-mix/64/simpline_49-256.png' className='img-icon'/>
                            <h1 className='heading'>+917680817721</h1>
                       </div>
                       <div className='text-cont'>
                            <img src='https://cdn2.iconfinder.com/data/icons/social-media-2259/512/gmail-256.png' className='img-icon'/>
                            <a href="mailto: mdsameersohail786@gmail.com" className='heading'>mdsameersohail786@gmail.com</a>
                       </div>
                       <div className='social-cont'>
                            <h1 className='social-heading'>Social-Network</h1>
                            <hr className='social-hr'/>
                            <div className='contact-img-cont'>
                                <a href='https://www.linkedin.com/in/mdsameersohail' target='_blank'><img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-256.png' className='follow-img' /></a>
                                <a href='https://www.instagram.com/sameer_sohail_nawaabzada/' target='_blank'><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png' className='follow-img' /></a>
                                <a href='https://www.facebook.com/sameersohail143' target='_blank'><img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-256.png' className='follow-img' /></a>
                                <a href='https://wa.me/+917680817721' target='_blank'><img src='https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png' className='follow-img' /></a>
                            </div>
                       </div>
                    </div>
                    {complainSuccess? emailSuccess:<div className='contact-form-cont' data-aos='fade' id='contactForm'>
                        <form type='submit' onSubmit={this.contactFormSubmit}>
                            <h1 className='contact-main-head'>Send Message</h1>
                            <div className='form-group'>
                                <input type='text' id='name' name='name' value={yourname} onChange={this.onChangeYourName} required/><label htmlFor='email'>Name</label>
                            </div>
                            <div className='form-group'>
                                <input type='number' id='number' name='number' value={yournumber} onChange={this.onChangeYourNumber} required/><label htmlFor='password'>Mobile Number</label>
                            </div>
                            <div className='form-group'>
                                <input type='email' id='email' name='email' value={youremail} onChange={this.onChangeYourEmail} required/><label htmlFor='password'>Email</label>
                            </div>
                            <div className='contact-message-cont'>
                                <p className='contact-para'>Message</p>
                                <textarea name="message" rows="5" cols="30" className='text-area' value={complainMessage} onChange={this.onChangeComplain}/>
                            </div>
                            <div className='contact-button-cont'>
                                <button className='contact-button'>Send Message</button>
                            </div>
                        </form>
                    </div>}
                    </>
                }
          </div>
          </div>
  </>
  )
  }
}

export default Contact