"use client";
import { useEffect, useState } from "react";

const Footer = () => {
    const [timeSince, setTimeSince] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const eventDate = new Date("2025-05-10T13:45:00");
            const now = new Date();
            const timeDiff = now - eventDate;

            if (timeDiff <= 0) {
                setTimeSince("Konfirmasjonen er akkurat nå!");
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
                );
                setTimeSince(
                    `${days} dager, ${hours} timer og ${minutes} minutter siden konfirmasjonen`
                );
            }
        }, 60000); // Oppdater hvert minutt – ikke hvert sekund, siden det er ettertid

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className='bg-purple-700 text-white text-center py-4'>
            <p>Laget med 🩷 av pappa</p>
            <p>&copy; {new Date().getFullYear()}</p>
            <p>{timeSince}</p>
        </footer>
    );
};

export default Footer;
