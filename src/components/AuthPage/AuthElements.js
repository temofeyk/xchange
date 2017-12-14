import styled from 'styled-components';
import userShape from '../../assets/user-shape.svg';
import padlockUnlock from '../../assets/padlock-unlock.svg';

export const Main = styled.main`
  background-color: #f5f5f6;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: absolute;
  width: 440px;
  z-index: 1;
`;

export const Logo = styled.img`
  width: 300px;
  height: 144px;
`;

export const Form = styled.div`
  background-color: #fff;
  border-radius: 7px;
  padding: 9px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 11px 0;
  position: relative;
  border: 1px solid #c3c3c3;
  min-height: 230px;

  &:before {
    border-radius: 7px;
    background: transparent;
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    box-shadow: 0px 0px 68px 4px rgba(0, 0, 0, 0.23);
  }
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
`;

export const EmailField = styled.div`
  position: relative;
`;

export const EmailIcon = styled.span`
  background-image: url(${userShape});
  width: 19px;
  height: 19px;
  opacity: 0.4;
  background-size: cover;
  position: absolute;
  top: 25px;
  left: 21px;
`;

export const EmailInput = styled.input`
  margin: 10px 0;
  padding: 16px 6px 16px 53px;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  width: calc(100% - 62px);
`;

export const PasswordField = styled.div`
  position: relative;
`;

export const PasswordIcon = styled.span`
  background-image: url(${padlockUnlock});
  width: 19px;
  height: 19px;
  opacity: 0.4;
  background-size: cover;
  position: absolute;
  top: 25px;
  left: 21px;
`;

export const PasswordInput = styled.input`
  margin: 10px 0;
  padding: 16px 6px 16px 53px;
  border: 1px solid #dfdfdf;
  border-radius: 7px;
  width: calc(100% - 62px);
`;

export const Button = styled.button`
  margin: 10px 0;
  background-color: #4db6e2;
  color: #fff;
  border: none;
  font-size: 22px;
  padding: 12px 0;
  font-weight: 300;
  letter-spacing: 1.1px;
  cursor: pointer;
`;

export const Footer = styled.div`
  background-color: #fff;
  border-radius: 7px;
  padding: 9px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 11px 0;
  position: relative;
  border: 1px solid #c3c3c3;
  min-height: 30px;
`;
