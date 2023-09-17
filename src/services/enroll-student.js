import { AXIOS_OBJ } from "./helper";

export const signUp = (student) => {
  return AXIOS_OBJ.post("/api/v1/student/register", student).then((response) =>
    response.data.json()
  );
};
