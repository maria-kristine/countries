
import useFetch from "../usefetch";
import Flag from "./Flag";

const AllFlags = () => {
  const {
    error,
    isPending,
    data: countries,
  } = useFetch(" http://localhost:4000/countries");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {countries && <Flag countries={countries}/>}
    </div>
  );
};

export default AllFlags;
