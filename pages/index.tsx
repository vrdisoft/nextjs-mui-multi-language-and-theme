import React, { useEffect, useReducer } from "react";
import type { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";
import Link from "next/link";

import { getTitle } from "../helper/getTitle";

const Home: NextPage = () => {
  const router: NextRouter = useRouter();
  const { pathname } = router;
  useEffect(() => {
    router.push("profile/settings");
  }, [pathname]);

  return (
    <div>
      <Link
        href="/profile/settings"
      >
        <a style={{ color: "rgb(255, 168, 46)" }}>
          {getTitle("userSettings")}
        </a>
      </Link>
    </div>
  )
}

export default Home
