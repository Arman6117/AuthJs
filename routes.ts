/**
 * These are the routes which are accessible to the unauthorized users
 * These routes do not require authentication
 *  @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * These are the routes which are accessible only to the authenticated users
 * These routes require authentication
 *  @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password"
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logged in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
