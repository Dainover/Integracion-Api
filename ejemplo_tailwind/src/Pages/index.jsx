import React, { useState } from 'react';
import Drawer from '../Components/Drawer'; // Asegúrate que la ruta sea correcta

const IndexPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Página Principal con Drawer</h1>
        <button
          onClick={toggleDrawer}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Abrir Drawer
        </button>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} title="Menú Lateral">
        {/* Contenido del Drawer */}
        <div className="space-y-2">
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Inicio</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Perfil</a>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Configuración</a>
          <hr className="my-2"/>
          <p className="px-4 text-sm text-gray-500">Más opciones...</p>
          <button 
            onClick={() => alert('Opción seleccionada!')} 
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
          >
            Opción 1
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default IndexPage; // Cambiado el nombre para seguir convenciones (PascalCase para componentes)