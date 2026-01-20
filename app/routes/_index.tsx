// app/routes/_index.tsx
// Este archivo usa Tailwind CSS, que parece que ya tienes configurado.

import { Link } from "@remix-run/react";

export default function LandingPage() {
  return (
    <div className="bg-[#f0f2f5] text-[#1a1a1b] font-sans min-h-screen">
      {/* Hero Section */}
      <header className="bg-white py-20 px-10 text-center border-b-4 border-black">
        <div className="max-w-4xl mx-auto">
          {/* Asegúrate de tener una imagen llamada 'logo-polo.png' en tu carpeta 'public' */}
          <img src="/logo-polo.png" alt="PoLo Bot" className="w-32 h-32 mx-auto rounded-full border-4 border-black mb-4" />
          <h1 className="text-6xl font-black uppercase tracking-tighter">PoLo</h1>
          <p className="text-xl mt-4 text-gray-600 font-medium">
            El bot multifunción que trae la frescura del ártico a tu servidor.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://discord.com" 
               className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition">
              Invitar a PoLo
            </a>
            {/* El enlace al servidor de soporte lo añadiremos cuando lo tengas */}
            <a href="#comandos" className="border-2 border-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition">
              Ver Comandos
            </a>
          </div>
        </div>
      </header>

      {/* Características */}
      <section className="py-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div className="bg-white p-8 border-b-8 border-black rounded-lg">
          <h3 className="text-2xl font-bold mb-2">🛡️ Moderación</h3>
          <p>Mantén tu servidor tan limpio como la nieve recién caída.</p>
        </div>
        <div className="bg-white p-8 border-b-8 border-black rounded-lg">
          <h3 className="text-2xl font-bold mb-2">🎮 Diversión</h3>
          <p>Juegos y comandos de interacción para que nadie se quede congelado.</p>
        </div>
        <div className="bg-white p-8 border-b-8 border-black rounded-lg">
          <h3 className="text-2xl font-bold mb-2">⚙️ Utilidad</h3>
          <p>Herramientas potentes para gestionar tu comunidad sin esfuerzo.</p>
        </div>
      </section>

      {/* Sección de Comandos */}
      <section id="comandos" className="py-20 bg-black text-white px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center italic">Comandos de PoLo</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-700 py-4">
              <span className="font-mono text-blue-400">/help</span>
              <span className="text-gray-400">Muestra la lista completa de poderes de PoLo.</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 py-4">
              <span className="font-mono text-blue-400">/info</span>
              <span className="text-gray-400">Estadísticas del bot y del servidor.</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 py-4">
              <span className="font-mono text-blue-400">/ban /kick</span>
              <span className="text-gray-400">Moderación rápida con el zarpazo de PoLo.</span>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Pásame tus comandos y los añadiré aquí con estilo.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 border-t border-gray-200">
        <p>© 2026 PoLo Bot - Creado con la potencia del Ártico</p>
      </footer>
    </div>
  );
}
