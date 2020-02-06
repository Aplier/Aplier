import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Link} from 'react-router-dom'
import Candidate from './Candidate'
import displayCandidates from './Candidate'

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  shallow(<Candidate />);
});
