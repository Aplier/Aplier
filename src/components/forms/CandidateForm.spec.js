import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CandidateForm from './CandidateForm'

configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  shallow(<CandidateForm />);
});

// test('Caniddate form renders a h3 with the following text', () => {
//   const wrapper = shallow(<CandidateForm />);
//   const linkElement = <h3>CREATE A NEW CANDIDATE ACCOUNT</h3>;

//   expect(wrapper.contains(linkElement)).toEqual(true)
// });


// test('renders a submit button', () => {
  //   const wrap = shallow(
  //     <CandidateForm label="Enter First Name:"/>
  //   )
  //   expect(
  //     wrap.find('label').text()
  //   ).toEqual('Enter First Name:')
  // })


// it('should render loading state initially', () => {
//   const component = renderer.create(
//     <MockedProvider mocks={[]}>
//       <Dog />
//     </MockedProvider>,
//   );

//   const tree = component.toJSON();
//   expect(tree.children).toContain('Loading...');
// });

