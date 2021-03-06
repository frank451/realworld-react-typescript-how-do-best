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
    Profile,
    ProfileFromJSON,
    ProfileToJSON,
} from './';

/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse  {
    /**
     * 
     * @type {Profile}
     * @memberof ProfileResponse
     */
    profile: Profile;
}

export function ProfileResponseFromJSON(json: any): ProfileResponse {
    return {
        'profile': ProfileFromJSON(json['profile']),
    };
}

export function ProfileResponseToJSON(value?: ProfileResponse): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'profile': ProfileToJSON(value.profile),
    };
}


