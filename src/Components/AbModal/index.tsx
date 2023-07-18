import React, { ReactNode } from 'react';
import styled from 'styled-components';

export type AbModalProps = {
  children?: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
};

const ModalWindow = styled.div`
  position: absolute;
  background: rgba(101, 101, 101, 0.85);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Window = styled.section`
  width: 60%;
  height: 200px;
  display: flex;
  padding: 40px 48px 40px 40px;
  align-items: center;
  background: white;
`;

export const ModalTitleWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  color: #eb9b00;
  font-family: sans-serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ModalClose = styled.span``;

export default function AbModal({
  children,
  title = 'Login',
  open,
  onClose,
}: AbModalProps): ReactNode {
  if (!open) {
    return <></>;
  }
  return (
    <ModalWindow onClick={onClose}>
      <Window>
        <ModalTitleWrapper>
          <ModalTitle>{title}</ModalTitle>
          <ModalClose>X</ModalClose>
        </ModalTitleWrapper>
        {children}
      </Window>
    </ModalWindow>
  );
}
