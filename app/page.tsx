"use client"
import SelectionCard from "@/app/ui/selectionCard";
import styles from "./page.module.scss";
import {useEffect, useState} from "react";
import {getAcademicPrograms} from "@/app/api/university";
import {transformToOptions} from "@/app/utils/transformAcademicPrograms";
import {OptionValues} from "@/app/models/optionValues";
import {AcademicProgram} from "@/app/models/academicProgram";

export default function Home() {
    const [academicPrograms, setAcademicPrograms] = useState<AcademicProgram[]>([]);
    const [academicProgramsOptions, setAcademicProgramsOptions] = useState<OptionValues[]>([{id: "1", name: "Cargando.."}]);
    const [programs, setPrograms] = useState<OptionValues[]>([{id: "1", name: "Cargando.."}]);

    useEffect(() => {
        const getPrograms = async () => {
            const programs = await getAcademicPrograms()
            setAcademicPrograms(programs)
            setAcademicProgramsOptions(transformToOptions(programs));
        }
        getPrograms();
    }, []);

    const handleAcademicProgram = (optionValue: string) => {
        setPrograms(()=> {
            const result = academicPrograms.find((academicProgram) => academicProgram.id === optionValue)!;
            return transformToOptions(result.programSubjects);
        })
    }
    return (
        <main className={styles.main}>
            <SelectionCard options={academicProgramsOptions} isMultiple={false} title="Seleccione programa"
                           className={styles.card} selectedOption={handleAcademicProgram}/>
            <SelectionCard options={programs} isMultiple={false} title="Seleccione materias"
                           className={styles.card}/>
            {/*<SelectionCard options={[{id: "1", name: "Ingenieria"}]} isMultiple={false} title="Seleccione profesor"
                           className={styles.card}/>*/}
        </main>
    );
}
