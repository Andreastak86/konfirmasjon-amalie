"use client";

import dynamic from "next/dynamic";
import RSVPForm from "../components/RSVPForm";
import Typewriter from "@/components/typeWriter";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const ChurchMap = dynamic(() => import("../components/ChurchMap"), {
    ssr: false,
});
const PartyMap = dynamic(() => import("../components/PartyMap"), {
    ssr: false,
});

export default function Home() {
    const churchLocation = [60.18704540777896, 5.469533970767009];
    const partyLocation = [60.38231730841425, 5.326818988738677];

    return (
        <>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-text-dark text-4xl lg:text-7xl font-bold text-center mt-6 font-playfair [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]'
            >
                Konfirmasjon
            </motion.h1>

            <div className='flex justify-center my-6 w-full'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className='relative w-64 h-64 sm:w-64 sm:h-64 overflow-hidden rounded-full shadow-2xl ring-4 ring-purple-300 ring-opacity-50'
                >
                    <Image
                        src='/amimg.jpeg'
                        alt='Konfirmantbilde'
                        fill
                        sizes='(max-width: 640px) 100vw, 256px'
                        style={{
                            objectFit: "cover",
                            filter: "drop-shadow(0 10px 8px rgb(107 33 168 / 0.1))",
                        }}
                        className='hover:scale-105 transition-transform duration-300 rounded-full'
                        priority
                    />
                </motion.div>
            </div>
            <div className='flex flex-col items-center text-gray-900 font-bold max-w-[90%] mx-auto'>
                <Typewriter />
            </div>

            {/* Seksjon for kartene */}
            <section className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 my-16'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='bg-white/30 backdrop-blur-md py-8 px-6 rounded-xl shadow-2xl transform hover:scale-[1.03] transition duration-300 ring-4 ring-purple-500 ring-opacity-50'
                >
                    <div className='text-center'>
                        <h2 className='flex flex-col items-center text-2xl font-bold text-gray-900'>
                            <MapPin
                                size={28}
                                className='text-purple-600 mb-2'
                            />
                            Informasjon om Gudstjenesten
                        </h2>
                        <p className='text-purple-700 mb-2'>
                            Os Kyrkje kl 13:45
                        </p>
                        <p className='text-purple-700 font-semibold mb-4'>
                            Vær ute i god tid, da det fylles fort opp!
                        </p>
                    </div>
                    <div className='w-full h-64 flex-grow rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
                        <ChurchMap location={churchLocation} mapId='church' />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='bg-white/30 backdrop-blur-md py-8 px-6 rounded-xl shadow-2xl transform hover:scale-[1.03] transition duration-300 ring-4 ring-purple-500 ring-opacity-50'
                >
                    <div className='text-center'>
                        <h2 className='flex flex-col items-center text-2xl font-bold text-gray-900'>
                            <Calendar
                                size={28}
                                className='text-purple-600 mb-2'
                            />
                            Informasjon om selskap
                        </h2>
                        <p className='text-purple-700 mb-2'>
                            Nansensenteret kl 16:00
                        </p>
                        <p className='text-purple-700 mb-2'>
                            Lokalet ligger like ved VilVite og Nygårdsparken.
                            Det er parkeringsplasser rett utenfor, men også i
                            parkeringshuset ved VilVite.
                        </p>
                    </div>
                    <div className='w-full h-64 flex-grow rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'>
                        <PartyMap location={partyLocation} mapId='party' />
                    </div>
                </motion.div>
            </section>

            {/* Seksjon for RSVP-formen */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mt-12'
            >
                <h2 className='text-xl text-center font-bold text-purple-800 py-4 px-1'>
                    Vennligst legg inn navn og antall personer som kommer, og
                    eventuelle allergier.
                </h2>
                <div className='flex justify-center my-6'>
                    <div className='w-full max-w-3xl'>
                        <RSVPForm />
                    </div>
                </div>
            </motion.section>
        </>
    );
}
