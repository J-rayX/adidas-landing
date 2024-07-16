import { useState } from 'react'
// import './App.css'
import Hero from './sections/Hero'
import Collection from './sections/Collection'
import Impossibility from './sections/Impossibility'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className='bg-gray-950 relative text-white'>
      <section className=''>
        <Nav />
      </section>
      <section className=''>
        <Hero />
        -ReebokVideo
      </section>
      {/* <section className=' xl:padding-l wide:padding-r padding-b'>
        <Hero />
        -Former Hero
      </section> */}
      <section className='padding'>
        <Collection />
        : Adidas
      </section>
      <section className='padding'>
        <Impossibility />
        -UA WelcomeToTheNextLevel
      </section>
      

    </main>

  )
}

export default App
