// src/app/layout.tsx
import React from 'react';
import Header from '../components/Header/Header'; 
import '../app/globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <div className="flex min-h-screen bg-gray-50"> {/* Fondo gris claro */}
          
          <div className="flex-1 overflow-y-auto">
            
            {/* Componente del Header Fijo */}
            <header className="sticky top-0 z-10 bg-white shadow-md"> 
              <Header />
            </header>
            
            {/* Contenido de la página (el Dashboard, Agenda, etc.) */}
            <main className="p-6">
              {children} {/* Aquí se renderizará page.tsx del Dashboard */}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}