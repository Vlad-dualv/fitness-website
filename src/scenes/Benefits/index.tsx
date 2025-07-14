import HText from "@/shared/HText";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion, stagger } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import { SelectedPage, type BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Experience our state-of-the-art facilities equipped with the latest technology and equipment to help you achieve your fitness goals."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Experience our state-of-the-art facilities equipped with the latest technology and equipment to help you achieve your fitness goals."
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Experience our state-of-the-art facilities equipped with the latest technology and equipment to help you achieve your fitness goals."
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

export default function Benefits({setSelectedPage}: Props) {
  return (
    <section id="benefits"
    className="mx-auto min-h-full w-5/6 py-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
            {/* HEADER */}
            <motion.div className="md-my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{hidden: {opacity: 0, x: -50}, visible: {opacity: 1, x: 0}
            }}>
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.
                </p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div className="mt-5 md:flex items-center justify-between gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}>
                {benefits.map((benefit: BenefitType) => (
                    <Benefit key={benefit.title} 
                    icon={benefit.icon} 
                    title={benefit.title} 
                    description={benefit.description}
                    setSelectedPage={setSelectedPage}/>
                ))}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/*GRAPHIC*/}
                <img className="mx-auto" src={BenefitsPageGraphic} alt="benefits page graphic" />
                {/*DESCRIPTION*/}
                <div>
                    {/*TITLE*/}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}
            }}>
                                <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/*DESCRIPTION*/}
                    <motion.div
                    initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay: 0.2, duration: 0.5 }}
            variants={{hidden: {opacity: 0, x: 50}, visible: {opacity: 1, x: 0}
            }}>
                        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quasi alias ea obcaecati praesentium, explicabo officiis quisquam saepe deleniti reiciendis iste aut, dolorum culpa voluptatem! Delectus facilis exercitationem quisquam odio?</p>
                        <p className="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur porro ut itaque deleniti, doloribus culpa impedit voluptates explicabo excepturi voluptatum nulla ipsum dignissimos repellat exercitationem totam dolorum earum adipisci eius.</p>
                    </motion.div>
                    {/*BUTTON*/}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}