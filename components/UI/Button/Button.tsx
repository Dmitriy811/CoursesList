import { IButton } from './Button.props'
import cn from 'classnames'
import cl from './Button.module.scss'
import Arrow from './arrow-right.svg'

export const Button = ({
	appearance,
	children,
	className,
	arrow = 'none',
	...props
}: IButton): JSX.Element => {
	return (
		<button
			className={cn(
				cl.button,
				{
					[cl.primary]: appearance === 'primary',
					[cl.ghost]: appearance === 'ghost',
				},
				className
			)}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<span
					className={cn(cl.arrow, {
						[cl.arrow__down]: arrow === 'down',
						[cl.arrow__right]: arrow === 'right',
					})}
				>
					<Arrow />
				</span>
			)}
		</button>
	)
}
