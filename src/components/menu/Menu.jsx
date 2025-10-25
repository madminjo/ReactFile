import './Menu.css'


const Menu = () => {
	const menuNav = [
		{ href: '#', title: 'Show All' },
		{ href: '#', title: 'Meat' },
		{ href: '#', title: 'Vegetarian' },
		{ href: '#', title: 'Sea products' },
		{ href: '#', title: 'Mushroom' },
	]

	return (
		<div className='sectionMenu'>
			<h2>Menu</h2>
			<div className='menuBtnlef'>
				{menuNav.map(item => (
					<a href={item.href} className='menuCLick' >{item.title}</a>
				))}
			</div>
		</div>
	)
}

export default Menu
