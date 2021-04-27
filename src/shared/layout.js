import Head from 'next/head'

const name = 'Chrimes'
export const siteTitle = 'Chrimes'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Chrimes.dev website" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar has-background-black is-size-2" role="navigation" aria-label="main navigation">
        <div class="container">
          <div className="navbar-brand">
            <a className="navbar-item has-text-white" href="/">
              Chrimes.
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </nav>

      <div className="container">
        <main className="wrapper">
        
          {children}

        </main>
      </div>
    </div>
  )
}
