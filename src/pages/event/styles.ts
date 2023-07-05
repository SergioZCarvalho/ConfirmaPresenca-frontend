import { BsFillShareFill } from 'react-icons/bs';
import { styled } from 'styled-components';

export const Cover = styled.div`
  display: flex;
`;
export const Image = styled.div<{ url: string }>`
  background: url(${(props) => props.url}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 20rem;
  position: absolute;
`;
export const Content = styled.div`
  position: relative;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 20rem;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(21, 24, 26, 0.2) 0%,
    rgba(17, 19, 21, 0.8) 51%,
    rgba(15, 17, 19, 1) 100%
  );
  width: 100%;
`;
export const ToShare = styled(BsFillShareFill)`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 2rem;
  height: auto;
  color: #fff;
`;
export const MenuClosed = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  color: #fff;
  justify-content: flex-end;
`;
export const EventTitle = styled.div`
  color: #fff;
  font-size: 2rem;
  padding-bottom: 10px;
`;
export const EventDate = styled.div`
  color: #fff;
  font-size: 1rem;
  padding-bottom: 10px;
`;
export const EventEntranceFee = styled.div`
  display: flex;
  padding-bottom: 10px;
`;
export const EntranceFeeText = styled.p`
  color: #fff;
  font-size: 1rem;
  padding-bottom: 10px;
`;
export const EntranceFeePrice = styled.p`
  color: #02be67;
  font-size: 1rem;
  padding-bottom: 10px;
  padding-left: 5px;
`;
export const EventInformation = styled.div``;
export const EventInformationTitle = styled.p`
  color: #ffffff;
  font-size: 1.5rem;
  padding-bottom: 10px;
  padding-left: 5px;
`;
export const EventInformationValue = styled.p`
  color: #717171;
  font-size: 1rem;
  padding-bottom: 10px;
  padding-left: 5px;
`;
export const Contact = styled.div`
  display: flex;
`;
export const TypeOfContact = styled.p`
  color: #717171;
  font-size: 1rem;
  padding-bottom: 10px;
  padding-left: 5px;
`;
export const ValueOfContact = styled.p`
  color: #717171;
  font-size: 1rem;
  padding-bottom: 10px;
  padding-left: 5px;
`;
