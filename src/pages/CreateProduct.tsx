import { Box, Button, FormLabel, Input, Sheet, Textarea, Typography } from "@mui/joy"
import React, { useState } from "react"
import { Product } from "../interfaces/Product"
import { useInsert } from "../hooks/useInsert"

export const CreateProduct = () => {
    const [productBrand, setProductBrand] = useState<string>('')
    const [productName, setProductName] = useState<string>('')
    const [productPrice, setProductPrice] = useState<number>(0)
    const [productAmount, setProductAmount] = useState<number>(0)
    const [product, setProduct] = useState<Product | null>(null)

    const handleSubmit =(e: React.FormEvent<HTMLFormElement>) => {
        setProduct({
            brand: productBrand,
            name: productName,
            price: productPrice,
            amount: productAmount+1
        })

        e.preventDefault()

        if (!product) return

        useInsert<Product>(product, 'products')
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
                >Cadastro de produto</Typography>
            </Box>
            <Box>
                <form onSubmit={handleSubmit}>
                    <FormLabel>Marca do produto:</FormLabel>
                    <Textarea
                        placeholder="Ex: Samsung"
                        required
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProductBrand(e.target.value)}
                        sx={{ mb: 1 }}
                    />
                    <FormLabel>Nome do produto:</FormLabel>
                    <Textarea
                        placeholder="Ex: Razr 256GB"
                        required
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProductName(e.target.value)}
                        sx={{ mb: 1 }}
                    />
                    <FormLabel>Preço do produto:</FormLabel>
                    <Textarea
                        placeholder="Ex: 1.999"
                        required
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProductPrice(parseFloat(e.target.value))}
                        sx={{ mb: 1 }}
                    />
                    <Button type="submit">Cadastrar</Button>
                </form>
            </Box>
        </Box>
       </Sheet>
    )
}