import './css/App.scss'
import JobList from './components/JobList';
import { getJobListings } from './services/JobListingService';
import { useJobFilters } from './hooks/useJobListingFilters';
import JobFilterPills from './components/JobFilterPills';
import { useEffect, useState } from 'react';

const staticJobListings = getJobListings();

function App() {
  const [jobList, setJobList] = useState(staticJobListings);
  const {jobFilters, setJobfilter, isFilterActive} = useJobFilters();

  const filterList = () => {
    let list = staticJobListings;

    if(jobFilters.roles.length){
      list = list.filter(job => jobFilters.roles.includes(job.role))
    }
    
    if(jobFilters.levels.length){
      list = list.filter(job => jobFilters.levels.includes(job.level))
    }
    
    if(jobFilters.languages.length){
      list = list.filter(job => 
        jobFilters.languages.filter(lang => job.languages.includes(lang)).length === jobFilters.languages.length
      )
    }
    
    if(jobFilters.tools.length){
      list = list.filter(job =>
        jobFilters.tools.filter(tool => job.tools.includes(tool)).length === jobFilters.tools.length
      )
    }

    setJobList(list);
  }

  useEffect(() => {
    filterList();
  }, [jobFilters]);


  return (
    <>
      <main className="app">
        <div className="page_header">
          {jobFilters && <JobFilterPills active={isFilterActive} filters={jobFilters} setFilters={setJobfilter}/>}
        </div>
        <section>
          {
            jobList.map(job => 
              <JobList
                key={job.id} 
                job={job} 
                setFilter={setJobfilter}
              />
            )
          }
        </section>
      </main>
    </>
  )
}

export default App
