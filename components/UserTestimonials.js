import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimonies = ({
	listTestimonies = [
		{
			name: "Carlos García",
			image: "/assets/people-3.png",
			city: "Medellín",
			country: "Colombia",
			rating: "5",
			testimonies:
				"Wow... Estoy muy contento de haber trabajado con este equipo de desarrollo de software, superaron todas mis expectativas. Su capacidad para adaptar soluciones personalizadas ha sido excelente. ¡Recomiendo totalmente!",
		},
		{
			name: "SAMI",
			image: "/assets/Icon/sami.png",
			city: "Medellín",
			country: "Colombia",
			rating: "5",
			testimonies:
				"Wow... Fue un placer colaborar con este equipo en el desarrollo de mi aplicación. Entendieron perfectamente las necesidades del proyecto y entregaron una solución más allá de lo que imaginaba. ¡Excelente experiencia!",
		},
		{
			name: "Anónimo",
			image: "/assets/people-0.jpg",
			city: "Envigado",
			country: "Colombia",
			rating: "5",
			testimonies: "Excelente empresa de desarrollo",
		},
	],
}) => {
	const settings = {
		dots: true,
		customPaging: function (i) {
			return (
				<a className="">
					<span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
				</a>
			);
		},
		dotsClass: "slick-dots w-max absolute mt-20  ",
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const [sliderRef, setSliderRef] = useState(null);

	return (
		<>
			<Slider
				{...settings}
				arrows={false}
				ref={setSliderRef}
				className="flex items-stretch justify-items-stretch"
			>
				{listTestimonies.map((listOfTestimonies, index) => (
					<div className="px-3 flex items-stretch" key={index}>
						<div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
							<div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
								<div className="flex order-2 xl:order-1">
									<Image
										src={listOfTestimonies.image}
										height={50}
										width={50}
										alt="Icon People"
									/>
									<div className="flex flex-col ml-5 text-left">
										<p className="text-lg text-black-600 capitalize">
											{listOfTestimonies.name}
										</p>
										<p className="text-sm text-black-500 capitalize">
											{listOfTestimonies.city},{listTestimonies.country}
										</p>
									</div>
								</div>
								<div className="flex flex-none items-center ml-auto order-1 xl:order-2">
									<p className="text-sm">{listOfTestimonies.rating}</p>
									<span className="flex ml-4">
										<Stars className="h-4 w-4" />
									</span>
								</div>
							</div>
							<p className="mt-5 text-left">“{listOfTestimonies.testimonies}”.</p>
						</div>
					</div>
				))}
			</Slider>
			<div className="flex w-full items-center justify-end">
				<div className="flex flex-none justify-between w-auto mt-14">
					<div
						className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
						onClick={sliderRef?.slickPrev}
					>
						<ArrowBack className="h-6 w-6 " />
					</div>
					<div
						className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
						onClick={sliderRef?.slickNext}
					>
						<ArrowNext className="h-6 w-6" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonies;
