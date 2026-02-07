import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

type ImageSource = Parameters<typeof builder.image>[0];

export const urlFor = (source: ImageSource) => {
  return builder.image(source);
};
