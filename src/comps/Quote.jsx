import { useState, useEffect } from 'react'



const Quote = ({ id, name = "Anonymous", likes=0, text}) => {
    const [likeCount, setLikeCount] = useState(likes);
    const [liked, setLiked] = useState(false);
    const [scale, setScale] = useState(100);



    const onClick = () => {
        if (!liked) {
            setLiked(true);
            setLikeCount(likeCount + 1);

            setScale(scale + 10);

            fetch('http://localhost:8000/add_like', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(id),
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

            const to = setTimeout(() => {
                setScale(scale - 3);
            }, 100);

            // You know the drill :)
        }

    }
    
    return (
        <>
            <div className={`bg-white p-3 rounded-md grow-1 text-center drop-shadow-sm border border-3 border-solid ${liked ? "border-purple-500" : "border-gray-400"} hover:z-50 transition flex flex-col justify-center`} 
                style={{ transform: `scale(1, ${scale/100})` }}
                onClick={onClick}
                onMouseEnter={() => setScale(107)} // I manually handle hovering here so I can have full control over the scale for other animations
                onMouseLeave={() => setScale(100)}>
                <div>
                    <span className="text-4xl text-black font-serif italic">"</span>
                    <span className="text-3xl text-black font-serif italic">{text}</span>
                    <span className="text-4xl text-black font-serif italic">"</span>
                </div>
                <div className="flex flex-row justify-between">
                    <p className="text-black italic text-sm">
                        -{name}
                    </p>
                    <p className="text-black italic text-sm">
                        {likeCount} likes
                    </p>
                </div>
            </div>
        </>
    )
}

export default Quote;