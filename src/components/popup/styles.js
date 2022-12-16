import styled from 'styled-components';
import close from '../../assets/Close.svg'

export const PopUpContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 50px;
`;

export const PopUpHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  float: left;
  width: 200px;
  padding: 24px 32px;
  background: #fff;
`;

export const PopUpTitle = styled.div`
  float: left;
  font-size: 18px;
  color: #3c4752;
  font-weight: 600;
`;

export const PopUpCloseBtn = styled.div`
  width: 10px;
  height: 10px;
  background: url(${close}) center center no-repeat;
  cursor: pointer;
  opacity: 0.5;
`;

export const PopUpContent = styled.div`
  position: relative;
  width: 200px;
  float: left;
  padding: 8px 32px;
  background: #fff;
`;
