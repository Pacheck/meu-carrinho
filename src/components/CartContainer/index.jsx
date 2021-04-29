import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';
import CartProduct from '../CartProduct';
import {
  Container,
  CartTitle,
  Title,
  CartItems,
  CartInfo,
  CartCheckout,
  CartTotal,
  Total,
  TotalValue,
  CheckoutButton,
  FreteMessage,
  Message,
} from './styles';

const CartContainer = ({ path }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(null);
  const [freeShipping, setFreeShipping] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      const response = await api.get(path);
      toast.success('Carrinho de compras atualizado!');
      setProducts(response.data.items);
      setConnectionError(false);
      setIsLoading(false);
    } catch (err) {
      toast.error('Houve um erro ao acessar o carrinho.');
      setConnectionError(true);
      setIsLoading(false);
    }
  }

  async function getTotalPrice() {
    if (products.length > 0) {
      const result = products.reduce(
        (acumulator, currentValue) => acumulator + currentValue.price,
        0
      );
      const splitedTotal = String(result).split('');
      if (splitedTotal.length > 3) {
        const filteredTotal = `R$ ${splitedTotal[0]}${splitedTotal[1]},${splitedTotal[2]}${splitedTotal[3]}`;
        setTotal(filteredTotal);
        setFreeShipping(true);
      } else {
        const filteredTotal = `R$ 0${splitedTotal[0]},${splitedTotal[1]}${splitedTotal[2]}`;
        setTotal(filteredTotal);
        setFreeShipping(false);
      }
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getTotalPrice();
  }, [products]);

  return (
    <>
      {connectionError ? (
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_ndlvehgz.json"
          mode="bounce"
          background="transparent"
          speed="1.5"
          style={{ width: '900px', height: '500px' }}
          loop
          autoplay
        />
      ) : (
        <Container>
          <CartTitle>
            <Title>Meu carrinho</Title>
          </CartTitle>

          {isLoading ? (
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_mvOWc1.json"
              background="transparent"
              speed="1"
              style={{ width: '300px', height: '300px', marginLeft: '220px' }}
              loop
              autoplay
            />
          ) : (
            <>
              <CartItems>
                {products.map((product) => (
                  <CartProduct
                    key={product.uniqueId}
                    image={product.imageUrl}
                    name={product.name}
                    price={product.price}
                    discount={product.priceTags[0].rawValue}
                  />
                ))}
              </CartItems>
              <CartInfo>
                <CartTotal>
                  <Total>Total</Total>
                  <TotalValue>{total}</TotalValue>
                </CartTotal>
                {freeShipping && (
                  <FreteMessage>
                    <Message>Parabéns, sua compra tem frete grátis !</Message>
                  </FreteMessage>
                )}
              </CartInfo>
              <CartCheckout>
                <CheckoutButton>Finalizar compra</CheckoutButton>
              </CartCheckout>{' '}
            </>
          )}
        </Container>
      )}
      <ToastContainer />
    </>
  );
};

CartContainer.propTypes = {
  path: PropTypes.string.isRequired,
};

export default CartContainer;
