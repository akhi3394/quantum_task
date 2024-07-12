import React from 'react';

const Products = () => {
  const productData = [
    {
      id: 1,
      image: 'path/to/image1.jpg',
      title: 'Product 1',
      description: 'Description of Product 1',
    },
    {
      id: 2,
      image: 'path/to/image2.jpg',
      title: 'Product 2',
      description: 'Description of Product 2',
    },
    {
      id: 3,
      image: 'path/to/image3.jpg',
      title: 'Product 3',
      description: 'Description of Product 3',
    },
  ];

  return (
    <div className="container my-5">
        <div className="text-center mt-2">
            <h1>Products</h1>
        </div>
      <div className="row m-5">
        {productData.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
