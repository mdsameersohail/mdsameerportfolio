import {Switch, Route} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import MyWorks from './components/MyWorks'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About}/>
    <Route exact path='/skills' component={Skills}/>
    <Route exact path='/myworks' component={MyWorks}/>
    <Route exact path='/contact' component={Contact}/>
    <Route component={NotFound} />
  </Switch>
)

export default App
