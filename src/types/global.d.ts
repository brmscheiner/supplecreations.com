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
