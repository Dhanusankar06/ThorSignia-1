declare module 'react' {
  import * as React from 'react';
  
  // Properly export React named exports
  export = React;
  export as namespace React;
  
  // Explicitly declare useState and other hooks
  export const useState: typeof React.useState;
  export const useEffect: typeof React.useEffect;
  export const useContext: typeof React.useContext;
  export const useReducer: typeof React.useReducer;
  export const useCallback: typeof React.useCallback;
  export const useMemo: typeof React.useMemo;
  export const useRef: typeof React.useRef;
  export const useImperativeHandle: typeof React.useImperativeHandle;
  export const useLayoutEffect: typeof React.useLayoutEffect;
  export const useDebugValue: typeof React.useDebugValue;
}

declare module 'react-dom/client' {
  import * as ReactDOMClient from 'react-dom/client';
  export = ReactDOMClient;
}

declare module 'framer-motion' {
  // Dummy declaration for framer-motion
  export interface AnimationProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    [key: string]: any;
  }

  export interface MotionProps extends AnimationProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export const motion: {
    [key: string]: React.ComponentType<MotionProps>;
  };
}

declare module 'react-router-dom' {
  export interface RouteProps {
    path?: string;
    element?: React.ReactNode;
    [key: string]: any;
  }

  export interface LinkProps {
    to: string;
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }

  export const BrowserRouter: React.ComponentType<{ children?: React.ReactNode }>;
  export const Routes: React.ComponentType<{ children?: React.ReactNode }>;
  export const Route: React.ComponentType<RouteProps>;
  export const Link: React.ComponentType<LinkProps>;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module 'vite' {
  export function defineConfig(config: any): any;
}

declare module '@vitejs/plugin-react' {
  export default function react(options?: any): any;
} 