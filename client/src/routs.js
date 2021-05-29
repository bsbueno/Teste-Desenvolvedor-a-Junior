import React from "react";
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import ProdutosEditar from './pages/admin/produto/produtos.editar';
import  ProdutosListagem  from './pages/admin/produto';
import  produto from './pages/admin/produto';
import  ProdutosCadastrar  from './pages/admin/produto/produtos.cadastrar';
import PainelControle from './pages/admin/PainelControle';
import  home  from "./pages/client/home"
import  ProdutoDetalhes  from './pages/client/home/produto/produto.detalhes'
import painel from './pages/client/painel'
import ProdutoVisualizar from "./pages/admin/produto/produtos.detalhes";

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={produto}/>
                <Route path="/produtos/:idProduto" exact component={ProdutoDetalhes}/>
                
                <Route path ='/admin/' exact component={PainelControle}/>
                <Route path='/admin/produto' exact component={produto}/>
                <Route path='/admin/produto/cadastrar' exact component={ProdutosCadastrar}/>
                <Route path='/admin/produto/editar/:idProduto' exact component={ProdutosEditar}/>
                <Route path='/admin/produto/visualizar/:idProduto' exact component={ProdutoVisualizar}/>
            </Switch>
        </BrowserRouter>
    )
}