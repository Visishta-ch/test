import React from 'react';
import Products from './Product';
import styles from  './ProductPage.module.css'

const ProductPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Products List</h1>
        <div>
          <button type="button" className="btn btn-success p-2 mx-3">
            Add Product
          </button>
          <button type="button" className="btn btn-success p-2 mx-3">
            Import
          </button>
          <button type="button" className="btn btn-success p-2 mx-3">
            Export
          </button>
        </div>
      </div>

      <Products />
    </section>
  );
};

export default ProductPage;
