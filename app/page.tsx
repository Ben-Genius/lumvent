// import Head from 'next/head';
import Image from 'next/image';

export default function page() {
  return (
    <div>
      {/* <Head>
        <title>Your Site Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      {/* Header */}
      <header className="bg-gray-200 p-4">
        <nav className="container mx-auto">
          {/* Navigation content */}
        </nav>
      </header>

      {/* Hero Section with Unsplash Background */}
      <section className="bg-cover bg-center " style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}>
        <div className="container mx-auto text-center py-20 ">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Welcome Son of Odin</h1>
          {/* Additional hero content */}
        </div>
      </section>

      {/* Card Section */}
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Repeat for each card */}
          <div className="bg-white rounded shadow p-4">
            <Image src="/images/apple.svg" alt="Card Image" width={500} height={300} />
            <h2 className="text-xl font-bold mt-2">Magnus</h2>
            <p>Just pay me my 200ghc</p>
          </div>
          {/* ... */}
        </div>
      </section>

      {/* Another Section with Unsplash Background */}
      <section className="bg-cover bg-center py-20" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080?nature')" }}>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl text-white font-bold">Don't be a pussy. Pay me my 200ghc</h2>
          {/* Additional content */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-300 p-4">
        <div className="container mx-auto text-center">
          <p>© Your Company 2023</p>
        </div>
      </footer>
    </div>
  )
}
