import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Diploma in Computer Engineering',
		description: '',
		location: 'Shirpur',
		logo: Assets.Unknown,
		name: '',
		organization: 'R.C Patel Polytechnic, Shirpur',
		period: { from: new Date(2020, 7, 1), to: new Date(2023, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C', 'C++', 'Java', 'Python', 'Networking', 'Android', 'Sql']
	},
	{
		degree: 'Bachelor of Engineering in Computer Engineering',
		description: 'Current',
		location: 'Pune, Maharashtra',
		logo: Assets.Unknown,
		name: '',
		organization: 'D.R D.Y Patil College of Engineering, Management and Research, Pune',
		period: { from: new Date(2023, 9, 1), to: new Date(2026, 9, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Assembly', 'Digital Electronics', 'Computer Architecture', 'Algorithms and Data structures', 'Data Science', 'Artificial Engineering']
	}
];

export const title = 'Education';
