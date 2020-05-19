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
        <h1><a href={repo.html_url}>{repo.name}</a> releases</h1>
        <ul>
        {releases.map(({ id, name, html_url, published_at, assets, npmDownloads }) => (
          <li key={id}>
            <a href={html_url}>{name}</a> (<Date dateString={published_at} />) - {assets[0].download_count} downloads on GitHub and <Number numberString={npmDownloads} /> npm installs
          </li>
        ))}
        </ul>
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
