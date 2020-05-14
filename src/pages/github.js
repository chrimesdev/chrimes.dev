import Head from 'next/head'
import Date from '../shared/date'
import Layout, { siteTitle } from '../shared/layout'
import utilStyles from '../styles/utils.module.scss'

export default function GitHub({ releases }) { 
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>NHS.UK frontend releases</h1>
        <ul>
        {releases.map(({ id, name, html_url, published_at, assets }) => (
          <li key={id}>
            <a href={html_url}>{name}</a> (<Date dateString={published_at} />) - {assets[0].download_count} downloads (<a href={assets[0].browser_download_url}>Download release</a>)
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
  const res = await fetch('https://api.github.com/repos/nhsuk/nhsuk-frontend/releases')
  const releases = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      releases,
    },
  }
}
