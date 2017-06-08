import IndexContainer from '../../src/containers/IndexContainer';
import React from 'react';


describe('IndexContainer', () => {
  let header,
      instructions;

  beforeEach(() => {
    wrapper = mount(
      <IndexContainer
        header=" Welcome to the Breakable Piano! "
        instructions=" To record a tune, sign up or sign in.  \n Use your mouse or keyboard to play. \n  Using the keyboard, hold ctrl to go down an octave.  "
      />
    );
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });

  it('should render a header' () => {
    expect(wrapper.find('h1').text()).toBe(' Welcome to the Breakable Piano! ');
  });

  it('should render an h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent();
  });

  it('should render the instructions', () => {
    expect(wrapper.find('h3').text()).toBe(' To record a tune, sign up or sign in.  \n Use your mouse or keyboard to play. \n  Using the keyboard, hold ctrl to go down an octave.  ');
  });

})
