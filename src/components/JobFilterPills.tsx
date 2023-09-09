import { FilterAction, Filters, JobFilters } from "../types"
import removeIcon from "../assets/icon-remove.svg"
import "../css/JobFilterPills.scss"

type FilterProps = {
    filters: JobFilters, 
    setFilters: React.Dispatch<FilterAction>, 
    active: boolean
}

const JobFilterPills = (props: FilterProps) => {

    const { filters, setFilters, active } = props;
    
    const FilterPill = (props: {title: string, type: Filters}) => {
        const {title, type} = props;

        return <>
            <div className="pill">
                <p>{title}</p>
                <div className="icon_wrapper">
                    <img className="icon" src={removeIcon} alt="remove icon" 
                        onClick={() => setFilters({type, value: title, isRemove: true})}
                    />
                </div>
            </div>
        </>
    }

    return <>
        {
            active && 
            <div className="filter">
                <div className="filters-pills">
                    {filters.roles.map(role => <FilterPill key={role} title={role} type="ROLE"/>)}
                    {filters.levels.map(level => <FilterPill key={level} title={level} type="LEVEL"/>)}
                    {filters.languages.map(language => <FilterPill key={language} title={language} type="LANGUAGES"/>)}
                    {filters.tools.map(tool => <FilterPill key={tool} title={tool} type="TOOLS"/>)}                
                </div>
                <p onClick={() => setFilters({type: "CLEAR", value: ""})}>Clear</p>
            </div>
        }   
    </>
}

export default JobFilterPills;

