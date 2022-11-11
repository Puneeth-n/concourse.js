export function toJob(client: any): (jobData: any) => Job;
export default class Job {
    static load({ teamName, pipelineName, jobName, client }: {
        teamName: any;
        pipelineName: any;
        jobName: any;
        client: any;
    }): Promise<Job>;
    constructor({ id, name, pipelineName, teamName, inputs, outputs, groups, client }: {
        id: any;
        name: any;
        pipelineName: any;
        teamName: any;
        inputs: any;
        outputs: any;
        groups: any;
        client: any;
    });
    id: any;
    name: any;
    pipelineName: any;
    teamName: any;
    inputs: any;
    outputs: any;
    groups: any;
    client: any;
    getId(): any;
    getName(): any;
    getPipelineName(): any;
    getTeamName(): any;
    getInputs(): any;
    getInputForResource(resourceName: any): any;
    getOutputs(): any;
    getOutputForResource(resourceName: any): any;
    getGroups(): any;
    hasDependencyJobs(): any;
    getDependencyJobs(): Promise<any>;
    getDependencyJobsFor(resourceName: any): Promise<any>;
    hasDependentJobsIn(jobSet: any): any;
    isAutomatic(): any;
    isManual(): any;
    getLatestBuild(): Promise<Build>;
    getLatestBuildWithStatus(status: any): Promise<Build>;
}
import Build from "./Build.js";
