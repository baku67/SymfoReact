import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

import Link from 'next/link';

import { TaskCard } from '../../src/Components/TaskCard';

const ProjectDetails = () => {

    const router = useRouter();
    const { id } = router.query;

    const [project, setProject] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [tasksTodo, setTasksTodo] = useState([]);
    const [tasksInProgress, setTasksInProgress] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [selectedTask, setSelectedTask] = useState(null);
    const handleClickTask = (task) => {
        setSelectedTask(task);
    }

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/api/projects/${id}`)
                .then(response => {
                    const projectData = response.data;
                    setProject(projectData);

                    axios.get(`http://localhost:8000/api/projects/${id}/tasks`)
                        .then(taskResponse => {
                            const tasks = taskResponse.data;
                            const todo = tasks.filter(task => task.status === 'todo');
                            const inProgress = tasks.filter(task => task.status === 'inProgress');
                            const completed = tasks.filter(task => task.status === 'completed');
                            setTasksTodo(todo);
                            setTasksInProgress(inProgress);
                            setCompletedTasks(completed);
                            setLoading(false);
                        })
                        .catch(taskError => {
                            console.error('Error fetching tasks:', taskError);
                            setError(taskError);
                            setLoading(false);
                        });
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [id]);



    const [isModalFadingOut, setIsModalFadingOut] = useState(false);
    const handleModalCloseClick = () => {

        setIsModalFadingOut(true);

        setTimeout(() => {
            setSelectedTask(null);
            setIsModalFadingOut(false);
        }, 200)
    }


    const moveTask = (task, status) => {
        // Logique pour mettre à jour le statut de la tâche dans la base de données
        console.log(`Moving task '${task.title}' to '${status}'`);
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading project details: {error.message}</p>;
    if (!project) return <p>No project found</p>;




    return (

        <div className="main">

            <DndProvider backend={HTML5Backend}>

                {/* Modal TaskDetail */}
                {selectedTask && (

                    <div className={`taskDetail-modal ${isModalFadingOut ? "taskDetail-modal-fadeOut" : ""}`}>

                        <div className="taskDetail-modal-header">

                            <div>{selectedTask.priority == 1 ? "Prioritaire" : "Secondaire"}</div>

                            <span onClick={handleModalCloseClick} className="taskDetail-modal-closeBtn">
                                <FontAwesomeIcon icon={faXmark} />
                            </span>

                        </div>

                        <h4>{selectedTask.title}</h4>
                        <p>{selectedTask.text}</p>

                    </div>
                )}




                <div className={`main-withoutModal ${selectedTask ? "main-withoutModal-blurred" : ""}`}>

                    <Link href={"/"}>
                        <button className="backToDashboard-btn">{"<- Tableau de bord"}</button>
                    </Link>




                    <div className="projectPageHeader">
                        <h1 className='projectPageHeader-title'>{project.title}</h1>
                        <p>Description: {project.description}</p>
                        <p>Tâches: {project.tasks.length}</p>
                    </div>
                



                    <div className='tasksListsContainer'>



                        <div className="tasksLists">

                            <div className="taskListHeader">
                                <h3 className="tasksListsTitle">A faire:</h3>
                                <FontAwesomeIcon icon={faSquarePlus} className="taskList-addBtn" />
                            </div>
                            

                            <div className="taskListContent">
                                {tasksTodo.map(task => (

                                    <div key={task.id} onClick={() => handleClickTask(task)}>
                                        <TaskCard task={task}  />
                                    </div>

                                ))}
                            </div>

                        </div>

                        <div className="tasksLists">

                            <div className="taskListHeader">
                                <h3 className="tasksListsTitle">En cours:</h3>
                                <FontAwesomeIcon icon={faSquarePlus} className="taskList-addBtn" />
                            </div>

                            <div className="taskListContent">
                                {tasksInProgress.map(task => (

                                    <div  key={task.id} onClick={() => handleClickTask(task)}>
                                        <TaskCard task={task}  />
                                    </div>

                                ))}
                            </div>

                        </div>

                        <div className="tasksLists">

                            <div className="taskListHeader">
                                <h3 className="tasksListsTitle">Terminées:</h3>
                            </div>

                            <div className="taskListContent">
                                {completedTasks.map(task => (

                                    <div key={task.id} onClick={() => handleClickTask(task)}>
                                        <TaskCard task={task}  />
                                    </div>

                                ))}
                            </div>

                        </div>

                    </div>



                    <div>
                        <h3>Equipe:</h3>
                        <div>
                            <div>
                                <span>Xavier</span>
                            </div>
                            <div>
                                <span>Pascale</span>
                            </div>
                        </div>
                    </div>
                    



                </div>


            </DndProvider>

        </div>
    );
};

export default ProjectDetails;