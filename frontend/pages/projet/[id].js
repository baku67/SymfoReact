import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
                    
                    // Récupérer les détails de chaque tâche
                    const taskRequests = projectData.tasks.map(taskUrl => axios.get(`http://localhost:8000${taskUrl}`));
                    Promise.all(taskRequests)
                        .then(taskResponses => {
                            const taskDetails = taskResponses.map(res => res.data);
                            // Séparer les tâches en cours et terminées
                            const todo = taskDetails.filter(task => task.status === 'todo');
                            const inProgress = taskDetails.filter(task => task.status === 'inProgress');
                            const completed = taskDetails.filter(task => task.status === 'completed');
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading project details: {error.message}</p>;
    if (!project) return <p>No project found</p>;

    return (
        <div>
            <h1>{project.title}</h1>
            <p>Description: {project.description}</p>
            <p>Tâches: {project.tasks.length}</p>
        

            <div className='tasksListsContainer'>


                <div>
                    <h3>A faire:</h3>
                    <div>
                        {tasksTodo.map(task => (
                            <div key={task.id} className="projectRow">
                                <span>{task.title}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <div>
                    <h3>En cours:</h3>
                    <div>
                        {tasksInProgress.map(task => (
                            <div key={task.id} className="projectRow">
                                <span>{task.title}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <div>
                    <h3>Terminées:</h3>
                    <div>
                        {completedTasks.map(task => (
                            <div key={task.id} className="projectRow">
                                <span>{task.title}</span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ProjectDetails;