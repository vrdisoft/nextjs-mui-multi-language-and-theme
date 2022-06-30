import * as React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from 'next/link'
import { useRouter, NextRouter } from "next/router";

import { getRoute } from "../../route/routes";
import localeFile from "../../locale/index.json";

function CustomBreadcrumbs() {
  const router: NextRouter = useRouter();
  const { pathname, locale } = router;
  const currentLocale = locale ?? "fa";

  const genrateBreadcrumbs = () => {
    const currentRoute = getRoute(pathname);
    const elements = currentRoute.breadcrumbs.map((path) => {
      const breadcrumbRoute = getRoute(path);
      return (
        <Link
          href={breadcrumbRoute.path}
          key={breadcrumbRoute.path}
        >
          <a  style={{ color: "rgb(121, 131, 142)" }}>
            {/* @ts-ignore: Unreachable code error*/}
            {localeFile[currentLocale][breadcrumbRoute.title]}
          </a>
        </Link>
      )
    })
    elements.push(
      <Typography
        sx={{
          margin: "0px",
          fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
          fontWeight: "400",
          fontSize: "0.857143rem",
          lineHeight: "1.5",
        }}
        key={currentRoute.path}
      >
        {/* @ts-ignore: Unreachable code error*/}
        {localeFile[currentLocale][currentRoute.title]}
      </Typography>
    )
    return elements;
  }

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          margin: "0px",
          fontFamily: "iranyekan, Helvetica, Arial, sans-serif",
          fontWeight: "400",
          fontSize: "0.857143rem",
          lineHeight: "1.5",
          color: "rgb(121, 131, 142)",
        }}
      >
        {genrateBreadcrumbs()}
      </Breadcrumbs>
    </>
  );
}

export default CustomBreadcrumbs;
