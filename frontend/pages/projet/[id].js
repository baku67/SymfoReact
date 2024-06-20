import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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

                <h1>{project.title}</h1>
                <p>Description: {project.description}</p>
                <p>Tâches: {project.tasks.length}</p>
            

                <div className='tasksListsContainer'>


                    <div>
                        <h3>A faire:</h3>
                        <div>
                            {tasksTodo.map(task => (
                                // <div key={task.id} className="projectRow">
                                //     <span>{task.title}</span>
                                // </div>
                                <TaskCard key={task.id} taskTitle={task.title} />
                            ))}
                        </div>

                    </div>

                    <div>
                        <h3>En cours:</h3>
                        <div>
                            {tasksInProgress.map(task => (
                                // <div key={task.id} className="projectRow">
                                //     <span>{task.title}</span>
                                // </div>
                                <TaskCard key={task.id} taskTitle={task.title} />
                            ))}
                        </div>

                    </div>

                    <div>
                        <h3>Terminées:</h3>
                        <div>
                            {completedTasks.map(task => (
                                // <div key={task.id} className="projectRow">
                                //     <span>{task.title}</span>
                                // </div>
                                <TaskCard key={task.id} taskTitle={task.title} />
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </DndProvider>
    );
};

export default ProjectDetails;