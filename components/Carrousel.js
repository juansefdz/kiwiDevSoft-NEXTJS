import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const ProjectCarousel = ({ projects, languages }) => {
	return (
		<div className="container flex justify-center px-4 mx-auto shadow-lg rounded-lg">
			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={30}
				slidesPerView="auto"
				grabCursor={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				navigation
				pagination={{ clickable: true }}
				className="w-full max-w-4xl"
				breakpoints={{
					640: { slidesPerView: 1 },
					1024: { slidesPerView: 1 },
				}}
			>
				{projects.map((project) => (
					<SwiperSlide key={project.name} className="group">
						<div className="relative w-full h-96 rounded-lg overflow-hidden">
							<img
								src={project.imageUrl}
								alt={`${project.name} Image`}
								className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
							/>
							<div className="absolute inset-0 group-hover:bg-opacity-70 transition-all duration-300"></div>
							<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black-600 bg-opacity-90">
								<h2 className="text-xl font-bold text-white-500">
									{project.name}
								</h2>
								<p className="mt-2 text-sm text-white-500 ">
									{project.description}
								</p>

								{project.url && (
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-4 px-4 py-2 text-sm font-medium text-lime-500 bg-white rounded-lg hover:bg-lime-500 hover:text-white transition-all duration-300"
									>
										View Page
									</a>
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
