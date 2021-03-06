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
    Article,
    ArticleFromJSON,
    ArticleToJSON,
} from './';

/**
 * 
 * @export
 * @interface SingleArticleResponse
 */
export interface SingleArticleResponse  {
    /**
     * 
     * @type {Article}
     * @memberof SingleArticleResponse
     */
    article: Article;
}

export function SingleArticleResponseFromJSON(json: any): SingleArticleResponse {
    return {
        'article': ArticleFromJSON(json['article']),
    };
}

export function SingleArticleResponseToJSON(value?: SingleArticleResponse): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'article': ArticleToJSON(value.article),
    };
}


