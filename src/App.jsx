import './App.css'
import { useState, useEffect } from 'react';

import Quote from './comps/Quote'

function App() {

  const [buttonScale, setButtonScale] = useState(100);
  const [quoteText, setQuoteText] = useState("");
  const [nameText, setNameText] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [sendable, setSendable] = useState(false);
  const [showQuoteMenu, setShowQuoteMenu] = useState(false);

  // Make our api request
  useEffect(() => {
    console.log(import.meta.env.PROD);
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND}/1`);
        if (!response.ok) {
          throw new Error("My API is garbage");
        }
        const json = await response.json();
        setQuotes(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchQuotes();
  }, []);
  
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

    let data = {
      id: 0,
      text: quoteText,
      author: nameText,
      likes: 0
    };

    fetch(`${import.meta.env.VITE_BACKEND}/add_quote`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error making post request');
        }

        return response.json();
      })
      .then((x) => {})
      .catch(error => {
        console.error("Error:", error);
      });

    setQuoteText("");
    setNameText("");
    setButtonText("Sent");

    setButtonScale(buttonScale + 10);

    setShowQuoteMenu(false);

    const to = setTimeout(() => {
        setButtonScale(buttonScale - 3);
    }, 100);
  }

  return (
    <>
      <div className="fixed inset-0 w-screen bg-gradient-to-r from-red-500 to-orange-400 p-3">
        
        {showQuoteMenu && (
          <>
            <div className="absolute w-full h-full flex justify-center items-center">
              <div className="rounded border border-3 p-3 bg-white text-black w-6/8 h-6/8 flex flex-col gap-3">

                <div className="rounded bg-red-500 hover:scale-102 transition"
                      onClick={() => {setShowQuoteMenu(false)}}>
                  <p className="text-black text-center font-serif italic">
                    Close
                  </p>
                </div>

                <div className="grow-2 rounded border border-3 border-gray-400 bg-white flex justify-center p-3">
                  <input value={quoteText} onChange={(e) => {setQuoteText(e.target.value)}}className="w-0 bg-white text-black grow-1 outline-hidden text-2xl font-serif" placeholder="Your new quote..."/>
                </div>
                <div className="grow-1 rounded border border-3 border-gray-400 bg-white flex justify-center p-3">
                  <input value={nameText} onChange={(e) => {setNameText(e.target.value)}}className="w-0 bg-white text-black grow-1 outline-hidden text-xl font-serif" placeholder="Author..."/>
                </div>
        
                <div onClick={quoteSubmitHandler} className={`border border-3 border-gray-400 ${sendable ? "bg-white" : "bg-gray-400"} rounded flex justify-center items-center transition`}
                    style={{ transform: `scale(${buttonScale/100})` }}
                    onMouseEnter={() => {setButtonScale(102)}}
                    onMouseLeave={() => {setButtonScale(100)}}>
                <p className="font-serif text-black text-xl italic">
                  {buttonText}
                </p>
                </div>
              </div>

            </div>
          </>
        )}

        <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-full overflow-scroll flex flex-wrap gap-3 rounded">
          <div className="text-center bg-gray-100 border border-gray-400 mb-3 p-3 rounded mt-3">
            <p className="text-transparent bg-clip-text font-bold text-3xl bg-gradient-to-r from-red-500 to-orange-400">
              bubbll
            </p>
          </div>

          <div className="text-center bg-gray-100 border border-gray-400 mb-3 p-3 rounded mt-3 hover:scale-107 transition"
                onClick={() => {setShowQuoteMenu(true)}}>
            <p className="text-transparent bg-clip-text font-bold text-3xl bg-gradient-to-r from-red-500 to-orange-400">
              +
            </p>
          </div>
          
          {quotes.map(quote => (
            <Quote id={quote.id} text={quote.text} name={quote.author} likes={quote.likes} />
          ))}

        </div>

      </div>
    </>
  )
}

export default App
