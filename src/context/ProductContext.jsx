import { createContext, useEffect, useState } from "react";
import data from "../../src/data.json";

export const ProductContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [invoice, setInvoice] = useState({ count: 0, subTotal: 0 });
  const [message, setMessage] = useState('');

  const addCart = (product) => {
    setCart((prevCart) => {
      let previous = [...prevCart];
      const isProduct = previous.find((prod) => prod.id === product.id);
      if (!isProduct) {
        previous.push({ ...product, quantity: 1 });
      } else {
        previous = previous.map((prod) =>
          prod.id === isProduct.id
            ? { ...isProduct, quantity: isProduct.quantity + 1 }
            : prod
        );
      }
      return previous;
    });
  };

  const removeCart = (product) => {
    setCart((oldCart) => {
      let previous = [...oldCart];
      const isProduct = previous.find((prod) => prod.id === product.id);
      if (isProduct) {
        const index = previous.indexOf(isProduct);
        previous.splice(index, 1);
      }
      return previous;
    });
  };


  const setInvoiceData = () => {
    setInvoice((previous) => {
      let newInvoice = { ...previous, count: 0, subTotal: 0 };
      cart.forEach((product) => {
        newInvoice.count += product.quantity;
        newInvoice.subTotal += product.quantity * product.price;
      });
      return newInvoice;
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setInvoiceData();
  }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        products,
        addCart,
        cart,
        setCart,
        removeCart,
        invoice,
        setInvoice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
