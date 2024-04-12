import {OptionValues} from "@/app/models/optionValues";
import {AcademicItem} from "@/app/models/academicProgram";

export const transformToOptions = (items: AcademicItem[]): OptionValues[] => {
    return items.map((item)=> {
        return {
            id: item.id,
            name: item.name
        }
    });
}