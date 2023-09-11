import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";

export const builder = createBuilder({
  users: {
    fetch: () => {
      API.get("/users");
    },
  },
});
