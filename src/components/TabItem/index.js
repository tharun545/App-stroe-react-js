// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onTabChange} = props
  const {tabId, displayText} = tabsList

  const changeTab = () => {
    onTabChange(tabId)
  }

  return (
    <li className="tab-item-container">
      <button className="button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
