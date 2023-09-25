/* eslint-disable react/prop-types */
"use client";
import { useState } from "react";
import "./Shop.css";
import { Product } from "./product";
const hamburgesa =
  "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/NOLA/calcmenu/recipes/col-recipies/fruco-tomate-cocineros/HAMBURGUESA%201200x709.png";
const papitas =
  "https://www.latercera.com/resizer/0YEtlHHePxP7jp5G1fos_OIiYRM=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/YTWYVWWUZJEGRHE7KAZHLFHQQM.jpg";
const panchito =
  "https://drcormillot.com.ar/wp-content/uploads/2023/04/salchicha_1_ok.jpg";
const tacos =
  "https://recetinas.com/wp-content/uploads/2022/06/tacos-mexicanos.jpg";
const milanguesa =
  "https://vinomanos.com/wp-content/uploads/2019/02/milanesas-receta.jpg";
const fideo = "https://i.blogs.es/fb6298/salsa_bolonesa_rec/840_560.jpg";
const pene =
  "https://www.recetasnestle.com.mx/sites/default/files/srh_recipes/0f7c0163c4e25857cf7cf53ae1447a2a.jpg";
const Shop = () => {
  const [font, setFont] = useState(16);
  const handleFontSizeChange = (e) => {
    setFont(e.target.value);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Hamburguesa",
      price: 10.99,
      quantity: 0,
      description: "This is a great product!",
      imageUrl: hamburgesa,
    },
    {
      id: 2,
      title: "Papitas",
      price: 19.99,
      quantity: 0,
      description: "You will love this product!",
      imageUrl: papitas,
    },
    {
      id: 3,
      title: "Pancho",
      price: 15.49,
      quantity: 0,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad assumenda soluta modi ipsa dolores ipsum in fugiat, corrupti quae alias?",
      imageUrl: panchito,
    },
    {
      id: 4,
      title: "Taco",
      price: 15.49,
      quantity: 0,
      description: "This product is a must-have!",
      imageUrl: tacos,
    },
    {
      id: 5,
      title: "Milanga",
      price: 15.49,
      quantity: 0,
      description: "This product is a must-have!",
      imageUrl: milanguesa,
    },
    {
      id: 6,
      title: "Tallarines",
      price: 15.49,
      quantity: 0,
      description: "This product is a must-have!",
      imageUrl: fideo,
    },
    {
      id: 7,
      title: "Pene",
      price: 15.49,
      quantity: 0,
      description: "This product is a must-have!",
      imageUrl: pene,
    },
    // Add more products here
  ]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // const total = updatedProducts.reduce((acc, product) => acc + product.quantity, 0);
  // setProducts(updatedProducts);
  // setTotalQuantity(total);
  const handleChangeTotal = (data) => {
    setTotalQuantity(totalQuantity + data);
  };
  return (
    <div className="shop">
      <div className="total-quantity">
        <p>Total Quantity: {totalQuantity}</p>

        <div className="FontSizeTable">
          <p>Font size</p>
          <input
            type="range"
            min="12"
            max="32"
            value={font}
            onChange={(e) => handleFontSizeChange(e)}
          />
        </div>
      </div>
      {products.map(({ id, description, imageUrl, title, price, quantity }) => (
        <Product
          key={`${id}`}
          handleChangeTotal={handleChangeTotal}
          description={description}
          fontSize={font}
          imageUrl={imageUrl}
          title={title}
          price={price}
          quantity={quantity}
        />
      ))}
    </div>
  );
};
export default Shop;
