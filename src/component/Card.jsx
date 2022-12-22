import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import React from 'react'

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
}





export const Card = (props) => {
const	{ id, text, index, moveCard }=props
	const ref = useRef(null)
	const [{ handlerId ,hovered,highlighted}, drop] = useDrop({
		accept: 'card',
		collect(monitor) {
			return {
				highlighted: monitor.canDrop(),
				handlerId: monitor.getHandlerId(),
				hovered: monitor.isOver(),
    // connectDropTarget: connect.dropTarget()
			}
		},

		drop(item){
const dragIndex=item.index
const hoverIndex=index
moveCard(dragIndex,hoverIndex)
item.index=hoverIndex
		}
	// 	hover(item, monitor) {
	// 		if (!ref.current) {
	// 			return
	// 		}
	// 		const dragIndex = item.index
	// 		const hoverIndex = index
	// 		if (dragIndex === hoverIndex) {
	// 			return
	// 		}
	// 		const hoverBoundingRect = ref.current?.getBoundingClientRect()
	// 		const hoverMiddleY =
	// 			(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
	// 		const clientOffset = monitor.getClientOffset()
	// 		const hoverClientY = (clientOffset).y - hoverBoundingRect.top
	// 		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
	// 			return
	// 		}
	// 		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
	// 			return
	// 		}
	// 		moveCard(dragIndex, hoverIndex)
	// 		item.index = hoverIndex
	// 	},
	})

	const [{ isDragging }, drag] = useDrag({
		type: 'card',
		item: () => {
			return { id, index }
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	})

	const opacity = isDragging ? 0 : 1
	drag(drop(ref))
	return (
		<div  ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>

{text}
		</div>
	)
}
