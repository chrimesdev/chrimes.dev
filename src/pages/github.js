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
      <section className={utilStyles.headingMd}>
        <h1>NHS.UK frontend releases</h1>
        <ul>
        {releases.map(({ id, name, html_url, published_at }) => (
          <li key={id}>
            <a href={html_url}>{name}</a> released on <Date dateString={published_at} />
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
