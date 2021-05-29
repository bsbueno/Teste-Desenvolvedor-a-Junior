import React, {useState,useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuAdmin from '../../../components/menu-admin';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import api from '../../../services/api';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';





const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        toolbar: {
          paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 8px',
          ...theme.mixins.toolbar,
        },
        appBar: {
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
        appBarShift: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        menuButton: {
          marginRight: 36,
        },
        menuButtonHidden: {
          display: 'none',
        },
        title: {
          flexGrow: 1,
        },
        drawerPaper: {
          position: 'relative',
          whiteSpace: 'nowrap',
          width: drawerWidth,
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
        drawerPaperClose: {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        },
        container: {
          paddingTop: theme.spacing(4),
          paddingBottom: theme.spacing(4),
        },
        paper: {
          padding: theme.spacing(2),
          display: 'flex',
          overflow: 'auto',
          flexDirection: 'column',
        },
        fixedHeight: {
          height: 240,
        },
      }));
export default function ListarProdutos() {
    const classes = useStyles();

    const [Produtos, setProdutos] = useState([]);

    useEffect(()=> {
      async function pegaProdutos(){
        const response = await api.get('/api/quad');
        setProdutos (response.data)
      }
      pegaProdutos();
    },[] );
    async function ExcluirProdutos(id){
     
     if (window.confirm("Deseja Relemente Excluir? ")){
      var result = await api.delete('/api/quad/'+id);  
      
      if (result.status == 200)
        window.location.href='/admin/produto'
      else
        alert("Não foi possivel excluir! ");  
     }

     
       
    }
    return (
      
      
    <div className={classes.root}>
      <CssBaseline />
     

      <MenuAdmin/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
                <Paper className={classes.paper}>
                  <h2>Listagem Produto</h2>
                  <Grid container spacing={12}>
                      <Grid item xs={12} sm={12}>
                        <TableContainer component={Paper}>
                          <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                              <TableRow>
                                
                                <TableCell align="right">Nome</TableCell>
                                <TableCell align="center">Descrição</TableCell>
                                <TableCell align="center">Categoria</TableCell>
                                <TableCell align="center">Editora</TableCell>
                                <TableCell align="center">Valor</TableCell>
                                <TableCell align="left">Opções</TableCell>

                              </TableRow>
                            </TableHead>
                            <TableBody>
                            {Produtos.map((row) => (
                                <TableRow key={row.id}>
                                  <TableCell component="th" scope="row">
                                    {row.titulo}
                                  </TableCell>
                                  <TableCell >{row.descri}</TableCell>
                                  <TableCell >{row.cat}</TableCell>
                                  <TableCell >{row.editora}</TableCell>
                                  <TableCell >{row.valor}</TableCell>
                                  <TableCell >
                                  <ButtonGroup size="small" disableElevation variant="contained" color="primary">
                                    <Button color="primary" href={'/admin/produto/editar/'+row.id}>Alterar</Button>
                                    <Button color="primary" href={'/admin/produto/visualizar/'+row.id}>Visualizar</Button>
                                    <Button color="secondary" onClick={()=>ExcluirProdutos(row.id)}>Excluir</Button>
                                  </ButtonGroup>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                      </TableContainer>
                    </Grid>  
                  </Grid>
                </Paper>
    
            </Grid>
          </Grid>
          <Box pt={4}>
            
          </Box>
        </Container>
      </main>
      
    </div>
     
    
  );
}