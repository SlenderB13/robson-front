import { Box, Grid, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"
import { ProductCard } from "../components/ProductCard"

export const Products = () => {
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
            width: '100%',
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
            {products.map((product, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <ProductCard name={product.name} price={product.price} amount={product.amount} />
                </Grid>
            ))}
            </Grid>
        </Box>
    )
}