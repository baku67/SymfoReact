
export default function TaskForm({selectedTask}) {



    return (
        <>
            <div className="taskDetail-modal-header">

                <div className={`priority${selectedTask.priority}`}>{selectedTask.priority == 1 ? "Prioritaire" : "Secondaire"}</div>

            </div>

            <h4>{selectedTask.title}</h4>
            <p>{selectedTask.text}</p>
        </>
    )
}

