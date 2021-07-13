export enum Job {
    dev = 'dev',
    cto = 'cto',
    data = 'data',
    infra = 'infra',
    design = 'design'
}

export interface Coworker {
    emoji: string,
    firstname: string,
    lastname: string
    age: number
    job: Job | undefined
}