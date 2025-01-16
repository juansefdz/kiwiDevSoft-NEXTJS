import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
	title: "Kiwi DevSoft - Software Development Company",
	siteName: "Kiwi DevSoft",
	description:
		"Kiwi DevSoft is a software development company that provides custom software development services, web development, mobile app development, and more.",

	url: "https://kiwidevsoft.com.co",
	type: "website",
	robots: "follow, index",
	image: "/favicon/",
	author: "Juansefdz",
};

const SeoHead = (props) => {
	const router = useRouter();
	const meta = {
		...defaultMeta,
		...props,
	};

	meta.title = props.templateTitle
		? `${props.templateTitle} | ${meta.siteName}`
		: meta.title;

	return (
		<Head>
			<title>{meta.title}</title>
			<meta name="robots" content={meta.robots} />
			<meta content={meta.description} name="description" />
			<meta property="og:url" content={`${meta.url}${router.asPath}`} />
			<link rel="canonical" href={`${meta.url}${router.asPath}`} />
			{/* Open Graph */}
			<meta property="og:type" content={meta.type} />
			<meta property="og:site_name" content={meta.siteName} />
			<meta property="og:description" content={meta.description} />
			<meta property="og:title" content={meta.title} />
			<meta name="image" property="og:image" content={meta.image} />
			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@F2aldi" />
			<meta name="twitter:title" content={meta.title} />
			<meta name="twitter:description" content={meta.description} />
			<meta name="twitter:image" content={meta.image} />
			{meta.date && (
				<>
					<meta property="article:published_time" content={meta.date} />
					<meta
						name="publish_date"
						property="og:publish_date"
						content={meta.date}
					/>
					<meta name="author" property="article:author" content={meta.author} />
				</>
			)}
			{/* Favicons */}
			{favicons.map((linkProps) => (
				<link key={linkProps.href} {...linkProps} />
			))}
			{/* Windows 8 app icon */}
			<meta name="msapplication-TileColor" content="##00FE00" />
			<meta
				name="msapplication-TileImage"
				content="/favicon/"
			/>
			{/* Accent color on supported browser */}
			<meta name="theme-color" content="##00FE00" />
		</Head>
	);
};


const favicons = [
	{
		rel: "apple-touch-icon",
		sizes: "57x57",
		href: "/favicon/",
	},
];

export default SeoHead;
