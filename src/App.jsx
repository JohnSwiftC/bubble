import './App.css'

import Quote from './comps/Quote'

function App() {

  return (
    <>
      <div className="fixed inset-0 w-screen bg-gradient-to-r from-red-500 to-orange-400 p-3">
        
        <div className="h-7/8 overflow-scroll flex flex-wrap gap-3 rounded">
          <div className="text-center bg-gray-100 border border-gray-400 mb-3 p-3 rounded mt-3">
            <p className="text-transparent bg-clip-text font-bold text-3xl bg-gradient-to-r from-red-500 to-orange-400">
              bubble
            </p>
          </div>
          <Quote text="I don't like people from Bushwick" name="John" likes={12000}/>
          <Quote text="I love Gus" name="John" likes={0}/>
          <Quote text="I love Gus"/>
          <Quote text="I love Gus"/>
          <Quote text="I love Gus"/>
          <Quote text="I don't like people from Bushwick" name="John" likes={12000}/>
          <Quote text="I don't like people from Bushwick" name="John" likes={12000}/>
          <Quote text="I don't like people from Bushwick" name="John" likes={12000}/>
          <Quote text="I don't like people from Bushwick" name="John" likes={12000}/>
          <Quote text="I don't like people from Bushwick" name="John" likes={12000}/>
          <Quote text="I don't like people from Bushwick" name="John" likes={12000}/>

        </div>

        <div className="rounded h-2/18 mt-3 flex flex-row gap-3">
          <div className="grow-1 rounded border border-3 border-gray-400 bg-white flex justify-center p-3">
            <input className="bg-white text-black grow-1 outline-hidden text-2xl font-serif" placeholder="Your new quote..."/>
          </div>
          <div className="aspect-3/2 bg-white border border-3 border-gray-400 rounded flex justify-center items-center">
            <p className="font-serif text-black text-xl italic">
              Submit
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
