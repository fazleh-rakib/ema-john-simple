import React, { useEffect, useState } from "react";

const Test = () => {
  const products = [
    {
      id: 1234,
      name: "Seeting Chair Ultra",
      price: 200,
      img: "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/3aaa3d4c-33d5-4df8-8dc2-17fb1a0f302a/15.jpg",
      description: "lorem ispom",
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }, []);

  console.log(data);

  return (
    <div>
      <div>Cart: 0</div>
      {data.map((product, index) => {
        return (
          <div
            key={product.id}
            style={{
              backgroundColor: "gray",
              display: "flex",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            <img src={product.img} alt="" style={{ width: "150px" }} />
            <div>
              <h4>{product.name}</h4>
              <h5>PRICE: {product.price}$</h5>
              <p>{product.description}</p>
              <div
                style={{
                  display: "flex",
                }}
              >
                <button
                  style={{
                    backgroundColor: "purple",
                  }}
                >
                  -
                </button>
                <input type="number" />
                <button
                  style={{
                    backgroundColor: "purple",
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
