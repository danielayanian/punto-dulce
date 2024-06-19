import UserCard from "./UserCard/UserCard.jsx";
import styles from "../Opinions/Opinions.module.css";

export const Opinions = () => {
  const userData = [
    { id: 1, name: 'Usuario 1', avatar: '../../../public/img/user.png', opinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae id odit fuga laboriosam eaque minima illo eos iure alias excepturi necessitatibus, molestiae veritatis sed repellat, quos assumenda deserunt ab ', rating: 5},
    { id: 2, name: 'Usuario 2', avatar: '../../../public/img/user.png', opinion: 'La Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vitae id odit fuga laboriosam eaque minima illo eos iure alias excepturi necessitatibus, molestiae veritatis sed repellat, quos assumenda deserunt ab es impecable ' , rating: 3},
   
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
