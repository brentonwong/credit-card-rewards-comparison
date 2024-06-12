const images = import.meta.glob<{ default: string }>("./*.{png,jpg,jpeg,svg}", {
  eager: true,
});

type ImageMap = { [key: string]: string };

const imageMap: ImageMap = Object.keys(images).reduce((acc, key) => {
  const imageKey = key.replace("./", "");
  acc[imageKey] = images[key].default;
  return acc;
}, {} as ImageMap);

export default imageMap;
