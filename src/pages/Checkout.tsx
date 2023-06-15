import { Autocomplete, Box, Grid, Sheet, Table, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"
import { useState } from "react"
import { useFetch } from "../hooks/useFetch";

export const Checkout = () => {
    const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);

    const products = useFetch<Product[]>('products')

    return (
        <Box sx={{
            width: '50rem'
        }}>
            <Box component='section' sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography level='h3' mb={2}>Realize sua venda</Typography>
                <Typography>Selecione o(s) produto(s):</Typography>
                <Autocomplete
                    multiple
                    placeholder="items em estoque"
                    options={products ? products : []}
                    getOptionLabel={option => option.name}
                    onChange={(e, items: Product[]) => setSelectedProducts(items)}
                    sx={{
                        marginBottom: '2rem'
                    }}
                />
                <Typography>Confira os produtos:</Typography>
                <Sheet>
                    <Table
                    borderAxis="x"
                    color="neutral"
                    size="lg"
                    stickyFooter
                    stickyHeader
                    stripe="even"
                    variant="plain"
                    >
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                        {selectedProducts?.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>TOTAL:</th>
                                <td>
                                    {selectedProducts?.reduce((actualPrice=0, product) => actualPrice + product.price, 0)}
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                </Sheet>
            </Box>
        </Box>
    )
}