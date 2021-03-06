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
 * @interface GenericErrorModelErrors
 */
export interface GenericErrorModelErrors  {
    /**
     * 
     * @type {Array<string>}
     * @memberof GenericErrorModelErrors
     */
    body: Array<string>;
}

export function GenericErrorModelErrorsFromJSON(json: any): GenericErrorModelErrors {
    return {
        'body': json['body'],
    };
}

export function GenericErrorModelErrorsToJSON(value?: GenericErrorModelErrors): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'body': value.body,
    };
}


