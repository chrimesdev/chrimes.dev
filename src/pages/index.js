import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../shared/layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div class="columns">
          <div class="column is-one-half">
            <div class="box">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <h2>NHS.UK frontend</h2>
                    <p>Code you need to start building user interfaces for NHS websites and services.</p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a href="https://github.com/nhsuk/nhsuk-frontend" class="level-item">
                        GitHub repository
                      </a>
                      <Link href="/releases" as={`/releases`}>
                        <a className="level-item">
                          Telemetry
                        </a>
                      </Link>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
          <div class="column is-one-half">
            <div class="box">
              <article class="media">
                <div class="media-content">
                  <div class="content">
                    <h2>NHS digital service manual</h2>
                    <p>Build consistent, accessible user interfaces. Learn from the research and experience of other NHS digital teams.</p>
                  </div>
                  <nav class="level is-mobile">
                    <div class="level-left">
                      <a href="https://github.com/nhsuk/nhsuk-service-manual" class="level-item">
                        GitHub repository
                      </a>
                      <Link href="/stats" as={`/stats`}>
                        <a className="level-item">
                          Telemetry
                        </a>
                      </Link>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
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
