export default TeamPipelineResourceClient;
declare class TeamPipelineResourceClient {
    constructor(options: any);
    apiUrl: any;
    httpClient: any;
    teamName: any;
    pipelineName: any;
    resourceName: any;
    pause(): Promise<void>;
    unpause(): Promise<void>;
    listVersions(options?: {}): Promise<any>;
    getVersion(versionId: any): Promise<any>;
    forVersion(versionId: any): TeamPipelineResourceVersionClient;
}
import TeamPipelineResourceVersionClient from "./TeamPipelineResourceVersionClient.js";
