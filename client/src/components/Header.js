import useHeaderScroll from '../hooks/useHeaderScroll'
import HeaderMiddleInner from './HeaderMiddleInner'
import HeaderInner from './HeaderInner'


const Header = () => {

	const headerScroll = useHeaderScroll()

	return (

		<header className={`header shop ${headerScroll ? 'sticky':''}`}>
			<HeaderMiddleInner/>
			<HeaderInner/>
		</header>
	)
}

export default Header
