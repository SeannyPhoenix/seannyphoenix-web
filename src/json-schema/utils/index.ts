/**
 * JSON Schema Utilities Module
 *
 * This module provides utility functions and helpers for
 * working with JSON Schema validation and building.
 */

// Utility functions for path handling
export function createJsonPointer(path: string[]): string {
  return path.length === 0 ? "" : "/" + path.map(escapeJsonPointer).join("/");
}

export function parseJsonPointer(pointer: string): string[] {
  if (pointer === "") return [];
  if (!pointer.startsWith("/")) {
    throw new Error("Invalid JSON Pointer: must start with /");
  }
  return pointer.slice(1).split("/").map(unescapeJsonPointer);
}

function escapeJsonPointer(token: string): string {
  return token.replace(/~/g, "~0").replace(/\//g, "~1");
}

function unescapeJsonPointer(token: string): string {
  return token.replace(/~1/g, "/").replace(/~0/g, "~");
}

// Utility functions for deep object operations
export function getValueAtPath(obj: unknown, path: string[]): unknown {
  let current = obj;
  for (const key of path) {
    if (current == null || typeof current !== "object") {
      return undefined;
    }
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function setValueAtPath(
  obj: Record<string, unknown>,
  path: string[],
  value: unknown
): void {
  if (path.length === 0) return;

  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    if (
      !(key in current) ||
      typeof current[key] !== "object" ||
      current[key] === null
    ) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  current[path[path.length - 1]] = value;
}

// Type guard utilities
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isPrimitive(
  value: unknown
): value is string | number | boolean | null {
  return (
    value === null || ["string", "number", "boolean"].includes(typeof value)
  );
}

// Re-export from other utility modules when they exist
// export { ... } from "./pathUtils";
// export { ... } from "./typeGuards";
