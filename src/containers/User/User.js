import React,{useState,useEffect} from "react";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';
import UserCard from './../../components/UserCard';

const User = props => {
    const {actions: { GetUsers }, users, searchText} = props;

    // Check and load if users does not loaded
    if (users.length === 0) {
        GetUsers();
    }

    let filteredUsers = [...users];
    const [filter,setFilter] =useState({page: 0, pagePerRecord: 20,search:searchText});
    const {page,pagePerRecord,search}=filter;

    //Apply search filter on user list
    filteredUsers = filteredUsers.filter(user=> {
        const {name:{title,first,last}}=user;
        const fullname = `${title} ${first} ${last}`;
        return fullname.toLowerCase().includes(search.toLowerCase())
    });

    const filteredTotalUsers = filteredUsers.length;

    // Apply Pagination filter on user list
    filteredUsers = filteredUsers.splice(page * pagePerRecord, pagePerRecord)

    const classes = useStyles();

    // Function for change page
    const handleChangePage = (event, page)=> {
        setFilter({
            ...filter,
            page,
        });
        window.scrollTo(0, 0); //Scroll page to top on page change
    };

    // This function will be called when searchText value will be changed
    useEffect(()=>{
        setFilter(prevFilter => {
            return {
                ...prevFilter,
                page:0,
                search:searchText,
            }
        });
    },[searchText])

    // Function for change number of rows on page
    const handleChangeRowsPerPage = event => {
        const recordPerPage = parseInt(event.target.value, 10);
        setFilter({
            ...filter,
            page: 0,
            pagePerRecord: recordPerPage,
        });
    };

    const userGridList = (
        <Grid container spacing={3} justify="center">
            {filteredUsers.map((user, index)=> {
                return (<Grid item xs={12} sm={6} md={4} lg={3} container direction="row" justify="center"
                             alignItems="center" key={((pagePerRecord*page)+index)}>
                            <UserCard user={user}/>
                        </Grid>);
            })}
        </Grid>
    );

    return (
        <div className="Test">
            <div className={classes.root}>
                {/*Display users grid view*/}
                {userGridList}
                {/*Pagination*/}
                <div className={classes.pagination}>
                    {filteredTotalUsers > 0 ?
                        <TablePagination
                            rowsPerPageOptions={[20, 40, 60, 80, 100]}
                            component="div"
                            count={filteredTotalUsers}
                            rowsPerPage={pagePerRecord}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        /> : <Paper className={classes.recordsNotFound}>No records found</Paper>}
                </div>
            </div>

        </div>
    );
};
export default User;

// Apply style on material component
const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        margin: '0 auto',
        padding: '20px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    pagination: {
        padding: '20px',
    },
    recordsNotFound: {
        padding: '20px',
        fontWeight: 500
    }
}));
