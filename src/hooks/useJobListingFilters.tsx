import { useReducer } from "react";
import { FilterAction, JobFilters } from "../types";

export const useJobFilters = () => {
    const initialFilters: JobFilters = {
        roles: [],
        levels: [],
        languages: [],
        tools: []
    };
    
    const [jobFilters, setJobfilter] = useReducer(filterReducer, initialFilters);

    const isFilterActive = jobFilters.roles.length > 0 || 
          jobFilters.levels.length > 0 ||  
          jobFilters.languages.length > 0 ||  
          jobFilters.tools.length > 0  
      
    const isNoFilterActive = jobFilters.roles.length === 0 && 
          jobFilters.levels.length === 0 &&  
          jobFilters.languages.length === 0 &&  
          jobFilters.tools.length === 0  

    return { jobFilters, setJobfilter, isFilterActive, isNoFilterActive };
}


const filterReducer = (state: JobFilters, action: FilterAction) => {

    switch(action.type){
        case "ROLE":
            const roles = !action.isRemove ? 
                Array.from(new Set([...state.roles, action.value]))
                :
                state.roles.filter(role => role !== action.value);
            
            return {...state, roles}

        case "LEVEL":
            const levels = !action.isRemove ? 
                Array.from(new Set([...state.levels, action.value]))
                :
                state.levels.filter(level => level !== action.value);

            return {...state, levels}

        case "LANGUAGES":
            const languages = !action.isRemove ? 
                    Array.from(new Set([...state.languages, action.value]))
                    :
                    state.languages.filter(language => language !== action.value);

            return {...state, languages}

        case "TOOLS":
            const tools = !action.isRemove ? 
                Array.from(new Set([...state.tools, action.value]))
                :
                state.roles.filter(role => role !== action.value);

            return {...state, tools}
        
        case "CLEAR":
            return {roles: [], levels: [], languages: [], tools: []}
        
        default:
            return {...state}
    }

}