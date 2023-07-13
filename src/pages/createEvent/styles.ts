import { device } from '@/utils/device';
import { Form, Row } from 'react-bootstrap';
import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px 30px 40px;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    margin: 20px 60px 30px 60px;
  }
`;

export const Time = styled(Row)`
  width: 100%;
`;
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

export const Group = styled(Form.Group)`
  width: 100%;
  padding-bottom: 20px;
`;
export const SigleDay = styled.div`
  display: flex;
`;

export const Label = styled(Form.Label)`
  color: #fff;
  margin-right: 30px;
`;

export const File = styled.input``;

export const Control = styled(Form.Control)`
  width: 100%;
  margin-top: 10px;
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

  &::-webkit-file-upload-button {
    background-color: #02be67;
    color: #060c21;
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #02be67;
      color: #060c21;
    }
  }
`;

export const Check = styled(Form.Check)`
  label {
    color: #fff;
  }
  .form-check-input:checked {
    background-color: #03bd66;
    border-color: #03bd66;
  }

  .form-check-input:focus {
    border-color: #03bd66;
    outline: 0;
    box-shadow: 0 0 0 0.05rem rgb(3 190 102);
  }
`;

export const Error = styled.span`
  color: #bab8bb;
`;
