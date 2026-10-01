import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const anioActual = new Date().getFullYear();

  // Estados para gestionar el staff
  const [staff, setStaff] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('/datos/staff.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar la información del equipo');
        return res.json();
      })
      .then((datos) => setStaff(datos))
      .catch((err) => console.error('Error al cargar staff:', err))
      .finally(() => setCargando(false));
  }, []);

  return (
    <footer className={styles.footer}>
      {/* Sección del Staff */}
      <section className={styles.staffSection}>
        <h3>Nosotros: El Staff</h3>
        {cargando ? (
          <p className={styles.cargandoText}>Cargando equipo...</p>
        ) : (
          <div className={styles.staffGrid}>
            {staff.map((persona) => (
              <div key={persona.id || persona.nombre} className={styles.staffCard}>
                {persona.imagen && (
                  <img 
                    src={persona.imagen} 
                    alt={persona.nombre} 
                    className={styles.staffImagen} 
                  />
                )}
                <h4 className={styles.staffNombre}>{persona.nombre}</h4>
                {persona.rol && <p className={styles.staffRol}>{persona.rol}</p>}
                {persona.descripcion && (
                  <p className={styles.staffDescripcion}>{persona.descripcion}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Navegación existente */}
      <nav>
        <ul className={styles.footerNav}>
          <li className={styles.footerItem}>
            <a href="#acerca" className={styles.footerLink}>
              Acerca de Nosotros
            </a>
          </li>
          <li className={styles.footerItem}>
            <a href="#privacidad" className={styles.footerLink}>
              Política de Privacidad
            </a>
          </li>
          <li className={styles.footerItem}>
            <a href="/contacto" className={styles.footerLink}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* Copyright existente */}
      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>
          © {anioActual} Proyecto Vestidos - Entertech - React Js <span className={styles.brand}></span>
        </p>
        <p className={styles.copyright}>
          <span className={styles.brand}>Gala & Glamour</span> – Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;