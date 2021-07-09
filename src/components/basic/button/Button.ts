import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  padding: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  background-color: darkorange;
  color: white;
  font-size: 1.3rem;
  transition: background-color 100ms ease-in;

  &:hover {
    background-color: sandybrown;
  }
`;

export default Button;
