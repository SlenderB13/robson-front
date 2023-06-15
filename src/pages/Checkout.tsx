import { Autocomplete, Box, Grid, Sheet, Table, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"
import { useState } from "react"

export const Checkout = () => {
    const [selectedProducts, setSelectedProducts] = useState<Product[] | []>([]);

    const products: Product[] = [
        {
            "name": "Z Flip 3",
            "price": 4.999,
            "amount": 2
        },
        {
            "name": "Z Flip 4",
            "price": 6.999,
            "amount": 1
        },
        {
            "name": "Galaxy Fold",
            "price": 7.999,
            "amount": 4
        }
    ]

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
                    options={products}
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
                    size="sm"
                    stickyFooter
                    stickyHeader
                    stripe="even"
                    variant="plain"
                    >
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                        {selectedProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.amount}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Sheet>
            </Box>
        </Box>
    )
}