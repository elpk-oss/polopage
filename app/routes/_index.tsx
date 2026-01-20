// app/routes/_index.tsx
import { Link } from "@remix-run/react";
import { ChevronRightIcon, ArrowRightIcon, DiscordLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons'; // Asume que tienes Radix Icons instalado

export default function LandingPage() {
  const inviteUrl = "https://discord.com";
  const supportUrl = "#"; // Reemplazar cuando crees el servidor de soporte

  const commands = {
    Moderación: ['/ban', '/kick', '/mute', '/warn', '/unban', '/purge'],
    Configuración: ['/log-config', '/lvl-config', '/bien', '/recompensa-nivel'],
    Niveles: ['/nivel', '/rank', '/leaderboard', '/añadir-nivel'],
    Extras: ['/emoji', '/traducir', '/hex-encode', '/hex-decode', '/operacion'],
    Utilidad: ['/ping', '/avatar', '/server', '/user', '/info', '/uptime', '/membercount', '/roles', '/permissions', '/channelinfo', '/botinfo'],
    Diversión: ['/coinflip', '/dice', '/8ball', '/choose', '/quote', '/meme', '/rate', '/reverse'],
  };

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      
      {/* Navegación Simple */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo-polo.png" alt="PoLo Bot Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold">PoLo</span>
        </div>
        <div className="space-x-4">
            <a href="#comandos" className="text-gray-300 hover:text-white transition">Comandos</a>
            {/* Usar supportUrl cuando esté disponible */}
            <a href={supportUrl} className="text-gray-300 hover:text-white transition">Soporte</a>
        </div>
      </nav>

      {/* Hero Section - Estilo Oscuro y Frio */}
      <header className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 text-center bg-gray-800 shadow-xl">
        <div className="max-w-3xl mx-auto">
          {/* Usamos el logo del oso que me pasaste */}
          <img src="/logo-polo.png" alt="PoLo Bot" className="w-48 h-48 mx-auto mb-6 transform rotate-[-5deg] hover:rotate-0 transition duration-300" />
          <h1 className="text-7xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
            PoLo: El Bot Ártico
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            El bot multifunción definitivo. Moderación glacial, diversión helada y utilidades esenciales para tu comunidad de Discord.
          </p>
          <a href={inviteUrl} className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-gray-900 bg-white rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
            Invitar a PoLo Ahora <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Sección de Características Destacadas */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-300">¿Por qué PoLo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-3">🛡️ Moderación Glacial</h3>
            <p className="text-gray-400">Mantén tu servidor limpio y seguro con comandos `/ban`, `/kick`, `/purge` y más. Paz en el ártico.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-3">🎮 Diversión Helada</h3>
            <p className="text-gray-400">Juegos simples como `/dice`, `/8ball` y `/meme` para romper el hielo y divertir a los miembros.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold mb-3">⚡ Utilidad Esencial</h3>
            <p className="text-gray-400">Herramientas potentes de utilidad y configuración para gestionar tu comunidad sin esfuerzo.</p>
          </div>
        </div>
      </section>

      {/* Sección de Comandos Detallada */}
      <section id="comandos" className="py-20 bg-gray-950 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Lista Completa de Comandos</h2>
        <p className="text-center text-gray-500 mb-12">Usa <code className="bg-gray-700 p-1 rounded">/help &lt;comando&gt;</code> para detalles específicos en Discord.</p>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {Object.entries(commands).map(([category, cmds]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold mb-4 border-b border-blue-500 pb-2">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cmds.map(cmd => (
                  <div key={cmd} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition cursor-pointer flex items-center">
                    <ChevronRightIcon className="mr-2 text-blue-400" />
                    <code className="font-mono">{cmd}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer y CTA Final */}
      <footer className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">¿Listo para enfriar tu servidor?</h3>
          <p className="text-gray-400 mb-8">Únete a miles de servidores que ya disfrutan de la potencia de PoLo.</p>
          <a href={inviteUrl} className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-gray-900 bg-blue-300 rounded-full shadow-lg hover:bg-blue-400 transition transform hover:scale-105">
            Invitar a PoLo Ahora <DiscordLogoIcon className="ml-2 h-5 w-5" />
          </a>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-500">© 2026 PoLo Bot. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
