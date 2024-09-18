import React from 'react'
import Footer from '../components/footer'
import LoggedInHeader from '../components/loggedInHeader'
import AppliedJobDisplay from '../components/appliedJobDisplay'
import TitleSearch from '../components/titleSearch'

function AppliedJobs() {
  return (
    <div className="app-wrapper">
      <LoggedInHeader />
      <TitleSearch />
      <AppliedJobDisplay />
      <Footer />
    </div>
  )
}

export default AppliedJobs
