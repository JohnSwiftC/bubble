import { useState } from 'react'

const Quote = (props) => {
    const [liked, setLiked] = useState(false);

    const onClick = () => {
        if (liked) setLiked(false);
        if (!liked) setLiked(true);
    }
    
    return (
        <>
            <div className={`bg-white p-3 rounded-md grow-1 text-center drop-shadow-sm border border-3 border-solid ${liked ? "border-purple-400" : "border-gray-400"} hover:scale-107 transition`} onClick={onClick}>
                <span className="text-4xl text-black font-serif italic">"</span>
                <span className="text-3xl text-black font-serif italic">{props.text}</span>
                <span className="text-4xl text-black font-serif italic">"</span>
                <div className="flex flex-row justify-between">
                    <p className="text-black italic text-sm">
                        -{props.name}
                    </p>
                    <p className="text-black italic text-sm">
                        {props.likes} likes
                    </p>
                </div>
            </div>
        </>
    )
}

export default Quote;