export default TeamPipelineJobClient;
declare class TeamPipelineJobClient {
    constructor(options: any);
    apiUrl: any;
    httpClient: any;
    teamName: any;
    pipelineName: any;
    jobName: any;
    pause(): Promise<void>;
    unpause(): Promise<void>;
    listBuilds(): Promise<any>;
    getBuild(buildName: any): Promise<any>;
    createJobBuild(): Promise<any>;
    listInputs(): Promise<any>;
}
