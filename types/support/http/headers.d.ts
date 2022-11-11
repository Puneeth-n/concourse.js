export namespace contentTypes {
    const formUrlEncoded: string;
    const yaml: string;
}
export function basicAuthorizationHeader(username: any, password: any): {
    Authorization: string;
};
export function bearerAuthorizationHeader(token: any): {
    Authorization: string;
};
export function csrfTokenHeader(token: any): {
    "X-Csrf-Token": any;
};
export function contentTypeHeader(contentType: any): {
    "Content-Type": any;
};
