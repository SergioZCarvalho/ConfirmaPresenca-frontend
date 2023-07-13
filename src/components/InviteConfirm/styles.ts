import { Alert, CloseButton, Form } from 'react-bootstrap';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 12px 24px;
  background-color: #2c2c41;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  gap: 16px;
  z-index: 999;
`;
export const Text = styled.p`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 0;
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
`;
export const LeftButton = styled.button<{ isSingle: boolean }>`
  width: 100%;
  background-color: #970101;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-top-right-radius: ${(props) => (props.isSingle ? '15px' : '0px')};
  border-bottom-right-radius: ${(props) => (props.isSingle ? '15px' : '0px')};
  border: none;
  &:active {
    background-color: #6a0000;
  }
`;
export const RightButton = styled.button<{ isSingle: boolean }>`
  width: 100%;
  background-color: #02be67;
  border-top-left-radius: ${(props) => (props.isSingle ? '15px' : '0px')};
  border-bottom-left-radius: ${(props) => (props.isSingle ? '15px' : '0px')};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border: none;
  &:active {
    background-color: #008b4b;
  }
`;

export const TextButton = styled.div`
  color: #fff;
  font-size: 1.5rem;
  padding: 5px;
`;

export const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Group = styled(Form.Group)`
  width: 100%;
`;
export const SigleDay = styled.div`
  display: flex;
`;

export const Label = styled(Form.Label)`
  color: #fff;
  padding: 0;
`;

export const Control = styled(Form.Control)`
  width: 100%;
  color-scheme: dark;
  background-color: #424263;
  border: none;
  color: #6c757d;
  font-size: 1.5rem;
  &::placeholder {
    color: #6c757d;
  }

  &:focus {
    background-color: #424263;
    border: none;
    color: white;
    box-shadow: 0 0 0 1.5px rgb(3 190 102);
  }

  &:focus-visible {
    background-color: #424263;
    border: none;
    color: white;
    box-shadow: 0 0 0 1.5px rgb(3 190 102);
    outline: none;
  }
`;

export const Close = styled(CloseButton)`
  margin-left: auto;
`;

export const CustomAlert = styled(Alert)`
  --bs-alert-color: #198754;
  --bs-alert-bg: #2c2c41;
  --bs-alert-border-color: #2c2c41;
`;
