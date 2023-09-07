import './css/App.scss'
import JobList from './components/JobList';
import { getJobListings } from './services/JobListingService';

function App() {
  const jobListings = getJobListings();
  return (
    <>
      <div className="app">
        {jobListings.map(jobList => <JobList job={jobList}/>)}
      </div>
    </>
  )
}

export default App
