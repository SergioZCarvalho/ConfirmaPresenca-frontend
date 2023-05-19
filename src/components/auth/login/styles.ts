import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.p`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-bottom: 3px;
`;

export const HeaderSubtitle = styled.p`
  display: flex;
  color: #c0c0c0;
  text-align: left;
  text-align: center;
  font-size: 1.6rem;
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
export const Control = styled(Form.Control)`
  background-color: #424263;
  border: none;
  color: white;
  font-size: 1.5rem;

  &:focus {
    background-color: #424263;
    border: none;
    color: white;
    box-shadow: 0 0 0 1.5px rgb(3 190 102);
  }
`;

export const links = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 15px 0;
`;
export const linkText = styled.p`
  margin-left: 5px;
  color: #fff;
`;
export const linkRouter = styled(Link)`
  margin-left: 5px;
  font-size: 1rem;
  color: #03be66;
  text-decoration: none;
  &:active {
    color: #0e6543;
  }
  &:hover {
    color: #0e6543;
    transition: 0.5s;
  }
`;
