import FeaturedPost from "@/components/FeaturedPost";
import Navbar from "@/components/Navbar";

const Home = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div >
      <Navbar></Navbar>
      <div className="container mx-auto">
        <FeaturedPost data={data}></FeaturedPost>
      </div>
        
    </div>
  );
};

export default Home;