<?php

namespace App\DataFixtures;

use App\Entity\Project;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use DateTime;


class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Créer 10 projets pour les tests
        for ($v = 1; $v <= 10; $v++) {
            
            $project = new Project();
            $project->setTitle('Project ' . $v);

            $manager->persist($project);

            // Sauvegarder la référence pour utiliser plus tard dans TaskFixtures
            $this->addReference('project_' . $v, $project);
        }

        $manager->flush();
    }
}