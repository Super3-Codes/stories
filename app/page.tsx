'use client';
import ExperienceCard from "@/app/components/Card";
import Nav from "@/app/components/Nav";
import Form from "@/app/components/Form";
import Footer from "@/app/components/Footer";
import data from "@/app/data/data";
import {useState} from "react";
import BarChart from "@/app/components/BarChart";

export default function Home() {
    const [experienceData, setExperienceData] = useState(data);
    const handleLikeClick = (id: number) => {
        // Find the individual by their ID and update the likes
        setExperienceData((prevExperienceData) =>
            prevExperienceData.map((individual) =>
                individual.id === id
                    ? { ...individual, likes: individual.likes + 1 }
                    : individual
            )
        );
    };
    return (
        <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-10 bg-white">
                <Nav />
            </div>

            <main className="flex bg-gray-100 flex-col items-center justify-center flex-1 overflow-y-auto">
                <h2 className={"text-slate-900 mt-16 text-5xl font-bold"}>Success Stories</h2>
                <p className={"my-8 mx-4 text-center text-xl"}>A2SV has turned the dreams of African software engineers into a reality and continues to thrive.</p>

                <p className={"mt-20 mx-4 text-center text-sm"}>  Google SWE Interviews Acceptance Rate Comparison</p>
                <p className={"mx-4 text-center text-lg"}>  A2SV students are 35 times more likely to pass Google SWE interviews than average candidates.</p>
                    <BarChart/>

                <h2 className={"text-slate-900 mt-16 text-5xl font-bold"}>Impact Stories</h2>
                <p className={"mt-4 mx-4 text-center text-lg"}>  Behind every success is a story. Learn about the stories of A2SVians.</p>
                {experienceData.map((individual) => (
                    <ExperienceCard
                        key={individual.id}
                        name={individual.name}
                        jobTitle={individual.role}
                        company={individual.place}
                        experienceText={individual.details[0].detail}
                        currentRoleText={individual.details[1].detail}
                        lifeChangeText={individual.details[2].detail}
                        imageUrl={individual.img}
                        likes={individual.likes}
                        onLikeClick={() => handleLikeClick(individual.id)}
                    />
                ))}
                <Form/>
                <Footer/>
                <div className={"bg-slate-300 h-[1px] w-[85%] my-8"}> </div>
                <div className="v-card__text my-8">
                    © Copyright 2023 <strong> A2SV Foundation </strong>. All rights reserved.
                    <a href="/privacy-policy" className="text-decoration-none text-blue-500">
                        Privacy Policy
                    </a>
                    <span> | </span>
                    <a href="/cookie-policy" className="text-decoration-none text-blue-500 ">
                          Cookie Policy
                    </a>
                </div>

            </main>
        </div>
    );
}
