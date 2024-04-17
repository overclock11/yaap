"use client"
import SelectionCard from "@/app/ui/selectionCard";
import styles from "./page.module.scss";
import {useEffect, useState} from "react";
import {getAcademicPrograms} from "@/app/api/university";
import {transformToOptions} from "@/app/utils/transformAcademicPrograms";
import {OptionValues} from "@/app/models/optionValues";
import {AcademicProgram, ProgramSubject, Teacher} from "@/app/models/academicProgram";

interface SelectedOptions {
    academicProgram: OptionValues[];
    program: OptionValues[];
    teacher: OptionValues[];
}

export default function Home() {
    const defaultOption = [{id: "1", name: "Seleccione una opción"}];
    const [selectedOption, setSelectedOption] = useState<SelectedOptions>({
        academicProgram: defaultOption,
        program: defaultOption,
        teacher: defaultOption,
    });

    const [academicPrograms, setAcademicPrograms] = useState<AcademicProgram[]>([]);
    const [programs, setPrograms] = useState<ProgramSubject[]>( [{id: "", name: "", teacher: {id: "", name: ""}}]);
    const [teacher, setTeacher] = useState<Teacher[]>()

    useEffect(() => {
        const getPrograms = async () => {
            const programs = await getAcademicPrograms()
            setAcademicPrograms(programs)
            setSelectedOption(() => {
                return {
                    ...selectedOption,
                    academicProgram: transformToOptions(programs)
                };
            });
        }
        getPrograms();
    }, []);

    const handleAcademicProgram = (optionValue: string) => {
        setPrograms(()=> {
            const academicProgram = academicPrograms.find((academicProgram) => academicProgram.id === optionValue)!;
            setSelectedOption(() => {
                return {
                    ...selectedOption,
                    program: transformToOptions(academicProgram.programSubjects),
                    teacher: defaultOption
                }
            });
            return academicProgram.programSubjects;
        })
    }

    const handlePrograms = (optionValue: string) => {
        const program = programs.find((program) => program.id === optionValue )!;
        setTeacher([program.teacher]);
        setSelectedOption(() => {
            return {
                ...selectedOption,
                teacher: transformToOptions([program.teacher]),
            }
        })
    }

    const enrollSubjects = (optionValue: string) => {
        console.log(teacher, optionValue);
    }

    return (
        <main className={styles.main}>
            <SelectionCard options={selectedOption.academicProgram} title="Seleccione programa"
                           className={styles.card} selectedOption={handleAcademicProgram} />
            <SelectionCard options={selectedOption.program} title="Seleccione materias"
                           className={styles.card} selectedOption={handlePrograms} />
            <SelectionCard options={selectedOption.teacher} title="Seleccione profesor"
                           className={styles.card} selectedOption={enrollSubjects} />
            <br/>
            <hr/>

            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    );
}
