import React from 'react'

function MainContent() {
    const  firstName = "Mister"
    const  lastName = "Testeroni"
    const  date = new Date()

    return(
      <main className="navbar">This is a my {`${firstName } ${lastName}`}
       <div>
          <h2> It is currently about {date.getHours() % 12} o'clock</h2>
       </div>
      </main>
      )
}

export default MainContent
