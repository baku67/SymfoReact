import { useDrag } from 'react-dnd';

export function TaskCard({ taskTitle }) {

    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { title: taskTitle },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    
    return (
        <div ref={drag}>
            <div className="projectRow">
                <span>{taskTitle}</span>
                {/* {isDragging && "📂"} */}
            </div>
        </div>
    );
}