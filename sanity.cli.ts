/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./src/sanity/env";

const projectIdEnv = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const datasetEnv = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: { projectId: projectIdEnv || projectId, dataset: datasetEnv || dataset },
});
