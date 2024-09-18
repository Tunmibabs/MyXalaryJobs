import React from 'react'
import JobCardHeader from './jobCardTitle'
import JobCardFooter from './jobCardFooter'
import JobCardDescription from './jobCardDescription'

function JobCard() {
  return (
    <div className='jobDetails'>
      <JobCardHeader />
      <JobCardDescription />
      <JobCardFooter />
    </div>
  )
}
export default JobCard
