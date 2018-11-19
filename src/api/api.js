const SHUTTER_CLIENT_ID = "3434a56d8702085b9226";
const SHUTTER_CLIENT_SECRET = "7698001661a2b347c2017dfd50aebb2519eda578";

const basicAuth = () =>
  "Basic ".concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));

const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

export const shutterStockVideos = searchQuery => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;

  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.data.map(({ id, assets, description }) => ({
        id,
        mediaUrl: assets.preview_mp4.url,
        description
      }));
    });
};

export const shutterStockImages = searchQuery => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/images/search?query=${searchQuery}&page=1&per_page=10`;
  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.data.map(({ id, assets, description }) => ({
        id,
        mediaUrl: assets.preview.url,
        description
      }));
    });
};
