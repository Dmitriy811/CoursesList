import { ISideBar } from './SideBar.props'
import cl from './SideBar.module.scss'
import Menu from '../Menu/Menu'

export const SideBar = ({ ...props }: ISideBar): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	)
}
