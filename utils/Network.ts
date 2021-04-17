import axios, { Method, AxiosResponse, AxiosError } from 'axios';

export enum httpStatusCode {
    Ok = 200,
    BadRequest = 400,
    UnAuthorized = 401,
    NotFound = 404
}

export const DEFAULT_ROOT_URL_DEV = 'https://fakestoreapi.com'

export type onSuccessType = (res: AxiosResponse) => void;
export type onFailureType = (err: AxiosError | AxiosResponse) => void

const HTTP_REQUEST = (method: Method, endpoint: string, post_data: object | null, onSuccess?: onSuccessType, onFailure?: onFailureType) => {

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

export const POST = (endpoint: string, post_data: object, onSuccess?: onSuccessType, onFailure?: onFailureType) => {
    return HTTP_REQUEST("post", endpoint, post_data, onSuccess, onFailure);
}

export const GET = (endpoint: string, onSuccess?: onSuccessType, onFailure?: onFailureType) => {
    return HTTP_REQUEST("get", endpoint, null, onSuccess, onFailure);
}

export const DELETE = (endpoint: string, onSuccess?: onSuccessType, onFailure?: onFailureType) => {
    return HTTP_REQUEST("delete", endpoint, null, onSuccess, onFailure);
}

export default { GET, POST, DELETE };