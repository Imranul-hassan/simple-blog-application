import FeaturedPost from "@/components/FeaturedPost";


const Home = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return (
    <div >
      <div className="container mx-auto">
        <FeaturedPost data={data}></FeaturedPost>
      </div>
        
    </div>
  );
};

export default Home;