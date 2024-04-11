"use client"
import SelectionCard from "@/app/ui/selectionCard";
import styles from "./page.module.scss";
import {useEffect, useState} from "react";
import {getAcademicPrograms} from "@/app/api/university";
import {transformAcademicPrograms} from "@/app/utils/transformAcademicPrograms";
import {AcademicProgramRaw} from "@/app/models/academicProgramRaw";

export default function Home() {
    const [academicPrograms, setAcademicPrograms] = useState<AcademicProgramRaw>({ "academic-programs": []});

    useEffect(() => {
        const getPrograms = async () => {
            const programs = await getAcademicPrograms();
            setAcademicPrograms(programs);
        }
        getPrograms();
    }, []);

    const handleAcademicProgram = (optionValue: string) => {
        console.log("option value", optionValue);
    }
    return (
        <main className={styles.main}>
            <SelectionCard options={transformAcademicPrograms(academicPrograms)} isMultiple={false} title="Seleccione programa"
                           className={styles.card} selectedOption={handleAcademicProgram}/>
{/*            <SelectionCard options={[{id: "1", name: "Ingenieria"}]} isMultiple={false} title="Seleccione materias"
                           className={styles.card}/>
            <SelectionCard options={[{id: "1", name: "Ingenieria"}]} isMultiple={false} title="Seleccione profesor"
                           className={styles.card}/>*/}
        </main>
    );
}
