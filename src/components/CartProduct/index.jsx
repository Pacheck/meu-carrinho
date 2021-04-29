import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductContainer,
  Discount,
  Name,
  Price,
  ProductImage,
  ProductInfo,
} from './styles';

const CartProduct = ({ image, name, discount, price }) => {
  const splitPrice = String(price).split('');
  const filteredPrice = String(
    parseFloat(`${splitPrice[0]}.${splitPrice[1]}${splitPrice[2]}`)
  );
  const discountedValue = String((filteredPrice - discount).toFixed(2)).replace(
    '.',
    ','
  );

  return (
    <ProductContainer>
      <ProductImage image={image} />
      <ProductInfo>
        <Name>{name}</Name>
        <Discount>R$ {discountedValue}</Discount>
        <Price>R$ {filteredPrice.replace('.', ',')}</Price>
      </ProductInfo>
    </ProductContainer>
  );
};

CartProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartProduct;
