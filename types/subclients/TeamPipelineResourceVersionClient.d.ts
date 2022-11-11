export default TeamPipelineResourceVersionClient;
declare class TeamPipelineResourceVersionClient {
    constructor(options: any);
    apiUrl: any;
    httpClient: any;
    teamName: any;
    pipelineName: any;
    resourceName: any;
    versionId: any;
    getCausality(): Promise<any>;
    listBuildsWithVersionAsInput(): Promise<any>;
    listBuildsWithVersionAsOutput(): Promise<any>;
}
