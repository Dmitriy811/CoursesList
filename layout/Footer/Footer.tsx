import { IFooter } from './Footer.props'
import cl from './Footer.module.scss'
import cn from 'classnames'

export const Footer = ({ className, ...props }: IFooter): JSX.Element => {
	return (
		<div className={cn(className, cl.footer)} {...props}>
			<p>OwlTop © 2020 - 2021 Все права защищены</p>
			<a href='#' target='_blank'>
				Пользовательское соглашение
			</a>
			<a href='#' target='_blank'>
				Политика конфиденциальности
			</a>
		</div>
	)
}
