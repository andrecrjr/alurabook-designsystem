import React, { useState } from 'react';
import { styled } from 'styled-components';

export interface AbGroupOption {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface AbGroupOptionsProps {
  options: AbGroupOption[];
  defaultValue?: AbGroupOption | null;
  onChange?: (option: AbGroupOption) => void;
}

export const SectionStyled = styled.section<{ selected: boolean }>`
  --color: ${props => (props.selected ? 'white' : '#eb9b00')};
  display: flex;
  width: 200px;
  padding: 8px 0px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  font-family: sans-serif;
  border: 1px solid #eb9b00;
  cursor: pointer;
  background: ${props =>
    !props.selected
      ? 'rgb(255, 255, 255)'
      : 'linear-gradient(160deg, #002F52 0%, #326589 100%)'};
  margin: 10px;
  h2 {
    color: var(--color);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin: 0 0 8px 0;
    line-height: normal;
  }
  p {
    color: var(--color);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  footer {
    color: ${props => (!props.selected ? 'rgba(0, 0, 0, 0.54)' : 'white')};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export function AbOptionGroup({
  options,
  onChange,
  defaultValue,
}: AbGroupOptionsProps) {
  const [select, setSelection] = useState<AbGroupOption | null>(
    defaultValue ?? null
  );

  const selectButton = (option: AbGroupOption) => {
    setSelection(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <>
      {options.map(option => (
        <SectionStyled
          key={option.id}
          selected={select?.id === option.id}
          onClick={() => selectButton(option)}
        >
          <h2>{option.title}</h2>
          <p>{option.body}</p>
          <footer>{option.footer}</footer>
        </SectionStyled>
      ))}
    </>
  );
}
