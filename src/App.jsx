import { useState } from 'react'
import './App.css'
import Hero from './sections/Hero'
import Collection from './sections/Collection'
import Impossibility from './sections/Impossibility'
import Nav from './sections/Nav'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className='relative'>
      <nav>
        <Nav />
      </nav>
      <section className='padding'>
        <Hero />
        -ReebokVideo
      </section>
      <section className='padding'>
        <Collection />
        : Adidas
      </section>
      <section className='padding'>
        <Impossibility />
        -UA WelcomeToTheNextLevel
      </section>
      

      <section className='padding'>
        Quality
      </section>
      <section className='padding'>
        Quality
      </section>
    </main>

  )
}

export default App
