import React from 'react'
import PersonalInformation from './PersonalInformation'
import BioData from './BioData'
import Competencies from './Competencies'
import AboutMe from './AboutMe'
import Experience from './Experience'

function MyProfile() {
  return (
    <div className='profile'>
        <div>My profile</div>

        <div className='profile-header'>
            <PersonalInformation />
            <BioData />
            <Competencies />
            <AboutMe />
            <Experience />
        </div>
    </div>
  )
}

export default MyProfile
