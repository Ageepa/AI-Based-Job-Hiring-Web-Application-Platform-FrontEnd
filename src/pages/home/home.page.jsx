import Navigation from "@/components/shared/Navigation";
import Hero from "./components/Hero";
import JobSection from "./components/JobSection";

function HomePage() {
  return (
    <main>      
      <div>
        <Hero />
        <JobSection />
      </div>
    </main>
  );
}

export default HomePage;