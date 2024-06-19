import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';



export default function ProjectList() {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/projects')
            .then(response => {
                setProjects(response.data['hydra:member']); // API Platform retourne les données sous 'hydra:member'
                console.log("Data from API:", JSON.stringify(response.data, null, 2));
                // console.table(response.data);
            })
            .catch(error => {
                console.error('Error fetching Projects:', error);
            });
    }, []);


    return (
        <>
            <p>Liste des projets .map()</p>
        </>
    )

}