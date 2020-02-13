import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
import CompanyOrCandidate from '../components/CompanyOrCandidate';

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  shallow(<CompanyOrCandidate />);
});

test('renders a Link to "/companysignup" ', () => {
  const wrapper = shallow(<CompanyOrCandidate />);
  const companySignup = <Link to="/companysignup"> Employer </Link>;

  expect(wrapper.contains(companySignup)).toEqual(true);
});

test('renders a Link to "/candidatesignup" ', () => {
  const wrapper = shallow(<CompanyOrCandidate />);
  const candidateSignup = <Link to="/candidatesignup"> Candidate </Link>;

  expect(wrapper.contains(candidateSignup)).toEqual(true);
});
