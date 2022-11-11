export default class Pipeline {
    static load({ teamName, pipelineName, client }: {
        teamName: any;
        pipelineName: any;
        client: any;
    }): Promise<Pipeline>;
    constructor({ id, name, teamName, client, ...data }: {
        [x: string]: any;
        id: any;
        name: any;
        teamName: any;
        client: any;
    });
    client: any;
    id: any;
    name: any;
    teamName: any;
    paused: any;
    public: any;
    getId(): any;
    getName(): any;
    getTeamName(): any;
    isPaused(): any;
    isPublic(): any;
    getJobs(): Promise<any>;
    getStartPointJobs(): Promise<any>;
    getEndPointJobs(): Promise<any>;
    getMidPointJobs(): Promise<any>;
    getAutomaticJobs(): Promise<any>;
    getManualJobs(): Promise<any>;
}
