import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Oval} from 'react-loader-spinner'

class Skills extends Component{
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
      <div className="skill-loader-container">
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
          <div className='skills-layer'>
                {aboutLoading? this.loadingSpinner() :
                <>
                    <div className="about-content">
                        <h1 className='skill-head'>Skills</h1>
                        <div className='skill-head-cont'>
                            <img src='https://img.icons8.com/?size=512&id=VVTnjccwbmPK&format=png' className='skill-img'/>
                            <h1 className='skill-heading'>Frontend</h1>
                        </div>
                        <hr className='hr'/>
                        <div className='front-skills-cont'>
                            <img  src='https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/HTML.png' className='skills-images'/>
                            <img src='https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/css-256.png' className='skills-images'/>
                            <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686036113/pngs/pngwing.com_oqyldd.png' className='skills-images'/>
                            <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686036610/pngs/javascript-39410_exk01h.png' className='skills-images'/>
                            <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686036969/pngs/kisspng-react-logo-redux-webpack-babel--5b7b7258694912.5465440215348168564313_moqrhe.png' className='react-img'/>
                        </div>
                        <div className='skill-head-cont'>
                            <img src='https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Coding-Html-256.png' className='skill-img'/>
                            <h1 className='skill-heading'>Backend</h1>
                        </div>
                        <hr className='hr'/>
                        <div className='front-skills-cont'>
                            <img  src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png' className='skills-images'/>
                            <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686037969/pngs/pngwing.com_2_n2ej0s.png' className='skills-images'/>
                            <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686038215/pngs/pngegg_oqeip2.png' className='react-img'/>
                        </div>
                        <div className='skill-head-cont'>
                            <img src='https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/database-cache-64.png' className='skill-img'/>
                            <h1 className='skill-heading'>Database</h1>
                        </div>
                        <hr className='hr'/>
                        <div className='front-skills-cont'>
                            <img  src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686039133/pngs/pngwing.com_3_k9jyfg.png' className='react-img'/>
                            <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686039160/pngs/pngegg_1_mkbdy8.png' className='skills-images'/>
                        </div>
                    </div>
                </>
                }
          </div>
          </div>
  </>
  )
  }
}

export default Skills