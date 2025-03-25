import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function RSVPForm() {
    const [formData, setFormData] = useState({
        name: "",
        adults: 0,
        children: 0,
        allergies: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, adults, children, allergies } = formData;

        const { data, error } = await supabase
            .from("rsvp")
            .insert([{ name, adults, children, allergies }]);

        if (error) {
            console.error("Feil ved innsending:", error.message);
            alert("Det oppstod en feil. Prøv igjen!");
        } else {
            alert("RSVP er sendt inn. Takk!");
            setFormData({ name: "", adults: 0, children: 0, allergies: "" }); // Resett skjemaet
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className='max-w-md mx-auto p-4 bg-purple-100 rounded-lg shadow-md'
        >
            <h2 className='text-xl font-bold text-purple-700 mb-4'>RSVP</h2>
            <div className='mb-4'>
                <label htmlFor='name' className='block text-purple-600'>
                    Navn:
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full p-2 border border-purple-300 rounded'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='adults' className='block text-purple-600'>
                    Antall voksne:
                </label>
                <input
                    type='number'
                    id='adults'
                    name='adults'
                    value={formData.adults}
                    onChange={handleChange}
                    min='0'
                    className='w-full p-2 border border-purple-300 rounded'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='children' className='block text-purple-600'>
                    Antall barn:
                </label>
                <input
                    type='number'
                    id='children'
                    name='children'
                    value={formData.children}
                    onChange={handleChange}
                    min='0'
                    className='w-full p-2 border border-purple-300 rounded'
                />
            </div>
            <div className='mb-4'>
                <label htmlFor='allergies' className='block text-purple-600'>
                    Matallergier:
                </label>
                <textarea
                    id='allergies'
                    name='allergies'
                    value={formData.allergies}
                    onChange={handleChange}
                    className='w-full p-2 border border-purple-300 rounded'
                />
            </div>
            <button
                type='submit'
                className='bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800'
            >
                Send inn
            </button>
        </form>
    );
}

//remebmer CATHA
