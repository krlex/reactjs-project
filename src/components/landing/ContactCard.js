import React from 'react'

function ContactCard(props) {
    console.log(props)
    return(
      <div>
        <img alt="placketten" src="https://www.thesprucepets.com/thmb/810a_HYIb2E8DxkedI6V-3gtkys=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/kitten-looking-at-camera-521981437-57d840213df78c583374be3b.jpg" />
        <h3> Mister Kitten</h3>
        <p> Phone : (381) 333-444</p>
        <p> Mail: mr.kitten@gmail.com</p>
      </div>
    )
}
export default ContactCard
