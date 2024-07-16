import { useState } from 'react'
// import './App.css'
import Hero from './sections/Hero'
import Collection from './sections/Collection'
import Impossibility from './sections/Impossibility'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)
  return (
    <main className='bg-gray-900 relative text-white'>
      <section className=''>
        <Nav />
      </section>
      <section className=' xl:padding-l wide:padding-r padding-b'>
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
      

    </main>

  )
}

export default App
