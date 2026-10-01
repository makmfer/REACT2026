import { useState } from "react";
import FormContacto from "./FormContacto";

const FormContactoContainer = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    email: "",
    comentario: "",
  });
  const [envio, setEnvio] = useState(false);
  const [mensajeExito, setMensajeExito] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setEnvio(true);

    setTimeout(() => {
      console.log("Enviado:", datosForm);
      setEnvio(false);
      setMensajeExito(true);

      setDatosForm({
        nombre: "",
        email: "",
        comentario: "",
      });

      setTimeout(() => setMensajeExito(false), 3000);
    }, 1200);
  };

  return (
    <FormContacto
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      datosForm={datosForm}
      envio={envio}
      mensajeExito={mensajeExito}
    />
  );
};

export default FormContactoContainer;
