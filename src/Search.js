import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: '',
  };
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    };

    const handleChange = (e) => {
      this.setState({ text: e.target.value });
    };
    return (
      <div>
        <form>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={handleChange}
          />
          <input
            type='submit'
            className='btn btn-dark btn-block'
            value='search'
            onClick={handleSubmit}
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
