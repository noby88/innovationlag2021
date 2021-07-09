import styled from 'styled-components';

const Indicator = styled.li<{ selected: boolean }>`
  box-shadow: rgb(3 6 7 / 90%) 1px 1px 2px;
  background-image: initial;
  background-color: rgb(239, 236, 233);
  transition: opacity 0.25s ease-in;
  filter: alpha(opacity=30);
  box-shadow: 1px 1px 2px rgb(0 0 0 / 90%);
  background: #fff;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  cursor: pointer;
  display: inline-block;
  margin: 0 8px;
  opacity: ${(props) => (props.selected ? '1' : '0.3')};
`;

export default Indicator;
