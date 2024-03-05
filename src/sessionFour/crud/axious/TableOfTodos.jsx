import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { todosApiUrl } from "./todoService";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { removeTodo } from "./todoService";
const TableOfTodos = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todosApiUrl().then((data) => {
      setTodos(data);
    });
  }, []);
  
  const deleteTodo = async (id) => {
    const resonse = await removeTodo(id);
    if (resonse) {
      setTodos([...todos.filter((q) => q.id !== id)]);
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">کد کاربر</TableCell>
              <TableCell align="right">وضعیت</TableCell>
              <TableCell align="right">مدیریت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sl={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">
                    {row.completed ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="delete"
                      size="small"
                      color="error"
                      onClick={() => deleteTodo(row.id)}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="my-2 justify-content-center card-footer bg-info">
        <Stack spacing={5}>
          <Pagination
            color="secondary"
            count={Math.ceil(todos.length / rowsPerPage)}
            page={page}
            onChange={(e, newPage) => setPage(newPage)}
            rowsPerPageOptions={[5, 10, 25]}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(parseInt(e.target.value, 10));
              setPage(0);
            }}
          />
        </Stack>
      </div>
    </>
  );
};

export default TableOfTodos;
