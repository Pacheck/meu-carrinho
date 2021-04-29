import styled, { keyframes } from 'styled-components';
import BaseAnimation from '../../styles/baseAnimation';

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0px;
`;

export const ProductImage = styled.div`
  width: 200px;
  height: 200px;
  background: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: solid 1px #aaa;
`;

export const ProductInfo = styled.div`
  width: 64%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Name = styled.h3`
  font-weight: 800;
  text-transform: uppercase;
`;

export const Discount = styled.h3`
  opacity: 42%;
  text-decoration: line-through;
`;

export const Price = styled.h3``;

export const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;
