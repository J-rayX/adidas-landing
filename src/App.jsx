import { useState } from 'react'
// import './App.css'
import Hero from './sections/Hero'
import Collection from './sections/Collection'
import Impossibility from './sections/Impossibility'
import Nav from './components/Nav'
import NextLevel from './sections/NextLevel'
import TextHero from './sections/TextHero'
import Products from './sections/Products'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className='bg-gray-950 relative text-white'>
      <section className=''>
        <Nav />
      </section>
      <section className=''>
        <Hero />
      </section>

      <section>
        <Products />
      </section>

      <section className=''>
        <TextHero />
      </section>
      
      <section className=''>
        <NextLevel />
      </section>

      {/* <section className='padding'>
        <Collection />
        : Adidas
      </section> */}
      <section className='padding'>
        <Impossibility />
        -UA WelcomeToTheNextLevel
      </section>

      <section className='padding'>
        <Footer />
        Footer
      </section>
      

    </main>

  )
}

export default App
