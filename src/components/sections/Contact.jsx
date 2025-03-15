import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        
        emailjs
            .sendForm(import.meta.env.VITE_serviceID, import.meta.env.VITE_templateID, event.target, import.meta.env.VITE_public_key)
            .then((result) => {
                alert("Message sent successfully!");
                setFormState({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Something went wrong! Please try again.");
            });
    };

    return (
        <section 
            id="contact" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="px-40 w-full max-w-2xl"> {/* Adjusted width */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent text-center">
                         Get in Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                value={formState.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name"
                                aria-label="Name"
                                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                value={formState.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                aria-label="Email"
                                onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                            />
                        </div>

                        <div className="relative">
                            <textarea  
                                id="message" 
                                name="message" 
                                required
                                rows={5}
                                value={formState.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                                aria-label="Message"
                                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                            />
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};