import axios from 'axios'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { withLayOut } from '../../layout/Layout'
import { MenuItem } from '../../interface/menu.interface'
import { ParsedUrlQuery } from 'querystring'
import { TopPageModule } from '../../interface/page.interface'

const firstCategory = 0
const headers = {
	'Content-Type': 'application/json',
	'Accept-Encoding': 'application/json',
}

const Home = ({ menu, page }: CourseProps): JSX.Element => {
	return <>SideBar</>
}
export default withLayOut(Home)

export const getStaticPaths = async () => {
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		},
		{ headers }
	)

	const paths = menu.flatMap(el => el.pages.map(p => '/courses/' + p.alias))

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps<CourseProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) return { notFound: true }

	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		},
		{ headers }
	)

	const { data: page } = await axios.get<TopPageModule>(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
		{ headers }
	)

	return {
		props: {
			menu,
			page,
			firstCategory,
		},
	}
}

interface CourseProps extends Record<string, unknown> {
	menu: MenuItem[]
	page: TopPageModule
	firstCategory: number
}
