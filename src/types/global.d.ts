import { SizeofLoaderObject } from './';

declare module "*.jpeg" {
  const value: SizeofLoaderObject;
  export default value;
}

declare module "*.jpg" {
  const value: SizeofLoaderObject;
  export default value;
}

declare module "*.png" {
  const value: SizeofLoaderObject;
  export default value;
}

// for some reason this doesn't work?! had to save in raw-loader.d.ts
declare module "*.md" {
  const content: string;
  export default content;
}
