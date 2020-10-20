import Head from 'next/head';
import Layout, { siteTitle } from '../../shared/layout';
import releaseData from '../../lib/github';

export default function Releases({ repo, releases }) { 
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h2 className="title">NHS digital service manual telemetry</h2>
        <p className="subtitle">Coming soon</p>
      </section>
    </Layout>
  )
}
