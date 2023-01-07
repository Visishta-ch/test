import React, { useEffect, useState, useRef } from 'react';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { RxDoubleArrowLeft } from 'react-icons/rx';
import styles from './Product.module.css';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Product = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);
  const [title, setTitle] = useState();
  const [brand, setBrand] = useState();
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [prodId, setProdId] = useState();
  const titleRef = useRef();
  const brandRef = useRef();

  const getProductDetails = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    if (data && data.products) {
      setProducts(data.products);
    }
  };
  
  useEffect(() => {
    getProductDetails();
  }, []);

  const toggle = () => {
    setModal(!modal);
  };

  /* function to handle pagination */
  const nextPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 3 &&
      selectedPage !== pages
    ) {
      setPages(selectedPage);
    }

    console.log('nextPageHandler', selectedPage);
  };

  /*function to get Edit details on the modal pop up */
  const EditHandler = (id, index) => {
    setModal(true);
    setTitle(id.title);
    setBrand(id.brand);
    setEdit(true);
    setProdId(index);
  };
  /*updating product item ---- dummy  */
  const submitHandler = (id) => {
    const temp = [...products];
    temp[id].title = titleRef.current.value;
    temp[id].brand = brandRef.current.value;
    setModal(false);
  };

  return (
    <section className={styles.container}>
      {products.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Product Title</th>
              <th scope="col">Brand</th>
              <th scope="col">Rating</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" placeholder="Search Product Title..." />
              </td>
              <td>
                <input type="text" placeholder="Search Product Brand..." />
              </td>
              <td>
                <input type="text" placeholder="Search Product Rating..." />
              </td>
              <td>
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </td>
            </tr>
            {products.slice(pages * 3 - 3, pages * 3).map((product, index) => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{product.rating}</td>
                  <td>
                    <button
                      type="button"
                      className={styles.editBtn}
                      onClick={() => EditHandler(product, index)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* code for pagination  */}
      {products.length > 0 && (
        <>
          <div className="pagination">
            <span
              style={{
                borderRadius: '10px 0px 0px 10px',
                backgroundColor: 'white',
              }}
              onClick={() => nextPageHandler(pages - 1)}
            >
              <RxDoubleArrowLeft />
            </span>
            <span
              style={{ backgroundColor: 'white' }}
              onClick={() => nextPageHandler(pages - 1)}
            >
              Previous
            </span>
            <span style={{ backgroundColor: 'green', color: 'white' }}>
              {pages}
            </span>
            <span
              style={{ backgroundColor: 'white' }}
              onClick={() => nextPageHandler(pages + 1)}
            >
              Next
            </span>
            <span
              style={{
                borderRadius: '0px 10px 10px 0px',
                backgroundColor: 'white',
              }}
              onClick={() => nextPageHandler(pages + 1)}
            >
              <RxDoubleArrowRight />
            </span>
          </div>
          <span
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              color: 'gray',
            }}
          >
            Showing {pages !== 1 ? pages * 2 + (pages - 2) : 1} - {pages * 3} 
            out of {products.length} results
          </span>
        </>
      )}
      {/* Pop up for editing product item  */}
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
        <ModalBody>
          <form className="form">
            <div className="modal-tab">
              <label>title</label>
              <input
                type="text"
                name="title"
                ref={titleRef}
                value={title}
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="modal-tab">
              <label>Brand</label>
              <input
                type="text"
                name="title"
                ref={brandRef}
                value={brand}
                id="title"
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-secondary" onClick={toggle}>
            Close
          </button>
          {edit && (
            <button
              className="btn btn-primary"
              onClick={() => submitHandler(prodId)}
            >
              Submit
            </button>
          )}
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default Product;
