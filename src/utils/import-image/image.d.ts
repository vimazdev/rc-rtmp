declare module 'images' {
  function importAll(r: any): Record<string, string>;
  const images: Record<string, string>;
  export = images;
}