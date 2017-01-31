const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input name="name" type="text"></input>
        <input name="password" type="password"></input>
        <button type="submit">Submit</button>
      </form>)
  }
}

module.exports = RegistrationForm;
