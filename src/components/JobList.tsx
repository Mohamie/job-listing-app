import "../css/JobList.scss"

const JobList = (props: {job: Job}) => {
    const {job} = props;

    return <>
        <div className="card">
            <div className="card__body">
                <img className="card__img" src={`src/assets/${job.logo}`} alt="" />
                <div className="card__body--header">
                    <h2 className="company_name">{job.company}</h2>
                    <p className="new">new!</p>
                    <p className="featured">featured</p>
                </div>
                <p className="card__body--description">{job.position}</p>
                <ul className="card__body--summary">
                    <li>{job.postedAt}</li>
                    <li>{job.contract}</li>
                    <li>{job.location}</li>
                </ul>
            </div>
            <div className="card__footer">
                <Jobfilters 
                    role={job.role}
                    level={job.level}
                    languages={job.languages}
                    tools={job.tools}
                />
            </div>
        </div>
    </>
}

const Jobfilters = (props: JobFilter) => {

    return <>
        <hr />
        <div className="filters">
            <button>{props.role}</button>
            <button>{props.level}</button>
            {props.languages.map(language => <button>{language}</button>)}
            {props.tools.map(tool => <button>{tool}</button>)}
        </div>
    </>
}

export default JobList;