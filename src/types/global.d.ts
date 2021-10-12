// After I started using sizeof-loader, typescript started 
// getting confused by width and height properties on imported 
// images. This was a quick solution...

declare module "*.jpg";
declare module "*.png";
