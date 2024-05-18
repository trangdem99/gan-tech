import React from "react";
import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'

const Img = React.lazy(() => import('./img'));

export default function Image(props) {
  return (
    <React.Fragment>
      <React.Suspense fallback={<Skeleton count={1} duration={1} height={"100%"} width={"100%"} />}>
        <Img {...props} />
      </React.Suspense>
    </React.Fragment>
  )
} 