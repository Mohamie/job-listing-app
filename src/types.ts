type Job = {
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

type JobFilter = {
    role: string,
    level: string,
    languages: string[],
    tools: string[]
}



// Filters
type Filters = "ROLE" | "LEVEL" | "LANGUAGES" | "TOOLS"

type FilterAction = {
    type: Filters,
    value: string | string[]
}

type FilterState = {
    role: string[],
    level: string[],
    languages: string[],
    tools: string[]
}