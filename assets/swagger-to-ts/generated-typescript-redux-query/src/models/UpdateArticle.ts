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
 * @interface UpdateArticle
 */
export interface UpdateArticle  {
    /**
     * 
     * @type {string}
     * @memberof UpdateArticle
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateArticle
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateArticle
     */
    body?: string;
}

export function UpdateArticleFromJSON(json: any): UpdateArticle {
    return {
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'body': !exists(json, 'body') ? undefined : json['body'],
    };
}

export function UpdateArticleToJSON(value?: UpdateArticle): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'title': value.title,
        'description': value.description,
        'body': value.body,
    };
}


