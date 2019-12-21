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


import { HttpMethods, QueryConfig, ResponseBody, ResponseText } from 'redux-query';
import * as runtime from '../runtime';

import {
    GenericErrorModel,
    GenericErrorModelFromJSON,
    GenericErrorModelToJSON,
    TagsResponse,
    TagsResponseFromJSON,
    TagsResponseToJSON,
} from '../models';


/**
 * Get tags. Auth not required
 * Get tags
 */
function tagsGetRaw<T>( requestConfig: runtime.TypedQueryConfig<T, TagsResponse> = {}): QueryConfig<T> {
    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/tags`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'GET',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(TagsResponseFromJSON(body), text);
    }

    return config;
}

/**
* Get tags. Auth not required
* Get tags
*/
export function tagsGet<T>( requestConfig?: runtime.TypedQueryConfig<T, TagsResponse>): QueryConfig<T> {
    return tagsGetRaw( requestConfig);
}
