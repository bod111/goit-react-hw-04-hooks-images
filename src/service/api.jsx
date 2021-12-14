const Request = ({ name, page }) => {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=23311871-6dfcca62e78c0a60decb58f13&image_type=photo&orientation=horizontal&per_page=12`
  ).then((res) => res.json());
};

export default Request;