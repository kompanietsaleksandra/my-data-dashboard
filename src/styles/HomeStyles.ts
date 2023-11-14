import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #a8ccad, #009879);
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  text-align: center;
  margin-bottom: 20px; 
  text-shadow: 2px 2px 4px #000;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Button = styled.button`
  padding: 15px 30px;
  margin-top: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #fff; 
  color: #2193b0; 
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease; 

  &:hover {
    background-color: #6dd5ed; 
    color: #fff;
    transform: scale(1.05); 
  }
`;
