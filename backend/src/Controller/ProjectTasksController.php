<?php

namespace App\Controller;

use App\Entity\Project;
use App\Repository\ProjectRepository;
use App\Repository\TaskRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class ProjectTasksController extends AbstractController
{
    private $projectRepository;
    private $taskRepository;

    public function __construct(ProjectRepository $projectRepository, TaskRepository $taskRepository)
    {
        $this->projectRepository = $projectRepository;
        $this->taskRepository = $taskRepository;
    }

    // Récup des tasks d'un projet (tri status en front)
    #[Route('/api/projects/{id}/tasks', name: 'project_tasks', methods: ['GET'])]
    public function __invoke(int $id): JsonResponse
    {
        $project = $this->projectRepository->find($id);

        if (!$project) {
            return $this->json(['message' => 'Project not found'], 404);
        }

        $tasks = $this->taskRepository->findBy(['project' => $project]);

        return $this->json($tasks, 200, [], ['groups' => ['task:read']]);
    }
}