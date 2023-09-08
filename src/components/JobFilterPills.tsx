import { FilterAction, Filters, JobFilters } from "../types"
import removeIcon from "../assets/icon-remove.svg"

const JobFilterPills = (props: {filters: JobFilters, setFilters: React.Dispatch<FilterAction>}) => {

    const { filters, setFilters } = props;
    
    const FilterPill = (props: {title: string, type: Filters}) => {
        const {title, type} = props;

        return <>
            <div className="pill">
                <p>{title}</p>
                <img src={removeIcon} alt="remove icon" 
                    onClick={() => setFilters({type, value: title, isRemove: true})}
                />
            </div>
        </>
    }

    return <>
        <div className="filters-pills">
            {filters.roles.map(role => <FilterPill key={role} title={role} type="ROLE"/>)}
            {filters.levels.map(level => <FilterPill key={level} title={level} type="LEVEL"/>)}
            {filters.languages.map(language => <FilterPill key={language} title={language} type="LANGUAGES"/>)}
            {filters.tools.map(tool => <FilterPill key={tool} title={tool} type="TOOLS"/>)}
            
        </div>
    </>
}

export default JobFilterPills;

