import useHeaderScroll from '../hooks/useHeaderScroll'
import TopBar from './TopBar'
import HeaderMiddleInner from './HeaderMiddleInner'
import HeaderInner from './HeaderInner'


const Header = () => {

	const headerScroll = useHeaderScroll()

	return (

		<header className={`header shop ${headerScroll ? 'sticky':''}`}>
			<TopBar/>
			<HeaderMiddleInner/>
			<HeaderInner/>
		</header>
	)
}

export default Header
