/*
 * @Author: bishang 1063352967@qq.com
 * @Date: 2022-12-21 17:26:23
 * @LastEditors: bishang 1063352967@qq.com
 * @LastEditTime: 2022-12-21 17:37:35
 * @FilePath: \demo\src\component\00-chessboard\BoardSquare.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import  type { FC, ReactNode } from 'react'
import { useDrop } from 'react-dnd'
import  React from 'react'
import type { Game } from './Game'
import { ItemTypes } from './ItemTypes'
import { Overlay, OverlayType } from './Overlay'
import { Square } from './Square'

export interface BoardSquareProps {
	x: number
	y: number
	children?: ReactNode
	game: Game
}

export const BoardSquare: FC<BoardSquareProps> = ({
	x,
	y,
	children,
	game,
}: BoardSquareProps) => {
	const [{ isOver, canDrop }, drop] = useDrop(
		() => ({
			accept: ItemTypes.KNIGHT,
			canDrop: () => game.canMoveKnight(x, y),
			drop: () => game.moveKnight(x, y),
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
				canDrop: !!monitor.canDrop(),
			}),
		}),
		[game],
	)
	const black = (x + y) % 2 === 1

	return (
		<div
			ref={drop}
			role="Space"
			data-testid={`(${x},${y})`}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<Square black={black}>{children}</Square>
			{isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
			{!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
			{isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
		</div>
	)
}
