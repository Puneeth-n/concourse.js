export function toOutput(client: any): (outputData: any) => Output;
export default class Output {
    constructor({ name, resource, client }: {
        name: any;
        resource: any;
        client: any;
    });
    name: any;
    resource: any;
    client: any;
    getName(): any;
    getResourceName(): any;
}
