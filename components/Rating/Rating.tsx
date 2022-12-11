import { IRating } from './Rating.props'
import cl from './Rating.module.scss'
import cn from 'classnames'
import StarIcon from './Star.svg'
import { KeyboardEvent, useEffect, useState } from 'react'

export const Rating = ({
	isEditable = false,
	rating,
	setRating,
	...props
}: IRating): JSX.Element => {
	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	)
	const constructRating = (currentRating: number) => {
		setRatingArray(
			ratingArray.map((_, ind) => (
				<StarIcon
					className={cn(cl.star, {
						[cl.filled]: ind < currentRating,
						[cl.edit]: isEditable,
					})}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
						isEditable && handleSpace(ind + 1, e)
					}
				/>
			))
		)
	}

	const changeDisplay = (i: number) => isEditable && constructRating(i)
	const changeRating = (i: number) => isEditable && setRating && setRating(i)
	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) =>
		e.code === 'Space' && setRating && setRating(i)

	return (
		<div className={cl.wrapper} {...props}>
			{ratingArray.map((r, ind) => (
				<span
					onMouseEnter={() => changeDisplay(ind + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => changeRating(ind + 1)}
					key={ind}
				>
					{r}
				</span>
			))}
		</div>
	)
}
