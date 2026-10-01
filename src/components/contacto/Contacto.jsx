import FormContactoContainer from "./FormContactoContainer";
import styles from "./Contacto.module.css";


const Contacto = () => {
  return (
    <section className={styles.contactoPage}>
      <h1>Contacto</h1>
      <p>¿Tenés alguna duda o querés consultar por una cita? Escribinos.</p>

      <div className={styles.contactoGrid}>
        <div className={styles.infoDirecta}>
          <h3>Información de Atención</h3>
          <p>📍 Dirección: Av. Principal 1234, CABA</p>
          <p>📞 Teléfono: +54 11 4444-5555</p>
          <p>✉️ Email: contacto@galayglamour.com</p>
          <p>🕒 Horarios: Lunes a Viernes de 10:00 a 19:00 hs</p>
        </div>

        <div className={styles.formWrapper}>
          <FormContactoContainer />
        </div>
      </div>
    </section>
  );
};

export default Contacto;