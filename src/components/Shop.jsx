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
const milanesa =
  "https://vinomanos.com/wp-content/uploads/2019/02/milanesas-receta.jpg";
const fideo = "https://i.blogs.es/fb6298/salsa_bolonesa_rec/840_560.jpg";
const ensalada =
  "https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg";
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
      description: "Hamburguesa completa",
      imageUrl: hamburgesa,
    },
    {
      id: 2,
      title: "Papas fritas",
      price: 6.99,
      quantity: 0,
      description: "Porcion de fritas",
      imageUrl: papitas,
    },
    {
      id: 3,
      title: "Pancho",
      price: 7.49,
      quantity: 0,
      description: "Porcion de 3 panchos",
      imageUrl: panchito,
    },
    {
      id: 4,
      title: "Taco",
      price: 8.49,
      quantity: 0,
      description: "Porcion de 2 Tacos",
      imageUrl: tacos,
    },
    {
      id: 5,
      title: "Milanesa",
      price: 11.49,
      quantity: 0,
      description: "Milanesa acompañada de papas fritas",
      imageUrl: milanesa,
    },
    {
      id: 6,
      title: "Tallarines",
      price: 10.49,
      quantity: 0,
      description: "Plato de tallarines con salsa bolognesa",
      imageUrl: fideo,
    },
    {
      id: 7,
      title: "Ensalada",
      price: 9.49,
      quantity: 0,
      description: "Ensalada cesar con pollo",
      imageUrl: ensalada,
    },
  ]);
  const [totalQuantity, setTotalQuantity] = useState(0);

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
