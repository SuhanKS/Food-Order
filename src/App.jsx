import Header from "./Header";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
    </div>
  );
}
