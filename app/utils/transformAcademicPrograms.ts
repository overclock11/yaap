import {AcademicProgramRaw} from "@/app/models/academicProgramRaw";
import {OptionValues} from "@/app/models/optionValues";

export const transformAcademicPrograms = (programs: AcademicProgramRaw): OptionValues[] => {
    const transformedResponse = programs["academic-programs"]?.map((program)=> {
        return {
            id: program.id,
            name: program.name
        }
    });
    console.log(transformedResponse);
    return transformedResponse;
}