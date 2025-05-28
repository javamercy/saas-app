import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";

const Page = () => {
  return (
    <>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="2"
          name="Countsy the Number Wizard"
          topic="Derivates & Integrals"
          subject="math"
          duration={30}
          color="#efd0ff"
        />
        <CompanionCard
          id="3"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <div className="home-section">
        <CompanionList />
      </div>
    </>
  );
};

export default Page;
