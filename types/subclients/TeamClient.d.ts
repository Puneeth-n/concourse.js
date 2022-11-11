export default class TeamClient {
    constructor(options: any);
    apiUrl: any;
    httpClient: any;
    teamName: any;
    rename(newTeamName: any): Promise<void>;
    destroy(): Promise<void>;
    listBuilds(options?: {}): Promise<any>;
    listContainers(options?: {}): Promise<any>;
    getContainer(containerId: any): Promise<any>;
    listVolumes(): Promise<any>;
    listPipelines(): Promise<any>;
    getPipeline(pipelineName: any): Promise<any>;
    forPipeline(pipelineName: any): TeamPipelineClient;
}
import TeamPipelineClient from "./TeamPipelineClient.js";
