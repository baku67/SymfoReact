import { useForm } from "react-hook-form";
import axios from 'axios';

export default function TaskForm({projectId}) {

  const { register, handleSubmit, formState: { errors }} = useForm()

  // const onSubmit = async (data) => {
  //   try {

  //     const response = await axios.post(
  //       'http://localhost:8000/api/tasks',
  //       {
  //         ...data,
  //         project: `/api/projects/${projectId}` // ApiPlatform expects an IRI for relations
  //       },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json' // Ensure Content-Type is correctly set
  //         }
  //       }
  //     );
  //   }}


  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/api/tasks',
        {
          title: "test TITRE",
          status: "todo",
          text: "test DESCRIPTION",
          // project: `/api/projects/${projectId}`, 
          priority: 1, // Ensure priority is converted to integer
        },
        {
          headers: {
            'Content-Type': 'application/ld+json'
          }
        }
      );
  
      console.log('Task created:', response.data);
  
    } catch (error) {
      console.error('Error creating task:', error.response.data);
    }
  };

  


  
  

  return (

    <>
      {/* <span>ProjectID = {projectId}</span> */}

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>

          <div>
            <input {...register("title", {required:true, value:"Nouvelle tâche"})} />
            {errors.title && <span>Ce champ est requis</span>}
          </div>

          <div>
            <select {...register("priority")}>
              <option value="1">Prioritaire</option>
              <option value="2">Secondaire</option>
            </select>
          </div>

          <div>
            <select {...register("status")}>
              <option value="todo">A faire</option>
              <option value="inProgress">En cours</option>
              <option value="completed">Terminée</option>
            </select>
          </div>

        </div>



        <div>

          {/* <label htmlFor="taskDescription">Description de la tâche</label> */}
          <textarea 
            id="taskDescription" 
            {...register('text', { required: true, value:"Description de la tâche" })} 
          />
          {errors.text && <span>Ce champ est requis</span>}

        </div>



        <input type="submit" />


      </form>
    
    </>

  )

}