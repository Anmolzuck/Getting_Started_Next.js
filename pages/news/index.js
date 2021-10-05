// our-domain.com/news

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-great">Next Js is great!</Link>
        </li>
        <li>Something else is great!</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
