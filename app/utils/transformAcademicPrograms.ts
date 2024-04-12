import {OptionValues} from "@/app/models/optionValues";
import {AcademicProgram} from "@/app/models/academicProgram";

export const transformAcademicPrograms = (programs: AcademicProgram[]): OptionValues[] => {
    return programs.map((program)=> {
        return {
            id: program.id,
            name: program.name
        }
    });
}