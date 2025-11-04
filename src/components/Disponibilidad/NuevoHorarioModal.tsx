// src/components/Disponibilidad/NuevoHorarioModal.tsx
"use client";

import React, { useState } from 'react';
import { X, Clock } from 'lucide-react';

interface NuevoHorarioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Opciones de simulación
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const consultorios = ['Consultorio Principal', 'Consultorio Secundario'];

export default function NuevoHorarioModal({ isOpen, onClose }: NuevoHorarioModalProps) {
    
    // Simulación de estados para el formulario
    const [dia, setDia] = useState(diasSemana[0]);
    const [consultorio, setConsultorio] = useState(consultorios[0]);

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. FORZAR EL TIPADO: Asignar el target del evento a una variable tipada como HTMLFormElement
    const form = e.currentTarget as HTMLFormElement;

    // 2. ACCEDER POR NOMBRE: Ahora TypeScript permite acceder a los inputs por su nombre (form.elements.nombreDelInput)
    const horaInicio = (form.elements.namedItem('horaInicio') as HTMLInputElement).value;
    const horaFin = (form.elements.namedItem('horaFin') as HTMLInputElement).value;
    
    console.log("Nuevo horario enviado:", { dia, consultorio, inicio: horaInicio, fin: horaFin });
    alert('Horario guardado. (Simulación)');
    onClose(); 
};

    if (!isOpen) return null;

    return (
        // Fondo transparente para cerrar al hacer clic fuera
        <div 
            className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 pointer-events-auto"
            onClick={onClose} 
        >
            
            {/* Contenedor principal del modal (la ventana blanca) */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto transform transition-all"
                onClick={(e) => e.stopPropagation()} // Evita que el clic dentro cierre el modal
            >
                
                {/* Header del Modal (Título) */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <h2 className="text-xl font-semibold text-gray-900">Nuevo Horario</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
                        <X size={24} />
                    </button>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    
                    {/* Día de la Semana y Consultorio */}
                    <div className="grid grid-cols-2 gap-4">
                        
                        {/* Día de la Semana */}
                        <div>
                            <label htmlFor="dia" className="block text-sm font-medium text-gray-700">Día de la Semana</label>
                            <select 
                                id="dia" 
                                name="dia" 
                                value={dia}
                                onChange={(e) => setDia(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {diasSemana.map(d => <option key={d} value={d}>{d}</option>)}
                            </select>
                        </div>
                        
                        {/* Consultorio */}
                        <div>
                            <label htmlFor="consultorio" className="block text-sm font-medium text-gray-700">Consultorio</label>
                            <select 
                                id="consultorio" 
                                name="consultorio" 
                                value={consultorio}
                                onChange={(e) => setConsultorio(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500"
                            >
                                {consultorios.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                    </div>
                    
                    {/* Hora de Inicio y Hora de Fin */}
                    <div className="grid grid-cols-2 gap-4">
                        
                        {/* Hora de Inicio */}
                        <div>
                            <label htmlFor="horaInicio" className="block text-sm font-medium text-gray-700">Hora de Inicio</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input 
                                    type="time" 
                                    id="horaInicio" 
                                    name="horaInicio" 
                                    defaultValue="09:00"
                                    required
                                    className="block w-full border border-gray-300 rounded-md p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <Clock size={20} className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Hora de Fin */}
                        <div>
                            <label htmlFor="horaFin" className="block text-sm font-medium text-gray-700">Hora de Fin</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input 
                                    type="time" 
                                    id="horaFin" 
                                    name="horaFin" 
                                    defaultValue="17:00"
                                    required
                                    className="block w-full border border-gray-300 rounded-md p-2.5 pr-10 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <Clock size={20} className="text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                
                    {/* Footer / Botones */}
                    <div className="flex space-x-3 pt-4 border-t border-gray-100">
                        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition shadow-md">
                            Guardar Horario
                        </button>
                        <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}