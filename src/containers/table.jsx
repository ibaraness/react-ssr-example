import React from 'react';
import axios from 'axios';
import {TableCellView} from './../view/table.view';

export class TableCell extends React.Component {
    
    constructor(){
        super();
        this.state = {
            tableCell:[]
        }
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
            this.setState((state,prop)=>{
                return Object.assign({},state,{
                    tableCell:response.data.filter((data, index) => index < 300)
                });
            });
        });
    }
    render () {
        const tableCells = this.state.tableCell.map((cellData)=> <TableCellView key={cellData.id} cellData={cellData}/>)
        return <div>{tableCells}</div>
    }
  }