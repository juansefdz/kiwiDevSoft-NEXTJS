import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
	listUser = [
		{
			name: "Clientes",
			number: "5",
			icon: "/assets/Icon/heroicons_sm-user.svg",
		},
		{
			name: "Ubicaciones",
			number: "5",
			icon: "/assets/Icon/gridicons_location.svg",
		},
		{
			name: "Servicios",
			number: "5",
			icon: "/assets/Icon/bx_bxs-server.svg",
		},
	],
}) => {
	const scrollAnimation = useMemo(() => getScrollAnimation(), []);

	return (
		<div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
			<ScrollAnimationWrapper>
				<motion.div
					className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
					variants={scrollAnimation}
				>
					<div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
						<h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
							Todo lo que puedas imaginar es posible con{" "}
							<strong>KIWI DevSoft</strong>.
						</h1>
						<p className="text-black-500 mt-4 mb-6">
							Creemos que todo es posible cuando combinamos creatividad,
							tecnología y pasión. Somos más que una empresa de desarrollo de
							software; somos tus aliados en convertir ideas en soluciones
							reales, impactantes y transformadoras.
						</p>
						<ButtonPrimary>Contactanos</ButtonPrimary>
					</div>
					<div className="relative flex w-full">
						<motion.div className="absolute inset-0 z-0">
							<svg
								viewBox="0 0 200 200"
								xmlns="http://www.w3.org/2000/svg"
								className="w-full h-full scale-150"
							>
								<path
									fill="#00f400"
									d="M42.1,-61.7C48.8,-53.2,44.5,-33.1,48.2,-16.8C52,-0.5,64,12.1,62.5,21.5C61.1,31,46.4,37.2,33.7,40.5C21.1,43.8,10.5,44.1,-0.5,44.8C-11.6,45.5,-23.2,46.7,-33.3,42.6C-43.4,38.5,-52,29.1,-61.2,16.2C-70.3,3.4,-80.1,-12.9,-75.6,-23.9C-71.2,-35,-52.5,-40.8,-37.6,-46.6C-22.6,-52.5,-11.3,-58.3,3.2,-62.7C17.7,-67.2,35.5,-70.2,42.1,-61.7Z"
									transform="translate(100 100)"
								/>
							</svg>
						</motion.div>

						<motion.div
							className="relative z-10 h-full w-full"
							variants={scrollAnimation}
						>
							<Image
								src="/assets/Illustration1.png"
								alt="LOGO KIWIDEVSOFT"
								quality={100}
								width={612}
								height={612}
								layout="responsive"
							/>
						</motion.div>
					</div>
				</motion.div>
			</ScrollAnimationWrapper>
			<div className="relative w-full flex">
				<ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
					{listUser.map((listUsers, index) => (
						<motion.div
							className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
							key={index}
							custom={{ duration: 2 + index }}
							variants={scrollAnimation}
						>
							<div className="flex mx-auto w-40 sm:w-auto">
								<div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
									<img src={listUsers.icon} className="h-6 w-6" />
								</div>
								<div className="flex flex-col">
									<p className="text-xl text-black-600 font-bold">
										{listUsers.number}+
									</p>
									<p className="text-lg text-black-500">{listUsers.name}</p>
								</div>
							</div>
						</motion.div>
					))}
				</ScrollAnimationWrapper>
				<div
					className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
					style={{ filter: "blur(114px)" }}
				></div>
			</div>
		</div>
	);
};

export default Hero;
