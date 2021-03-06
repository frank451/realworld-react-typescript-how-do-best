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

import { exists, mapValues } from '../runtime';
import {
    LoginUser,
    LoginUserFromJSON,
    LoginUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface LoginUserRequest
 */
export interface LoginUserRequest  {
    /**
     * 
     * @type {LoginUser}
     * @memberof LoginUserRequest
     */
    user: LoginUser;
}

export function LoginUserRequestFromJSON(json: any): LoginUserRequest {
    return {
        'user': LoginUserFromJSON(json['user']),
    };
}

export function LoginUserRequestToJSON(value?: LoginUserRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'user': LoginUserToJSON(value.user),
    };
}


