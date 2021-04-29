import React, { useEffect, useState } from 'react';
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

const CartContainer = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(null);
  const [freeShipping, setFreeShipping] = useState(false);
  // imageUrl, name, price, priceTags[0].value,

  async function getData() {
    try {
      const response = await api.get('/acima');
      setProducts(response.data.items);
    } catch (err) {
      console.log(err);
    }
  }

  async function getTotalPrice() {
    if (products.length > 0) {
      const result = products.reduce((acumulator, currentValue) => {
        console.log(acumulator, currentValue);
        return acumulator + currentValue.price;
      }, 0);
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
  console.log(typeof total);
  return (
    <Container>
      <CartTitle>
        <Title>Meu carrinho</Title>
      </CartTitle>
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
      </CartCheckout>
    </Container>
  );
};
export default CartContainer;
