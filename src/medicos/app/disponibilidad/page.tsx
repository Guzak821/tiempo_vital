// src/app/disponibilidad/page.tsx
"use client"; 

import React, { useState } from 'react';
import { Clock, Calendar, Trash2, Plus } from 'lucide-react';

import NuevoHorarioModal from '../../components/Disponibilidad/NuevoHorarioModal';

// --- Datos de Horarios de Ejemplo ---
const initialSchedule = {
  Lunes: [
    { start: '09:00', end: '13:00', consultorio: 'Consultorio Principal', active: true },
    { start: '15:00', end: '18:00', consultorio: 'Consultorio Principal', active: true },
  ],
  Martes: [],
  Miércoles: [
    { start: '09:00', end: '13:00', consultorio: 'Consultorio Principal', active: true },
  ],
  Jueves: [],
  Viernes: [],
  Sábado: [],
  Domingo: [],
};

// --- Componente: Bloque de Horario (Un solo slot) ---
const HorarioSlot = ({ start, end, consultorio, active, onToggle, onDelete }: any) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center space-x-4">
      <div className="text-gray-800 font-medium">{start} - {end}</div>
      <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{consultorio}</span>
    </div>
    <div className="flex items-center space-x-3">
      {/* Simulación del Toggle de activación/desactivación */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={active} onChange={onToggle} className="sr-only peer" />
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      
      <button onClick={onDelete} className="text-red-500 hover:text-red-700 p-1 transition">
        <Trash2 size={18} />
      </button>
    </div>
  </div>
);

// --- Componente: Tarjeta de Día de la Semana ---
const DiaCard = ({ day, schedules }: { day: string, schedules: any[] }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-2">
    <h3 className="text-lg font-semibold text-gray-900 mb-3">{day}</h3>
    
    <div className="pl-2">
      {schedules.length === 0 ? (
        <p className="text-gray-500 py-2">No hay horarios configurados</p>
      ) : (
        schedules.map((schedule, index) => (
          <HorarioSlot
            key={index}
            {...schedule}
            onToggle={() => console.log(`Toggle ${day} slot ${index}`)}
            onDelete={() => console.log(`Delete ${day} slot ${index}`)}
          />
        ))
      )}
    </div>
  </div>
);

// --- Componente Principal de la Página "Disponibilidad" ---
export default function DisponibilidadPage() {
  const [activeTab, setActiveTab] = useState('Horarios');
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const [scheduleData, setScheduleData] = useState(initialSchedule); 
  const [isHorarioModalOpen, setIsHorarioModalOpen] = useState(false); // <--- NUEVO ESTADO

  return (
    <div className="space-y-6">
      
      {/* 1. Título y Subtítulo */}
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Disponibilidad</h1>
        <p className="text-gray-600 mt-1">Gestiona tus horarios y periodos no disponibles</p>
      </header>

      {/* 2. Navegación de Pestañas */}
      {/* ... (código de pestañas) ... */}
      <div className="flex space-x-3 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('Horarios')}
          className={`py-2 px-4 text-sm font-medium transition-colors ${
            activeTab === 'Horarios' 
              ? 'text-blue-700 border-b-2 border-blue-700' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Clock size={16} className="inline mr-2" /> Horarios
        </button>
        <button
          onClick={() => setActiveTab('Períodos No Disponibles')}
          className={`py-2 px-4 text-sm font-medium transition-colors ${
            activeTab === 'Períodos No Disponibles' 
              ? 'text-blue-700 border-b-2 border-blue-700' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Calendar size={16} className="inline mr-2" /> Períodos No Disponibles
        </button>
      </div>

      {/* 3. Contenido de la Pestaña Activa */}
      {activeTab === 'Horarios' && (
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-4">
          
          <h2 className="text-xl font-semibold text-gray-900">Horarios de Atención</h2>
          <p className="text-gray-600 text-sm -mt-2">Configura tus horarios disponibles por día de la semana</p>

          <div className="space-y-4">
            {daysOfWeek.map(day => (
              <DiaCard 
                key={day} 
                day={day} 
                schedules={(scheduleData as any)[day]} 
              />
            ))}
          </div>

          {/* CONEXIÓN DEL BOTÓN CON EL MODAL */}
          <button 
            onClick={() => setIsHorarioModalOpen(true)} // <--- ABRIR MODAL
            className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition shadow-md mt-4"
          >
            <Plus size={16} />
            <span>Agregar Horario</span>
          </button>
        </div>
      )}

      {activeTab === 'Períodos No Disponibles' && (
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
          <p className="text-gray-700">Contenido para gestionar vacaciones o ausencias.</p>
        </div>
      )}
      
      {/* RENDERIZADO DEL NUEVO MODAL */}
      <NuevoHorarioModal
        isOpen={isHorarioModalOpen} 
        onClose={() => setIsHorarioModalOpen(false)} 
      />
      
    </div>
  );
}