// src/app/ranking/page.tsx

import { Star, TrendingUp, Lock } from 'lucide-react';

// --- Componente: Tarjeta de Resumen (Calificaciones) ---
const RankingCard = ({ title, value, detail, icon: Icon, valueClass = 'text-3xl font-extrabold' }: { title: string, value: React.ReactNode, detail: string, icon: React.ElementType, valueClass?: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
    <div className="flex justify-between items-start">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <Icon className="text-gray-400" size={20} />
    </div>
    <p className={`mt-2 text-gray-900 ${valueClass}`}>{value}</p>
    <p className="mt-1 text-sm text-gray-500">{detail}</p>
  </div>
);

// --- Componente: Renderizado de Estrellas ---
const RatingStars = ({ rating }: { rating: number }) => {
  // Crea un array de 5 elementos. Llena las estrellas basadas en el rating.
  return (
    <div className="flex space-x-0.5">
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <Star 
          key={starIndex}
          size={16}
          // Si el índice es menor o igual al rating, la estrella está llena (fill)
          className={`
            ${starIndex <= rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          `}
        />
      ))}
    </div>
  );
};

// --- Componente: Elemento de Calificación Reciente ---
const CalificacionItem = ({ name, rating, comment, date }: { name: string, rating: number, comment: string, date: string }) => (
  <div className="flex justify-between py-4 border-b border-gray-100 last:border-b-0">
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <RatingStars rating={rating} />
      <p className="text-gray-700 mt-1">{comment}</p>
    </div>
    <span className="text-sm text-gray-500">{date}</span>
  </div>
);


// --- Componente Principal de la Página "Mi Ranking" ---
export default function RankingPage() {
    
    // Simulación de datos
    const promedio = 4.0; 

    return (
        <div className="space-y-8">
            
            {/* 1. Título y Subtítulo */}
            <header>
                <h1 className="text-3xl font-semibold text-gray-900">Mi Ranking</h1>
                <p className="text-gray-600 mt-1">Visualiza tus calificaciones y posición</p>
            </header>

            {/* 2. Grid de Tarjetas de Resumen */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <RankingCard 
                    title="Calificación Promedio" 
                    icon={Star}
                    value={
                        <div className="flex items-center space-x-2">
                            <span className="text-4xl font-extrabold">{promedio.toFixed(2)}</span>
                            <Star size={24} className="text-yellow-500 fill-yellow-500" />
                        </div>
                    }
                    detail="de 5.00 estrellas"
                    valueClass="" // Clase vacía porque el valor es un div personalizado
                />

                <RankingCard 
                    title="Total Calificaciones" 
                    icon={TrendingUp}
                    value="127" 
                    detail="opiniones recibidas"
                />

                <RankingCard 
                    title="Estado" 
                    icon={Lock}
                    value={
                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                            Verificado
                        </span>
                    } 
                    detail="perfil profesional"
                    valueClass="mt-3" // Clase para alinear el span
                />
            </div>

            {/* 3. Calificaciones Recientes */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-3">Calificaciones Recientes</h2>
                <p className="text-gray-600 text-sm mb-4">Últimas opiniones de tus pacientes</p>
                
                <div className="divide-y divide-gray-100">
                    <CalificacionItem 
                        name="Maria González"
                        rating={5}
                        comment="Excelente atención, muy profesional y dedicado."
                        date="14/1/2024"
                    />
                    <CalificacionItem 
                        name="Carlos Ramirez"
                        rating={4}
                        comment="Muy buen doctor, explica todo con claridad."
                        date="9/1/2024"
                    />
                    <CalificacionItem 
                        name="Ana Martínez"
                        rating={3}
                        comment="Buena atención, aunque la espera fue un poco larga."
                        date="4/1/2024"
                    />
                </div>
            </div>
            
        </div>
    );
}