import React from 'react';
import { styled } from 'styled-components';

const Card = styled.section`
  display: inline-flex;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media screen and (min-width: 640px) {
    display: flex;
    width: 725px;
    padding: 24px;
    justify-content: space-between;
    align-items: flex-start;
  }
  @media screen and (min-width: 985px) {
    display: flex;
    width: 551px;
    padding: 48px 32px 48px 48px;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export function AbCard() {
  return <Card>oiii</Card>;
}
