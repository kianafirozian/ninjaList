import Link from "next/link";
import { useEffect } from "react";
// in order to redirect to the home page after we getting error
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
      //   redirecting to the home page,we can also use router.go(1)
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooopss...</h1>
      <h2>That page can't be found</h2>
      <p>
        Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
