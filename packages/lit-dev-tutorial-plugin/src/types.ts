/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

export type {ProjectManifest as PlaygroundProjectManifest} from 'playground-elements/shared/worker-api';

export type TutorialDifficulty = '' | 'Beginner' | 'Intermediate' | 'Advanced';
export type TutorialCardSize = 'tiny' | 'small' | 'medium' | 'large';
export type TutorialCategory = 'Learn' | 'Build' | 'Draft';
export interface TutorialJsonStep {
  title: string;
  hasAfter?: boolean;
  checkable?: boolean;
  noSolve?: boolean;
}
export interface TutorialJson {
  header: string;
  difficulty: TutorialDifficulty;
  duration: number;
  imgSrc?: string;
  imgAlt?: string;
  steps: TutorialJsonStep[];
  date: string;
}
