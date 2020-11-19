import React, { usestate } from 'react'
import './Card.css'

function Card({name, about, job}) {

return (

<div className='Card'>

<div className='upper-container'>

<div className='image-container'>
    <img src="https://images.pexels.com/photos/1473215/pexels-photo-1473215.jpeg?cs=srgb&dl=pexels-stephan-m%C3%BCller-1473215.jpg&fm=jpg"></img>
    </div>
    </div>
    <div className="lower-container">
    <h3> { name } </h3>

<h4> { job } </h4>

<p> { about } </p>

<button>visit Profile</button>

</div>
</div>
)
}
export default Card