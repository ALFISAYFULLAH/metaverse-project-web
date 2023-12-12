import { Footer, Navbar } from "../components";
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "../sections";
import styles from "../styles";

const Page = () => {
    return (
        <div className="bg-primary-black overflow-hidden">
            <Navbar />
            <Hero />
            <div className="relative">
                <About />
                <div className="gradient-03 z-0" />
                <Explore />
            </div>
            <div className="relative">
                <GetStarted />
                <div className="gradient-04 z-0" />
                <WhatsNew />
            </div>
            <World />
            <div className="relative">
                <Insights />
                <div className="gradient-04 z-0" />
                <Feedback />
            </div>
            <div className={`${styles.paddings} text-white flex flex-col lg:flex-row lg:justify-between gap-8`}>
                <h1 className="text-4xl md:text-6xl font-bold capitalize">enter the metaverse</h1>
                <button className="flex gap-4 justify-center items-center bg-cyan-800 px-8 py-4 rounded-full">
                    <img src="/headset.svg" alt="headset" />
                    enter metaverse
                </button>
            </div>
            <div className="gradient-04 relative z-0" />
            <Footer />
            <div className="gradient-04 relative z-0" />
        </div>
    );
};

export default Page;