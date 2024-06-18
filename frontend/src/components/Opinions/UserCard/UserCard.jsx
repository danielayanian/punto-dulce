import styles from "../UserCard/UserCard.module.css";

const UserCard = ({ user, opinion, rating }) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      // Use the index as a key, assuming the list of stars won't change dynamically
      stars.push(<span key={i} className={styles.star}>&#9733;</span>);
    }
    return stars;
  };
  return (
    <>
      <div className={styles.container}>
        <img
          src={user.avatar}
          alt={`Avatar de ${user.name}`}
          className={styles.icon}
        />
        <div className={styles.containerSmall}>
          <h2 className={styles.userName}>{user.name}</h2>
          <p className={styles.opinionSection}>{opinion}</p>
          <div>{renderStars()}</div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
