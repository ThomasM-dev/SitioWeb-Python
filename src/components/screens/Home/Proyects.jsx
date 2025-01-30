import React, { useEffect, useState } from 'react';

const Proyects = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: scrollY * 0.5, // Ajusta el factor según sea necesario
      }}
    >
      Componente Vinculado al Desplazamiento
    </div>
  );
};

export default Proyects;
