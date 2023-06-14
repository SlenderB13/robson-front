import { Box, Button, Sheet, Textarea, Typography } from "@mui/joy"
import React, { useState } from "react"
import { Product } from "../interfaces/Product"

export const CreateProduct = () => {
    const [productName, setProductName] = useState<string>('')
    const [productPrice, setProductPrice] = useState<number>(0)
    const [productAmount, setProductAmount] = useState<number>(0)
    const [product, setProduct] = useState<Product | null>(null)

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        setProductAmount(productAmount + 1);

        setProduct({
            name: productName,
            price: productPrice,
            amount: productAmount
        })

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
                        placeholder="Qual o nome do produto?"
                        required
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProductName(e.target.value)}
                        sx={{ mb: 1 }}
                    />
                    <Textarea
                        placeholder="Qual o valor do produto?"
                        required
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProductPrice(parseFloat(e.target.value))}
                        sx={{ mb: 1 }}
                    />
                    <Button type="submit" disabled>Cadastrar</Button>
                </form>
            </Box>
        </Box>
       </Sheet>
    )
}