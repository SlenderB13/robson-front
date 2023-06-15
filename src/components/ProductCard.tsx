import { Card, CardContent, Typography } from "@mui/joy"
import { Product } from "../interfaces/Product"

export const ProductCard = ({name, price, amount}: Product) => {
    return (
        <Card sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
            <CardContent>
                <Typography level="body3">adicionar tipo ou marca</Typography>
                <Typography fontWeight="xl">{name}</Typography>

                <Typography fontSize="xl" fontWeight="xl" sx={{ mt: 1 }}>{price}</Typography>
                <Typography level="body2">
                (<b>{amount}</b> em estoque)
                </Typography>
            </CardContent>
        </Card>
    )
}