import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, BookOpen, Award, Star } from 'lucide-react';


export default function Localization() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center text-[#003366] mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Notre localisation
                </motion.h2>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
                    <motion.div
                        className="w-full lg:w-1/3"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mr-4">
                                    <MapPin className="w-6 h-6 text-[#003366]" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#003366]">Adresse</h3>
                            </div>

                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                Ista Ntic Syba, H2XP+F7H, Av. Al Adarissa, Marrakesh
                            </p>

                            <motion.a
                                href="https://www.google.com/maps/search/?api=1&query=Ista+Ntic+Syba,+H2XP%2BF7H,+Av.+Al+Adarissa,+Marrakesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#004080] transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Voir sur Google Maps
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full lg:w-2/3 h-[500px] rounded-xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1428.7967305509173!2d-7.96504010462583!3d31.599047620569824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafefd72c155555%3A0x48c2c108c7c6008c!2sInstitut%20Sp%C3%A9cialis%C3%A9%20De%20Technologie%20Appliqu%C3%A9e%20NTIC!5e0!3m2!1sen!2sma!4v1737299602948!5m2!1sen!2sma"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}