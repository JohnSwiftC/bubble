const Quote = (props) => {
    
    return (
        <>
            <div className="bg-white p-3 rounded grow-1 text-center drop-shadow-sm border border-solid border-gray-400 hover:scale-107 transition">
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