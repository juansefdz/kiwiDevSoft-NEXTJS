import { ProjectCarousel } from "./Carrousel";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
	"Escalabilidad y mantenibilidad",
	"Diseño responsivo",
	"Optimización de recursos",
	"Seguridad y privacidad",
	"Clean code",
	"Documentación",
];

const Feature = () => {
	const scrollAnimation = useMemo(() => getScrollAnimation(), []);

	return (
		<div
			className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
			id="feature"
		>
			<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
				<ScrollAnimationWrapper className="flex w-full justify-end">
					<motion.div className="h-full w-full p-4" variants={scrollAnimation}>
						<ProjectCarousel
							projects={[
								{
									name: "SAMI",
									description:
										"SISTEMA AMBULATORIO MEDICO INMEDIATO. solicita ambulancias de una manera ágil y rápida, con la posibilidad de ver la ubicación de la ambulancia en tiempo real.",
									imageUrl: "/assets/projects/SAMI.png",
									url: "",
								},
								{
									name: "JUANSEFDZ.DEV",
									description:
										"Página web de uno de los desarrolladores del equipo de KiwiDEVSOFT",
									imageUrl: "/assets/projects/juansefdz.png",
									url: "https://www.juansefdz.dev",
								},
							]}
							
						/>
					</motion.div>
				</ScrollAnimationWrapper>
				<ScrollAnimationWrapper>
					<motion.div
						className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
						variants={scrollAnimation}
					>
						<h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
							Nuestros Proyectos
						</h3>
						<p className="my-2 text-black-500">
							Nuestros proyectos son desarrollados con las mejores tecnologías y
							metodologías, garantizando la calidad y eficiencia en cada uno de
							ellos.
						</p>
						<ul className="text-black-500 self-start list-inside ml-8">
							{features.map((feature, index) => (
								<motion.li
									className="relative circle-check custom-list"
									custom={{ duration: 2 + index }}
									variants={scrollAnimation}
									key={feature}
									whileHover={{
										scale: 1.1,
										transition: {
											duration: 0.2,
										},
									}}
								>
									{feature}
								</motion.li>
							))}
						</ul>
					</motion.div>
				</ScrollAnimationWrapper>
			</div>
		</div>
	);
};

export default Feature;
