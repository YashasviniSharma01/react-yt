import { Link, Outlet } from "react-router-dom"


const product = () => {
  return (
    <div className="flex justify-center gap-5">
      <Link to='/product/women'>Women</Link>
      

      <Outlet/>
    </div>
  );
};

export default product