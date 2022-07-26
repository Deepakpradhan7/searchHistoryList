import './index.css'

const HistoryItem = props => {
  const {historyDetails, removeHistoryItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    removeHistoryItem(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <img className="logo" src={logoUrl} alt="domain logo" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button testid="delete" type="button" className="btn" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="dlt-logo"
        />
      </button>
    </li>
  )
}

export default HistoryItem
