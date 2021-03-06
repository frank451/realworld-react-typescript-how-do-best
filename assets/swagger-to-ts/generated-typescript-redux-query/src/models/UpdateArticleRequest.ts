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
    UpdateArticle,
    UpdateArticleFromJSON,
    UpdateArticleToJSON,
} from './';

/**
 * 
 * @export
 * @interface UpdateArticleRequest
 */
export interface UpdateArticleRequest  {
    /**
     * 
     * @type {UpdateArticle}
     * @memberof UpdateArticleRequest
     */
    article: UpdateArticle;
}

export function UpdateArticleRequestFromJSON(json: any): UpdateArticleRequest {
    return {
        'article': UpdateArticleFromJSON(json['article']),
    };
}

export function UpdateArticleRequestToJSON(value?: UpdateArticleRequest): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'article': UpdateArticleToJSON(value.article),
    };
}


