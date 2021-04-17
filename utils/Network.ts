import axios, { Method, AxiosResponse, AxiosError } from 'axios';

export enum httpStatusCode {
    Ok = 200,
    BadRequest = 400,
    UnAuthorized = 401,
    NotFound = 404
}

export const DEFAULT_ROOT_URL_DEV = 'https://fakestoreapi.com'

const HTTP_REQUEST = (method: Method, endpoint: string, post_data: object | null, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError | AxiosResponse) => void) => {

    axios({ method, url: `${DEFAULT_ROOT_URL_DEV}/${endpoint}`, data: post_data })
        .then(function (response) {
            if (response.status == 200) {
                onSuccess && onSuccess(response)
            } else {
                onFailure && onFailure(response)
            }
        }).catch(function (error) {
            onFailure && onFailure(error)
        });
}

export const POST = (endpoint: string, post_data: object, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError | AxiosResponse) => void) => {
    return HTTP_REQUEST("post", endpoint, post_data, onSuccess, onFailure);
}

export const GET = (endpoint: string, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError | AxiosResponse) => void) => {
    return HTTP_REQUEST("get", endpoint, null, onSuccess, onFailure);
}

export const DELETE = (endpoint: string, onSuccess?: (res: AxiosResponse) => void, onFailure?: (err: AxiosError | AxiosResponse) => void) => {
    return HTTP_REQUEST("delete", endpoint, null, onSuccess, onFailure);
}

export default { GET, POST, DELETE };