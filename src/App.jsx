import './App.css'
import { useState, useEffect } from 'react';

import Quote from './comps/Quote'

function App() {

  const [buttonScale, setButtonScale] = useState(100);
  const [quoteText, setQuoteText] = useState("");
  const [nameText, setNameText] = useState("");
  const [buttonText, setButtonText] = useState("Submit");

  const [sendable, setSendable] = useState(false);
  
  // Will change text back from sent when using a new quote.
  useEffect(() => {
    if (quoteText.length > 0) {
      setButtonText("Submit");
      setSendable(true);
    } else {
      setSendable(false);
    }
  }, [quoteText])
  // Deal with submit button, not making another
  // component because im lazy

  const quoteSubmitHandler = () => {
    if (!sendable) return;
    console.log(quoteText);
    setQuoteText("");
    setNameText("");
    setButtonText("Sent");

    setButtonScale(buttonScale + 10);

    const to = setTimeout(() => {
        setButtonScale(buttonScale - 3);
    }, 100);
  }

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
         
            <div className="grow-2 rounded border border-3 border-gray-400 bg-white flex justify-center p-3">
              <input value={quoteText} onChange={(e) => {setQuoteText(e.target.value)}}className="w-0 bg-white text-black grow-1 outline-hidden text-2xl font-serif" placeholder="Your new quote..."/>
            </div>
            <div className="grow-1 rounded border border-3 border-gray-400 bg-white flex justify-center p-3">
              <input value={nameText} onChange={(e) => {setNameText(e.target.value)}}className="w-0 bg-white text-black grow-1 outline-hidden text-xl font-serif" placeholder="Author..."/>
            </div>
    
          <div onClick={quoteSubmitHandler} className={`aspect-3/2 border border-3 border-gray-400 ${sendable ? "bg-white" : "bg-gray-400"} rounded flex justify-center items-center transition`}
                style={{ transform: `scale(${buttonScale/100})` }}
                onMouseEnter={() => {setButtonScale(107)}}
                onMouseLeave={() => {setButtonScale(100)}}>
            <p className="font-serif text-black text-xl italic">
              {buttonText}
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
