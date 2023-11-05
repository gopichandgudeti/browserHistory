import './index.css'

const MainContainer = props => {
  const {searchItem} = props
  const {timeAccessed, logoUrl, title, domainUrl} = searchItem

  return (
    <li className="list-container">
      <div className="time-accessed-container">
        <p className="time-accessed">{timeAccessed}</p>
      </div>
      <div className="logoUrl-title-domainUrl-container">
        <img src={logoUrl} className="apps-logo" alt="logo" />
        <p className="list-title">{title}</p>
        <p className="list-domainUrl">{domainUrl}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </div>
    </li>
  )
}

export default MainContainer
