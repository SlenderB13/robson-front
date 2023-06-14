import { Box, Button, Sheet, Textarea, Typography } from "@mui/joy"
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
                <Typography level='body1'>Preencha as informações</Typography>
            </Box>
            <Box>
                <form onSubmit={handleSubmit}>
                    <Textarea
                        placeholder="Qual o nome do funcionário?"
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