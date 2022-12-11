import { ReactNode } from 'react'

export interface ITag {
	link?: string
	style: 'green' | 'primary' | 'ghost' | 'red'
	children: ReactNode
}
