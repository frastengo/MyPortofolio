import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'


export default (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/education' component={Education}/>
        <Route path='/experience' component={Experience}/>
        <Route path='/contact' component={Contact}/>
        {/* needs path and component */}
    </Switch>
)