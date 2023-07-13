import { Button } from 'react-bootstrap';
import { styled } from 'styled-components';

export const GenericButton = styled(Button)<{
  colorText: string;
  colorButton: string;
  colorAction: string;
}>`
  border-radius: 10px;
  font-size: 1.4rem;
  padding: 1px 15px;
  margin: 10px;
  --bs-btn-active-bg: ${(props) => props.colorText};
  --bs-btn-active-border-color: ${(props) => props.colorAction};
  --bs-btn-active-color: ${(props) => props.colorAction};
  --bs-btn-bg: ${(props) => props.colorButton};
  --bs-btn-border-color: ${(props) => props.colorButton};
  --bs-btn-color: ${(props) => props.colorText};
  --bs-btn-hover-color: ${(props) => props.colorText};
  --bs-btn-hover-bg: ${(props) => props.colorAction};
  --bs-btn-hover-border-color: ${(props) => props.colorAction};

  --bs-btn-disabled-color: #02be67;
  --bs-btn-disabled-bg: #060c21;
  --bs-btn-disabled-border-color: #02be67;
`;
