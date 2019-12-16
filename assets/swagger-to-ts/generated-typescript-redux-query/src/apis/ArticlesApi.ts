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
    MultipleArticlesResponse,
    MultipleArticlesResponseFromJSON,
    MultipleArticlesResponseToJSON,
    NewArticleRequest,
    NewArticleRequestFromJSON,
    NewArticleRequestToJSON,
    SingleArticleResponse,
    SingleArticleResponseFromJSON,
    SingleArticleResponseToJSON,
    UpdateArticleRequest,
    UpdateArticleRequestFromJSON,
    UpdateArticleRequestToJSON,
} from '../models';

export interface CreateArticleRequest {
    article: NewArticleRequest;
}

export interface DeleteArticleRequest {
    slug: string;
}

export interface GetArticleRequest {
    slug: string;
}

export interface GetArticlesRequest {
    tag?: string;
    author?: string;
    favorited?: string;
    limit?: number;
    offset?: number;
}

export interface GetArticlesFeedRequest {
    limit?: number;
    offset?: number;
}

export interface UpdateArticleRequest {
    slug: string;
    article: UpdateArticleRequest;
}


/**
 * Create an article. Auth is required
 * Create an article
 */
function createArticleRaw<T>(requestParameters: CreateArticleRequest, requestConfig: runtime.TypedQueryConfig<T, SingleArticleResponse> = {}): QueryConfig<T> {
    if (requestParameters.article === null || requestParameters.article === undefined) {
        throw new runtime.RequiredError('article','Required parameter requestParameters.article was null or undefined when calling createArticle.');
    }

    let queryParameters = null;


    const headerParameters = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `/articles`,
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'POST',
            headers: headerParameters,
        },
        body: queryParameters || NewArticleRequestToJSON(requestParameters.article),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SingleArticleResponseFromJSON(body), text);
    }

    return config;
}

/**
* Create an article. Auth is required
* Create an article
*/
export function createArticle<T>(requestParameters: CreateArticleRequest, requestConfig?: runtime.TypedQueryConfig<T, SingleArticleResponse>): QueryConfig<T> {
    return createArticleRaw(requestParameters, requestConfig);
}

/**
 * Delete an article. Auth is required
 * Delete an article
 */
function deleteArticleRaw<T>(requestParameters: DeleteArticleRequest, requestConfig: runtime.TypedQueryConfig<T, void> = {}): QueryConfig<T> {
    if (requestParameters.slug === null || requestParameters.slug === undefined) {
        throw new runtime.RequiredError('slug','Required parameter requestParameters.slug was null or undefined when calling deleteArticle.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `/articles/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters.slug))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'DELETE',
            headers: headerParameters,
        },
        body: queryParameters,
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
    }

    return config;
}

/**
* Delete an article. Auth is required
* Delete an article
*/
export function deleteArticle<T>(requestParameters: DeleteArticleRequest, requestConfig?: runtime.TypedQueryConfig<T, void>): QueryConfig<T> {
    return deleteArticleRaw(requestParameters, requestConfig);
}

/**
 * Get an article. Auth not required
 * Get an article
 */
function getArticleRaw<T>(requestParameters: GetArticleRequest, requestConfig: runtime.TypedQueryConfig<T, SingleArticleResponse> = {}): QueryConfig<T> {
    if (requestParameters.slug === null || requestParameters.slug === undefined) {
        throw new runtime.RequiredError('slug','Required parameter requestParameters.slug was null or undefined when calling getArticle.');
    }

    let queryParameters = null;


    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/articles/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters.slug))),
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SingleArticleResponseFromJSON(body), text);
    }

    return config;
}

/**
* Get an article. Auth not required
* Get an article
*/
export function getArticle<T>(requestParameters: GetArticleRequest, requestConfig?: runtime.TypedQueryConfig<T, SingleArticleResponse>): QueryConfig<T> {
    return getArticleRaw(requestParameters, requestConfig);
}

/**
 * Get most recent articles globally. Use query parameters to filter results. Auth is optional
 * Get recent articles globally
 */
