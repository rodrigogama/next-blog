import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pokemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Hello!</p>
      </main>
    </div>
  )
}
