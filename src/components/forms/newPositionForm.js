// import React, { Component } from 'react';
// import { graphql } from 'react-apollo';
// import { addCompanyPositionMutation } from '../../queries/queries';

// class NewPositionForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       description: '',
//       salarayRange: '',
//       screeningQ1: '',
//       screeningQ2: '',
//       screeningQ3: '',
//     };
//   }

//   onSubmit(event) {
//     event.preventDefault();
//     this.props.mutate({
//       variables: {
//         title: this.state.title,
//         description: this.state.description,
//         salaryRange: this.state.salarayRange,
//         screeningQ1: this.state.screeningQ1,
//         screeningQ2: this.state.screeningQ1,
//         screeningQ3: this.state.screeningQ1,
//       },
//     });
//     this.props.history.push('/');
//   }

//   render() {
//     return (
//       <div>
//         <p className="miniLogo">Aplier</p>
//         <div className="formContainer">
//           <img
//             className="circleCompany"
//             src="https://i.imgur.com/nP6CxET.png"
//             alt="companyImage"
//           />{' '}
//           <br />
//           <h3>Add Position</h3>
//           <form onSubmit={this.onSubmit.bind(this)}>
//             <label className="Clabel">Position title</label> <br />
//             <input
//               className="Cinput"
//               onChange={event => this.setState({ title: event.target.value })}
//               value={this.state.title}
//             />{' '}
//             <br /> <br />
//             <label className="Clabel">Description</label> <br />
//             <input
//               className="Cinput"
//               onChange={event =>
//                 this.setState({ description: event.target.value })
//               }
//               value={this.state.description}
//             />{' '}
//             <br /> <br />
//             <label className="Clabel">Salary</label>
//             <input
//               className="Cinput"
//               onChange={event =>
//                 this.setState({ salarayRange: event.target.value })
//               }
//               value={this.state.salarayRange}
//             />{' '}
//             <br />
//             <br />
//             <button className="customeButton" type="submit">
//               Add Position
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default graphql(addCompanyPositionMutation)(NewPositionForm);
