import React, { useEffect, useReducer } from "react";
import type { NextPage } from "next";
import { useRouter, NextRouter } from "next/router";

const User: NextPage = () => {
  const router: NextRouter = useRouter();
  const { pathname } = router;
  useEffect(() => {
    router.push("profile/settings");
  }, [pathname]);

  return (
    <div>

    </div>
  )
}

export default User
