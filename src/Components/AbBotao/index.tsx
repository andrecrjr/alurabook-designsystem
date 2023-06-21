import React from 'react';
import styled from 'styled-components';

type Props = {};

const StyledButton = styled.button`
  background: #eb9b00;
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    background: #b87900;
    border-color: #b87900;
  }
`;

export function AbBotao({}: Props) {
  return <StyledButton>estou aqui </StyledButton>;
}
