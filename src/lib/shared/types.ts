// export const projectSchema = z.object({
//   title: z.string(),
//   description: z.string(),
//   label: z.string().optional(),
//   url: z.string().optional(),
//   updatedAt: z.date().optional(),
//   languages: z.array(lannguageSchema),
// })
// const lannguageSchema = z.object({
//   name: z.string(),
//   color: z.string(),
//   size: z.number(),
// })

export type LanguageSchema = {
    name: string;
    color: string;
    size: number;
}
export type ProjectSchema = {
    title: string;
    description?: string;
    label?: string;
    url?: string;
    updatedAt?: string;
    languages: LanguageSchema[];
    docFileOid?: string;
}

export type PostSchema = {
	title: string
	slug: string
	description: string
	date: string
	published: boolean
}