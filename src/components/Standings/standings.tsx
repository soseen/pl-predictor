import { AxiosResponse } from 'axios';
import { axios } from '../../axios/axios'
import React, { useEffect, useState } from 'react';
import { User } from '../../context/userContext';
import useStyles from './standings.styles';
import { Table, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

interface UsersResponse extends AxiosResponse {
    data: {
        users: User[]
    }
}

const Standings: React.FC = () => {

    const classes = useStyles();
    const [players, setPlayers] = useState<User[]>([]);

    const getPlayers = async () => {
        const usersResponse: UsersResponse = await axios.get('/users');
        setPlayers(usersResponse.data.users)
    } 

    useEffect(() => {
        getPlayers()
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.tableContainer}>
                <Typography className={classes.tableName} variant='body1'>Standings</Typography>
                <TableContainer>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.tableHeadRow}>
                                <TableCell>
                                    <Typography variant={'body1'}>Name</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant={'body1'}>Points</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {players.map((player) => (
                                <TableRow key={player.id} className={classes.tableRow}>
                                    <TableCell>
                                        <Typography noWrap variant={'body1'}>
                                            {player.username}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography variant={'body1'}>
                                            {player.points}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Standings;