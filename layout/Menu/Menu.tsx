import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import cl from './Menu.module.scss'
import cn from 'classnames'
import { firstLevelMenuItem, PageItem } from '../../interface/menu.interface'
import CoursesIcon from './icons/graduation.svg'
import CloudIcon from './icons/cloud.svg'
import BookIcon from './icons/books.svg'
import BoxIcon from './icons/box.svg'
import { TopLevelCategory } from '../../interface/page.interface'

const firstLevelMenu: firstLevelMenuItem[] = [
	{
		route: 'courses',
		name: 'Курсы',
		ico: <CoursesIcon />,
		id: TopLevelCategory.Courses,
	},
	{
		route: 'services',
		name: 'Сервисы',
		ico: <CloudIcon />,
		id: TopLevelCategory.Services,
	},
	{
		route: 'book',
		name: 'Книги',
		ico: <BookIcon />,
		id: TopLevelCategory.Books,
	},
	{
		route: 'products',
		name: 'Продукты',
		ico: <BoxIcon />,
		id: TopLevelCategory.Products,
	},
]

const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext)

	const buildFirstLevel = (): JSX.Element => {
		return (
			<>
				{firstLevelMenu.map(menu => (
					<div key={menu.route}>
						<a href={`/${menu.route}/`}>
							<div
								className={cn(cl.firstLevel, {
									[cl.firstLevelActive]: menu.id === firstCategory,
								})}
							>
								{menu.ico}
								<span>{menu.name}</span>
							</div>
						</a>
						{menu.id === firstCategory && buildSecondLevel(menu)}
					</div>
				))}
			</>
		)
	}
	const buildSecondLevel = (menuItem: firstLevelMenuItem): JSX.Element => {
		return (
			<div className={cl.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={cl.secondLevel}>{m._id.secondCategory}</div>
						<div
							className={cn(cl.secondLevelBlock, {
								[cl.secondLevelBlockOpened]: m.isOpened,
							})}
						>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		)
	}
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(page => (
			<a
				href={`/${route}/${page.alias}`}
				className={cn(cl.thirdLevel, {
					[cl.thirdLevelActive]: true,
				})}
			>
				{page.category}
			</a>
		))
	}

	return <div>{buildFirstLevel()}</div>
}

export default Menu
