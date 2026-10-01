import styles from './Inicio.module.css'; // O CSS tradicional según uses

const Inicio = () => {
  return (
    <div className={styles.portadaContainer}>
      <img 
        src="/img/portada.avif" 
        alt="Portada principal" 
        className={styles.portadaImagen} 
      />
    </div>
  );
};

export default Inicio;