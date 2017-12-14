import React from 'react';
import {withRouter} from 'react-router-dom';
import {compose, lifecycle, pure} from 'recompose';
import logo from '../../assets/Logo-white.svg';
import TradeSwitcher from '../TradeSwitcher';
import TradeLayout from '../TradeLayout';
import styled from 'styled-components';
import {getUserEmail} from '../../reducers/user';
import {connect} from "react-redux";
import {fetchUserInfoRequest} from '../../actions/user';

const Container = styled.header`
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2b2c2e;
  height: 80px;
  color: #fff;
`;

const HeaderWrapper = styled.div`
  width: 1200px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 180px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f2022;
  height: 100px;
`;

const enhance = compose(
    withRouter,
    connect(store => ({
        userEmail: getUserEmail(store),
    }), {
        fetchUserInfoRequest,

    }),
    lifecycle({
        componentDidMount() {
            this.props.fetchUserInfoRequest();
        }
    }),
    pure,
);

export const Trade = props => {
    const {userEmail} = props;
    return (
        <Container>
            <Header>
                <HeaderWrapper>
                    <Logo src={logo}/>
                    <TradeSwitcher/>
                    <span>{userEmail}</span>
                </HeaderWrapper>
            </Header>
            <TradeLayout/>
            <Footer>
                <Container>
                    <Logo src={logo} alt="j-trading logo"/>
                </Container>
            </Footer>
        </Container>
    )
};

export default enhance(Trade);
