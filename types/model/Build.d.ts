export default class Build {
    static load({ teamName, pipelineName, jobName, buildName, client }: {
        teamName: any;
        pipelineName: any;
        jobName: any;
        buildName: any;
        client: any;
    }): Promise<Build>;
    constructor({ id, name, status, teamName, jobName, pipelineName, apiUrl, startTime, endTime, client }: {
        id: any;
        name: any;
        status: any;
        teamName: any;
        jobName: any;
        pipelineName: any;
        apiUrl: any;
        startTime: any;
        endTime: any;
        client: any;
    });
    id: any;
    name: any;
    status: any;
    teamName: any;
    jobName: any;
    pipelineName: any;
    apiUrl: any;
    startTime: any;
    endTime: any;
    client: any;
    getId(): any;
    getName(): any;
    getTeamName(): any;
}
