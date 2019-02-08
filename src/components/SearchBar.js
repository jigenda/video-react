import React from "react";

class SearchBar extends React.Component {
  state = { term: "", maxItem: 5 };

  onInputChange = e => {
    this.setState({ term: e.target.value, maxItem: this.state.maxItem });
  };

  onSelectChange = e => {
    this.setState({ maxItem: e.target.value, term: this.state.term });
    this.props.onFormSubmit(this.state.term, e.target.value);
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term, this.state.maxItem);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui grid">
            <div className="eleven wide column">
              <div className="field">
                <label htmlFor="">Video Search</label>
                <div className="ui icon input">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
                  <i className="search icon" />
                </div>
              </div>
            </div>
            <div className="five wide column">
              <div className="field">
                <label htmlFor="">Max Result</label>
                <select
                  value={this.state.maxItem}
                  onChange={this.onSelectChange}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
