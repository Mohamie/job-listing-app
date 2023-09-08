export type Job = {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}

export type JobFilters = {
    roles: string[],
    levels: string[],
    languages: string[],
    tools: string[]
}



// Filters
export type Filters = "ROLE" | "LEVEL" | "LANGUAGES" | "TOOLS"

export type FilterAction = {
    type: Filters,
    value: string,
    isRemove?: boolean;
}

export type FilterState = {
    role: string[],
    level: string[],
    languages: string[],
    tools: string[]
}