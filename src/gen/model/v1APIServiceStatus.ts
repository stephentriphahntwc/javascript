/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1APIServiceCondition } from './v1APIServiceCondition';

/**
* APIServiceStatus contains derived information about an API server
*/
export class V1APIServiceStatus {
    /**
    * Current service state of apiService.
    */
    'conditions'?: Array<V1APIServiceCondition>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1APIServiceCondition>"
        }    ];

    static getAttributeTypeMap() {
        return V1APIServiceStatus.attributeTypeMap;
    }
}

