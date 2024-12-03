import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    total: 0,
    resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevstate => ({
        headsCount: prevstate.headsCount + 1,
        total: prevstate.total + 1,
        resultImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevstate => ({
        tailsCount: prevstate.tailsCount + 1,
        total: prevstate.total + 1,
        resultImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, headsCount, tailsCount, resultImage} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={resultImage} className="image" alt="toss result" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p>Total:{total}</p>
            <p>Heads:{headsCount}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
