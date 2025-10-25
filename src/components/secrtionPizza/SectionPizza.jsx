import './SectionPizza.css'

import pizzaLogo from '/lighting.svg'
import pizzaImg from '/pizzaImg.png'
import backPhoto from '/backPhoto.png'

import ButtonLogo from '../UI/ButtonGLob'

const SectionPizza = () => {
	return (
		
		<div className='conayiner flex items-center py-[40px] justify-between'>
			<div className='left flex flex-col gap-5'>
				<h1 className='the text-5xl font-black max-w-'>The Fastest Pizza <img src={pizzaLogo} alt="" /> Delivery</h1>
				<p className='max-w-100 font-medium text-gray-500'>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span className='text-white'>pizza is free</span>!</p>
				<div className='video'>
					<p className='text-gray-500'>Cooking process:</p>
					<img className='pizzaImg w-[220px]' src={pizzaImg} alt="" />
				</div>
				<ButtonLogo />
			</div>
			<div className='right w-[500px]'><img src={backPhoto} alt="" /></div>
		</div>

	)
}

export default SectionPizza