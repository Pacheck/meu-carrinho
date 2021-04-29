import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 750px;
  height: 80%;
  margin: 150px 0px;
  border-radius: 20px;
  box-shadow: 0 0 2em #929ea1;
`;

export const CartTitle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 1px solid #bbb;
`;
export const Title = styled.h1``;

export const CartItems = styled.div``;

export const CartInfo = styled.div`
  min-height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
`;

export const CartTotal = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`;

export const Total = styled.h3`
  font-size: 35px;
`;

export const TotalValue = styled.h3`
  font-size: 35px;
`;

export const CartCheckout = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckoutButton = styled.button`
  width: 90%;
  height: 60%;
  border: none;
  border-radius: 10px;
  background-color: #3b74f2;
  color: #fff;
  font-size: 38px;
  font-weight: 600;
`;

export const FreteMessage = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c7ffa6;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const Message = styled.h2`
  color: #217a00;
  font-size: 27px;
  font-weight: 500;
`
