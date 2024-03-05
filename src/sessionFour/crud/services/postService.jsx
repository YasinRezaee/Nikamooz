const baseURL = process.env.REACT_APP_API_URL;
const apiUrl = `${baseURL}/comments`;
// -----------------------------------POST--------------------------------------
export const insert = (data) => {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(
      (result) => {
        alert(JSON.stringify(result));
      },
      (error) => {}
    );
};

export const insertAsync = async (data) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
// -----------------------------------READ--------------------------------------
export const getAllAsync = async () => {
  const response = await fetch(apiUrl);
  const result = response.json();
  return result;
};
// -----------------------------------DELETE--------------------------------------
export const removeAsync = async (id) => {
  const response = await fetch(apiUrl + `/${id}`, {
    method: "DELETE",
  });
  return response.status === 200;
};
