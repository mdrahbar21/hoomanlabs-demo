declare module '*.pug' {
    const template: (locals?: Record<string, any>) => string;
    export default template;
}

declare module '*.glsl' {
  const value: string;
  export default value;
}
  