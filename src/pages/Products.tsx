import { Box, Grid, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"
import { ProductCard } from "../components/ProductCard"
import { useFetch } from "../hooks/useFetch"

export const Products = () => {
    const products = useFetch<Product[] | null>('products')

    return (
        <Box sx={{
            width: '80rem',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography level='h3' mb={2}>Produtos em estoque</Typography>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ flexGrow: 1 }}
            >
            {products?.map((product, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <ProductCard brand={product.brand} name={product.name} price={product.price} amount={product.amount} />
                </Grid>
            ))}
            </Grid>
        </Box>
    )
}