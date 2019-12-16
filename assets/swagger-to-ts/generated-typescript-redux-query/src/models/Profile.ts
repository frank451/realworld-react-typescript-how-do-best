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
/**
 * 
 * @export
 * @interface Profile
 */
export interface Profile  {
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    bio: string;
    /**
     * 
     * @type {string}
     * @memberof Profile
     */
    image: string;
    /**
     * 
     * @type {boolean}
     * @memberof Profile
     */
    following: boolean;
}

export function ProfileFromJSON(json: any): Profile {
    return {
        'username': json['username'],
        'bio': json['bio'],
        'image': json['image'],
        'following': json['following'],
    };
}

export function ProfileToJSON(value?: Profile): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'username': value.username,
        'bio': value.bio,
        'image': value.image,
        'following': value.following,
    };
}


