import React from 'react';
import styled, { css } from 'styled-components';

export type AbBotaoProps = {
  text?: string;
  kind?: 'primario' | 'secundario';
  onClick?: () => void;
};

const StyledButton = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.kind === 'primario' ? '#eb9b00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbBotaoProps) =>
    props.kind === 'primario' ? '#fff' : '#eb9b00'};
  font-size: 1.25rem;
  cursor: pointer;
  ${(props: AbBotaoProps) =>
    props.kind === 'primario'
      ? css`
          &:hover {
            background: #b87900;
            border-color: #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            color: #b87900;
          }
        `};
`;

export function AbBotao({
  text = '',
  kind = 'primario',
  onClick,
}: AbBotaoProps) {
  return (
    <StyledButton onClick={onClick} kind={kind}>
      {text}
    </StyledButton>
  );
}
