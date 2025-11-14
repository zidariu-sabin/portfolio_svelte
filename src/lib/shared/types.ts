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
    Name: string;
    Color: string;
    Size: number;
}
export type ProjectSchema = {
    Title: string;
    Description?: string;
    Label?: string;
    Url?: string;
    UpdatedAt?: string;
    Languages: LanguageSchema[];
    ReadMeOid?: string;
}