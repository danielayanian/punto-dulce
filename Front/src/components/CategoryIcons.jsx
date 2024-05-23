

import '../scss/layouts/CategoryIcons.scss';

const CategoryIcons = () => {
 
  const categories = [
    { name: 'Chocolates', image: 'choco.jpg' },
    { name: 'Alfajores', image: 'alfajores.jpg' },
    { name: 'Bombones', image: 'bombon.jpg' },
    { name: 'Chupetines y Chicles', image: 'gum.jpg' },
    { name: 'Caramelos y Gomitas', image: 'gum.jpg' },
    { name: 'Galletitas y Barritas', image: 'galletas.jpg' },
  ];

  return (
    <div className="category-icons">
      {categories.map((category, index) => (
        <div key={index} className="category-icon">
          <img src={category.image} alt={category.name} />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryIcons;
