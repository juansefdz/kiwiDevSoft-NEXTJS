import React, { useMemo } from "react";
import Testomonies from "./UserTestimonials";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Services = () => {
	const scrollAnimation = useMemo(() => getScrollAnimation(), []);

	return (
		<div
			className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
			id="pricing"
		>
			<div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
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
							Descubre nuestra amplia gama de servicios diseñados para
							satisfacer tus necesidades tecnológicas. Desde el desarrollo de
							aplicaciones web hasta soluciones móviles y backend, ofrecemos
							herramientas innovadoras que impulsan el éxito de tu proyecto.
						</motion.p>
					</ScrollAnimationWrapper>

					{/* SERVICIOS */}
					<div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">


						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-between items-center border-2 border-gray-500 hover:bg-white-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 h-full w-auto"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.3,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Desarrollo Web
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2">
										Landing Pages: Impacta a tus usuarios desde el primer clic.
									</li>
									<li className="relative check custom-list my-2">
										Blogs: Comparte contenido relevante y conecta con tu
										audiencia.
									</li>
									<li className="relative check custom-list my-2">
										E-commerce: Lleva tu negocio al mundo digital con tiendas en
										línea optimizadas.
									</li>
									<li className="relative check custom-list my-2">
										Web Apps: Soluciones dinámicas y personalizadas para
										cualquier industria.
									</li>
									<li className="relative check custom-list my-2">
										Otros Proyectos: Transformamos tus ideas en realidades
										funcionales.
									</li>
								</ul>
							</motion.div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-between items-center border-2 border-gray-500 hover:bg-white-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 h-full w-auto"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.2,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Backend
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2">
										Node.js: Aplicaciones rápidas y escalables para un
										rendimiento superior.
									</li>
									<li className="relative check custom-list my-2">
										Express: APIs personalizadas y eficientes.
									</li>
									<li className="relative check custom-list my-2">
										Java con Spring: Microservicios sólidos y confiables.
									</li>
									<li className="relative check custom-list my-2">
										Python con Django: Soluciones ágiles para el desarrollo
										rápido de aplicaciones.
									</li>
								</ul>
							</motion.div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-between items-center border-2 border-gray-500 hover:bg-white-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 h-full w-auto"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.2,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Desarrollo Móvil
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2">
										Android: Aplicaciones nativas para el ecosistema Android.
									</li>
									<li className="relative check custom-list my-2">
										iOS: Experiencias fluidas y optimizadas para dispositivos
										Apple.
									</li>
									<li className="relative check custom-list my-2">
										Flutter: Aplicaciones híbridas con diseño unificado y
										rendimiento excepcional.
									</li>
								</ul>
							</motion.div>
						</ScrollAnimationWrapper>
						<ScrollAnimationWrapper className="flex justify-center">
							<motion.div
								variants={scrollAnimation}
								className="flex flex-col justify-between items-center border-2 border-gray-500 hover:bg-white-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 h-full w-auto"
								whileHover={{
									scale: 1.1,
									transition: {
										duration: 0.2,
									},
								}}
							>
								<p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
									Otros Servicios
								</p>
								<ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
									<li className="relative check custom-list my-2">
										Consultoría tecnológica: Asesoramiento para optimizar tus
										recursos tecnológicos.
									</li>
									<li className="relative check custom-list my-2">
										Mantenimiento de aplicaciones: Mantén tus sistemas
										actualizados y funcionando sin problemas.
									</li>
									<li className="relative check custom-list my-2">
										Integración de APIs: Conecta tu negocio con servicios
										externos para expandir sus capacidades.
									</li>
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
							Nuestros Clientes
						</motion.h3>
						<motion.p
							variants={scrollAnimation}
							className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
						>
							Nos enorgullece colaborar con clientes que valoran la excelencia.
							Aquí tienes algunas de las empresas que han confiado en nuestras
							soluciones tecnológicas y han obtenido resultados sobresalientes.
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
							<div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
								<div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
									<h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
										Suscríbete para conocer nuevos Proyectos y Servicios!
									</h5>
									<p>Visita nuestras redes sociales.</p>
								</div>
								<ButtonPrimary>Conócenos</ButtonPrimary>
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

export default Services;
