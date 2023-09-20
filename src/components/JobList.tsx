import "../css/JobList.scss"
import { FilterAction, Job } from "../types";

const JobList = (props: {job: Job, setFilter: React.Dispatch<FilterAction>}) => {
    const {job, setFilter} = props;

    return <>
        <div className={`card ${job.featured ? '--featured': ''}`}>
            <div className="card__body">
                <img className="card__img" src={job.logo} alt="" />
                <div className="card__body--content">
                    <div className="card__body--header">
                        <h2 className="company_name">{job.company}</h2>
                        {job.new && <p className="new">new!</p>}
                        {job.featured && <p className="featured">featured</p>}
                    </div>
                    <p className="card__body--description">{job.position}</p>
                    <ul className="card__body--summary">
                        <li>{job.postedAt}</li>
                        <li>{job.contract}</li>
                        <li>{job.location}</li>
                    </ul>
                </div>
            </div>
            <div className="card__footer">
                <hr />
                <div className="filters">
                    <button onClick={() => setFilter({type: "ROLE", value: job.role})}>
                        {job.role}
                    </button>
                    <button onClick={() => setFilter({type: "LEVEL", value: job.level})}>
                        {job.level}
                    </button>
                    {
                        job.languages.map(language => <button key={language} 
                            onClick={() => setFilter({type: "LANGUAGES", value: language})}>
                            {language}
                        </button>)
                    }
                    {
                        job.tools.map(tool => <button key={tool}
                            onClick={() => setFilter({type: "TOOLS", value: tool})}>
                            {tool}
                        </button>)
                    }
                </div>
            </div>
        </div>
    </>
}

export default JobList;