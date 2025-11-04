// src/app/pacientes/page.tsx

import Link from 'next/link';
import { Users, Search, Mail, Phone, Calendar, History } from 'lucide-react';

// --- Componente Reutilizable: Tarjeta de Resumen (Total Pacientes) ---
const TotalPacientesCard = ({ total }: { total: number }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between h-full w-full max-w-sm">
    <div className="flex justify-between items-start">
      <h3 className="text-gray-500 text-sm font-medium">Total Pacientes</h3>
      <Users className="text-gray-400" size={20} />
    </div>
    <p className="mt-4 text-4xl font-extrabold text-gray-900 leading-none">{total}</p>
    <p className="mt-2 text-sm text-gray-500">Pacientes atendidos</p>
  </div>
);

// --- Componente Reutilizable: Tarjeta de Paciente en la Lista ---
const PacienteListItem = ({ name, age, email, phone, dob }: { name: string, age: number, email: string, phone: string, dob: string }) => (
    <div className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
        
        {/* Detalles del Paciente (Izquierda) */}
        <div className="flex-1 space-y-1">
            <div className="flex items-center space-x-2">
                <p className="text-lg font-semibold text-gray-900">{name}</p>
                <span className="text-xs font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{age} años</span>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
                <p className="flex items-center">
                    <Mail size={14} className="mr-2 text-gray-400" />
                    {email}
                </p>
                <p className="flex items-center">
                    <Phone size={14} className="mr-2 text-gray-400" />
                    {phone}
                </p>
                <p className="flex items-center">
                    <Calendar size={14} className="mr-2 text-gray-400" />
                    Nacimiento: {dob}
                </p>
            </div>
        </div>

        {/* Botón de Acción (Derecha) */}
        <Link href="/pacientes/historial/maria-gonzalez-123" passHref>
            <button className="flex items-center space-x-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition">
                <History size={16} />
                <span>Ver Historial</span>
            </button>
        </Link>
    </div>
);


// --- Componente Principal de la Página "Mis Pacientes" ---
export default function PacientesPage() {
    return (
        <div className="space-y-8">
            
            {/* 1. Título y Subtítulo */}
            <header>
                <h1 className="text-3xl font-semibold text-gray-900">Mis Pacientes</h1>
                <p className="text-gray-600 mt-1">Gestiona el historial de tus pacientes</p>
            </header>

            {/* 2. Tarjeta de Resumen */}
            <TotalPacientesCard total={4} />

            {/* 3. Listado de Pacientes (Contenedor principal) */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-5">
                
                {/* Encabezado del Listado */}
                <h2 className="text-xl font-semibold text-gray-900">Listado de Pacientes</h2>
                <p className="text-gray-600 text-sm -mt-4">Pacientes que has atendido</p>

                {/* Barra de Búsqueda */}
                <div className="flex items-center border border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                    <Search size={20} className="text-gray-400 mr-2" />
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre, apellido o email..."
                        className="w-full text-base border-none focus:outline-none focus:ring-0 p-0"
                    />
                </div>

                {/* Lista de Pacientes */}
                <div className="divide-y divide-gray-100">
                    <PacienteListItem 
                        name="María González"
                        age={40}
                        email="maria@example.com"
                        phone="+52 55 1234 5678"
                        dob="14 de mayo de 1985"
                    />
                    <PacienteListItem 
                        name="Juan Pérez"
                        age={28}
                        email="juan@perez.com"
                        phone="+52 55 9876 5432"
                        dob="10 de enero de 1997"
                    />
                    {/* Puedes añadir más PacienteListItem aquí */}
                </div>
            </div>
            
        </div>
    );
}