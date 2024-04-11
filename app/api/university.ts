export const getAcademicPrograms = async () => {
    const response = await fetch("http://localhost:3001/academic-programs")
    return response.json();
}