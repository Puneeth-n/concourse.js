export default class Client {
    static instanceFor({ url, username, password, teamName, timeout }: {
        url: any;
        username: any;
        password: any;
        teamName?: string;
        timeout?: number;
    }): Client;
    constructor(options: any);
    apiUrl: any;
    httpClient: any;
    getInfo(): Promise<any>;
    listTeams(): Promise<any>;
    setTeam(teamName: any, options?: {}): Promise<any>;
    forTeam(teamName: any): TeamClient;
    listWorkers(): Promise<any>;
    forWorker(workerName: any): WorkerClient;
    listPipelines(): Promise<any>;
    listJobs(): Promise<any>;
    listBuilds(options?: {}): Promise<any>;
    getBuild(buildId: any): Promise<any>;
    forBuild(buildId: any): BuildClient;
    listResources(): Promise<any>;
}
import TeamClient from "./subclients/TeamClient.js";
import WorkerClient from "./subclients/WorkerClient.js";
import BuildClient from "./subclients/BuildClient.js";
