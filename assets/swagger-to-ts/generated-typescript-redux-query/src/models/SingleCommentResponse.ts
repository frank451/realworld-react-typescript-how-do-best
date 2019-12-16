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
    Comment,
    CommentFromJSON,
    CommentToJSON,
} from './';

/**
 * 
 * @export
 * @interface SingleCommentResponse
 */
export interface SingleCommentResponse  {
    /**
     * 
     * @type {Comment}
     * @memberof SingleCommentResponse
     */
    comment: Comment;
}

export function SingleCommentResponseFromJSON(json: any): SingleCommentResponse {
    return {
        'comment': CommentFromJSON(json['comment']),
    };
}

export function SingleCommentResponseToJSON(value?: SingleCommentResponse): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'comment': CommentToJSON(value.comment),
    };
}


