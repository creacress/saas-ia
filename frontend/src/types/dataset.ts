// src/types/dataset.ts

export type DatasetStats = {
    shape: [number, number];
    columns: string[];
    types: Record<string, string>;
    nulls: Record<string, number>;
    describe: Record<string, Record<string, number>>;
  };
  