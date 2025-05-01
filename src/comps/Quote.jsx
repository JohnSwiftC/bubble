import { useState } from 'react'

const Quote = ({ name = "Anonymous", likes=0, text}) => {
    const [liked, setLiked] = useState(false);
    const [scale, setScale] = useState(100);

    const onClick = () => {
        if (liked) setLiked(false);
        if (!liked) setLiked(true);

        const timeout = setTimeout(() => {

        });
    }
    
    return (
        <>
            <div className={`bg-white p-3 rounded-md grow-1 text-center drop-shadow-sm border border-3 border-solid ${liked ? "border-purple-400" : "border-gray-400"} hover:scale-${scale} hover:z-100 transition`} 
                onClick={onClick}
                onMouseEnter={() => setScale(107)} // I manually handle hovering here so I can have full control over the scale for other animations
                onMouseLeave={() => setScale(100)}>
                <span className="text-4xl text-black font-serif italic">"</span>
                <span className="text-3xl text-black font-serif italic">{text}</span>
                <span className="text-4xl text-black font-serif italic">"</span>
                <div className="flex flex-row justify-between">
                    <p className="text-black italic text-sm">
                        -{name}
                    </p>
                    <p className="text-black italic text-sm">
                        {likes} likes
                    </p>
                </div>
            </div>
        </>
    )
}

export default Quote;