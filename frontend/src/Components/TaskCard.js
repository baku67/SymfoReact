import { useDrag } from 'react-dnd';

export function TaskCard({ task }) {

    const [{ isDragging }, drag] = useDrag({
        type: 'TASK',
        item: { title: task.title },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });


    return (
        <div ref={drag}>
            <div className={`taskCard ${task.priority == "primary"? "taskCard-primary" : "taskCard-secondary"}`}>
                <span>{task.title}</span>
                {/* {isDragging && "📂"} */}
            </div>
        </div>
    );
}