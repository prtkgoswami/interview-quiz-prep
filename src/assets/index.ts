import { Questions as expressQuestions } from "./express";
import { Questions as nodeQuestions } from "./node";
import { Questions as reactQuestions } from "./react";
import { Questions as nextQuestions } from "./next";
import { Questions as typescriptQuestions } from "./typescript";
import { Questions as javascriptQuestions } from "./javascript";
import { Questions as mongoDbQuestions } from "./mongo";
import { Questions as MixFindBugQuestions } from "./mix_find_the_bug";
import { Questions as FeSystemDesignQuestions } from "./fe_system_design";

export const QUESTION_MAP = {
  expressJs: expressQuestions,
  nodeJs: nodeQuestions,
  reactJs: reactQuestions,
  nextJs: nextQuestions,
  ts: typescriptQuestions,
  js: javascriptQuestions,
  mongoDb: mongoDbQuestions,
  "mix_find_the_bug": MixFindBugQuestions,
  "fe_system_design": FeSystemDesignQuestions,
} as const;

export type Topic = keyof typeof QUESTION_MAP;
