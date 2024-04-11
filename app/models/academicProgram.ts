export interface AcademicProgram {
    id:              string;
    name:            string;
    programSubjects: ProgramSubject[];
}

export interface ProgramSubject {
    id:      string;
    name:    string;
    teacher: Teacher;
}

export interface Teacher {
    id:   string;
    name: string;
}