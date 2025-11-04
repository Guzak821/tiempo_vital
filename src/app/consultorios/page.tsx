// src/app/consultorios/page.tsx
"use client"; // Necesitamos "use client" para usar useState

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, MapPin, Clock, Phone, Pencil, Trash2 } from 'lucide-react';
import NuevoConsultorioModal from '../../components/Consultorios/NuevoConsultorioModal';

// --- Componente Reutilizable: Tarjeta de Consultorio (sin cambios) ---
const ConsultorioCard = ({ 
  title, address, phone, hours, days, isPrincipal 
}: { 
  title: string, address: string, phone: string, hours: string, days: string[], isPrincipal: boolean 
}) => {
  // ... (código de ConsultorioCard que ya teníamos) ...
  const allDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {isPrincipal && (
                <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Principal</span>
            )}
            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Activo</span>
        </div>
      </div>
      <div className="space-y-3 text-sm text-gray-700 mb-5">
        <p className="flex items-center">
            <MapPin size={16} className="mr-3 text-gray-500" />
            {address}
        </p>
        <p className="flex items-center">
            <Phone size={16} className="mr-3 text-gray-500" />
            {phone}
        </p>
        <p className="flex items-center">
            <Clock size={16} className="mr-3 text-gray-500" />
            {hours}
        </p>
      </div>
      <div className="flex space-x-2 mb-6 border-t border-gray-100 pt-4">
        {allDays.map((day) => (
            <span key={day} className={`text-xs font-medium px-2 py-1 rounded ${
                days.includes(day) 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'text-gray-400' 
            }`}>
                {day}
            </span>
        ))}
      </div>
      <div className="flex space-x-3 border-t border-gray-100 pt-4">
        <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition">
            <Pencil size={16} />
            <span>Editar</span>
        </button>
        <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition">
            <Trash2 size={16} />
            <span>Eliminar</span>
        </button>
      </div>
    </div>
  );
};


// --- Componente Principal de la Página "Mis Consultorios" ---
export default function ConsultoriosPage() {
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

    return (
        <div className="space-y-8">
            
            {/* 1. Encabezado y Botón "Nuevo Consultorio" */}
            <div className="flex justify-between items-start">
                <header>
                    <h1 className="text-3xl font-semibold text-gray-900">Mis Consultorios</h1>
                    <p className="text-gray-600 mt-1">Administra tus ubicaciones de atención</p>
                </header>
                
                {/* Botón que ABRIRÁ el modal */}
                <button 
                    onClick={() => setIsModalOpen(true)} // <--- Abre el modal
                    className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition shadow-md"
                >
                    <Plus size={16} />
                    <span>Nuevo Consultorio</span>
                </button>
            </div>

            {/* 2. Grid de Tarjetas de Consultorio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                <ConsultorioCard
                    title="Consultorio Principal"
                    address="Av. Reforma 123, Ciudad de México, CDMX"
                    phone="+52 55 1234 5678"
                    hours="09:00 - 18:00"
                    days={['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']}
                    isPrincipal={true}
                />

                <ConsultorioCard
                    title="Consultorio Secundario"
                    address="Calle Insurgentes 456, Ciudad de México, CDMX"
                    phone="+52 55 8765 4321"
                    hours="10:00 - 16:00"
                    days={['Lunes', 'Miércoles', 'Viernes']}
                    isPrincipal={false}
                />
                
            </div>
            
            {/* 3. Renderización del Modal */}
            <NuevoConsultorioModal
                isOpen={isModalOpen} // Pasa el estado de visibilidad
                onClose={() => setIsModalOpen(false)} // Pasa la función para cerrarlo
            />
            
        </div>
    );
}