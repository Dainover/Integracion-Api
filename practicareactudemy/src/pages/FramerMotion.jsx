import { motion, useMotionValue } from 'framer-motion';
import { useState } from 'react';

const FramerMotion = () => { 
  const [accionVisible, setAccionVisible] = useState(null); 
  const x = useMotionValue(0); 

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const umbral = 70;

    if (offset < -umbral || velocity < -500) {
      console.log('Acción demostrativa: Eliminar'); // Mensaje genérico
    } else if (offset > umbral || velocity > 500) {
      console.log('Acción demostrativa: Archivar'); // Mensaje genérico
    }
    
    setAccionVisible(null); 
  };

  const handleDrag = (event, info) => {
    const offset = info.offset.x;
    if (offset < -10) { 
      setAccionVisible('eliminar');
    } else if (offset > 10) { 
      setAccionVisible('archivar');
    } else {
      setAccionVisible(null);
    }
  };

  // Determinar el color de fondo basado en la acción visible
  let backgroundColorForArea = 'transparent'; // Color por defecto para el área de acción, transparente
  let textoAccion = null;

  if (accionVisible === 'eliminar') {
    backgroundColorForArea = 'rgba(255, 0, 0, 0.3)'; // Rojo translúcido
    textoAccion = <h5 style={{ color: 'white', margin: 0 }}>Eliminando</h5>;
  } else if (accionVisible === 'archivar') {
    backgroundColorForArea = 'rgba(0, 0, 255, 0.3)'; // Azul translúcido
    textoAccion = <h5 style={{ color: 'white', margin: 0 }}>Archivando</h5>;
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '20px auto', overflow: 'hidden', border: '1px dashed #ccc', padding: '0px' /* Ajustado padding del contenedor principal */ }}>
      {/* <p style={{textAlign: 'center', marginBottom: '10px'}}>Componente de Demostración Swipe</p> */}
      {/* Fondo que cambia de color y muestra texto */} 
      <motion.div style={{
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
        display: 'flex', 
        alignItems: 'center', 
        // justifyContent se maneja por la posición del textoAccion
        backgroundColor: backgroundColorForArea, // Aplicamos el color de fondo dinámico
        padding: '0 20px',
        zIndex: 0 // Asegurar que esté detrás del elemento deslizable
      }}>
        {/* Mostrar el texto de la acción */} 
        {accionVisible === 'archivar' && (
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-start' }}>
            {textoAccion}
          </div>
        )}
        {accionVisible === 'eliminar' && (
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {textoAccion}
          </div>
        )}
         {/* Si no hay acción visible, podemos dejar espacios o nada */} 
         {!textoAccion && <div style={{flexGrow:1}}></div>} {/* Espacio para mantener la estructura de flex si es necesario */} 
      </motion.div>

      {/* Elemento deslizable */} 
      <motion.div
        drag="x"
        style={{ 
          x, 
          padding: '20px',
          backgroundColor: 'white',
          border: '1px solid #ddd',
          position: 'relative', // Para que esté sobre el fondo
          cursor: 'grab',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          textAlign: 'center',
          zIndex: 1 // Asegurar que esté por encima del fondo
        }}
        dragConstraints={{ left: 0, right: 0 }} 
        onDragEnd={handleDragEnd}
        onDrag={handleDrag}
        whileTap={{ cursor: 'grabbing' }}
      >
        Deslízame
      </motion.div>
    </div>
  );
};

export default FramerMotion;

// Ejemplo de cómo se usaría este componente en otra parte de tu aplicación:
// const MiPaginaConSwipeDemo = () => {
//   return (
//     <div>
//       <h2>Demostración de Swipe</h2>
//       <FramerMotion />
//       <FramerMotion /> 
//     </div>
//   );
// };