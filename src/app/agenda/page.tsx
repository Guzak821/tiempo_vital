// src/app/agenda/page.tsx

import { Clock, Calendar, CheckCircle, Square, MapPin, User, Mail, Plus, X } from 'lucide-react';

// Componente Reutilizable: Card de Resumen 
const SummaryCard = ({ title, value, icon: Icon, colorClass }: { title: string, value: string, icon: React.ElementType, colorClass: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <Icon className={colorClass} size={20} />
    </div>
    <p className="mt-4 text-4xl font-extrabold text-gray-900 leading-none">{value}</p>
    <p className="mt-2 text-sm text-gray-500">{title}</p>
  </div>
);

// Componente Reutilizable: Pestaña de Navegación 
const TabItem = ({ label, active }: { label: string, active: boolean }) => (
    <button className={`py-2 px-4 text-sm font-medium rounded-t-lg transition-colors duration-150 ${
        active 
          ? 'text-blue-700 border-b-2 border-blue-700' 
          : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
    }`}>
        {label}
    </button>
);


// --- Componente Principal de la Página "Mi Agenda" ---
export default function AgendaPage() {
  return (
    <div className="space-y-8">
      
      {/* 1. Título y Subtítulo */}
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Mi Agenda</h1>
        <p className="text-gray-600 mt-1">Gestiona tus citas y solicitudes</p>
      </header>

      {/* 2. Grid de Resumen de Citas (Las 4 Tarjetas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard 
          title="Solicitudes Pendientes" 
          value="1" 
          icon={Clock} 
          colorClass="text-yellow-500" 
        />
        <SummaryCard 
          title="Citas Confirmadas" 
          value="2" 
          icon={Calendar} 
          colorClass="text-blue-500" 
        />
        <SummaryCard 
          title="Completadas" 
          value="15" 
          icon={CheckCircle} 
          colorClass="text-green-500" 
        />
        <SummaryCard 
          title="Hoy" 
          value="0" 
          icon={Square} 
          colorClass="text-gray-400" 
        />
      </div>

      {/* 3. Área de Pestañas y Citas */}
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        
        {/* Navegación de Pestañas */}
        <div className="flex space-x-4 border-b border-gray-200 -mt-6 mx-0 px-0 pt-0 pb-0.5">
            <TabItem label="Próximas Citas" active={true} />
            <TabItem label="Solicitudes" active={false} />
            <TabItem label="Historial" active={false} />
        </div>

        {/* Contenido de la Pestaña Activa: Citas Programadas */}
        <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Citas Programadas</h2>
            <p className="text-gray-600 text-sm mb-6">Tus próximas citas confirmadas</p>

            {/* Tarjeta de Cita Única */}
            <div className="border border-gray-200 p-4 rounded-lg flex justify-between items-start">
                
                {/* Detalles de la Cita (Izquierda) */}
                <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                        <p className="text-lg font-semibold text-gray-900">María González</p>
                        <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Confirmada</span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                        <p className="flex items-center"><Calendar size={14} className="mr-2 text-gray-400" />martes, 21 de octubre de 2025</p>
                        <p className="flex items-center"><Clock size={14} className="mr-2 text-gray-400" />09:47 a.m. (min)</p>
                        <p className="flex items-center"><MapPin size={14} className="mr-2 text-gray-400" />Consultorio Principal</p>
                        <p className="ml-5 text-gray-500">Consulta general</p>
                        <p className="flex items-center"><Mail size={14} className="mr-2 text-gray-400" />maria@example.com</p>
                    </div>
                </div>

                {/* Acciones de la Cita (Derecha) */}
                <div className="flex flex-col space-y-2">
                    <button className="flex items-center justify-center space-x-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition">
                        <CheckCircle size={16} />
                        <span>Completar</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 transition">
                        <Calendar size={16} />
                        <span>Reprogramar</span>
                    </button>
                    <button className="flex items-center justify-center space-x-1 px-4 py-2 text-red-600 text-sm font-medium rounded-md hover:bg-red-50 transition">
                        <X size={16} />
                        <span>Cancelar</span>
                    </button>
                </div>
            </div>

        </div>
        
      </div>
      
    </div>
  );
}