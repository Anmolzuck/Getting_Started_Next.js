// our-domain.com/news/something-imp

import { useRouter } from "next/router";

const SomethingImp = () => {
  const router = useRouter();

  const params = router.query.newsId;

  return <h1>The Detail for {params} </h1>;
};

export default SomethingImp;
