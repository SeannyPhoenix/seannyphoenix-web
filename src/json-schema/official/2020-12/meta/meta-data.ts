// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/meta/meta-data
// $dynamicAnchor: meta
// title: Meta-data vocabulary meta-schema

export type MetaData =
  | boolean
  | {
      readonly title?: string;

      readonly description?: string;

      readonly default?: unknown;

      // default: false
      readonly deprecated?: boolean;

      // default: false
      readonly readOnly?: boolean;

      // default: false
      readonly writeOnly?: boolean;

      readonly examples?: unknown[];
    };
