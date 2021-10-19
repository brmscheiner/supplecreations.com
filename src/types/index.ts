
interface SizeofLoaderInterface {
  width: number;
  height: number;
  src: string;
}

export type SizeofLoaderObject = SizeofLoaderInterface | string;

export interface MediaElement {
  mediaType: string;
  text?: string;
  image?: SizeofLoaderObject;
  alt?: string;
}
