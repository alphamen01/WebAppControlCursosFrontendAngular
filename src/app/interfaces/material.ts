import { Curso } from "./curso";

export interface Material{
    id?: number,
    courseId: Curso,
    name: string,
    description: string
}