import { Resource } from './Resource';

export interface Improvement {
  index: number;
  type: string;
  level: number;
}

export interface RequirementMap {
  type: string;
  required: Resource[];
  benefit: Resource;
}
