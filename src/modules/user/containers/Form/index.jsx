import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initSate(props);
  }

  initSate(props) {
    return props.user;
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.saveUser(this.state);
    this.props.closeUser();
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="firstName">First name</label></td>
              <td><input id="firstName" name="firstName" onChange={this.onChange} type="text" value={this.state.firstName} /></td>
            </tr>
            <tr>
              <td><label htmlFor="lastName">Last name</label></td>
              <td><input id="lastName" name="lastName" onChange={this.onChange} type="text" value={this.state.lastName} /></td>
            </tr>
            <tr>
              <td><label htmlFor="company">Company</label></td>
              <td><input id="company" name="company" onChange={this.onChange} type="text" value={this.state.company} /></td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><input id="email" name="email" onChange={this.onChange} type="text" value={this.state.email} /></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">Save</button>
                {' '}
                <button type="button" onClick={this.props.closeUser}>Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default Form;
