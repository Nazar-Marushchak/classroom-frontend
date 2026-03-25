import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "CS",
    description: "An introductory course on the basics of computer science, algorithms, and problem-solving techniques.",
    createdAt: new Date("2024-01-10T10:00:00Z").toISOString(),
  },
  {
    id: 2,
    name: "Linear Algebra",
    code: "MATH201",
    department: "math",
    description: "Fundamental concepts of linear algebra, including vector spaces, matrices, and linear transformations.",
    createdAt: new Date("2024-01-12T09:00:00Z").toISOString(),
  },
  {
    id: 3,
    name: "General Physics I",
    code: "PHYS101",
    department: "physics",
    description: "Introduction to classical mechanics, focusing on motion, forces, and energy conservation.",
    createdAt: new Date("2024-01-15T14:00:00Z").toISOString(),
  },
];
