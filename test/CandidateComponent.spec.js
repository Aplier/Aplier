import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Candidate from '../src/components/candidate/Candidate'


configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  shallow(<Candidate />);
});
