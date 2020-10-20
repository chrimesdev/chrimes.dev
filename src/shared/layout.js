import Head from 'next/head'
import Link from 'next/link'

const name = 'Adam Chrimes'
export const siteTitle = 'Adam Chrimes'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Adam Chrimes website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-three-fifths">
                <h1 class="title is-size-2">
                  Adam Chrimes
                </h1>
                <p class="subtitle is-size-4">
                Senior Developer at NHS Digital, working on the <a href="https://www.nhs.uk">NHS website</a> and <a href="https://service-manual.nhs.uk">NHS digital service manual</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <main className="wrapper">
        
          {children}

          {!home && (
            <div className="mt-4">
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
