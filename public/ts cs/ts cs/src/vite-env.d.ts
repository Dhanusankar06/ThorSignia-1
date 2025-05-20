/// <reference types="vite/client" />

declare module 'react' {
  export const useState: any;
  export const useEffect: any;
  export const useCallback: any;
  export const useMemo: any;
  export const useRef: any;
  export const createContext: any;
  export const useContext: any;
  
  export const Fragment: any;
  export type FC<P = {}> = React.FunctionComponent<P>;
  export type FunctionComponent<P = {}> = (props: P) => React.ReactElement | null;
  export type ReactElement = any;
  export type ReactNode = any;
  export type CSSProperties = any;
  export type RefObject<T> = any;
  export type Dispatch<A> = (value: A) => void;
  export type SetStateAction<S> = S | ((prevState: S) => S);
}

declare module 'react-router-dom' {
  export const useLocation: any;
  export const useNavigate: any;
  export const useParams: any;
  export const Link: any;
  export const NavLink: any;
  export const Route: any;
  export const Routes: any;
  export const BrowserRouter: any;
  export const Outlet: any;
  export const Navigate: any;
  export const useSearchParams: any;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
  export const useAnimation: any;
  export const useScroll: any;
  export const useTransform: any;
} 