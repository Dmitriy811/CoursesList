import axios from 'axios'

import { GetStaticProps } from 'next'
import { useState } from 'react'
import { Title, Paragraph, Button, Tag, Rating } from '../components'
import { MenuItem } from '../interface/menu.interface'
import { withLayOut } from '../layout/Layout'

const Home = ({ menu }: HomeProps): JSX.Element => {
	const [r, sR] = useState<number>(4)
	const [r1, sR1] = useState<number>(3)

	return (
		<>
			<Title tag='h1'>Hello</Title>
			<Button appearance='primary' arrow='down'>
				Click
			</Button>
			<Button appearance='ghost' arrow='right'>
				Click
			</Button>
			<Button appearance='ghost' arrow='down'>
				Click
			</Button>
			<Paragraph size='small'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste sint
				soluta eos hic qui ipsa vitae assumenda minima. Maxime consectetur omnis
				corrupti in voluptates rem pariatur maiores velit autem.
			</Paragraph>
			<Paragraph size='medium'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste sint
				soluta eos hic qui ipsa vitae assumenda minima. Maxime consectetur omnis
				corrupti in voluptates rem pariatur maiores velit autem.
			</Paragraph>
			<Paragraph size='large'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iste sint
				soluta eos hic qui ipsa vitae assumenda minima. Maxime consectetur omnis
				corrupti in voluptates rem pariatur maiores velit autem.
			</Paragraph>
			<Tag style='red'>Stop</Tag>
			<Tag style='green'>Green</Tag>
			<Tag style='primary' link='https://www.youtube.com/'>
				Youtube
			</Tag>
			<Tag style='ghost'>Ghost</Tag>
			<Rating rating={r} isEditable={true} setRating={sR} />
			<Rating rating={r1} />
		</>
	)
}
export default withLayOut(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const headers = {
		'Content-Type': 'application/json',
		'Accept-Encoding': 'application/json',
	}

	const { data: menu } = await axios.post(
		process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
		{
			firstCategory,
		},
		{ headers }
	)

	return {
		props: {
			menu,
			firstCategory,
		},
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[]
	firstCategory: number
}
