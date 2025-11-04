// src/components/Header/Header.tsx
"use client"; 
import Link from 'next/link';
// Importaciones de los iconos de lucide-react
import { Home, Calendar, Stethoscope, Users, Clock, Star, Bell, User, Settings } from 'lucide-react'; 
import { usePathname } from 'next/navigation';

// Componente para los elementos de navegación (Inicio, Agenda, etc.)
const NavItem = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => {
  const pathname = usePathname();  // La clase 'text-blue-600' en hover simula el borde inferior azul de tu mockup

  const isActive = (href === '/' && pathname === '/') || (href !== '/' && pathname.startsWith(href));
  const linkClasses = `
    flex items-center space-x-2 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out 
    ${isActive 
      ? 'text-blue-700 border-b-2 border-blue-700' // Estado ACTIVO: Texto azul y línea azul permanente
      : 'text-gray-600 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600' // Estado INACTIVO: Gris con hover
    }
  `;
  return (
  <Link href={href} className={linkClasses}>
      <Icon size={18} /> 
      <span>{label}</span>
    </Link>
  );
};

export default function Header() {
  return (
    <nav className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200"> {/* Añadido border-b */}
      
      {/* Lado Izquierdo: Título y Navegación Principal */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-150">
          Tiempo Vital
        </Link>
        
        {/* Navegación Principal */}
        <div className="hidden sm:flex space-x-1"> {/* Reducido el espacio entre items */}
          <NavItem href="/" label="Inicio" icon={Home} />
          <NavItem href="/agenda" label="Agenda" icon={Calendar} />
          <NavItem href="/consultorios" label="Consultorios" icon={Stethoscope} /> {/* Ícono de consultorio */}
          <NavItem href="/pacientes" label="Pacientes" icon={Users} />
          <NavItem href="/disponibilidad" label="Disponibilidad" icon={Clock} /> {/* Ícono de reloj para disponibilidad */}
          <NavItem href="/ranking" label="Ranking" icon={Star} />
        </div>
      </div>
      
      {/* Lado Derecho: Iconos de Usuario y Configuración */}
      <div className="flex items-center space-x-3"> {/* Ajustado el espacio */}
        {/* Ícono de campana para notificaciones */}
        <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150">
          <Bell size={20} />
        </button>
        {/* Ícono de usuario */}
        <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150">
          <User size={20} />
        </button>
        {/* Ícono de configuración */}
        <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors duration-150">
          <Settings size={20} />
        </button>
      </div>
    </nav>
  );
}