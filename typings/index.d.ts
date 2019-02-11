declare module '*.svg' {
    const content: any;
    export default content;
}

declare module '!raw-loader!*' {
    const contents: string;
    export = contents;
}

declare interface Window {
    __APOLLO_STATE__: any;
    env: any;
    Stripe: any;
  }