import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu-admin';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import api from '../../../services/api';
import {useParams} from 'react-router-dom'

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
          padding: 15,
          display: 'flex',
          overflow: 'auto',
          flexDirection: 'column',
        },
        fixedHeight: {
          height: 240,
        },
      }));
export default function ProdutoVisualizar() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [edit, setEdit] = useState('');
    const [valor, setValor] = useState('');
    const [volume, setVol] = useState('');
    const [cat, setCat] = useState('');
    const {idProduto} = useParams();
    useEffect (() => {
      async function getProduto(){
        var response = await api.get('/api/quad/'+idProduto)
       setNome(response.data.titulo)
       setDesc(response.data.descri)
       setEdit(response.data.editora)
       setValor(response.data.valor)
       setVol(response.data.volume)
       setCat(response.data.cat)
      
      }
      getProduto();
    }
    ,[])

    return (
    <div className={classes.root}>
     
      <MenuAdmin/>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
         
          <Grid container spacing={3}>
            <Grid item sm={12} >
              <Paper className={classes.paper}>
              <h2>Visualizar Produto</h2>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="Nome"
                  name="Nome"
                  label="Nome"
                  fullWidth
                  autoComplete="Nome"
                  disabled="TRUE"
                  value={nome}
                  onChange={e=> setNome(e.target.value)}
                />
              </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Descrição"
                name="Descrição"
                label="Descricao"
                fullWidth
                autoComplete="Descricao"
                disabled="TRUE"
                value={desc}
                  onChange={e=> setDesc(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Editora"
                name="Editora"
                label="Editora"
                fullWidth
                autoComplete="Editora"
                disabled="TRUE"
                value={edit}
                onChange={e=> setEdit(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Categoria"
                name="Categoria"
                label="Categoria"
                fullWidth
                autoComplete="Categoria"
                disabled="TRUE"
                value={cat}
                onChange={e=> setCat(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                type="mony"
                required
                id="Valor"
                name="Valor"
                label="Valor"
                fullWidth
                autoComplete="Valor"
                disabled="TRUE"
                value={valor}
                onChange={e=> setValor(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Volume"
                name="Volume"
                label="Volume"
                fullWidth
                autoComplete="Volume"
                disabled="TRUE"
                value={volume}
                onChange={e=> setVol(e.target.value)}
              />
             </Grid>
             <Grid item xs={12} sm={12}>
             <Button variant="contained" href={'/admin/produto/'}  color="primary">
                Voltar
              </Button>
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