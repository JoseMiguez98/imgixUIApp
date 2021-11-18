export function getImages() {
  return fetch('https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json')
    .then(data => data.json());
};
