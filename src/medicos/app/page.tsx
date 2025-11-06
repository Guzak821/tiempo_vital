// src/app/page.tsx

import { Calendar, Users, Stethoscope, Star } from 'lucide-react'; 

// Componente Card para reutilizar en los resúmenes 
const DashboardCard = ({ title, value, detail, icon: Icon }: { title: string, value: string, detail: string, icon: React.ElementType }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between h-full">
    <div className="flex justify-between items-start">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <Icon className="text-gray-400" size={20} />
    </div>
    <p className="mt-4 text-4xl font-extrabold text-gray-900 leading-none">{value}</p>
    <p className="mt-2 text-sm text-gray-500">{detail}</p>
  </div>
);

// Componente principal de la página (¡Ahora es la página de inicio!)
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* Título de Bienvenida */}
      <header>
        <h1 className="text-3xl font-semibold text-gray-900">Bienvenido, Doctor</h1>
        <p className="text-gray-600 mt-1">Aquí está el resumen de tu práctica médica</p>
      </header>

      {/* Grid de Resumen (Las 4 Tarjetas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Citas Confirmadas" 
          value="0" 
          detail="Próximas citas programadas" 
          icon={Calendar} 
        />
        {/* ... (Las otras 3 tarjetas) ... */}
        <DashboardCard 
          title="Pacientes Atendidos" 
          value="0" 
          detail="Total de pacientes" 
          icon={Users} 
        />
        <DashboardCard 
          title="Consultorios Activos" 
          value="0" 
          detail="Ubicaciones registradas" 
          icon={Stethoscope} 
        />
        <DashboardCard 
          title="Calificación" 
          value="0.0" 
          detail="0 calificaciones" 
          icon={Star} 
        />
      </div>

      {/* Sección: Completa tu perfil */}
      <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Completa tu perfil</h2>
        <p className="text-gray-600 mt-2">
          Para comenzar a usar la plataforma, necesitas completar tu perfil profesional.
        </p>
      </section>

      {/* Sección: Panel de Control */}
      <section className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Panel de Control</h2>
        <p className="text-gray-600 mt-2">
          Gestiona tu práctica médica desde este panel. Puedes ver tus citas, pacientes, consultorios y más.
        </p>
      </section>
      
    </div>
  );
}