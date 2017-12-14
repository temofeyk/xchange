import React from 'react';
import {AuthPage} from '../../AuthPage/AuthPage';
import {shallow} from 'enzyme';
import Titles from '../titles';
import {Button, Footer} from '../AuthElements';

describe('Component AuthPage', () => {
  const wrapper = shallow(<AuthPage />);

  describe('check presence of instance methods', () => {
    it('contain instance method handleClickSwitchMode', () => {
      expect(wrapper.instance().handleClickSwitchMode).toBeDefined();
    });

    it('contain instance method handleClickTry', () => {
      expect(wrapper.instance().handleClickTry).toBeDefined();
    });
  });

  describe('check state content isLoginMode = true', () => {
    it('contain isLoginMode', () => {
      expect(wrapper.state().isLoginMode).toEqual(true);
    });
  });

  describe('check titles', () => {
    const wrapper = shallow(<AuthPage />);

    [true, false].forEach(isLoginMode => {
      it(`check button title = "${Titles.buttons[isLoginMode]}" on isLoginMode = ${
        isLoginMode
      }`, () => {
        wrapper.setState({isLoginMode: isLoginMode});
        wrapper.update();

        expect(
          wrapper
            .find(Button)
            .at(0)
            .children()
            .text(),
        ).toEqual(Titles.buttons[isLoginMode]);
      });
    });

    [true, false].forEach(isLoginMode => {
      it(`check <p> content = "${Titles.linkTitle[isLoginMode]}" on isLoginMode = ${
        isLoginMode
      }`, () => {
        wrapper.setState({isLoginMode: isLoginMode});
        wrapper.update();

        expect(
          wrapper
            .find(Footer)
            .find('p')
            .at(0)
            .text(),
        ).toMatch(Titles.linkTitle[isLoginMode]);
      });
    });

    [true, false].forEach(isLoginMode => {
      it(`check <a> title = "${Titles.link[isLoginMode]}" on isLoginMode = ${isLoginMode}`, () => {
        wrapper.setState({isLoginMode: isLoginMode});
        wrapper.update();

        expect(
          wrapper
            .find('a')
            .at(0)
            .text(),
        ).toEqual(Titles.link[isLoginMode]);
      });
    });
  });

  describe('check callbacks', () => {
    it('switch isLoginMode on click <a> element', () => {
      const wrapper = shallow(<AuthPage />);
      const curMode = wrapper.state().isLoginMode;

      wrapper.find('a').simulate('click');
      expect(wrapper.state().isLoginMode).toEqual(!curMode);
    });
  });
});
