import { draftMode } from "next/headers";
import VisualEditingClient from "./VisualEditingClient";

export default async function VisualEditingWrapper() {
  const { isEnabled } = await draftMode();

  if (!isEnabled) {
    return null;
  }

  return <VisualEditingClient />;
}
