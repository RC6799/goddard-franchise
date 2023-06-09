/**
 * Goddard.FMS.SchoolEvents
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Events { 
    id?: number;
    fmsSchoolId?: number;
    title?: string | null;
    startDateTime?: string | null;
    endDateTime?: string | null;
    isAllDay?: boolean;
    isShownOnPublicWebsite?: boolean;
    isHighlighted?: boolean;
    iconFileName?: string | null;
    description?: string | null;
    publicWebSiteDescription?: string | null;
    recurringParameterPrimary?: string | null;
    recurringParameterSecondary?: string | null;
    recurringParameterFirst?: string | null;
    recurringParameterSecond?: string | null;
    recurringParameterThird?: string | null;
    recurringParameterFourth?: string | null;
    recurringParameterRangeStart?: string | null;
    recurringParameterRangeType?: string | null;
    recurringParameterRangeQualifier?: string | null;
    seriesID?: string | null;
    eventType?: number;
}

