import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row: {
    fontSize: "1.5rem",
    fontFamily: "Titillium Web,Roboto Mono,Helvetica,Arial,sans-serif",
    fontWeight: "1000",
  },
  cell: {
    fontSize: "1rem",
    fontFamily: "Titillium Web,Roboto Mono,Helvetica,Arial,sans-serif",
    fontWeight: 700,
    minWidth: 155,
  },
  container: {
    maxHeight: 800,
    maxWidth: 1000,
    margin: "auto",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function CreateTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Navbar />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow hover role="checkbox" className={classes.row}>
            <TableCell className={classes.cell}>
              Dessert (100g serving)
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Calories
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover role="checkbox" key={row.name}>
              <TableCell className={classes.cell} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {row.calories}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {row.fat}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {row.carbs}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {row.protein}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CreateTable;
