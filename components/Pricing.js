import React, { useMemo } from "react";
import Testomonies from "./UserTestimonials";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
	const scrollAnimation = useMemo(() => getScrollAnimation(), []);

	return (
		<div
			className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
			id="pricing"
		>
			<div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
				<div className="flex flex-col w-full">
					<ScrollAnimationWrapper>
						<motion.h3
							variants={scrollAnimation}
							className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
						>
							Nuestros Servicios
						</motion.h3>
						<motion.p
							variants={scrollAnimation}
							className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
						>
							Aquí encontrarás los servicios con los que contamos, para que
							puedas elegir el que más se adapte a tus necesidades!
						</motion.p>
					</ScrollAnimationWrapper>
					<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.2,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Desarrollo Web{" "}
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2">
										Landing Page
									</li>
									<li className="relative check custom-list my-2">Blog</li>
									<li className="relative check custom-list my-2">
										E-commerce
									</li>
									<li className="relative check custom-list my-2">Web Apps</li>
									<li className="relative check custom-list my-2">
										Otros Proyectos
									</li>
								</ul>
							</motion.div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.2,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Backend{" "}
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2">Node.js</li>
									<li className="relative check custom-list my-2">Express</li>
									<li className="relative check custom-list my-2">
										Java - Spring
									</li>
									<li className="relative check custom-list my-2">
										Python - Django
									</li>
								</ul>
							</motion.div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.2,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Desarrollo Móvil{" "}
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2">Android</li>
									<li className="relative check custom-list my-2">IOS</li>
									<li className="relative check custom-list my-2">Flutter</li>
								</ul>
							</motion.div>
						</ScrollAnimationWrapper>

						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.2,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Otro Servicios{" "}
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2"> </li>
									<li className="relative check custom-list my-2"> </li>
									<li className="relative check custom-list my-2"> </li>
								</ul>
							</motion.div>
						</ScrollAnimationWrapper>
					</div>
				</div>

				<div className="flex flex-col w-full my-16" id="testimoni">
					<ScrollAnimationWrapper>
						<motion.h3
							variants={scrollAnimation}
							className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
						>
							Nuestros Clientes{" "}
						</motion.h3>
						<motion.p
							variants={scrollAnimation}
							className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
						>
							Estos son algunos de los clientes que han confiado en nosotros y
							han quedado satisfechos con nuestro trabajo.
						</motion.p>
					</ScrollAnimationWrapper>
					<ScrollAnimationWrapper>
						<motion.div
							className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
							variants={scrollAnimation}
						>
							<img
								src="/assets/Icon/sami.png"
								className="h-20 w-auto mt-4 lg:mt-2"
								alt="SAMI"
							/>
						</motion.div>
					</ScrollAnimationWrapper>
					<ScrollAnimationWrapper className="w-full flex flex-col py-12">
						<motion.div variants={scrollAnimation}>
							<Testomonies />
						</motion.div>
					</ScrollAnimationWrapper>
					<ScrollAnimationWrapper className="relative w-full mt-16">
						<motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
							<div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
								<div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
									<h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
										Suscribete <br /> Para conocer nuevos Proyectos y Servicios!
									</h5>
									<p>Visita nuestras redes sociales.</p>
								</div>
								<ButtonPrimary>Conocenos</ButtonPrimary>
							</div>
							<div
								className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
								style={{ filter: "blur(114px)" }}
							></div>
						</motion.div>
					</ScrollAnimationWrapper>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
