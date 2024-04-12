"use client"
import SelectionCard from "@/app/ui/selectionCard";
import styles from "./page.module.scss";
import {useEffect, useState} from "react";
import {getAcademicPrograms} from "@/app/api/university";
import {transformAcademicPrograms} from "@/app/utils/transformAcademicPrograms";
import {AcademicProgramRaw} from "@/app/models/academicProgramRaw";
import {OptionValues} from "@/app/models/optionValues";

export default function Home() {
    const [academicPrograms, setAcademicPrograms] = useState<AcademicProgramRaw>({ "academic-programs": []});
    const [academicProgramsOptions, setAcademicProgramsOptions] = useState<OptionValues[]>([{id: "1", name: "Ingenieria"}]);

    useEffect(() => {
        getAcademicPrograms()
            .then((academicPrograms)=> {
                setAcademicPrograms(academicPrograms)
                setAcademicProgramsOptions(transformAcademicPrograms(academicPrograms));
            })
    }, []);

    const handleAcademicProgram = (optionValue: string) => {
        console.log("option value", optionValue);
    }
    return (
        <main className={styles.main}>
            <SelectionCard options={academicProgramsOptions} isMultiple={false} title="Seleccione programa"
                           className={styles.card} selectedOption={handleAcademicProgram}/>
{/*            <SelectionCard options={[{id: "1", name: "Ingenieria"}]} isMultiple={false} title="Seleccione materias"
                           className={styles.card}/>
            <SelectionCard options={[{id: "1", name: "Ingenieria"}]} isMultiple={false} title="Seleccione profesor"
                           className={styles.card}/>*/}
        </main>
    );
}
