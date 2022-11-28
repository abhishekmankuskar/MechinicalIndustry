// import http from "./httpMethod";
export const data = [];

// export const postContent = async (credentials: {
//   username: string;
//   password: string;
// }) => {
//   const response = await http.post("auth/login", credentials);
//   return response;
// };
export const getFormData = (formElment: HTMLFormElement) => {
  const formData = new FormData(formElment);
  console.log(formData.entries());
  const data: { [key: string]: FormDataEntryValue } = {};
  for (let [key, value] of formData) {
    data[key] = value;
  }
  return data;
};
