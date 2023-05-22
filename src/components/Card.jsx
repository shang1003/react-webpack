import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import React from "react";
const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

export const Card = ({ id, text, index, moveCard }) => {
  const ref = useRef(null),
    [{ handlerId }, drop] = useDrop({
      accept: "card",
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        };
      },
      hover(item, monitor) {
        if (!ref.current) {
          return;
        }
        const dragIndex = item.index,
          hoverIndex = index;
        // Don't replace items with themselves

        if (dragIndex === hoverIndex) {
          return;
        }

        // Determine rectangle on screen
        // eslint-disable-next-line one-var
        const hoverBoundingRect = ref.current?.getBoundingClientRect(),
          // Get vertical middle
          hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2,
          // Determine mouse position
          clientOffset = monitor.getClientOffset(),
          // Get pixels to the top
          hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
      },
    }),
    [{ isDragging }, drag] = useDrag({
      type: "card",
      item: () => {
        return { id, index };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId}>
      {text}
    </div>
  );
};
Card.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  index: PropTypes.number,
  moveCard: PropTypes.func,
};
