import React from 'react';
import { Dialog, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { User } from '../../context/userContext';
import useStyles from './standings-modal.styles';

type Props = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    standings: User[]
}

const StandingsModal: React.FC<Props> = ({ isOpen, setIsOpen, standings}) => {

    const classes = useStyles();

    return(
        <Dialog classes={{ paper: classes.dialogMain}} open={isOpen} onClose={() => setIsOpen(false)}>
            <Typography variant="h4" component="h2" className={classes.title}>Standings</Typography>
            <TableContainer>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.tableHeadRow}>
                                <TableCell size="small" style={{width: '50px'}}>
                                    <Typography variant={'body1'}>P</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography variant={'body1'}>Name</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant={'body1'}>Points</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                {standings.map((player, index) => (
                                <TableRow key={player.id} className={classes.tableRow}>
                                    <TableCell>
                                        <Typography noWrap variant={'body1'}>
                                            {index + 1}
                                        </Typography>
                                    </TableCell>
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
        </Dialog>
    )
}

export default StandingsModal;