function getArticlesRaw<T>(requestParameters: GetArticlesRequest, requestConfig: runtime.TypedQueryConfig<T, MultipleArticlesResponse> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.tag !== undefined) {
        queryParameters['tag'] = requestParameters.tag;
    }


    if (requestParameters.author !== undefined) {
        queryParameters['author'] = requestParameters.author;
    }


    if (requestParameters.favorited !== undefined) {
        queryParameters['favorited'] = requestParameters.favorited;
    }


    if (requestParameters.limit !== undefined) {
        queryParameters['limit'] = requestParameters.limit;
    }


    if (requestParameters.offset !== undefined) {
        queryParameters['offset'] = requestParameters.offset;
    }

    const headerParameters = {};


    const { meta = {} } = requestConfig;

    const config: QueryConfig<T> = {
        url: `/articles`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(MultipleArticlesResponseFromJSON(body), text);
    }

    return config;
}

/**
* Get most recent articles globally. Use query parameters to filter results. Auth is optional
* Get recent articles globally
*/
export function getArticles<T>(requestParameters: GetArticlesRequest, requestConfig?: runtime.TypedQueryConfig<T, MultipleArticlesResponse>): QueryConfig<T> {
    return getArticlesRaw(requestParameters, requestConfig);
}

/**
 * Get most recent articles from users you follow. Use query parameters to limit. Auth is required
 * Get recent articles from users you follow
 */
function getArticlesFeedRaw<T>(requestParameters: GetArticlesFeedRequest, requestConfig: runtime.TypedQueryConfig<T, MultipleArticlesResponse> = {}): QueryConfig<T> {
    let queryParameters = null;

    queryParameters = {};


    if (requestParameters.limit !== undefined) {
        queryParameters['limit'] = requestParameters.limit;
    }


    if (requestParameters.offset !== undefined) {
        queryParameters['offset'] = requestParameters.offset;
    }

    const headerParameters = {};


    const { meta = {} } = requestConfig;

    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `/articles/feed`,
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
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(MultipleArticlesResponseFromJSON(body), text);
    }

    return config;
}

/**
* Get most recent articles from users you follow. Use query parameters to limit. Auth is required
* Get recent articles from users you follow
*/
export function getArticlesFeed<T>(requestParameters: GetArticlesFeedRequest, requestConfig?: runtime.TypedQueryConfig<T, MultipleArticlesResponse>): QueryConfig<T> {
    return getArticlesFeedRaw(requestParameters, requestConfig);
}

/**
 * Update an article. Auth is required
 * Update an article
 */
function updateArticleRaw<T>(requestParameters: UpdateArticleRequest, requestConfig: runtime.TypedQueryConfig<T, SingleArticleResponse> = {}): QueryConfig<T> {
    if (requestParameters.slug === null || requestParameters.slug === undefined) {
        throw new runtime.RequiredError('slug','Required parameter requestParameters.slug was null or undefined when calling updateArticle.');
    }

    if (requestParameters.article === null || requestParameters.article === undefined) {
        throw new runtime.RequiredError('article','Required parameter requestParameters.article was null or undefined when calling updateArticle.');
    }

    let queryParameters = null;


    const headerParameters = {};

    headerParameters['Content-Type'] = 'application/json';


    const { meta = {} } = requestConfig;

    meta.authType = ['api_key', 'header'];
    const config: QueryConfig<T> = {
        url: `/articles/{slug}`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters.slug))),
        meta,
        update: requestConfig.update,
        queryKey: requestConfig.queryKey,
        optimisticUpdate: requestConfig.optimisticUpdate,
        force: requestConfig.force,
        rollback: requestConfig.rollback,
        options: {
            method: 'PUT',
            headers: headerParameters,
        },
        body: queryParameters || UpdateArticleRequestToJSON(requestParameters.article),
    };

    const { transform: requestTransform } = requestConfig;
    if (requestTransform) {
        config.transform = (body: ResponseBody, text: ResponseBody) => requestTransform(SingleArticleResponseFromJSON(body), text);
    }

    return config;
}

/**
* Update an article. Auth is required
* Update an article
*/
export function updateArticle<T>(requestParameters: UpdateArticleRequest, requestConfig?: runtime.TypedQueryConfig<T, SingleArticleResponse>): QueryConfig<T> {
    return updateArticleRaw(requestParameters, requestConfig);
}

