import React from 'react'
import PersonalInformation from './PersonalInformation'
import BioData from './BioData'
import Competencies from './Competencies'
import AboutMe from './AboutMe'
import Experience from './Experience'
import Education from './education'
import Documents from './Documents'

function MyProfile() {
  return (
    <div className='profile'>

        <div className='profile-header'>
            <PersonalInformation />
            <BioData />
            <Competencies />
            <AboutMe />
            <Experience />
            <Education />
            <Documents />
        </div>
    </div>
  )
}

export default MyProfile
