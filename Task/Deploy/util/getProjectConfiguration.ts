import { readFileSync } from "fs";
import { setResult, TaskResult } from "azure-pipelines-task-lib";

import { ProjectConfiguration } from "../models/ProjectConfiguration";

export function getProjectConfiguration(
  path: string,
  projectId?: string
): ProjectConfiguration | null {
  if (!path) {
    return null;
  }

  if (projectId) {
    console.log(
      `ProjectId provided, skipping loading configuration from project. Id: ${projectId}`
    );
    return null;
  }

  try {
    const projectConfig: ProjectConfiguration = JSON.parse(
      readFileSync(`${path}/.vercel/project.json`, {
        encoding: "utf8",
      })
    );

    return projectConfig;
  } catch (error) {
    setResult(
      TaskResult.Failed,
      "failed to load /.vercel/project.json where required due to missing project identifier in params"
    );
    return null;
  }
}
