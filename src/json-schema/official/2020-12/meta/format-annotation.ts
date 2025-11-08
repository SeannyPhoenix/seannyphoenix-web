// $schema: https://json-schema.org/draft/2020-12/schema
// $id: https://json-schema.org/draft/2020-12/meta/format-annotation
// $dynamicAnchor: meta
// title: Format vocabulary meta-schema for annotation results

export type FormatAnnotation =
  | boolean
  | {
      readonly format?: string;
    };
