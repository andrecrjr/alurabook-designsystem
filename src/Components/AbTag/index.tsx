import React from 'react';
import { styled } from 'styled-components';

export interface AbTagProps {
  text: string;
}

export const TagStyled = styled.div`
  min-width: 50px;
  padding: 24px 32px;
  background: #eb9b00;
  color: #fff;
  font-family: sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  display: block;
`;

export default function AbTag({ text }: AbTagProps) {
  return <TagStyled>{text}</TagStyled>;
}
