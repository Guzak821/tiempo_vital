// src/app/dashboard/layout.tsx

import React from 'react';
import Header from '../../components/Header/header'; 

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50"> {/* Ajusta el color de fondo */}
      {/* Aquí iría la Sidebar si tuvieras una */}
      
      <div className="flex-1 overflow-y-auto">
        
        {/* Componente del Header Fijo (el sticky.. hace que el header se quede arriba
        con el top-0 y el z-10 hace que no exista otro elemento arriba de el*/}
        <header className="sticky top-0 z-10 bg-white shadow-md"> 
          <Header />
        </header>
        
        {/* Contenido de la página (el Dashboard, Agenda, etc.) */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}