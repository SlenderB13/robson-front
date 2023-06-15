import { Button, Grid } from "@mui/joy"
import { SideNav } from "./SideNav"
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
    const navigate: NavigateFunction = useNavigate(); 

    const handleCreateEmployee = (e: React.MouseEvent<HTMLButtonElement>) => {
        return navigate("/employee")
    }
    const handleCreateProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
        return navigate("/product")
    }
    const handleCheckProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
        return navigate("/products")
    }
    const handleProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
        return navigate("/checkout")
    }

    return (
        <Grid sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Grid sx={{
                height: '100%',
                background: '#f6f6f6'
            }}>
                <SideNav>
                    <Button variant='plain' onClick={handleCreateEmployee}>Cadastrar Funcionário</Button>
                    <Button variant='plain' onClick={handleCreateProduct}>Cadastrar Produto</Button>
                    <Button variant='plain' onClick={handleCheckProducts}>Consultar estoque</Button>
                    <Button variant='solid' sx={{width: '100%'}} onClick={handleProducts}>Vender</Button>
                </SideNav>
            </Grid>
            <Grid sx={{
                padding: '2rem'
            }}>
                <Outlet />
            </Grid>
            <Grid></Grid>
        </Grid>
    )
}