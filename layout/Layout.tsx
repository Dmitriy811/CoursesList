import { ILayout } from './Layout.props'
import { Header } from './Header/Header'
import { SideBar } from './SideBar/SideBar'
import { Footer } from './Footer/Footer'
import { AppContextProvider } from '../context/app.context'

import cl from './Layout.module.scss'
import { FC } from 'react'
import { IAppContext } from '../context/app.context'

export const LayOut = ({ children }: ILayout): JSX.Element => {
	return (
		<div className={cl.wrapper}>
			<Header className={cl.header} />
			<SideBar className={cl.sidebar} />
			<div className={cl.content}>{children}</div>
			<Footer className={cl.footer} />
		</div>
	)
}

export const withLayOut = <T extends Record<string, unknown> & IAppContext>( // * best practice to put HOC in a separate file
	Component: FC<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<LayOut>
					<Component {...props} />
				</LayOut>
			</AppContextProvider>
		)
	}
}
