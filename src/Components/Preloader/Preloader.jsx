import React from 'react'
import spinner from '../../images/Spinner.gif'
import './Preloader.css'

export default function Preloader() {
	return (
		<div className='preloader'>
			<div className="preloader__spinner">
				<img src={spinner} alt="" />
			</div>
			<div className="preloader__text">
				Loading . . .
			</div>
		</div>
	)
}
