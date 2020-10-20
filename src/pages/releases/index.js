import Head from 'next/head';
import Date from '../../shared/date';
import Number from '../../shared/number';
import Layout, { siteTitle } from '../../shared/layout';
import releaseData from '../../lib/github';

export default function Releases({ repo, releases }) { 
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 className="title">{repo.name} telemetry</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Version</th>
              <th scope="col">Release date</th>
              <th scope="col">GitHub downloads</th>
              <th scope="col">npm installs</th>
            </tr>
          </thead>
          <tbody>
            {releases.map(({ id, name, html_url, published_at, assets, npmDownloads }) => (
            <tr key={id} class="table-content">
              <th scope="row"><a href={html_url}>{name}</a></th>
              <td><Date dateString={published_at} /></td>
              <td>{assets[0].download_count}</td>
              <td><Number numberString={npmDownloads} /></td>
            </tr>
            ))}
          </tbody>
          <caption>{repo.name} release data for GitHub and npm</caption>
        </table>
      </section>
    </Layout>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  try {
    // Change repo
    // Format: org/repo-name
    const repoURL = 'nhsuk/nhsuk-frontend';

    // Fetch data from the GitHub API for repo
    const res = await fetch(`https://api.github.com/repos/${repoURL}`);
    const repo = await res.json();
    // Get release data for repo `lib/github.js`
    const releases = await releaseData(repoURL);

    return {
      props: {
        repo,
        releases,
      },
    }
  } catch (error) {
    throw Error(error);
  }
}
