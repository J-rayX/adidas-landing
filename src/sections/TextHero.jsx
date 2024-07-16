import React from 'react'
import Button from '../components/Button'

const TextHero = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-10 bg-[url('/src/assets/images/textHeroBg.png')] bg-no-repeat bg-cover py-60">
            <div className='flex flex-col w-[40%] justify-center items-center text-center'>
                <h1 className='mt-10 text-4xl uppercase font-bold max-sm:text-[42px] max-sm:leading-[42px] max-sm:text-center'>
                    Get on with Speed and Fit
                </h1>

                <p>Ready to do more in your game with energy, comfort, ease and power with the new release shoes. It is new dawn here.</p>
            </div>
           
            <Button label="Shop New Styles" />
        </div>
       
    </section>
  )
}

export default TextHero