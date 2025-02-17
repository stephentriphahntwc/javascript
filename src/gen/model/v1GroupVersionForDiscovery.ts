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


/**
* GroupVersion contains the \"group/version\" and \"version\" string of a version. It is made a struct to keep extensibility.
*/
export class V1GroupVersionForDiscovery {
    /**
    * groupVersion specifies the API group and version in the form \"group/version\"
    */
    'groupVersion': string;
    /**
    * version specifies the version in the form of \"version\". This is to save the clients the trouble of splitting the GroupVersion.
    */
    'version': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "groupVersion",
            "baseName": "groupVersion",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1GroupVersionForDiscovery.attributeTypeMap;
    }
}

