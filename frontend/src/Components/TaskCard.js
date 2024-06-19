import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';



export default function TaskCard() {


    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks')
            .then(response => {
                setTasks(response.data['hydra:member']); // API Platform retourne les données sous 'hydra:member'
                console.log("Data from API:", JSON.stringify(response.data, null, 2));
                // console.table(response.data);
            })
            .catch(error => {
                console.error('Error fetching Tasks:', error);
            });
    }, []);


    return (
        <>
            <p>HELLOO</p>
        </>
    )

}