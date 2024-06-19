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
        for ($i = 1; $i <= 2; $i++) {
            $project = $this->getReference('project_' . $i);

            for ($j = 1; $j <= 5; $j++) {
                $task = new Task();
                $task->setTitle('Task ' . $j);
                $task->setText('tâche à venir ' . $j);
                // todo, inProgress, completed
                $task->setStatus("todo"); 
                $task->setMediaUrl("urlduMedia.webp");
                $task->setCreationDate(new DateTime());
                $task->setProject($project);

                $manager->persist($task);
            }

            for ($j = 1; $j <= 5; $j++) {
                $task = new Task();
                $task->setTitle('Task ' . $j);
                $task->setText('tâche en cours ' . $j);
                // todo, inProgress, completed
                $task->setStatus("inProgress"); 
                $task->setMediaUrl("urlduMedia.webp");
                $task->setCreationDate(new DateTime());
                $task->setProject($project);

                $manager->persist($task);
            }

            for ($j = 1; $j <= 5; $j++) {
                $task = new Task();
                $task->setTitle('Task ' . $j);
                $task->setText('tâche terminée ' . $j);
                // todo, inProgress, completed
                $task->setStatus("completed"); 
                $task->setMediaUrl("urlduMedia.webp");
                $task->setCreationDate(new DateTime());
                $task->setProject($project);

                $manager->persist($task);
            }
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