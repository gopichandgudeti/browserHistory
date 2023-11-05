import {Component} from 'react'

import ListsElement from '../ListsElement'

import {Fragment} from 'react'

import './index.css'

class MainContainer extends Component {
  state = {
    searchInput: '',
  }

  onchangeSearchInput = event => {
      this.setState({searchInput : event.target.value})
  }

  render() {
      const {searchInput} = this.state 
      const {searchHistoryList} = this.props
      const searchResults = searchHistoryList.filter(each => each.title.toLowerCase().includes(searchInput.toLowerCase()))

      isSearchResultsEmpty = () => {
          if (searchResults === undefined){
              <p className="no-history-text">There is no history to show</p>
          }else{
            <ul className="search-history-container">
                {searchResults.map(eachItem => (
                    <ListsElement 
                    searchItem={eachItem} 
                    key={eachItem.id}
                    />
                ))}
            </ul>
          }
      }

    return (
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          className="app-logo"
          alt="app logo"
        />
        <div className="search-container">
          <div className="search-icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
          </div>
          <div className="input-container">
            <input
              type="search"
              placeholder="Search history"
              className="search-input"
              onChange={this.onchangeSearchInput}
              value={searchInput}
            />
          </div>
        </div>
      </div>
      
      <div className="app-container">
        {this.isSearchResultsEmpty}
      </div>
    )
  }
}

export default MainContainer
