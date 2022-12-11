import { ITitle } from './Title.props'
import cl from './Title.module.scss'
import cn from 'classnames'

export const Title = ({ tag, children }: ITitle): JSX.Element => {
	switch (tag) {
		case 'h1':
			return <h1 className={cn(cl.h, cl.h1)}>{children}</h1>
		case 'h2':
			return <h2 className={cn(cl.h, cl.h2)}>{children}</h2>
		case 'h3':
			return <h3 className={cn(cl.h, cl.h3)}>{children}</h3>
		default:
			return <h4>{children}</h4>
	}
}
