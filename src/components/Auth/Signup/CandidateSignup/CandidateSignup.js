import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useMutation } from '@apollo/react-hooks';
import { addCandidateMutation } from '../../../../queries/queries';
import { Auth } from 'aws-amplify';

function TestCandidateForm() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
    phone: '',
    intro: '',
    imgURL: '',
    vidURL: '',
    candidateSignedUp: false,
    confirmationCode: '',
  });

  const onChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [addCandidate, { loading }] = useMutation(addCandidateMutation, {
    update(proxy, result) {
      console.log('result', result);
    },
    variables: values,
  });

  const onSubmit = event => {
    event.preventDefault();
    addCandidate();
  };

  return (
    <div>
      <p className="miniLogo">Aplier</p>
      <div className="formContainer">
        <img
          className="circleCompany"
          src="https://i.imgur.com/cPUORG1.png"
          alt="CandidateImage"
        />{' '}
        <br />
        <form onSubmit={onSubmit}>
          <label className="Clabel">First Name</label>
          <input
            className="Cinput"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={onChange}
            required
          />{' '}
          <br /> <br />
          <label className="Clabel">Last Name</label>
          <input
            className="Cinput"
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={onChange}
          />{' '}
          <br /> <br />
          <label className="Clabel">Address</label>
          <input
            className="Cinput"
            name="address"
            type="text"
            value={values.address}
            onChange={onChange}
            required
          />{' '}
          <br /> <br />
          <label className="Clabel">Email</label>
          <input
            className="Cinput"
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            required
          />{' '}
          <br /> <br />
          <label className="Clabel">Password</label>
          <input
            className="Cinput"
            name="password"
            type="password"
            value={values.password}
            onChange={onChange}
            required
          />{' '}
          <br /> <br />
          <button className="customeButton" type="submit">
            Sign up!
          </button>
        </form>
      </div>
    </div>
  );
}

export default graphql(addCandidateMutation)(TestCandidateForm);
