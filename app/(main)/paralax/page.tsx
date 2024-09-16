import Intro from "@/components/background-parallax/Intro";
import Descriptions from "@/components/background-parallax/Descriptions";
import Section from "@/components/background-parallax/Section";

const ParallaxPage = () => {
    return (
        <main>
            <Intro />
            <Descriptions />
            <Section />
            <div className="h-screen bg-purple-500/50"></div>
        </main>
    );
};

export default ParallaxPage;
