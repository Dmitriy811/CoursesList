export interface ProductCharacteristic {
	value: string
	name: string
}

export interface ReviewsModel {
	_id: string
	name: string
	title: string
	description: string
	rating: number
	createdAt: Date
}

export interface ProductModule {
	_id: string
	categories: string[]
	tags: string[]
	title: string
	link: string
	price: number
	credit: number
	oldPrice: number
	description: string
	characteristics: ProductCharacteristic[]
	createdAt: Date
	updatedAt: Date
	__v: number
	image: string
	reviews: any[]
	initialRating: number
	reviewAvg?: number
	advantages: string
}
