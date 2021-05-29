import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ExitToApp, PostAdd } from '@material-ui/icons';

export const mainListItems = (
  <div>
    <ListItem button component ="a"  href="/admin/produto">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Produtos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button component ="a"  href="/admin/produto/cadastrar/">
      <ListItemIcon>
        <PostAdd/>
      </ListItemIcon>
      <ListItemText primary="Cadastrar Produtos" />
    </ListItem>
  </div>
);