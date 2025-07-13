import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedbull from "@/assets/SponsorRedbull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function index({setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
    {/* IMAGE AND HERO*/}    
    <div>
        {/*HERO*/}
        <div>
            {/*HEADINGS*/}
            <div>
                <div>
                    <div>
                        <img src={HomePageText} alt="home page text" />
                    </div>
                </div>
                <p>
                    Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios To Get The Body Shapes That You Dream Of... Get Your Dream Body Now.
                </p>
            </div>
            {/*ACTIONS*/}
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`${SelectedPage.ContactUs}`}><p>Learn More</p></AnchorLink>
        </div>
        {/*IMAGE*/}
        <div>
            <img src={HomePageGraphic} alt="home pageGraphic" />
        </div>
    </div>
    {/*SPONSORS*/}
    {isAboveMediumScreens && (
        <div>
            <div>
                <div>
                    <img src={SponsorRedbull} alt="redbull sponsor" />
                    <img src={SponsorForbes} alt="forbes sponsor" />
                    <img src={SponsorFortune} alt="fortune sponsor" />
                </div>
            </div>
        </div>
    )}
    </section>
  )
}