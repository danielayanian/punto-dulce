// import UserCard from "./UserCard/UserCard";

import UserCard from "./UserCard/UserCard.jsx";

// const opinionData = [
//   {
//     imageUrl: "user1.jpg",
//     userName: "Juan Pérez",
//     userOpinion: "¡Excelente producto Superó todas mis expectativas.",
//     rating: 5,
//   },
//   {
//     imageUrl: "user2.jpg",
//     userName: "María García",
//     userOpinion:
//       "Delicioso, lástima no tener cerca una tienda física, compraría mucho más a menudo.",
//     rating: 4,
//   },
// ];

const userData = {
    imageUrl: "ruta/a/imagen.jpg", // Reemplaza esto con la ruta real a la imagen del usuario
    userName: "Nombre del Usuario", // Reemplaza esto con el nombre real del usuario
    userOpinion: "Esta es una opinión del usuario.", // Reemplaza esto con la opinión real del usuario
    rating: 4, // Reemplaza esto con la calificación real del usuario
  };
export const Opinions = () => {
 
  return (
    // <div className="container">
    //   <h3>OPINIONES</h3>
    //   {opinionData.map((opinion, index) => (
    //     <UserCard key={index} {...opinion} />
    //   ))}
    // </div>
    <>
    <h2>Card</h2>
    <UserCard {...userData} />
    </>

  );
};

export default Opinions;
