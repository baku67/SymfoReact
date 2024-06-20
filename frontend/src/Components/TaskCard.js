import { useDrag } from 'react-dnd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';




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

            <div className={`taskCard ${task.priority == 1 ? "taskCard-primary" : "taskCard-secondary"} ${task.status == "completed" ? "taskCard-completed": ""}`}>


                {task.status == "completed" && <FontAwesomeIcon icon={faCircleCheck} />}

                <span>{task.title}</span>

                {/* {isDragging && "📂"} */}

            </div>
        </div>
    );
}