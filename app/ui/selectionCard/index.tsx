"use client"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {OptionValues} from "@/app/models/optionValues";
import {useState} from "react";


interface SelectionCardProps {
    title: string;
    options: OptionValues[];
    isMultiple: boolean
    selectedOption: (optionValue: string) => void;
    className?: string
}

export default function SelectionCard({title, options, isMultiple, selectedOption, className = ""}: SelectionCardProps) {
    const [option, setOption] = useState("1")
    return (
        <Box className={className}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={option}
                            label="Age"
                            onChange={(event) => {
                                setOption(event.target.value as string);
                                selectedOption(event.target.value as string);
                            }}
                        >
                            {
                                options?.map((option) => {
                                    return <MenuItem key={option.name} value={option.id}>{option.name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
        </Box>
    );
}