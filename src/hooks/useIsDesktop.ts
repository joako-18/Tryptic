import { useEffect, useState } from "react";

const BREAKPOINT = "(min-width: 860px)";

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    () => typeof window !== "undefined" && window.matchMedia(BREAKPOINT).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(BREAKPOINT);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isDesktop;
}
