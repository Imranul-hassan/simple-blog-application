import FeaturedPost from "@/component/FeaturedPost";

const Home = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div className="container mx-auto">
      <div>
        <FeaturedPost data={data}></FeaturedPost>
      </div>
        
    </div>
  );
};

export default Home;