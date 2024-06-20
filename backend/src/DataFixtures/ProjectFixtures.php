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
        $project1 = new Project();
        $project1->setTitle('Project Manager');
        $project1->setDescription('Outil de gestion de projets, tâches, prioritarisation, etc...');
        $manager->persist($project1);
        $this->addReference('project_1', $project1);

        $project2 = new Project();
        $project2->setTitle('Exemple de projet');
        $project2->setDescription('Outil de gestion de projets, tâches, prioritarisation, etc...');
        $manager->persist($project2);
        $this->addReference('project_2', $project2);

        $manager->flush();
    }
}