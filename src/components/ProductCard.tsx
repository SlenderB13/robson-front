import { Card, CardContent, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"

export const ProductCard = ({name, price, brand}: Product) => {
    return (
        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
            <CardContent>
                <Typography level="body3">{brand}</Typography>
                <Typography fontWeight="xl">{name}</Typography>

                <Typography fontSize="xl" fontWeight="xl" sx={{ mt: 1 }}>
                    <Typography level='body2' fontWeight='lg'>R$ </Typography>
                    {price}
                </Typography>
            </CardContent>
        </Card>
    )
}