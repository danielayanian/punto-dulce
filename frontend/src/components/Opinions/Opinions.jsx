import UserCard from "./UserCard/UserCard.jsx";
import styles from "../Opinions/Opinions.module.css";

export const Opinions = () => {
  const userData = [
    { id: 1, name: 'Usuario 1', avatar: '../../../public/img/user.png', opinion: 'Excelente servicio y buena predisposicion.', rating: 5},
    { id: 2, name: 'Usuario 2', avatar: '../../../public/img/user.png', opinion: 'La atencion es impecable' , rating: 3},
   
  ];
  return (
    <>
       <div>
        <h2 className={styles.title} >OPINANA NUESTROS CLIENTES</h2>
    {userData.map(user => (
      <UserCard key={user.id} user={user} opinion={user.opinion} rating={user.rating}/>
    ))}
  </div>
    </>
  );
};

export default Opinions;
