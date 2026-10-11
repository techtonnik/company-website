// The site may be served under a sub-path (see integrations/base-path.mjs).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Current page path without the deploy base and trailing slash, e.g. "/partners". */
export const pagePath = (pathname: string) => pathname.replace(base, '').replace(/\/$/, '') || '/';

/** Prefix a root-relative path with the deploy base. */
export const withBase = (path: string) => (path.startsWith('/') ? base + path : path);
