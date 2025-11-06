// src/app/perfil/page.tsx
"use client"; 
import Link from 'next/link';
import { Mail, Phone, Clock, DollarSign, Briefcase, Star, CheckCircle } from 'lucide-react';

// --- Componente: Indicador de Campo de Formulario ---
const FormInput = ({ label, placeholder, name, type = 'text', required = false, defaultValue = '' }: any) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && '*'}
    </label>
    <input 
      type={type} 
      name={name} 
      id={name} 
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
    />
  </div>
);


// --- Componente Principal de la Página "Mi Perfil" ---
export default function PerfilPage() {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Perfil actualizado. (Simulación)");
    };
    
    // Simulación de opciones
    const especialidades = ['Cardiología', 'Pediatría', 'Medicina Interna', 'Dermatología'];

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            
            {/* 1. Título y Subtítulo */}
            <header>
                <h1 className="text-3xl font-semibold text-gray-900">Mi Perfil</h1>
                <p className="text-gray-600 mt-1">Administra tu información profesional</p>
            </header>

            {/* 2. Sección: Estado del Perfil */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-3">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b pb-2">Estado del Perfil</h2>
                
                <div className="flex items-center space-x-6">
                    {/* Indicador Verificado */}
                    <div className="flex items-center space-x-2 text-blue-600 font-medium">
                        <CheckCircle size={20} className="fill-blue-100 text-blue-600" />
                        <span>Verificado</span>
                    </div>
                    {/* Calificaciones */}
                    <div className="flex items-center space-x-1 text-gray-700">
                        <Star size={20} className="text-yellow-500 fill-yellow-500" />
                        <span>127 Calificaciones</span>
                    </div>
                </div>
            </div>

            {/* 3. Sección: Información Profesional (Formulario) */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-6">
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b pb-2">Información Profesional</h2>
                <p className="text-gray-600 text-sm -mt-4">Actualiza tus datos profesionales y de contacto</p>

                {/* 3.1 Nombre y Apellido */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput label="Nombre" name="nombre" required defaultValue="Dr. Carlos Mendoza" />
                    <FormInput label="Apellido" name="apellido" required defaultValue="Rodríguez" />
                </div>
                
                {/* 3.2 Email y Teléfono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput label="Email" name="email" type="email" required defaultValue="carlos.mendoza@example.com" />
                    <FormInput label="Teléfono" name="telefono" required defaultValue="+52 55 1234 5678" />
                </div>
                
                {/* 3.3 Especialidad y Cédula */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Especialidad (Select) */}
                    <div>
                        <label htmlFor="especialidad" className="block text-sm font-medium text-gray-700">Especialidad *</label>
                        <select 
                            id="especialidad" 
                            name="especialidad" 
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2.5 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            defaultValue="Cardiología"
                        >
                            {especialidades.map(esp => <option key={esp} value={esp}>{esp}</option>)}
                        </select>
                    </div>
                    <FormInput label="Cédula Profesional" name="cedula" required defaultValue="12345678" />
                </div>

                {/* 3.4 Experiencia y Precio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput label="Años de Experiencia" name="experiencia" type="number" defaultValue="15" />
                    <FormInput label="Precio de Consulta (MXN)" name="precio" type="number" placeholder="Ej: 800" />
                </div>
                
                {/* 3.5 Biografía */}
                <div>
                    <label htmlFor="biografia" className="block text-sm font-medium text-gray-700">Biografía</label>
                    <textarea 
                        id="biografia" 
                        name="biografia" 
                        rows={3} 
                        placeholder="Cuéntanos sobre tu experiencia y especialización..."
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                </div>
                
                {/* 3.6 Checkbox de Seguros */}
                <div className="flex items-center pt-2">
                    <input id="seguros" name="seguros" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <label htmlFor="seguros" className="ml-2 block text-sm font-medium text-gray-900">Acepto seguros médicos</label>
                </div>
                
                {/* 3.7 Botones de Acción */}
                <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition shadow-md">
                        Actualizar Perfil
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                        Cancelar
                    </button>
                </div>

            </form>
            
        </div>
    );
}