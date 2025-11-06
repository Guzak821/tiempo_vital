// src/components/Consultorios/NuevoConsultorioModal.tsx
"use client";

import React, { useState } from 'react';
import { X, Clock, Home, MapPin } from 'lucide-react';

// Lista de días de la semana
const availableDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

interface NuevoConsultorioModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NuevoConsultorioModal({ isOpen, onClose }: NuevoConsultorioModalProps) {
    
    // ... (Mantener el estado y la lógica de toggleDay)
    const [selectedDays, setSelectedDays] = useState(['Lunes', 'Martes', 'Miércoles', 'Jueves']); 
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('¡Consultorio creado con éxito! (Simulación)');
        onClose();
    };

    if (!isOpen) return null;

    return (
        // Usar inset-0, bg-transparent y pointer-events-auto
        // La función onClick aquí permite cerrar el modal al hacer clic en el fondo.
        <div 
            className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4 pointer-events-auto"
            onClick={onClose} // <-- Cierra el modal al hacer clic en el fondo
        >
            
            {/* 2. Contenedor principal del modal (la ventana blanca) */}
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all"
                onClick={(e) => e.stopPropagation()} // <-- EVITA que se cierre al hacer clic dentro
            >
                
                {/* Header del Modal (Separado para la estética) */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">Nuevo Consultorio</h2>
                        <p className="text-sm text-gray-500">Registra una nueva ubicación de atención</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
                        <X size={24} />
                    </button>
                </div>

                {/* Formulario (contenido principal) */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    
                    {/* Sección: Información del Consultorio */}
                    <div className="space-y-4">
                        <p className="font-semibold text-gray-700">Información del Consultorio</p>
                        
                        {/* Nombre del Consultorio */}
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre del Consultorio *</label>
                            <input type="text" id="nombre" name="nombre" required placeholder="Ej: Consultorio Médico Central" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        {/* Dirección */}
                        <div>
                            <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección *</label>
                            <input type="text" id="direccion" name="direccion" required placeholder="Calle, número, colonia" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        
                        {/* Ciudad, Estado, CP */}
                        <div className="grid grid-cols-3 gap-3">
                            {/* ... Campos Ciudad, Estado, CP (Mantener el código anterior) ... */}
                            <div>
                                <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">Ciudad *</label>
                                <input type="text" id="ciudad" name="ciudad" required 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado *</label>
                                <input type="text" id="estado" name="estado" required 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="cp" className="block text-sm font-medium text-gray-700">Código Postal</label>
                                <input type="text" id="cp" name="cp" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div>
                            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                            <input type="tel" id="telefono" name="telefono" placeholder="(555) 123-4567" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </div>
                    
                    {/* Sección: Horario y Días */}
                    <div className="pt-4 space-y-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-700">Horario de Atención</p>
                        
                        {/* Horario */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="horaApertura" className="block text-sm font-medium text-gray-700">Horario de Apertura</label>
                                <input type="time" id="horaApertura" name="horaApertura" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="horaCierre" className="block text-sm font-medium text-gray-700">Horario de Cierre</label>
                                <input type="time" id="horaCierre" name="horaCierre" 
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>
                        
                        {/* Días de Atención */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Días de Atención</label>
                            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                                {availableDays.map(day => (
                                    <div key={day} className="flex items-center">
                                        <input 
                                            id={`day-${day}`} 
                                            type="checkbox" 
                                            checked={selectedDays.includes(day)}
                                            onChange={() => { /* Lógica de toggleDay */}}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
                                        />
                                        <label htmlFor={`day-${day}`} className="ml-2 text-sm text-gray-900">{day}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Opciones Adicionales */}
                        <div className="space-y-2 pt-2 border-t border-gray-100">
                            <div className="flex items-center">
                                <input id="principal" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="principal" className="ml-2 text-sm text-gray-900">Marcar como consultorio principal</label>
                            </div>
                            <div className="flex items-center">
                                <input id="activo" type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="activo" className="ml-2 text-sm text-gray-900">Consultorio activo</label>
                            </div>
                        </div>
                    </div>
                
                    {/* Footer / Botones */}
                    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
                        <button type="button" onClick={onClose} className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                            <span>Cancelar</span>
                        </button>
                        <button type="submit" className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition shadow-md">
                            <span>Crear Consultorio</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}