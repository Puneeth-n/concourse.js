export default class Fly {
    constructor(options: any);
    uri: any;
    teamName: any;
    username: any;
    password: any;
    login(options: any): Promise<Fly>;
    jobs(options: any): Promise<any>;
    pipelines(options?: {}): Promise<any>;
    builds(options?: {}): Promise<any>;
}
