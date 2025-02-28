import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function Provider({ children }: { children: React.ReactNode }) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}
