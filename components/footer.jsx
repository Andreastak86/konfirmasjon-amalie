"use client";
import { useEffect, useState } from "react";

const Footer = () => {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const targetDate = new Date("2025-05-10T13:45:00");
            const now = new Date();
            const timeDiff = targetDate - now;

            if (timeDiff <= 0) {
                clearInterval(interval);
                setTimeLeft("The event has arrived!");
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
                );
                setTimeLeft(
                    `${days} dager, ${hours} timer, og ${minutes} minutter`
                );
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className='bg-purple-700 text-white text-center py-4'>
            <p>Laget med 🥰 av pappa</p>
            <p>&copy; {new Date().getFullYear()}</p>
            <p>Nå er det: {timeLeft} til konfirmasjon</p>
        </footer>
    );
};

export default Footer;
