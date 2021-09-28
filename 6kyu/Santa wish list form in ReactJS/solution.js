const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      wish: '',
      priority: 1,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeTextarea = this.handleChangeTextarea.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput({ target }) {
    this.setState({ name: target.value })
  }

  handleChangeTextarea({ target }) {
    this.setState({ wish: target.value })
  }

  handleChangeSelect({ target }) {
    this.setState({ priority: target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.send(this.state)
  }

  render() {
    const { name, wish, priority } = this.state

    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" id="name" value={name} onChange={this.handleChangeInput} />
        <textarea id="wish" value={wish} onChange={this.handleChangeTextarea} />
        <select id="priority" value={priority} onChange={this.handleChangeSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
    );
  }
};
