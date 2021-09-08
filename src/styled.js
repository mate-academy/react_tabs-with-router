import styled from 'styled-components';

const button = `
  height: 50px;
  width: 150px;
  cursor: pointer;
  line-height: 100%;
`;

export const ButtonActive = styled.button`
  ${button}
`;

export const Button = styled.button`
  ${button}
  background-color: aliceblue;
`;
