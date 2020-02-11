import React from './node_modules/react';
import { shallow } from './node_modules/enzyme';
import { configure } from './node_modules/enzyme';
import Adapter from './node_modules/enzyme-adapter-react-16';
import Candidate from './Candidate'


configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  shallow(<Candidate />);
});
