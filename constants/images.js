import { Image } from 'react-native';

export function preloadImages(urlOfImages) {
  // an array of urls of images
  const preFetchTasks = [];
  urlOfImages.forEach((url) => {
    preFetchTasks.push(Image.prefetch(url));
  });

  Promise.all(preFetchTasks).then((results) => {
    try {
      let downloadedAll = true;
      results.forEach((result) => {
        if (!result) {
          // error occurred downloading a pic
          downloadedAll = false;
        }
      });
    } catch (e) {
      console.log('error: preload image');
      console.log(e);
    }
  });
}
