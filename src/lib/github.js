export default async (url) => {
  try {
    // Get an array of releases from GitHub API
    const githubRes = await fetch(`https://api.github.com/repos/${url}/releases`);
    const packageName = url.substring(url.lastIndexOf("/") + 1);
    const releases = await githubRes.json();
    // Build a new array of promises
    const promises = releases.map(async (release, index) => {
      // Get the next release 
      const nextRelease = releases[index-1];
      // Get when the next release was published - return todays date if the release is the current release
      const end = nextRelease ? nextRelease.published_at : new Date().toISOString();
      // Get data from NPM API based off release published date and the next release's published date 
      const npmRes = await fetch(`https://api.npmjs.org/downloads/point/${release.published_at.split('T')[0]}:${end.split('T')[0]}/${packageName}`);
      // Extract the downloads from NPM API response with an alias of npmDownloads
      const { downloads: npmDownloads } = await npmRes.json();
      // Return original release object with added npmDownloads
      return {
        ...release,
        npmDownloads,
      };
    });
    // Return promises array once all async processes are complete
    return await Promise.all(promises);
  } catch (error) {
    throw Error(error);
  }
};
