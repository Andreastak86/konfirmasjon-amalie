import { useState, useEffect } from "react";

const phrases = [
    "Velkommen til Amalie sin konfirmasjon",
    "10 mai 2025",
    "Os Kyrkje kl 13:45",
    "Selskap kl 16:00",
];

export default function Typewriter() {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[index];
            let updatedText = isDeleting
                ? currentPhrase.substring(0, charIndex - 1)
                : currentPhrase.substring(0, charIndex + 1);

            setCurrentText(updatedText);
            setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

            if (!isDeleting && updatedText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 350);
            } else if (isDeleting && updatedText === "") {
                setIsDeleting(false);
                setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
        };

        const timeout = setTimeout(handleTyping, isDeleting ? 50 : 120);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index]);

    return (
        <p className='text-text-dark text-xl md:text-4xl font-mono text-center my-16 border-r-4 border-white pr-2 min-h-[40px]'>
            {currentText}
        </p>
    );
}
