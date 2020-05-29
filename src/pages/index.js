import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../shared/layout'
import Date from '../shared/date'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.scss'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Senior Developer at NHS Digital, working on the <a href="https://www.nhs.uk">NHS website</a> and <a href="https://service-manual.nhs.uk">NHS digital service manual</a>.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Pages</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href="/releases" as={`/releases`}>
              <a>NHS.UK frontend releases</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
