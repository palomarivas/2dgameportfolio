import i18next from "i18next";

export function getDialogue(key) {
  // Return the translation of the provided key from i18next
  return i18next.t(key);
}

export const dialogueData = {
  pc: "pc",
  "cs-degree": "cs-degree",
  "sofa-table": "sofa-table",
  tv: "tv",
  bed: "bed",
  resume: "resume",
  projects: "projects",
  library: "library",
  exit: "exit",
};

export const scaleFactor = 4;