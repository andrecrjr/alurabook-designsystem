import React, { useState } from 'react';
import { styled } from 'styled-components';

export const QuantityForm = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  label {
    color: #002f52;
    text-align: center;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button {
    background: #002f52;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 100%;
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

export interface AbInputQuantityProps {
  onChange: (num: number) => number;
}

export default function AbInputQuantity({ onChange }: AbInputQuantityProps) {
  const [count, setCount] = useState(1);

  const _onClick = (
    e: React.FormEvent<HTMLButtonElement>,
    operation: 'sum' | 'minus'
  ) => {
    e.preventDefault();
    setCount(oldValue => {
      console.log(oldValue);
      const operationSum = operation === 'minus' ? oldValue - 1 : oldValue + 1;
      const result = operationSum >= 0 ? operationSum : 0;
      if (onChange) {
        onChange(Math.abs(result));
      }
      return Math.abs(result);
    });
  };

  return (
    <QuantityForm>
      <label>Quantidade</label>
      <button onClick={e => _onClick(e, 'minus')}>-</button>
      <span>{count}</span>
      <button onClick={e => _onClick(e, 'sum')}> + </button>
    </QuantityForm>
  );
}
