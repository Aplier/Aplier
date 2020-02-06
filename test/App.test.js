import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from '../src/components/LandingPage'
import {Link} from 'react-router-dom'

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  shallow(<App />);
});

test('App renders LandingPage which renders "Aplier" in a h1', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Aplier/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a "Continue with LinkedIn" button', () => {
  const wrapper = shallow(<LandingPage />);
  const linkedInButton = <button>Continue with LinkedIn</button>;

  expect(wrapper.contains(linkedInButton)).toEqual(true);
});

test('renders a Link to "/user" ', () => {
  const wrapper = shallow(<LandingPage />);
  const continuewithEmail = <Link to="/user">Or Continue With Email</Link>

  expect(wrapper.contains(continuewithEmail)).toEqual(true);
});

