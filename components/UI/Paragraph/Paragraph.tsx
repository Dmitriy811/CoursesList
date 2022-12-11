import { IParagraph } from './Paragraph.props'
import cl from './Paragraph.module.scss'
import cn from 'classnames'

export const Paragraph = ({ size, children }: IParagraph): JSX.Element => {
	return (
		<p
			className={cn(cl.p, {
				[cl.small]: size === 'small',
				[cl.medium]: size === 'medium',
				[cl.large]: size === 'large',
			})}
		>
			{children}
		</p>
	)
}
