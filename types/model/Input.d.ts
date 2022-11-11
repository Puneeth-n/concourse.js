export function toInput(client: any): (inputData: any) => Input;
export default class Input {
    constructor({ name, resource, passed, trigger, client }: {
        name: any;
        resource: any;
        passed: any;
        trigger: any;
        client: any;
    });
    name: any;
    resource: any;
    passed: any;
    trigger: any;
    client: any;
    getName(): any;
    getResourceName(): any;
    getNamesOfJobsToHavePassed(): any;
    isTrigger(): boolean;
    requiresAnyJobsToHavePassed(): boolean;
    requiresAtLeastJobToHavePassed(jobName: any): any;
}
