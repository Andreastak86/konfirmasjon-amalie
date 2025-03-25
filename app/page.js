"use client";

import dynamic from "next/dynamic"; // Viktig import av dynamic
import RSVPForm from "../components/RSVPForm";

// Dynamisk import av kartkomponentene, med SSR deaktivert
const ChurchMap = dynamic(() => import("../components/ChurchMap"), {
    ssr: false,
});
const PartyMap = dynamic(() => import("../components/PartyMap"), {
    ssr: false,
});

export default function Home() {
    // Koordinater for kirke og selskap
    const churchLocation = [60.18704540777896, 5.469533970767009];
    const partyLocation = [60.38231730841425, 5.326818988738677];

    return (
        <>
            {/* Header med velkomsttekst */}
            <div className='flex flex-col items-center py-2 text-3xl text-text-dark font-bold my-6'>
                <h3 className='text-center mb-6'>
                    Vi ønsker dere velkommen til å feire:
                </h3>
                <h1>Amalie sin konfirmasjon</h1>
                <h3 className='mt-6'>10. mai 2025</h3>
            </div>

            <section className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4'>
                {/* Informasjon om gudstjenesten */}
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

                {/* Informasjon om selskapet */}
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
            <section className='mt-12'>
                <h2 className='text-2xl text-center font-bold text-purple-800'>
                    Send inn din RSVP
                </h2>
                <RSVPForm />
            </section>
        </>
    );
}
