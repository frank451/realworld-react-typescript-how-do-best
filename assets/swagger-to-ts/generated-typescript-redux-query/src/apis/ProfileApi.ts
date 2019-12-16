// tslint:disable
/**
 * Conduit API
 * Conduit API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';

import {
    GenericErrorModel,
    GenericErrorModelFromJSON,
    GenericErrorModelToJSON,
    ProfileResponse,
    ProfileResponseFromJSON,
    ProfileResponseToJSON,
} from '../models';

export interface FollowUserByUsernameRequest {
    username: string;
}

export interface GetProfileByUsernameRequest {
    username: string;
}

export interface UnfollowUserByUsernameRequest {
    username: string;
}


/**
 * Follow a user by username
 * Follow a user
 */
function followUserByUsernameRaw<T>(requestParameters: FollowUserByUsernameRequest, requestConfig: runtime.TypedQueryConfig<T, ProfileResponse> = {}): QueryConfig<T> {
    if (requestParameters.username === null || requestParameters.username === undefined) {
        throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling followUserByUsername.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `/profiles/{username}/follow`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ProfileResponseFromJSON(body), text);
    }

    return config;
}

/**
* Follow a user by username
* Follow a user
*/
export function followUserByUsername<T>(requestParameters: FollowUserByUsernameRequest, requestConfig?: runtime.TypedQueryConfig<T, ProfileResponse>): QueryConfig<T> {
    return followUserByUsernameRaw(requestParameters, requestConfig);
}

/**
 * Get a profile of a user of the system. Auth is optional
 * Get a profile
 */
function getProfileByUsernameRaw<T>(requestParameters: GetProfileByUsernameRequest, requestConfig: runtime.TypedQueryConfig<T, ProfileResponse> = {}): QueryConfig<T> {
    if (requestParameters.username === null || requestParameters.username === undefined) {
        throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getProfileByUsername.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/profiles/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ProfileResponseFromJSON(body), text);
    }

    return config;
}

/**
* Get a profile of a user of the system. Auth is optional
* Get a profile
*/
export function getProfileByUsername<T>(requestParameters: GetProfileByUsernameRequest, requestConfig?: runtime.TypedQueryConfig<T, ProfileResponse>): QueryConfig<T> {
    return getProfileByUsernameRaw(requestParameters, requestConfig);
}

/**
 * Unfollow a user by username
 * Unfollow a user
 */
function unfollowUserByUsernameRaw<T>(requestParameters: UnfollowUserByUsernameRequest, requestConfig: runtime.TypedQueryConfig<T, ProfileResponse> = {}): QueryConfig<T> {
    if (requestParameters.username === null || requestParameters.username === undefined) {
        throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling unfollowUserByUsername.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `/profiles/{username}/follow`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(ProfileResponseFromJSON(body), text);
    }

    return config;
}

/**
* Unfollow a user by username
* Unfollow a user
*/
export function unfollowUserByUsername<T>(requestParameters: UnfollowUserByUsernameRequest, requestConfig?: runtime.TypedQueryConfig<T, ProfileResponse>): QueryConfig<T> {
    return unfollowUserByUsernameRaw(requestParameters, requestConfig);
}

