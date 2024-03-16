import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Kunal';

export const lastName = 'Salunkhe';

export const description =
	'Hey there! Im Kunal Salunkhe, a passionate web developer currently pursuing my bachelors degree in Computer Engineering. Specializing in full-stack web development, I craft visually appealing and user-friendly websites with awesome logics. Eager to expand my skill set, Im also venturing into Android development. Explore my projects here, and lets collaborate to create captivating digital experiences together!';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/Kunalsalunkhe007' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/kunal-salunkhe-dev/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/KunalPa71637724'
	},
	{
		platform: Platform.Email,
		link: 'riadh_adrani@hotmail.fr'
	},
];

export const skills = getSkills('html', 'css', 'javascript', 'java', 'cpp', 'python', 'android', 'xamarin');
