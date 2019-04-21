import React, { Component } from 'react'
import Projects from './Projects'
import './style.css'

class Project extends Component {
    state = {
        projects: [
            {
                id: 0,
                title: 'Node.js Blogging CMS.',
                description: 'A simple blogging CMS created with Node.js with authentication and comments feature. Users can Login/Signup, Create/Edit/Delete their Posts and Comments.',
                image: 'blog'
            },
            {
                id: 1,
                title: 'React.js Weather Web App.',
                description: 'Full stack Weather App to fetch realtime weather from API, created with React 16+ and Node.js as backend.',
                image: 'thundersky'
            },
            {
                id: 2,
                title: 'Annonymous Mail sender.',
                description: 'An E-mail sending Web App by which you can send Email to anyone without revealing your actual identity.',
                image: 'annonmail'
            },
            {
                id: 3,
                title: 'Hotel Website.',
                description: 'Hotel website frontend template that can be reused by any hotel to showcase their facilities.',
                image: 'hbt'
            }
        ]
    }
  render() {
    return (
      <div id="project">
        {this.state.projects.map((item, index) => {
            return <Projects id={item.id} key={index} title={item.title} description={item.description} image={item.image} />
        })}
      </div>
    )
  }
}

export default Project;