import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Clear, Check} from '@material-ui/icons';
import {green, red} from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import {Box} from "@material-ui/core";


export const MaterialTable = ({products, counter}) => {

  return (
    <Box className='table-container'>
        <Table width={'600px'}>
        <TableHead>
          <TableRow>
            <TableCell>Brand Product Name</TableCell>
            <TableCell>Ean</TableCell>
            <TableCell align='center'>Supplier code</TableCell>
            <TableCell align='center'>Warnings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.filter((i, index) => index <= counter).map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.ean}</TableCell>
              <TableCell align='center'>{row.supplierCode}</TableCell>
              <TableCell  align='center'>
                {row.warnings ? (
                  <Check style={{ color: green[500] }}/>
                ) : (
                  <Clear style={{ color: red[500] }} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </Box>
  )
};
