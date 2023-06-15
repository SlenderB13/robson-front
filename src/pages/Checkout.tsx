import { Alert, Autocomplete, Box, Button, CircularProgress, Sheet, Table, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"
import { useState } from "react"
import { useFetch } from "../hooks/useFetch";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
    const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);
    const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false)
    const [notification, setNotification] = useState<string | null>(null)

    const {data: products, isLoading} = useFetch<Product[]>('products')

    const navigate = useNavigate()

    const handleCheckout = () => {
        setCheckoutLoading(true)
        selectedProducts?.map((product) => {
            //useDelete('products', product?.id)
            axios.delete(`${import.meta.env.VITE_REACT_APP_BASE_URL}/products/${product.id}`)
            .then((response: AxiosResponse) => {
                if (response.status === 200) {
                    setNotification('Venda realizada!')
                    navigate('/products')
                } else {
                    setNotification('Erro ao realizar venda!')
                }
            })
            .catch((err) => 
                console.log(err)
            )
            .finally(() => {
                setCheckoutLoading(false)
            })
        })
    }

    return (
        <Box sx={{
            width: '50rem'
        }}>        
            {notification && (
                <Alert
                    variant="soft"
                    color="success"
                    sx={{
                        position: 'absolute',
                        left: '50%',
                        top: '1rem'
                    }}>
                    {notification}
                </Alert>
            )}
 
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
                        startDecorator={checkoutLoading && (
                            <CircularProgress thickness={2} />
                        )}
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