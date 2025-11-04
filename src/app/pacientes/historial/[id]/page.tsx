// src/app/pacientes/historial/[id]/page.tsx

import { ArrowLeft, User, Mail, Phone, Calendar, Clock, Heart, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

// --- Simulación de Datos del Paciente ---
// En una app real, usarías 'params.id' para hacer un fetch a tu API.
const getPacienteData = (id: string) => {
    return {
        nombre: "María Rodríguez",
        expediente: id,
        edad: 24,
        genero: "Femenino",
        email: "pacientep1@ejemplo.com",
        telefono: "+52 982 414 3384",
        fechaNacimiento: "8 de marzo de 2001",
        tipoSangre: "A+",
        alergias: ["Polen", "Polvo"],
        citas: [
            { fecha: "20 de septiembre de 2025", consultorio: "Consultorio Centro Médico", estado: "completada" },
            { fecha: "21 de agosto de 2025", consultorio: "Consultorio Centro Médico", estado: "confirmada" },
            { fecha: "22 de julio de 2025", consultorio: "Consultorio Centro Médico", estado: "cancelada" },
        ]
    };
};

// --- Componente de Etiqueta de Alergia ---
const AllergyTag = ({ label }: { label: string }) => (
    <span className="text-xs font-medium bg-red-100 text-red-700 px-3 py-1 rounded-full">{label}</span>
);

// --- Componente de Tarjeta de Cita ---
const CitaItem = ({ fecha, consultorio, estado }: { fecha: string, consultorio: string, estado: 'completada' | 'confirmada' | 'cancelada' }) => {
    
    let tagClass = '';
    let tagLabel = '';

    if (estado === 'completada') {
        tagClass = 'bg-blue-100 text-blue-700';
        tagLabel = 'completada';
    } else if (estado === 'confirmada') {
        tagClass = 'bg-green-100 text-green-700';
        tagLabel = 'confirmada';
    } else if (estado === 'cancelada') {
        tagClass = 'bg-red-100 text-red-700';
        tagLabel = 'cancelada';
    }

    return (
        <div className="flex justify-between items-start py-4 border-b border-gray-100 last:border-b-0">
            <div>
                <p className="text-md font-semibold text-gray-900">{fecha}</p>
                <p className="text-sm text-gray-600 mt-1">{consultorio}</p>
            </div>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagClass}`}>{tagLabel}</span>
        </div>
    );
};


// --- Componente Principal de la Página "Historial Clínico" ---
interface HistorialPageProps {
  params: { id: string };
}

export default async function HistorialPage({ params }: HistorialPageProps) {
    const paciente = getPacienteData(params.id);

    return (
        <div className="space-y-8">
            
            {/* 1. Encabezado */}
            <header className="space-y-3">
                <Link href="/pacientes" className="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium transition">
                    <ArrowLeft size={16} className="mr-2" />
                    Volver a Pacientes
                </Link>
                <h1 className="text-3xl font-semibold text-gray-900">{paciente.nombre}</h1>
                <p className="text-gray-600">Expediente del paciente</p>
            </header>

            {/* 2. Contenido Principal: 2 Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Columna 1: Información Personal (1/3) */}
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200 lg:col-span-1 h-full">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-3">Información Personal</h2>
                    
                    <div className="space-y-4 text-sm text-gray-700">
                        
                        <p className="flex items-center space-x-3"><User size={18} className="text-gray-500" /> <span>**Edad**</span>: {paciente.edad} años</p>
                        <p className="flex items-center space-x-3"><Heart size={18} className="text-gray-500" /> <span>**Género**</span>: {paciente.genero}</p>
                        <p className="flex items-center space-x-3"><Mail size={18} className="text-gray-500" /> <span>**Email**</span>: {paciente.email}</p>
                        <p className="flex items-center space-x-3"><Phone size={18} className="text-gray-500" /> <span>**Teléfono**</span>: {paciente.telefono}</p>
                        <p className="flex items-center space-x-3"><Calendar size={18} className="text-gray-500" /> <span>**Fecha de Nacimiento**</span>: {paciente.fechaNacimiento}</p>
                        <p className="flex items-center space-x-3"><AlertTriangle size={18} className="text-gray-500" /> <span>**Tipo de Sangre**</span>: {paciente.tipoSangre}</p>

                        <div className="pt-3 border-t border-gray-100">
                            <p className="text-gray-900 font-semibold mb-2">Alergias</p>
                            <div className="flex flex-wrap gap-2">
                                {paciente.alergias.map(alergia => (
                                    <AllergyTag key={alergia} label={alergia} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Columna 2: Historial de Citas (2/3) */}
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200 lg:col-span-2">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-3">Historial de Citas</h2>
                    <p className="text-gray-600 text-sm mb-4">Citas realizadas con este paciente</p>

                    <div className="divide-y divide-gray-100">
                        {paciente.citas.map(cita => (
                            <CitaItem 
                                key={cita.fecha}
                                fecha={cita.fecha}
                                consultorio={cita.consultorio}
                                estado={cita.estado as 'completada' | 'confirmada' | 'cancelada'}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    );
}