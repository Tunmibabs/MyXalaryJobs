import React from 'react'
import Footer from '../components/footer'
import LoggedInHeader from '../components/loggedInHeader'
import AppliedJobDisplay from '../components/appliedJobDisplay'

function AppliedJobs() {
  return (
    <div className="app-wrapper">
      <LoggedInHeader />
      <AppliedJobDisplay />
      <Footer />
    </div>
  )
}

export default AppliedJobs
