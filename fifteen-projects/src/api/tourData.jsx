const url = 'https://course-api.com/react-tours-project';

// eslint-disable-next-line import/no-anonymous-default-export
export default async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
