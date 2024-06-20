import styles from './OtherBrands.module.css'

const OtherBrands = () => {
  const brands = [
    {
      id: 1, // Assuming each brand has a unique ID
      name: "flynpaf",
      imageUrl: "/img/flynpaf.png",
    },
    {
      id: 2,
      name: "vaquita",
      imageUrl: "/img/vaquita.png",
    },
    {
      id: 3,
      name: "terrabusi",
      imageUrl: "/img/terrabusi.png",
    },
    {
      id: 4,
      name: "Fellfor",
      imageUrl: "/img/felfort.png",
    },
    {
      id: 5,
      name: "arcor",
      imageUrl: "/img/arcor.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ALGUNA DE NUESTRAS MARCAS</h3>
      <div className={styles.brandStyle}>
        {brands.map((brand) => (
          <div key={brand.id}>
            <img src={brand.imageUrl} alt={brand.name}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBrands;