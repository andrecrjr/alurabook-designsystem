import React, { FormEvent, useState } from 'react';
import { styled } from 'styled-components';

export interface AbInputProps {
  input: React.InputHTMLAttributes<HTMLInputElement>;
  label?: string;
}

export const FieldSetStyled = styled.fieldset`
  border: none;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin: 0 0 16px 0;
  display: flex;
`;

export const LabelStyled = styled.label`
  font-size: 16px;
  color: black;
  font-weight: bold;
  margin: 0 0 4px 24px;
`;

export const InputStyled = styled.input`
  display: block;
  width: auto;
  height: 24px;
  padding: 10px 24px;
  align-items: center;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid #002f52;
  color: #a4a4a4;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    align-self: center;
    vertical-align: center;
    font-size: 16px;
    line-height: 100px;
  }
`;

export function AbInput(props: AbInputProps) {
  return (
    <FieldSetStyled>
      <LabelStyled htmlFor={props.label}>{props.label}</LabelStyled>
      <InputStyled {...props.input} />
    </FieldSetStyled>
  );
}
