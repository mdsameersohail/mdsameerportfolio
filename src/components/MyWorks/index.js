import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Oval} from 'react-loader-spinner'

class MyWorks extends Component{
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
          <div className='works-layer'>
                {aboutLoading? this.loadingSpinner() :
                <>
                    <div className="about-content">
                        <h1 className='works-head'>Projects</h1>
                            <div className = 'container'>
                                <div className = 'card'>
                                    <div className = 'image'>
                                        <img href = "#" src ='https://res.cloudinary.com/drn0l89xj/image/upload/v1686049505/images/331_vlwhm6.jpg'/>
                                    </div>
                                    <div className = 'content'>
                                        <h3 className='container-head'>Food Munch</h3>
                                        <p className='container-para'>Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers</p>
                                        <a href='https://mdsamefoodmunch.ccbp.tech/' target='__blank' className='contanier-link'>mdsamefoodmunch.ccpb.tech</a>
                                    </div>
                                </div>  
                                <div className = 'card'>
                                    <div className = 'image'>
                                        <img href = "#" src ='https://res.cloudinary.com/drn0l89xj/image/upload/v1686049768/images/2842270_oxzesj.jpg'/>
                                    </div>
                                    <div className = 'content'>
                                        <h3 className='container-head'>Todos Application</h3>
                                        <p className='container-para'>Developed persistent todo application with CRUD operations to track list of tasks</p>
                                        <a href='https://sohailtodolist.ccbp.tech/' target='__blank' className='contanier-link'>sohailtodolist.ccbp.tech</a>
                                    </div>
                                </div>   
                                <div className = 'card'>
                                    <div className = 'image'>
                                        <img href = "#" src ='https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Wikipedia_alt_2.png'/>
                                    </div>
                                    <div className = 'content'>
                                        <h3 className='container-head'>Wikipedia Search Application</h3>
                                        <p className='container-para'>Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia </p>
                                        <a href='https://samwikisearch1.ccbp.tech/' target='__blank' className='contanier-link'>samwikisearch1.ccbp.tech</a>
                                    </div> 
                                </div> 
                                <div className = 'card'>
                                    <div className = 'image'>
                                        <img href = "#" src ='https://cdn3.iconfinder.com/data/icons/geek-3/24/Pokemon_Mini_game-256.png'/>
                                    </div>
                                    <div className = 'content'>
                                        <h3 className='container-head'>Play Mini Games</h3>
                                        <p className='container-para'>Developed play mini website where users can play the addition game, subtraction game, multiplication game and division game.</p>
                                        <a href='https://sameerplaymini.ccbp.tech/' target='__blank' className='contanier-link'>sameerplaymini.ccbp.tech</a>
                                    </div>
                                </div> 
                                <div className = 'card'>
                                    <div className = 'image'>
                                        <img href = "#" src ='https://res.cloudinary.com/drn0l89xj/image/upload/v1685177712/mgminfra%20images/mgmlogo_yu21wr.jpg'/>
                                    </div>
                                    <div className = 'content'>
                                        <h3 className='container-head'>Mgm Infra Construction</h3>
                                        <p className='container-para'>Developed Mgm Infra Construction Company Website using HTML, CSS, JavaScript, ReactJS.</p>
                                        <a href='https://mgminfra.co.in/' target='__blank' className='contanier-link'>mgminfra.co.in</a>
                                    </div>
                                </div> 
                            </div>
                            <div className='mobile-card-cont'>
                                <div className='mobile-card'>
                                    <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686049505/images/331_vlwhm6.jpg' className='mobile-img'/>
                                    <div className='mobile-text-cont'>
                                        <h3 className='container-head'>Food Munch</h3>
                                        <p className='container-para'>Developed a responsive website for Food Store where users can see a list of food items, detailed information about a food item, offers</p>
                                        <a href='https://mdsamefoodmunch.ccbp.tech/' target='__blank' className='contanier-link'>mdsamefoodmunch.ccpb.tech</a> 
                                    </div>
                                </div>
                                <div className='mobile-card'>
                                    <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1686049768/images/2842270_oxzesj.jpg' className='mobile-img'/>
                                    <div className='mobile-text-cont'>
                                        <h3 className='container-head'>Todos Application</h3>
                                        <p className='container-para'>Developed persistent todo application with CRUD operations to track list of tasks</p>
                                        <a href='https://sohailtodolist.ccbp.tech/' target='__blank' className='contanier-link'>sohailtodolist.ccbp.tech</a> 
                                    </div>
                                </div>
                                <div className='mobile-card'>
                                    <img src='https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Wikipedia_alt_2.png' className='mobile-img'/>
                                    <div className='mobile-text-cont'>
                                        <h3 className='container-head'>Wikipedia Search Application</h3>
                                        <p className='container-para'>Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia </p>
                                        <a href='https://samwikisearch1.ccbp.tech/' target='__blank' className='contanier-link'>samwikisearch1.ccbp.tech</a>
                                    </div>
                                </div>
                                <div className='mobile-card'>
                                    <img src='https://cdn3.iconfinder.com/data/icons/geek-3/24/Pokemon_Mini_game-256.png' className='mobile-img'/>
                                    <div className='mobile-text-cont'>
                                        <h3 className='container-head'>Play Mini Games</h3>
                                        <p className='container-para'>Developed play mini website where users can play the addition game, subtraction game, multiplication game and division game.</p>
                                        <a href='https://sameerplaymini.ccbp.tech/' target='__blank' className='contanier-link'>sameerplaymini.ccbp.tech</a> 
                                    </div>
                                </div>
                                <div className='mobile-card'>
                                    <img src='https://res.cloudinary.com/drn0l89xj/image/upload/v1685177712/mgminfra%20images/mgmlogo_yu21wr.jpg' className='mobile-img'/>
                                    <div className='mobile-text-cont'>
                                    <h3 className='container-head'>Mgm Infra Construction</h3>
                                        <p className='container-para'>Developed Mgm Infra Construction Company Website using HTML, CSS, JavaScript, ReactJS.</p>
                                        <a href='https://mgminfra.co.in/' target='__blank' className='contanier-link'>mgminfra.co.in</a>
                                    </div>
                                </div>
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

export default MyWorks