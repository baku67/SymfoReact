<?php

namespace App\DataFixtures;

use App\Entity\Task;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use DateTime;

class TaskFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Créer 10 tasks pour les tests
        for ($i = 1; $i <= 10; $i++) {
            $task = new Task();
            $task->setTitle('Task ' . $i);
            $task->setText('Contenu de l\'task ' . $i);
            $task->setStatus("open");
            $task->setMediaUrl("urlduMedia.webp");
            $task->setCreationDate(new DateTime());

            $manager->persist($task);
        }

        $manager->flush();
    }
}