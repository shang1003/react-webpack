/*
 * @Author: bishang 1063352967@qq.com
 * @Date: 2022-12-01 14:41:08
 * @LastEditors: bishang 1063352967@qq.com
 * @LastEditTime: 2022-12-21 17:46:31
 * @FilePath: \demo\src\component\Container.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import update from 'immutability-helper'
import React, { useCallback, useState } from 'react'

import { Card } from './Card.jsx'

const style = {
	width: 400,
}


 const Container = () => {
	{
		const [cards, setCards] = useState([
			{
				id: 1,
				text: 'Write a cool JS library',
			},
			{
				id: 2,
				text: 'Make it generic enough',
			},
			{
				id: 3,
				text: 'Write README',
			},
			{
				id: 4,
				text: 'Create some examples',
			},
			{
				id: 5,
				text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
			},
			{
				id: 6,
				text: '???',
			},
			{
				id: 7,
				text: 'PROFIT',
			},
		])

		const moveCard = useCallback((dragIndex, hoverIndex) => {

			setCards((prevCards) =>{
				return update(prevCards, {
					$splice: [
						[dragIndex, 1],
						[hoverIndex, 0, prevCards[dragIndex]],
					],
				})
			}
	
			)
		}, [])

		const renderCard = useCallback(
			(card, index) => {
				return (
					<Card
						key={card.id}
						index={index}
						id={card.id}
						text={card.text}
						moveCard={moveCard}
					/>
				)
			},
			[],
		)

		return (
			<>
				<div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
			</>
		)
	}
}

export default Container
