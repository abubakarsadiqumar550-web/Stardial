import { MemoryStore } from "express-rate-limit";

/**
 * Creates an isolated in-memory store for rate limiter tests.
 * Each call returns a fresh store so that counters do not leak between tests.
 */
export function createTestRateLimiterStore(): MemoryStore {
  return new MemoryStore();
}
