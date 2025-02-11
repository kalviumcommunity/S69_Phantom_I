import React from "react";
import img1 from '../assets/4.png';
import img2 from '../assets/5.jpg';  // Add new images in the assets folder
// import img3 from '../assets/3.png';
import wood from '../assets/bg.png'
import b from '../assets/b2.jpg'

const Home = () => {
  return (
    <>
      {/* Section 1 */}
      <div 
        className="w-full h-screen flex items-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <h3 className="bg-opacity-50 p-4 text-center" style={{backgroundImage: `url(${wood})`,borderRadius: "15px"}}>
          Welcome to Phantom_I,
          <br/>  a ranking website for movies, anime, and manga.
          <br/> 
          <br/>
          <b><i>Vote for your favorite shows based on various criteria!</i></b>
        </h3>
      </div>

      {/* Section 2 */}
      <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white text-4xl p-10">
        <p>
          <b><i>Dive into a world of entertainment! 
            <br/>Rank your top anime, explore movie trends, 
            <br/><p className="text-yellow-500">and see what the community loves.</p></i></b>
        </p>
      </div>

      {/* Section 3 */}
      <div 
        className="w-full h-screen flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <h3 className=" p-4  text-white text-4xl ">
          Discover,<br/> Rank, and discuss the best anime, movies, and <br/>manga with like-minded fans!
        </h3>
      </div>

      {/* Section 4 */}
      <div className="w-full h-screen flex items-center justify-center bg-gray-800 text-white text-4xl p-10 text-center">
        <p>
          Join the conversation and be part of an ever-growing ranking community. 
          <br/>
       
         <b><i><p className="text-yellow-500">Your vote shapes the leaderboard!</p></i></b>
        </p>
      </div>

      {/* Section 5 */}
      <div 
        className="w-full h-screen flex items-center justify-start  text-white text-3xl font-bold"
        style={{
          backgroundImage: `url(${b})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <h3 className="bg-opacity-50 p-55 text-amber-500 self-end">
          Ready to make your voice heard?<br/> <span className="text-white">Sign up</span> <br/>now and start ranking!
        </h3>
      </div>

     
      <footer className="w-full bg-black text-white text-center p-4">
        © 2025 Phantom_I 
      </footer>
    </>
  );
};

export default Home;
