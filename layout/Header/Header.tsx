import { IHeader } from './Header.props'
import cl from './Header.module.scss'
import cn from 'classnames'

export const Header = ({ ...props }: IHeader): JSX.Element => {
	return <div {...props}>Header</div>
}
