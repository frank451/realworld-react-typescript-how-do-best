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
 * @interface Comment
 */
export interface Comment  {
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    body: string;
    /**
     * 
     * @type {Profile}
     * @memberof Comment
     */
    author: Profile;
}

export function CommentFromJSON(json: any): Comment {
    return {
        'id': json['id'],
        'createdAt': new Date(json['createdAt']),
        'updatedAt': new Date(json['updatedAt']),
        'body': json['body'],
        'author': ProfileFromJSON(json['author']),
    };
}

export function CommentToJSON(value?: Comment): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'createdAt': value.createdAt.toISOString(),
        'updatedAt': value.updatedAt.toISOString(),
        'body': value.body,
        'author': ProfileToJSON(value.author),
    };
}


