import pizzaLogo from '/lighting.svg'
import pizzaImg from '/pizzaImg.png'
import backPhoto from '/backPhoto.png'

import ButtonLogo from '../UI/ButtonGLob'

const SectionPizza = () => {
	return (
		
		<div className='conayiner flex items-center py-[40px] justify-between'>
			<div className='left flex flex-col gap-5'>
				<h1 className='the text-5xl font-black max-w-'>The Fastest Pizza <img src={pizzaLogo} alt="" /> Delivery</h1>
				<p>We will deliver juicy pizza for your family in 30 minutes, if the courier is late - <span>pizza is free!</span></p>
				<div className='video'>
					<p>Cooking process:</p>
					<img className='pizzaImg w-[220px]' src={pizzaImg} alt="" />
				</div>
				<ButtonLogo />
			</div>
			<div className='right w-[500px]'><img src={backPhoto} alt="" /></div>
		</div>

	)
}

export default SectionPizza