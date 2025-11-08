// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/meta/validation
// $dynamicAnchor: meta
// title: Validation vocabulary meta-schema

export type Validation =
  | {
      readonly type?:
        | SimpleTypes
        // minItems: 1
        // uniqueItems: true
        | SimpleTypes[];

      readonly const?: unknown;

      readonly enum?: unknown[];

      // exclusiveMinimum: 0
      readonly multipleOf?: number;

      readonly maximum?: number;

      readonly exclusiveMaximum?: number;

      readonly minimum?: number;

      readonly exclusiveMinimum?: number;

      readonly maxLength?: NonNegativeInteger;

      readonly minLength?: NonNegativeIntegerDefault0;

      // format: regex
      readonly pattern?: string;

      readonly maxItems?: NonNegativeInteger;

      readonly minItems?: NonNegativeIntegerDefault0;

      // default: false
      readonly uniqueItems?: boolean;

      readonly maxContains?: NonNegativeInteger;

      // default: 1
      readonly minContains?: NonNegativeInteger;

      readonly maxProperties?: NonNegativeInteger;

      readonly minProperties?: NonNegativeIntegerDefault0;

      readonly required?: StringArray;

      readonly dependentRequired?: Record<string, StringArray>;
    }
  | boolean;

// minimum: 0
type NonNegativeInteger = number;

// default: 0
type NonNegativeIntegerDefault0 = number;

type SimpleTypes =
  | "array"
  | "boolean"
  | "integer"
  | "null"
  | "number"
  | "object"
  | "string";

// uniqueItems: true
// default: []
export type StringArray = string[];
