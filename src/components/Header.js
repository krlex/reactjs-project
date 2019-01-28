import React from 'react'
import logo from '../logo.svg'

function Header() {
    const date = new Date()
    const hours = date.getHours()
    const styles = {
      fontSize: 30
    }

    let timeOfDay

    if (hours <12) {
      timeOfDay ="MORNING"
      styles.color = "#FFFF00"
    } else if (hours >=12 && hours <17) {
      timeOfDay = "AFTERNOON"
      styles.color = "#018BFE"
    } else {
      timeOfDay = "NIGHT"
      styles.color = "#D90000"
    }

    return(
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/components/Header.js</code> and save to reload.
        </p>
        <h1 style={styles}> GOOD  {timeOfDay} GOOD PEOPLE!!</h1>
      </header>
    )
}

export default Header
