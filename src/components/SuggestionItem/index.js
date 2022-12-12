import './index.css'

const SuggestionItem = props => {
  const {eachSuggestion, onArrow} = props
  const {suggestion} = eachSuggestion
  const onArrowClick = () => {
    onArrow(suggestion)
  }
  return (
    <li className="suggestionContainer">
      <div className="suggestion">
        <p>{suggestion}</p>
      </div>
      <button type="button" className="arrowButton" onClick={onArrowClick}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrowIcon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
