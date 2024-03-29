import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Infotech Inc',
		description: 'During my internship at Infotech Inc., I served as a software engineer intern, delving into a comprehensive array of technologies and responsibilities. Over the course of my tenure, I gained proficiency in Xamarin, C#, and Android app development, honing my skills in crafting efficient and user-friendly mobile applications. Additionally, I expanded my knowledge to encompass website development and hosting, enriching my understanding of full-stack development. One of the highlights of my internship was the development of "Inotes," a notes storing application, which further solidified my practical experience and contributed to the companys project portfolio. This experience equipped me with a versatile skill set and a deeper insight into software engineering practices, setting a strong foundation for my future career endeavors.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Dhule',
		period: { from: new Date(2022, 2, 1), to: new Date(2022, 4, 1) },
		skills: getSkills('xamarin', 'csharp', 'html', 'css', 'hosting', 'android'),
		name: 'Software Engineer Intern',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome websites and apps for clients.'
	},
	{
		slug: 'software-freelance',
		company: 'Infotech Inc',
		description: 'As a student ambassador during my internship at Infotech Inc., I had the unique opportunity to blend my roles and responsibilities, effectively leveraging my position to bridge communication and foster collaboration between the company and my academic community. Serving as a liaison between Infotech Inc. and fellow students, I facilitated seamless interactions by disseminating vital information, organizing events, and cultivating a supportive network. Additionally, I utilized my ambassadorial role to promote internship opportunities at Infotech Inc., thereby contributing to talent acquisition efforts and strengthening the companys relationship with educational institutions. This dual role allowed me to enhance both my professional skills and leadership capabilities, demonstrating my ability to effectively balance multiple responsibilities and contribute meaningfully to both academic and professional settings.',
		contract: ContractType.Freelance,
		type: 'Management',
		location: 'Dhule',
		period: { from: new Date(2022, 2, 1), to: new Date(2022, 4, 1) },
		skills: getSkills('management', 'communication', 'team management'),
		name: 'Student Ambassador',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'During my internship at Infotech Inc., I concurrently served as a student ambassador, bridging communication and fostering collaboration between the company and over 150 students.'
	},
	{
		slug: 'product-review',
		company: 'PlayBookUX',
		description: 'As a freelance professional on PlaybookUX, I have consistently delivered high-quality services in website and application testing, as well as product reviews, garnering an average rating of over 4.5 stars from satisfied clients worldwide. Specializing in user experience evaluation, I meticulously assess websites and applications to ensure optimal functionality and usability, providing actionable feedback for improvement. Additionally, I conduct thorough product reviews, offering valuable insights to aid in decision-making and enhance overall product quality. My commitment to excellence and attention to detail have established me as a trusted resource for international clients seeking reliable and insightful feedback on their digital products and services.',
		contract: ContractType.Freelance,
		type: 'Product Review and Testing',
		location: 'Remote',
		period: { from: new Date(2023, 1, 1), to: new Date() },
		skills: getSkills('testing', 'communication', 'network'),
		name: 'PlaybookUX Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'With a stellar average rating of over 4.5 stars, I specialize in freelance website and application testing, along with providing comprehensive product reviews for international clients on PlaybookUX.'
	},

	{
		slug: 'product-test',
		company: 'UserTesting',
		description: 'As a freelancer on UserTesting, I have honed my expertise in website and application testing, as well as product reviews, catering to diverse international clientele. With an exceptional average rating exceeding 4.5 stars, I meticulously evaluate digital platforms to ensure optimal functionality and user experience, providing comprehensive feedback for enhancement. My commitment to delivering insightful insights and actionable recommendations has solidified my reputation as a trusted resource, facilitating seamless collaboration and driving improvements for clients across various industries.',
		contract: ContractType.Freelance,
		type: 'Product Review and Testing',
		location: 'Remote',
		period: { from: new Date(2022, 4, 1), to: new Date() },
		skills: getSkills('testing', 'communication', 'network'),
		name: 'UserTesting Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Specializing in freelance website and application testing and offering product reviews, I maintain an outstanding average rating of over 4.5 stars on UserTesting, serving international clients with actionable insights and reliable feedback.'
	}
];

export const title = 'Experience';
