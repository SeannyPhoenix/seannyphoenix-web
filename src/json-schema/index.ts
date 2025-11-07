/**
 * JSON Schema Tool
 *
 * A comprehensive JSON Schema validation and document building tool.
 *
 * @example
 * ```typescript
 * import { validateSchema, SchemaBuilder, JSONSchema } from "json-schema";
 *
 * const schema: JSONSchema = { type: "string" };
 * const result = validateSchema("hello", schema);
 *
 * const builder = new SchemaBuilder(schema);
 * const form = builder.generateForm();
 * ```
 */

// Re-export all modules
export * from "./validator";
export * from "./builder";
export * from "./schema";
export * from "./utils";

// Convenience re-exports of commonly used items
export type {
  ValidationResult,
  ValidationError,
  ValidatorOptions,
} from "./validator";

export type { BuilderOptions, FormField } from "./builder";

export type {
  JSONSchema,
  JSONSchemaType,
  SchemaReference,
  JSONSchemaDefinition,
  SchemaContext,
} from "./schema";

export { validateSchema } from "./validator";

export { SchemaBuilder, buildSchema } from "./builder";

export { isValidSchema, resolveSchemaReference } from "./schema";

export {
  createJsonPointer,
  parseJsonPointer,
  getValueAtPath,
  setValueAtPath,
  isObject,
  isArray,
  isPrimitive,
} from "./utils";
