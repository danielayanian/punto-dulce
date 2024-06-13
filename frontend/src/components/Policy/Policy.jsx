import styles from "./Policy.module.css";
import line from "../../../public/img/longLine.svg";
import Button from "../Button/Button";
import left from "../../../public/img/chevron-left.svg";
import { useNavigate  } from "react-router-dom";

export const Policy = () => {
  let navigate = useNavigate(); 

  const goBack = () => {
    navigate(-1); 
  };
  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>POLITICAS DE ENVIO</h2>
      <img src={line} className={styles.linestyle} />
      <ul>
        <li>
          Todos los envíos de golosinas son gratuitos para nuestros clientes.
        </li>
        <li>
          Los clientes tienen la opción de recoger su pedido en
          nuestro depósito o solicitar la entrega personalizada en su hogar.
        </li>
        <li>
          Para recoger en el depósito, programar una cita previamente para
          garantizar disponibilidad.
        </li>
        <li>
          Las entregas a domicilio se realizarán en un plazo de 1-3 días
          hábiles, dependiendo de la ubicación del cliente.
        </li>
        <li>
          En caso de ausencia en el momento de la entrega, se hará un intento
          adicional de entrega o se coordinará una nueva fecha.
        </li>
        <li>
          Para cualquier cambio en la dirección de entrega o consulta, contactar
          con nuestro equipo de atención al cliente.
        </li>
        <li>
          Distribuidora Punto Dulce se compromete a garantizar la calidad de los
          productos enviados y la satisfacción del cliente en cada pedido.
        </li>
      </ul>
      <Button
        text="Atras"
        icon={left} 
        onClick={goBack}
      />
    </div>
  );
};

export default Policy;

//   notes = [
//     {
//       num: "Todos los envíos de golosinas son gratuitos para nuestros clientes.",
//     },
//     {
//       num: "Los clientes tienen la opción de recoger su pedido en nuestro depósito o solicitar la entrega personalizada en su hogar.",
//     },
//     {
//       num: "Para recoger en el depósito, programar una cita previamente para garantizar disponibilidad.",
//     },
//     {
//       num: "Las entregas a domicilio se realizarán en un plazo de 1-3 días hábiles, dependiendo de la ubicación del cliente.",
//     },
//     {
//       num: "En caso de ausencia en el momento de la entrega, se hará un intento adicional de entrega o se coordinará una nueva fecha.",
//     },
//     {
//       num: "Para cualquier cambio en la dirección de entrega o consulta, contactar con nuestro equipo de atención al cliente.",
//     },
//     {
//       num: "Distribuidora Punto Dulce se compromete a garantizar la calidad de los productos enviados y la satisfacción del cliente en cada pedido.",
//     },
//   ];

// <div>
//   {notes.map((note) => (
//     <p key={note.num}>{note.num}</p>
//   ))}
// </div>

//notes is not defined es un error que no puedo arreglar por el momento
