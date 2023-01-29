// paginate the json file
const paginate = (data) => {
  const followerPerPage = 10;
  const pages = Math.ceil(data.length / followerPerPage);
  const dataPerPage = Array.from({ length: pages }, (_, index) => {
    const start = index * followerPerPage;
    return data.slice(start, start + followerPerPage);
  });
  return dataPerPage;
};

export default paginate;
