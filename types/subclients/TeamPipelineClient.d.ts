export default TeamPipelineClient;
declare class TeamPipelineClient {
    constructor(options: any);
    apiUrl: any;
    httpClient: any;
    teamName: any;
    pipelineName: any;
    pause(): Promise<void>;
    unpause(): Promise<void>;
    rename(newPipelineName: any): Promise<void>;
    delete(): Promise<void>;
    listJobs(): Promise<any>;
    getJob(jobName: any): Promise<any>;
    forJob(jobName: any): TeamPipelineJobClient;
    listResources(): Promise<any>;
    getResource(resourceName: any): Promise<any>;
    forResource(resourceName: any): TeamPipelineResourceClient;
    listResourceTypes(): Promise<any>;
    listBuilds(options?: {}): Promise<any>;
    saveConfig(pipelineConfig: any): Promise<void>;
}
import TeamPipelineJobClient from "./TeamPipelineJobClient.js";
import TeamPipelineResourceClient from "./TeamPipelineResourceClient.js";
