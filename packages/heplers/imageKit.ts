import { LENS_MEDIA_SNAPSHOT_URL } from "@togi/data/constants";

const imageKit = (url: string, name?: string): string => {
  if (!url) {
    return "";
  }

  if (url.includes(LENS_MEDIA_SNAPSHOT_URL)) {
    const splitedUrl = url.split("/");
    const path = splitedUrl[splitedUrl.length - 1];
    return name ? `${LENS_MEDIA_SNAPSHOT_URL}/${name}/${path}` : url;
  }
  return url;
};


export default imageKit;