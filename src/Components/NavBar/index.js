import './index.css'

const NavBar = props => {
  const {score, time} = props
  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-and-timer">
        <li className="timer-box">
          <p>Score: </p>
          <p className="color">{score}</p>
        </li>
        <li className="timer-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-logo"
          />
          <p className="color"> {time} sec</p>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
