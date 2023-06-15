import { Autocomplete, Box, Button, CircularProgress, Sheet, Table, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"
import { useState } from "react"
import { useFetch } from "../hooks/useFetch";
import { useDelete } from "../hooks/useDelete";

export const Checkout = () => {
    const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);

    const {data: products, isLoading} = useFetch<Product[]>('products')

    const handleCheckout = () => {
        selectedProducts?.map((product) => {
            useDelete('products', product?.id)
        })
    }

    return (
        <Box sx={{
            width: '50rem'
        }}>
            {!isLoading ? (
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
                    <Sheet sx={{
                        marginBottom: '2rem'
                    }}>
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
                    <Button 
                        disabled={!selectedProducts ? true : false}
                        onClick={handleCheckout}
                    >Finalizar venda</Button>
                </Box>

            ) : (
                <CircularProgress
                    size='lg' 
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%'
                    }}
                />
            )}
        </Box>
    )
}