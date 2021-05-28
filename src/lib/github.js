export default async (url) => {
  try {
    // Get an array of releases from GitHub API
    const githubRes = await fetch(`https://api.github.com/repos/${url}/releases`);
    const releases = await githubRes.json();
    // Build a new array of promises
    const promises = releases.map(async (release, index) => {
      // Return original release object
      return {
        ...release,
      };
    });
    // Return promises array once all async processes are complete
    return await Promise.all(promises);
  } catch (error) {
    throw Error(error);
  }
};
