import './Header.css'

// Img
import logo from '/logo.svg'
import basket from '/basket.svg'
// Style
import ButtonLogo from '../UI/ButtonGLob'

const Header = () => {
	const navBtn = [
		{ href: '#', title: 'Home' },
		{ href: '#', title: 'Menu' },
		{ href: '#', title: 'Events' },
		{ href: '#', title: 'About us' },
	]

	return (
		<header className='header flex items-center justify-between py-5 px-4'>
			<div className='logo'>
				<img src={logo} alt='Logo' />
			</div>
			<nav className='nav flex gap-5 '>
				{navBtn.map(item => (
					<a href={item.href} className='navA text-white text-base hover:transition-all  hover:text-amber-800'>{item.title}</a>
				))}
			</nav>
			<div className='buttonNtn flex gap-5 items-center'>
				<ButtonLogo />
				<a href="#" className='textA py-2 px-2 bg-amber-600 rounded-full'><img src={basket} alt="" /></a>
			</div>
		</header>
	)
}

export default Header
