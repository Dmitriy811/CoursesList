import { ITag } from './Tag.props'
import cl from './Tag.module.scss'
import cn from 'classnames'

export const Tag = ({ style, link, children }: ITag): JSX.Element => {
	return (
		<div
			className={cn(cl.tag, {
				[cl.primary]: style === 'primary',
				[cl.green]: style === 'green',
				[cl.red]: style === 'red',
				[cl.ghost]: style === 'ghost',
			})}
		>
			{link ? (
				<a href={link} target='_blank'>
					{children}
				</a>
			) : (
				children
			)}
		</div>
	)
}
