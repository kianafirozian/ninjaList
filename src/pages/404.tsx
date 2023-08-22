import Link from "next/link";
const NotFound = () => {
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
