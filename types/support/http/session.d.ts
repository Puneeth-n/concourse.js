export function createSessionInterceptor({ credentials, httpClient }: {
    credentials: any;
    httpClient?: any;
}): (config: any) => Promise<any>;
