"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <video
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        src="/vid/crochet.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <video
        className="block md:hidden absolute top-0 left-0 w-full h-full object-cover"
        src="/vid/crochet.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 text-center px-6 md:px-12 w-full md:w-[80%]">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-medium mb-4 text-white font-lavishly leading-tight drop-shadow-lg"
        >
          Mayra Alvarado
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-3 text-5xl md:text-6xl pb-6 font-lavishly font-medium tracking-wide 
             bg-linear-to-r from-indigo-400 via-purple-500 to-blue-700 
             text-transparent bg-clip-text"
        >
          Tejidos con Amor
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-base md:text-2xl text-white/90 md:pt-20 pt-6 max-w-5xl mx-auto"
        >
          Cada puntada cuenta una historia. <br /> Creo piezas de crochet únicas,
          hechas a mano con pasión y dedicación; desde moda tejida y decoración
          artesanal, hasta tiernos amigurumis que despiertan sonrisas. 
          <br /> Lo hecho con 💗, se siente diferente.
        </motion.p>
      </div>
      <div className="bg-linear-to-b from-black via-slate-950 h-20 to-slate-900"></div>
    </section>
  );
}
