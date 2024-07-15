import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import "../public/css/paginacion.css";

export default function Pagination ({ currentPage, totalPages, onPageChange }) {
  
  return (
    <nav aria-label="Page Navigation Example" className="paginacion">
      <ul className="listado">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`boton modoOscuro`}
          >
            <FiChevronLeft className="icono" />
          </button>
        </li>
        <li className='modoOscuro letra'>
            Pag {currentPage} 
        </li>
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`boton modoOscuro`}
          >
            <FiChevronRight className="icono" />
          </button>
        </li>
      </ul>
    </nav>
  );
};