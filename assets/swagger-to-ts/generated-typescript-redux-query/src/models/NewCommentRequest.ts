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
    NewComment,
    NewCommentFromJSON,
    NewCommentToJSON,
} from './';

/**
 * 
 * @export
 * @interface NewCommentRequest
 */
export interface NewCommentRequest  {
    /**
     * 
     * @type {NewComment}
     * @memberof NewCommentRequest
     */
    comment: NewComment;
}

export function NewCommentRequestFromJSON(json: any): NewCommentRequest {
    return {
        'comment': NewCommentFromJSON(json['comment']),
    };
}

export function NewCommentRequestToJSON(value?: NewCommentRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'comment': NewCommentToJSON(value.comment),
    };
}


