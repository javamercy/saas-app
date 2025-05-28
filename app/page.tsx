import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
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
        <CompanionList
          title="Recently compelted sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </div>
    </main>
  );
};

export default Page;
