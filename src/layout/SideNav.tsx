import { Box, Typography } from "@mui/joy"
import { ReactElement } from "react"
import { Link } from "react-router-dom"

export const SideNav = ({children}: {children: ReactElement[]}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
            paddingY: '1rem',
            paddingX: '2rem'
        }}>
            <Box sx={{
                marginBottom: '2rem'
            }}>
                <Link to='/'>
                    <Typography 
                        level='h4' 
                        sx={{
                            textDecoration: 'none'
                    }}>Robson</Typography>
                </Link>
                <Typography level='body3'>Controle de estoque</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'space-around',
                gap: '0.5rem'
            }}>
                {children}
            </Box>
        </Box>
    )
}