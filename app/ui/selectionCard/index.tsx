"use client"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface Option {
    id: string;
    name: string;
}

interface SelectionCardProps {
    title: string;
    options: Option[];
    isMultiple: boolean
    selectedOption: (optionValue: string) => void;
    className?: string
}

export default function SelectionCard({title, options, isMultiple, selectedOption, className = ""}: SelectionCardProps) {
    console.log(options);
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
                            value={"1"}
                            label="Age"
                            onChange={(event) => {
                                selectedOption(event.target.value)
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