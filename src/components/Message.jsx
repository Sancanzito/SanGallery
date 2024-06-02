import { useState, useEffect } from 'react';
const Message = () => {
    const msg=["Although the book has ended",
    "Our memories with you stays along despite the distance between",
    "For memories knows no distance",
    "But considers time and emotions",
    "Despite the harsh reality that all of us will part",
    "Destiny would still set a path ahead",
    "To find the roads crossed for us",
    "And cherish the bonds we built for so long",
    "The mystery that lies ahead of us is still unknown",
    "Despite the vast oceans unexplored...",
    "Where would we go to find the silver linen?",
    "How long would we explore to find the end of the rainbow?",
    "We prayed, and often make great sacrifices to turn dreams to reality",
    "And turn night into day",
    "Although the road that we would take is too short",
    "To explore the great cities and roads up ahead of us",
    "The journey we made together is still unforgettable",
    "The laughter we shared",
    "The pains and sorrows we encountered",
    "But alas the day has come to finally set part",
    "To define the meaning of our existence",
    "And heed the call of our destiny",
    "I just hope that you will remember me",
    "As we meet together soon in the future",
    "And write stories together like the golden days we shared long ago",
    "And hope that soon when we found the end of our journey",
    "And find the meaning of our lives",
    "All of us will soon meet again...",
    "I will miss you all!!"];
    const [currentMsgIndex, setCurrentMsgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMsgIndex(prevIndex => (prevIndex + 1) % msg.length);
        }, 5000); // Change message every 5 seconds

        return () => clearInterval(interval);
    }, [msg.length]);

    return ( 
        <div className="MsgContainer">
            <ul>
            <li key={msg[currentMsgIndex]} className="msgTxt" style={{ animation: 'fade 5s ease-out both' }}>
{msg[currentMsgIndex]}
</li>
            </ul>
        </div>
    );
}
export default Message;