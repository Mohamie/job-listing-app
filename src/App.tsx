import './css/App.scss'
import JobList from './components/JobList';
import { getJobListings } from './services/JobListingService';
import { useJobFilters } from './hooks/useJobListingFilters';
import JobFilterPills from './components/JobFilterPills';
import { useEffect, useState } from 'react';

const staticJobListings = getJobListings();

function App() {
  const [jobList, setJobList] = useState(staticJobListings);
  const {jobFilters, setJobfilter, isFilterActive, isNoFilterActive} = useJobFilters();

  useEffect(() => {

    if(isFilterActive()){
      const filteredList = staticJobListings.filter(job => 
          jobFilters.roles.includes(job.role) ||
          jobFilters.levels.includes(job.level) ||
          job.languages.filter(lang => jobFilters.languages.includes(lang)).length || 
          job.tools.filter(tool => jobFilters.tools.includes(tool)).length 
      );
  
      setJobList(filteredList);
    }

    if(isNoFilterActive()){
      setJobList(staticJobListings);
    }

  }, [jobFilters]);

  return (
    <>
      <div className="app">
        {jobFilters && <JobFilterPills filters={jobFilters} setFilters={setJobfilter}/>}
        {
          jobList.map(job => 
            <JobList
              key={job.id} 
              job={job} 
              setFilter={setJobfilter}
            />
          )
        }
      </div>
    </>
  )
}

export default App
