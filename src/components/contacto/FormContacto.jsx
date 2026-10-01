
import styles from './FormContacto.module.css';

const FormContacto = ({ manejarCambio, manejarEnvio, datosForm, envio, mensajeExito }) => {
  return (
    <form onSubmit={manejarEnvio} className={styles.form}>
      <h3>Envíanos tu consulta</h3>

      {mensajeExito && (
        <div className={styles.alertaExito}>
          ¡Gracias por contactarte! Te responderemos a la brevedad.
        </div>
      )}

      <div className={styles.campo}>
        <label htmlFor="nombre">Nombre:</label>
        <input 
          id="nombre"
          name="nombre"
          type="text" 
          value={datosForm.nombre} 
          onChange={manejarCambio} 
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={datosForm.email}
          onChange={manejarCambio}
          required
        />
      </div>

      <div className={styles.campo}>
        <label htmlFor="comentario">Comentario / Mensaje:</label>
        <textarea 
          id="comentario"
          name="comentario"
          rows="4"
          value={datosForm.comentario} 
          onChange={manejarCambio} 
          required
        />
      </div>

      <button type="submit" disabled={envio} className={styles.botonSubmit}>
        {envio ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
};

export default FormContacto;