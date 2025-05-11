import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Plus, Minus } from "lucide-react";

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

    const handleCounterChange = (field, amount) => {
        // Prevent negative values
        const newValue = Math.max(0, formData[field] + amount);
        setFormData({ ...formData, [field]: newValue });
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
                    className='w-full p-2 border border-purple-300 rounded text-black'
                />
            </div>

            {/* Mobilvennlig tallvelger for voksne */}
            <div className='mb-4'>
                <label className='block text-purple-600'>Antall voksne:</label>
                <div className='flex items-center'>
                    <button
                        type='button'
                        onClick={() => handleCounterChange("adults", -1)}
                        className='bg-purple-500 text-white w-10 h-10 rounded-l flex items-center justify-center'
                    >
                        <Minus size={18} />
                    </button>
                    <div className='flex-1 h-10 border-t border-b border-purple-300 flex items-center justify-center text-black bg-white'>
                        {formData.adults}
                    </div>
                    <button
                        type='button'
                        onClick={() => handleCounterChange("adults", 1)}
                        className='bg-purple-500 text-white w-10 h-10 rounded-r flex items-center justify-center'
                    >
                        <Plus size={18} />
                    </button>
                </div>
            </div>

            {/* Mobilvennlig tallvelger for barn */}
            <div className='mb-4'>
                <label className='block text-purple-600'>Antall barn:</label>
                <div className='flex items-center'>
                    <button
                        type='button'
                        onClick={() => handleCounterChange("children", -1)}
                        className='bg-purple-500 text-white w-10 h-10 rounded-l flex items-center justify-center'
                    >
                        <Minus size={18} />
                    </button>
                    <div className='flex-1 h-10 border-t border-b border-purple-300 flex items-center justify-center text-black bg-white'>
                        {formData.children}
                    </div>
                    <button
                        type='button'
                        onClick={() => handleCounterChange("children", 1)}
                        className='bg-purple-500 text-white w-10 h-10 rounded-r flex items-center justify-center'
                    >
                        <Plus size={18} />
                    </button>
                </div>
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
                    placeholder='Skriv inn eventuelle matallergier her'
                    className='w-full p-2 border border-purple-300 rounded text-black'
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
