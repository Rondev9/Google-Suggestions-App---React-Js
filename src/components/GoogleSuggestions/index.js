import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onArrowClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchedResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return (
      <div className="GoogleSearchSuggestionsAppContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleImage"
        />
        <ul className="searchSuggestionsListContainer">
          <div className="searchBoxContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="searchBar"
              onChange={this.onSearch}
              value={searchInput}
            />
          </div>
          {searchedResults.map(eachSuggestion => (
            <SuggestionItem
              eachSuggestion={eachSuggestion}
              key={eachSuggestion.id}
              onArrow={this.onArrowClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
