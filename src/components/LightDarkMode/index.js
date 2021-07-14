// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    status: true,
    className: 'dark-mode',
    text: 'Light Mode',
    heading: 'dark-heading',
    button: 'dark-button',
  }

  onClickButton = () => {
    this.setState(prev => {
      if (prev.status) {
        return {
          status: false,
          className: 'light-mode',
          text: 'Dark Mode',
          heading: 'light-heading',
          button: 'light-button',
        }
      }
      return {
        status: true,
        className: 'dark-mode',
        text: 'Light Mode',
        heading: 'dark-heading',
        button: 'dark-button',
      }
    })
  }

  render() {
    const {className, text, heading, button} = this.state
    return (
      <div className="bg-container">
        <div className={`box ${className}`}>
          <h1 className={`text ${heading}`}>Click To Change Mode</h1>
          <button
            className={`button ${button}`}
            type="button"
            onClick={this.onClickButton}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
