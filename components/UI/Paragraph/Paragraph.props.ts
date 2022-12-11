import { ReactNode } from 'react'

export interface IParagraph {
	size: 'small' | 'medium' | 'large'
	children: ReactNode
}
