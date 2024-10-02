import React from 'react'
import PersonalInformation from './PersonalInformation'
import BioData from './BioData'
import Competencies from './Competencies'

function MyProfile() {
  return (
    <div className='profile'>
        <div>My profile</div>

        <div className='profile-header'>
            <PersonalInformation />
            <BioData />
            <Competencies />
        </div>
    </div>
  )
}

export default MyProfile
