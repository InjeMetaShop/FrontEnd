import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function ApproveDetail() {
    const token = localStorage.getItem("token");
    // const tokenWithoutBearer = token.replace("Bearer ", "");
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios
            .get("/api/product/all")
            .then((response) => {
                const fetchedProducts = response.data;
                const noneApprovedProducts = fetchedProducts.filter(
                    (item) => item.approve === "false"
                );
                setRows(noneApprovedProducts);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const handleApprove = (id) => {
        axios
            .post(`/api/admin/approve/${id}`, null, {
                headers: {
                    Authorization: `${token}`,
                },
            })
            .then((response) => {
                console.log(response.data);
                const updatedRows = rows.map((item) => {
                    if (item.id === id) {
                        return { ...item, approve: "true" };
                    }
                    return item;
                });
                setRows(updatedRows);
            })
            .catch((error) => {
                console.error("Error approving item:", error);
            });
    };

    return (
        <TableContainer component={Paper} sx={{ paddingTop: "2vmax" }}>
            <Table
                sx={{ minWidth: 600, maxWidh: 600 }}
                aria-label="customized table"
            >
                <TableHead>
                    <TableRow>
                        <StyledTableCell>콘텐츠 이름</StyledTableCell>
                        <StyledTableCell align="center">
                            콘텐츠 이미지
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            콘텐츠 3D 모델
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            승인 버튼
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <a
                                    href={row.imagePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    이미지
                                </a>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <a
                                    href={row.fbxPath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    3D 모델
                                </a>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {row.approve === "true" ? (
                                    "Approved"
                                ) : (
                                    <Button
                                        sx={{ border: 1 }}
                                        onClick={() => handleApprove(row.id)}
                                    >
                                        승인
                                    </Button>
                                )}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
