import { useRouter, NextRouter } from "next/router";

export function getLocaleAndPath(): { locale: string, pathname: string } {
  const router: NextRouter = useRouter();
  const { locale, pathname } = router;
  return { locale: locale ?? "fa", pathname };
}
