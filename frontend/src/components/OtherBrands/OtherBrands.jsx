import styles from './OtherBrands.module.css'

const OtherBrands = () => {
  const brands = [
    {
      id: 1,
      name: "flynpaf",
      imageUrl: "../../../public/img/flypaf.png",
    },
    {
      id: 2,
      name: "vaquita",
      imageUrl: "../../../public/img/vaquita.png",
    },
    {
      id: 3,
      name: "terrabusi",
      imageUrl: "../../../public/img/terrabusi.png",
    },
    {
      id: 4,
      name: "Fellfor",
      imageUrl: "../../../public/img/felfort.png",
    },
    {
      id: 5,
      name: "arcor",
      imageUrl: "../../../public/img/arcor.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ALGUNA DE NUESTRAS MARCAS</h3>
      <div className={styles.brandStyle}>
        {brands.map((brand) => (
          <div>
            <div key={brand.id}></div>
            <img src={brand.imageUrl} alt={brand.name}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBrands;
