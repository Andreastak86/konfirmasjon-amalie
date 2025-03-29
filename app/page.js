"use client";

import dynamic from "next/dynamic";
import RSVPForm from "../components/RSVPForm";
import Typewriter from "@/components/typeWriter";
import Image from "next/image";

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
            <h1 className='text-text-dark text-3xl lg:text-7xl font-bold text-center mt-6 '>
                Konfirmasjon{" "}
            </h1>

            <div className='flex justify-center my-6 w-full'>
                <div className='relative w-64 h-64 overflow-hidden rounded-full shadow-2xl ring-4 ring-purple-300 ring-opacity-50'>
                    <Image
                        src='/amalie.jpg'
                        alt='Konfirmantbilde'
                        fill
                        sizes='(max-width: 768px) 100vw, 300px'
                        style={{
                            objectFit: "cover",
                            filter: "drop-shadow(0 10px 8px rgb(107 33 168 / 0.1))",
                        }}
                        className='hover:scale-105 transition-transform duration-300'
                        priority
                    />
                </div>
            </div>
            <div className='flex flex-col items-center text-text-dark font-bold'>
                <Typewriter />
            </div>

            {/* Sekjon for kartene */}
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 my-12'>
                <div className='bg-purple py-6 px-4 rounded-lg shadow-md flex flex-col'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-purple-800 mb-4'>
                            Informasjon om Gudstjenesten
                        </h2>
                        <p className='text-purple-700 mb-2'>
                            Os Kyrkje kl 13:45
                        </p>
                        <p className='text-purple-700 font-semibold mb-4'>
                            Vær ute i god tid, da det fylles fort opp!
                        </p>
                    </div>
                    <div className='w-full h-64 flex-grow'>
                        <ChurchMap location={churchLocation} mapId='church' />
                    </div>
                </div>

                <div className='bg-purple py-6 px-4 rounded-lg shadow-md flex flex-col'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-purple-800 mb-4'>
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
                    <div className='w-full h-64 flex-grow'>
                        <PartyMap location={partyLocation} mapId='party' />
                    </div>
                </div>
            </section>

            {/* Sekjon for RSVP-formen */}
            <section className='mt-12'>
                <h2 className='text-xl text-center font-bold text-purple-800 py-4 px-1'>
                    Vennligst legg inn navn og antall personer som kommer, og
                    eventuelle allergier.
                </h2>
                <div className='flex justify-center my-6'>
                    <div className='w-full max-w-3xl'>
                        <RSVPForm />
                    </div>
                </div>
            </section>
        </>
    );
}
