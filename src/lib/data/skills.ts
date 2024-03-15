import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const items = [
	defineSkill({
		slug: 'java',
		color: 'red',
		description:
			'With three years of dedicated Java programming experience gained during my diploma studies, I bring a strong foundation in object-oriented design, application development, and problem-solving to any software development team. Proficient in Java frameworks and libraries, Ive contributed to diverse projects including inventory management systems, web-based e-commerce platforms, and Android applications. As an effective communicator and collaborative team player, I thrive in dynamic environments, eager to leverage my skills to drive innovation and deliver high-quality solutions.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'blue',
		description:
			'With three years of focused experience in C++ programming acquired during my diploma studies, I offer a robust skill set in software development encompassing object-oriented design, application development, and algorithm implementation. Proficient in leveraging C++ versatility, I have contributed to various projects including system software, graphical user interfaces, and performance-critical applications. As an adept problem-solver and collaborative team member, I excel in analyzing complex requirements, devising efficient solutions, and working seamlessly within interdisciplinary teams to achieve project objectives.',
		logo: Assets.Cpp,
		name: 'Cpp',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'android',
		color: 'blue',
		description:
			'With one year of dedicated experience in Android development, I have honed my skills in building robust and user-centric mobile applications. Through hands-on projects and coursework, I have gained proficiency in Java and Kotlin programming languages, as well as the Android SDK and related technologies. Leveraging my understanding of Android architecture components, UI/UX design principles, and best practices, I have contributed to the development of several Android applications, focusing on performance optimization, scalability, and intuitive user interfaces. From implementing core functionalities to integrating third-party APIs and services, I am adept at navigating the complexities of Android development to deliver polished and feature-rich applications. Passionate about staying updated with the latest trends and advancements in the Android ecosystem, I am committed to continuous learning and innovation, eager to contribute my expertise to impactful mobile projects.',
		logo: Assets.Android,
		name: 'Android',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description:
			'Bringing one and half years of dedicated Python programming expertise acquired during my diploma studies, I offer a strong foundation in software development, data analysis, and automation. Proficient in utilizing Pythons rich ecosystem of libraries and frameworks, I have contributed to a diverse range of projects including web development, data science, and machine learning applications. Skilled in designing efficient algorithms and implementing scalable solutions, I excel in tackling complex problems and delivering high-quality software products. With a collaborative mindset and effective communication skills, I thrive in team environments, eager to leverage my Python proficiency to drive innovation and achieve project success.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			'With six months of hands-on experience in CSS acquired during my journey as a student, I offer a growing proficiency in front-end web development and user interface design. During this period, Ive focused on mastering CSS fundamentals, including layout techniques, responsive design principles, and styling best practices. Through practical projects and coursework, Ive contributed to building visually appealing and user-friendly websites, gaining valuable insights into CSS frameworks like Bootstrap and preprocessors like Sass. Eager to continue expanding my skills and contributing to innovative web projects, I am committed to delivering polished and engaging user experiences through effective CSS implementation.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'xamarin',
		color: 'cyan',
		description:
			'During my three-month internship period, I delved into Xamarin development, acquiring valuable skills in cross-platform mobile app development. Immersed in the Xamarin ecosystem, I gained proficiency in utilizing Xamarin.Forms and Xamarin.Android to create versatile and engaging mobile applications. Leveraging my prior programming knowledge and adapting to the Xamarin framework, I actively contributed to the development of mobile solutions, focusing on intuitive user interfaces, seamless navigation, and efficient code implementation. Through collaborative projects and mentorship, I honed my Xamarin skills, gained insights into mobile app lifecycle management, and cultivated a passion for building innovative mobile experiences. Eager to further explore the possibilities of Xamarin and contribute to cutting-edge mobile projects, I am enthusiastic about leveraging my internship experience to drive impactful solutions in the mobile development space.',
		logo: Assets.Xamarin,
		name: 'Xamarin',
		category: 'library'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	}),
	defineSkill({
		slug: 'sql',
		color: 'cyan',
		description: 
			'With over three years of dedicated experience in SQL, I bring a comprehensive understanding of database management and query optimization to the table. Throughout my journey, I have demonstrated proficiency in designing, implementing, and maintaining relational databases using SQL Server, MySQL, and PostgreSQL. My expertise extends to complex SQL queries, stored procedures, triggers, and views, allowing me to efficiently extract, manipulate, and analyze data to meet diverse business requirements. Additionally, I have a strong grasp of database normalization principles, indexing strategies, and performance tuning techniques, enabling me to optimize database performance and ensure scalability. Whether collaborating with cross-functional teams or independently managing database projects, I am committed to delivering robust and efficient solutions that drive business success.',
		logo: Assets.Sql,
		name: 'Sql',
		category: 'db'
	}),
	defineSkill({
		slug: 'firebase',
		color: 'orange',
		description: 
			'Currently, I am actively engaged in learning and implementing Firebase for Android development, harnessing its powerful suite of features to enhance the functionality and user experience of mobile applications. Through hands-on experimentation and guided tutorials, I am gaining proficiency in integrating Firebase services such as Firestore, Authentication, Cloud Messaging, and Analytics into Android projects. By leveraging Firebases real-time database capabilities, user authentication mechanisms, and cloud functions, I aim to streamline data management, enhance app performance, and enable personalized user interactions. Excited about the potential of Firebase to accelerate development cycles and unlock new possibilities in mobile app development, I am committed to mastering its intricacies and leveraging it to create innovative and impactful Android applications.',
		logo: Assets.Firebase,
		name: 'Firebase',
		category: 'db'
	})
] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};
