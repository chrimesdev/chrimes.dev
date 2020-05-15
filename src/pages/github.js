import Head from 'next/head';
import Date from '../shared/date';
import Layout, { siteTitle } from '../shared/layout';
import downloadsData from '../lib/npm';

export default function GitHub({ releases }) { 
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>NHS.UK frontend releases</h1>
        <ul>
        {releases.map(({ id, name, html_url, published_at, assets, npmDownloads }) => (
          <li key={id}>
            <a href={html_url}>{name}</a> (<Date dateString={published_at} />) - {assets[0].download_count} downloads on GitHub and {npmDownloads} npm installs
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
    const releases = await downloadsData();
    return {
      props: {
        releases,
      },
    }
  } catch (error) {
    throw Error(error);
  }
}
