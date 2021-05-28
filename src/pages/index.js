import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../shared/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section>
        <div className="columns">
          <div className="column is-one-half">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <h2>NHS.UK frontend</h2>
                    <p>Code you need to start building user interfaces for NHS websites and services.</p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a href="https://github.com/nhsuk/nhsuk-frontend" className="level-item">
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
          <div className="column is-one-half">
            <div className="box">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <h2>NHS digital service manual</h2>
                    <p>Build consistent, accessible user interfaces. Learn from the research and experience of other NHS digital teams.</p>
                  </div>
                  <nav className="level is-mobile">
                    <div className="level-left">
                      <a href="https://github.com/nhsuk/nhsuk-service-manual" className="level-item">
                        GitHub repository
                      </a>
                      <Link href="/stats" as={`/releases/service-manual`}>
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
