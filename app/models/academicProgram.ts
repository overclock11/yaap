export interface AcademicItem {
    id:              string;
    name:            string;
}

export interface AcademicProgram extends AcademicItem {
    programSubjects: ProgramSubject[];
}

export interface ProgramSubject extends AcademicItem {
    teacher: Teacher;
}

export interface Teacher extends AcademicItem {
}