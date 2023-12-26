export type Contact = {
	id?: string;
	createdAt?: number;
	first?: string;
	last?: string;
	favourite?: boolean;
};

export type FakeCache = {
	[key: string]: boolean;
};
