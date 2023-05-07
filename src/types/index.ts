export enum Job {
  dev = "dev",
  cto = "cto",
  data = "data",
  infra = "infra",
  design = "design",
}

export type People = {
  id: number;
  name: string;
  job?: string;
  age: number;
  emoji: string;
};
