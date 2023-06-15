import { Box, Button, FormLabel, Sheet, Textarea, Typography } from "@mui/joy"
import React, { useState } from "react"

export const CreateEmployee = () => {
    const [employeeName, setEmployeeName] = useState<string>('')

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
       <Sheet sx={{
        width: '50rem'
       }}>
        <Box>
            <Box>
                <Typography 
                    level='h3'
                    mb={2}
                >Cadastro de funcionário</Typography>
            </Box>
            <Box>
                <form onSubmit={handleSubmit}>
                    <FormLabel>Nome do funcionário:</FormLabel>
                    <Textarea
                        placeholder="Ex: Robson (belo nome)"
                        required
                        onChange={(e) => setEmployeeName(e.target.value)}
                        sx={{ mb: 1 }}
                    />
                    <Button type="submit" disabled>Cadastrar</Button>
                </form>
            </Box>
        </Box>
       </Sheet>
    )
}