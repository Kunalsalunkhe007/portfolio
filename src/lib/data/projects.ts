import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'ToolsWithBenefits stands as the pinnacle of my diploma final year project, earning recognition and acclaim, including a prestigious prize at the college exhibition. This dynamic solution revolutionizes document management by seamlessly converting PDFs to various file formats and vice versa, ensuring compatibility and accessibility across platforms. Notably, ToolsWithBenefits offers advanced features such as customizable watermarking and robust password encryption, elevating document integrity and security to new heights. Powered by a sophisticated technological stack encompassing PHP, APIs, HTML, CSS, JavaScript, and MySQL, coupled with reliable web hosting, the project delivers a user-friendly interface for intuitive navigation and interaction. Its innovative integration of API functionalities enriches user experience, while MySQL ensures efficient data storage and retrieval. Positioned for real-world applications beyond academia, ToolsWithBenefits holds immense potential for organizations seeking streamlined document management solutions. Moving forward, I am committed to refining and expanding ToolsWithBenefits to meet the evolving demands of digital document management in todays fast-paced world.',
		shortDescription:
			'ToolsWithBenefits is my diploma project showcased at the college exhibition, featuring PDF conversion, customizable watermarking, and password encryption. Developed with PHP, APIs, HTML, CSS, JavaScript, and MySQL, it offers streamlined document management for enhanced organizational efficiency.',
		links: [{ to: 'https://github.com/Kunalsalunkhe007', label: 'GitHub' }, { to: 'https://www.linkedin.com/in/kunal-salunkhe-dev/', label: 'LinkedIn' }],
		logo: Assets.Unknown,
		name: 'ToolsWithBenefits - A all in one PDF Converter',
		period: {
			from: new Date(2022, 10, 1), to: new Date(2023, 2, 1)
		},
		skills: getSkills('php', 'javascript', 'sql', 'api'),
		type: 'Web Application'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'The "Anti-Theft Mobile App" represents the culmination of collaborative efforts by myself and my team, aimed at providing comprehensive theft protection for mobile devices. With features ranging from theft protection mechanisms to emergency response functionalities, our app offers a robust solution for safeguarding personal belongings. Notably, it includes innovative features such as fake shutdown detection, car crash detection, SOS alerts, and live location tracking, ensuring timely intervention in critical situations. The projects success was validated by its recognition at the State level project competition organized by MSBTE, where it secured a notable prize of 50,000. Developed on the Android platform using Java, and utilizing Firebase for database management, our app exemplifies a seamless integration of cutting-edge technology to address real-world challenges. This project stands as a testament to our teams dedication to innovation and our commitment to leveraging technology for the betterment of society.',
		shortDescription:
			'The "Anti-Theft Mobile App," developed by my team, offers comprehensive theft protection with features like fake shutdown detection, car crash detection, SOS alerts, and live location tracking. Recognized at the State level project competition by MSBTE, winning a prize of 50,000, its built on Android using Java and Firebase for database management.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }, { to: 'https://www.linkedin.com/in/kunal-salunkhe-dev/', label: 'LinkedIn' }],
		logo: Assets.Svelte,
		name: 'Anti-Theft Mobile Application',
		period: {
			from: new Date(2023, 1, 1), to: new Date(2023, 5, 1)
		},
		skills: getSkills('android', 'java', 'firebase', 'api'),
		type: 'Android Application'
		/**screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]*/
	},

	{
		slug: 'slick-portfolio-web',
		color: '#5e95e3',
		description:
			'Inotes stands as the outcome of my two-month internship, representing a proficiently developed notes storing application tailored for Android devices. Leveraging Xamarin and C#, the application offers a seamless cross-platform experience. With a focus on simplicity and functionality, Inotes enables users to effortlessly store and manage their notes on-the-go. Utilizing SQLite database for efficient data storage and retrieval, the application ensures smooth performance and reliability. Innotes embodies the culmination of my internship experience, showcasing my adeptness in mobile application development and my commitment to delivering user-centric solutions.',
		shortDescription:
			'Inotes is a user-friendly notes storing app crafted during my two-month internship. Developed using Xamarin and C#, it offers seamless cross-platform functionality on Android devices, with efficient data management facilitated by SQLite database integration.',
		links: [{ to: 'https://github.com/Kunalsalunkhe007', label: 'GitHub' }, { to: 'https://www.linkedin.com/in/kunal-salunkhe-dev/', label: 'LinkedIn' }],
		logo: Assets.Unknown,
		name: 'Inotes',
		period: {
			from: new Date(2022, 2, 1), to: new Date(2023, 4, 1)
		},
		skills: getSkills('xamarin', 'csharp', 'sql', 'deployment'),
		type: 'Android Application'
	},

	{
		slug: 'slick-portfolio-app',
		color: '#5e95e3',
		description:
			'The web application I developed during a 24-hour hackathon secured the 2nd runner-up position, boasting a versatile platform where customers, vehicle providers, and administrators can seamlessly interact concurrently. Designed to facilitate efficient operations across all three user roles, the application represents an ambitious endeavor to streamline processes within the transportation industry. Despite its current status as "under construction," with approximately 85% of the project already implemented during the hackathon, ongoing development efforts are focused on refining existing features and introducing enhancements for improved functionality. This project underscores my dedication to innovation and my ability to deliver impactful solutions within tight deadlines.',
		shortDescription:
			'My hackathon-winning web application facilitates concurrent interaction for customers, vehicle providers, and administrators. Though still under construction after achieving 85% completion in the 24-hour event, ongoing enhancements are in progress to refine its functionality and user experience.',
		links: [{ to: 'https://github.com/Kunalsalunkhe007', label: 'GitHub' }, { to: 'https://www.linkedin.com/in/kunal-salunkhe-dev/', label: 'LinkedIn' }],
		logo: Assets.Unknown,
		name: 'LogiCars',
		period: {
			from: new Date(2023, 2, 1)
		},
		skills: getSkills('javascript', 'sql', 'php'),
		type: 'Web Application'
	}
];

export const title = 'Projects';
