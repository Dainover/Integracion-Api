import { Link } from "react-router-dom";
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const UltilesSwiper = () => {
  return (
    <div>
        <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <Link to='/utiles'>Utiles</Link> {/* Cambiado para que coincida con el texto del enlace si es 'Utiles' */}
            </li>
            <li className='breadcrumb-item active' aria-current='page'> {/* Corregido 'acitve' a 'active' */}
               Swiper
            </li>
        </ol>
      </nav>
      <h1>Swiper - Carrusel Básico</h1>

      {/* 3. Añade el componente Swiper */}
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{height: '300px', border: '1px solid #eee'}} // Añade un poco de estilo para visualizarlo
      >
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0'}}>Slide 1</SwiperSlide>
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0'}}>Slide 2</SwiperSlide>
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#d0d0d0'}}>Slide 3</SwiperSlide>
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c0c0c0'}}>Slide 4</SwiperSlide>
      </Swiper>

      <h2 style={{marginTop: '20px'}}>Swiper - Con más opciones</h2>
       <Swiper
        spaceBetween={30} // Espacio entre slides
        slidesPerView={3} // Cuántos slides se ven a la vez
        loop={true} // Para que sea un bucle infinito
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper2"
        style={{height: '200px', border: '1px solid #ccc', marginTop: '10px'}}
      >
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#aae'}}>Slide A</SwiperSlide>
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#aba'}}>Slide B</SwiperSlide>
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#baa'}}>Slide C</SwiperSlide>
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bab'}}>Slide D</SwiperSlide>
        <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#bba'}}>Slide E</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default UltilesSwiper
