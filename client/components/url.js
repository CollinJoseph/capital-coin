export const matchesPathname = (asPath, pathname) => {
  if (asPath === pathname) {
    return true;
  }

  // Remove any trailing slashes and query strings from both paths.
  const baseAsPath = removeTrailingSlash(asPath.split('?')[0]);
  const basePathname = removeTrailingSlash(pathname.split('?')[0]);

   // If the cleaned paths are identical, return true.
  if (baseAsPath === basePathname) {
    return true;
  }


  // Create a regex pattern for the `pathname`.
  // This considers dynamic route patterns (e.g., [id], [...slug]) and converts them to a matching pattern.
  const basePathRegex = new RegExp(
    `^${basePathname.replace(
      /(\[[a-zA-Z0-9-]+\])+/g,
      '[a-zA-Z0-9-]+',
    )}$`.replace(/\[\.\.\.[a-zA-Z0-9-]+\]/g, '.*'),
  );
  
   // If the regex pattern matches the `baseAsPath`, return true.
  if (basePathRegex.test(baseAsPath)) {
    return true;
  }
  return false;
};