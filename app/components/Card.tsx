'use client';
import React, {useState} from 'react';
import {AiOutlineLike} from "react-icons/ai"
interface ExperienceProps {
    name: string;
    jobTitle: string;
    company: string;
    experienceText: string;
    currentRoleText: string;
    lifeChangeText: string;
    imageUrl: string;
    likes: number;
    onLikeClick: () => void;
}

const ExperienceCard: React.FC<ExperienceProps> = ({
                                                       name,
                                                       jobTitle,
                                                       company,
                                                       experienceText,
                                                       currentRoleText,
                                                       lifeChangeText,
                                                       imageUrl,

    likes,
    onLikeClick,
                                                   }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    const handleLikeClick = () => {
        if (!liked) {
            setLikeCount(likeCount + 1);
            setLiked(true);
            onLikeClick(); // Invoke the callback to handle the like click in the parent component
        }
    };

    return (
        <div className="my-4 card grid grid-cols lg:grid lg:grid-cols-2  lg:card-side bg-base-100 shadow-xl max-w-[1024px]">
            <figure className="min-h-[400px] flex flex-col justify-end mx-4 my-4" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', borderRadius: 10 }}>
                <div className="flex flex-col justify-end m-4 px-4">
                    <p className="text-white font-bold">{name}</p>
                    <p className="text-white font-bold text-xs">{company}</p>
                    <p className="text-white text-xs font-bold ">{jobTitle}</p>

                </div>
            </figure>

            <div className="card-body">
                <h2 className="card-title">My A2SV Experience</h2>
                <p className={"text-sm "}>{experienceText}</p>
                <h2 className="card-title">What I did/I am doing now</h2>
                <p className={"text-sm"}>{currentRoleText}</p>
                <h2 className="card-title">How the A2SV program changed my life</h2>
                <p className={"text-sm"} >{lifeChangeText}</p>

                <div className="card-actions justify-end ">
                    <AiOutlineLike
                        className={`cursor-pointer ${liked ? 'text-primary' : ''}`}
                        onClick={handleLikeClick}
                        size={20}/>
                    <span>{likes} likes</span>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
