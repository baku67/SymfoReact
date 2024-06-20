import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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


    const moveTask = (task, status) => {
        // Logique pour mettre à jour le statut de la tâche dans la base de données
        console.log(`Moving task '${task.title}' to '${status}'`);
    };


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading project details: {error.message}</p>;
    if (!project) return <p>No project found</p>;




    return (

        <DndProvider backend={HTML5Backend}>

            <div>

                <Link href={"/"}>
                    {"<- Tableau de bord"}
                </Link>




                {/* Modal TaskDetail */}
                {selectedTask && (

                    <div className="taskDetail-modal">

                        {selectedTask.priority == 1 ? "Prioritaire" : "Secondaire"}

                        <span onClick={() => setSelectedTask(null)}>X</span>

                        <h4>{selectedTask.title}</h4>
                        <p>{selectedTask.text}</p>

                    </div>

                )}





                <div className="projectPageHeader">
                    <h1 className='projectPageHeader-title'>{project.title}</h1>
                    <p>Description: {project.description}</p>
                    <p>Tâches: {project.tasks.length}</p>
                </div>
            



                <div className='tasksListsContainer'>



                    <div className="tasksLists">

                        <div className="taskListHeader">
                            <h3 className="tasksListsTitle">A faire:</h3>
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </div>
                        

                        <div>
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
                            <FontAwesomeIcon icon={faSquarePlus} />
                        </div>

                        <div>
                            {tasksInProgress.map(task => (

                                <div  key={task.id} onClick={() => handleClickTask(task)}>
                                    <TaskCard task={task}  />
                                </div>

                            ))}
                        </div>

                    </div>

                    <div className="tasksLists">

                        <h3 className="tasksListsTitle">Terminées:</h3>

                        <div>
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
    );
};

export default ProjectDetails;