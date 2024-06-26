<?php

namespace App\DataFixtures;

use App\Entity\Task;
use App\Entity\Project;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

use Doctrine\Persistence\ObjectManager;
use DateTime;


class TaskFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {

        // Les mêmes Tasks pour chaque projet:
        for ($i = 1; $i <= 2; $i++) {
            $project = $this->getReference('project_' . $i);



            // *** Tasks à venir:
            $task1 = new Task();
            $task1->setTitle('Ajouter les Users');
            $task1->setText('Ajouter les utilisateurs (ne pas faire d\'auth n de Entreprise pour l\'instant) ');
            // "todo", "inProgress", "completed"
            $task1->setStatus("todo"); 
            $task1->setMediaUrl("urlduMedia.webp");
            $task1->setCreationDate(new DateTime());
            $task1->setProject($project);
            // 1, 2
            $task1->setPriority(1);

            $task2 = new Task();
            $task2->setTitle('Améliorations Dashboard grid');
            $task2->setText('Mettre la section "En cours" en avant: full height et width
            75%, puis "à venir" et "terminés" en colonne sur les 25% restants');
            // "todo", "inProgress", "completed"
            $task2->setStatus("todo"); 
            $task2->setMediaUrl("urlduMedia.webp");
            $task2->setCreationDate(new DateTime());
            $task2->setProject($project);
            // 1, 2
            $task2->setPriority(2);

            $manager->persist($task1);
            $manager->persist($task2);




            // *** Tasks en cours:
            $task3 = new Task();
            $task3->setTitle('Modal TaskDetail onClick');
            $task3->setText('tâche en cours 1');
            // "todo", "inProgress", "completed"
            $task3->setStatus("inProgress"); 
            $task3->setMediaUrl("urlduMedia.webp");
            $task3->setCreationDate(new DateTime());
            $task3->setProject($project);
            // 1, 2
            $task3->setPriority(1);

            $task4 = new Task();
            $task4->setTitle('Bouton ajout Task sur taskLists');
            $task4->setText('tâche en cours 2');
            // "todo", "inProgress", "completed"
            $task4->setStatus("inProgress"); 
            $task4->setMediaUrl("urlduMedia.webp");
            $task4->setCreationDate(new DateTime());
            $task4->setProject($project);
            // 1, 2
            $task4->setPriority(1);

            $task5 = new Task();
            $task5->setTitle('Tasks Draggables');
            $task5->setText('tâche en cours 3');
            // "todo", "inProgress", "completed"
            $task5->setStatus("inProgress"); 
            $task5->setMediaUrl("urlduMedia.webp");
            $task5->setCreationDate(new DateTime());
            $task5->setProject($project);
            // 1, 2
            $task5->setPriority(2);

            $task6 = new Task();
            $task6->setTitle('Customisation des pages et dashboard');
            $task6->setText('tâche en cours 4');
            // "todo", "inProgress", "completed"
            $task6->setStatus("inProgress"); 
            $task6->setMediaUrl("urlduMedia.webp");
            $task6->setCreationDate(new DateTime());
            $task6->setProject($project);
            // 1, 2
            $task6->setPriority(2);

            $task7 = new Task();
            $task7->setTitle('WIP Fixtures propres');
            $task7->setText('tâche en cours 5');
            // "todo", "inProgress", "completed"
            $task7->setStatus("inProgress"); 
            $task7->setMediaUrl("urlduMedia.webp");
            $task7->setCreationDate(new DateTime());
            $task7->setProject($project);
            // 1, 2
            $task7->setPriority(2);

            $manager->persist($task3);
            $manager->persist($task4);
            $manager->persist($task5);
            $manager->persist($task6);
            $manager->persist($task7);





            // *** Tasks terminées:
            $task8 = new Task();
            $task8->setTitle('Api platform');
            $task8->setText('tâche terminée 1');
            // "todo", "inProgress", "completed"
            $task8->setStatus("completed"); 
            $task8->setMediaUrl("urlduMedia.webp");
            $task8->setCreationDate(new DateTime());
            $task8->setProject($project);
            // 1, 2
            $task8->setPriority(1);

            $task9 = new Task();
            $task9->setTitle('init Fixtures');
            $task9->setText('tâche terminée 2');
            // "todo", "inProgress", "completed"
            $task9->setStatus("completed"); 
            $task9->setMediaUrl("urlduMedia.webp");
            $task9->setCreationDate(new DateTime());
            $task9->setProject($project);
            // 1, 2
            $task9->setPriority(2);

            $task10 = new Task();
            $task10->setTitle('React -> Next.js');
            $task10->setText('tâche terminée 3');
            // "todo", "inProgress", "completed"
            $task10->setStatus("completed"); 
            $task10->setMediaUrl("urlduMedia.webp");
            $task10->setCreationDate(new DateTime());
            $task10->setProject($project);
            // 1, 2
            $task10->setPriority(2);

            $manager->persist($task8);
            $manager->persist($task9);
            $manager->persist($task10);
    }

        $manager->flush();
    }


    // Pour charger d'abord les ProjetFixtures
    public function getDependencies()
    {
        return [
            ProjectFixtures::class,
        ];
    }
}