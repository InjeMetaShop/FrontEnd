import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Dropzone from "react-dropzone";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export default function UploadDetail() {
    const navigate = useNavigate()
    const [selectedImg, setSelectedImg] = useState([]);
    const [selectedFbx, setSelectedFbx] = useState([]);
    const [productDetails, setProductDetails] = useState({
        name: "상품이름",
        price: 0,
        sex: "man",
        category: "up",
        approve: "false",
    });
    const [previewImage, setPreviewImage] = useState(null);
    const [previewMessage, setPreviewMessage] = useState(
        "이곳에 3D 모델 파일(FBX)을 넣어주세요"
    );

    const handleProductNameChange = (event) => {
        const updatedProductDetails = {
            ...productDetails,
            name: event.target.value,
        };
        setProductDetails(updatedProductDetails);
    };

    const handleProductPriceChange = (event) => {
        const updatedProductDetails = {
            ...productDetails,
            price: event.target.value,
        };
        setProductDetails(updatedProductDetails);
    };

    const handleProductSexChange = (event) => {
        const updatedProductDetails = {
            ...productDetails,
            sex: event.target.value,
        };
        setProductDetails(updatedProductDetails);
    };

    const handleProductCategoryChange = (event) => {
        const updatedProductDetails = {
            ...productDetails,
            category: event.target.value,
        };
        setProductDetails(updatedProductDetails);
    };

    const handleImgSelect = (files) => {
        setSelectedImg(files);

        const file = files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setPreviewImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleFbxSelect = (files) => {
        setSelectedFbx(files);
        setPreviewMessage(
            "파일 업로드 완료. 3D 객체는 미리보기가 제공되지 않습니다."
        );
    };

    const handleUpload = () => {
        if (selectedImg.length > 0 && selectedFbx.length > 0) {
            const formData = new FormData();

            formData.append("product", JSON.stringify(productDetails));
            formData.append("thumbnail", selectedImg[0]);
            formData.append("fbxFile", selectedFbx[0]);

            axios
                .post("/api/product/add", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log("Files uploaded successfully");
                    alert("상품 업로드가 완료되었습니다.")
                    navigate('/dashboard')
                    // 파일 업로드 성공 후 처리할 작업 추가
                })
                .catch((error) => {
                    console.error("Error uploading files:", error);
                    // 파일 업로드 실패 시 처리할 작업 추가
                });
        }
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Dropzone onDrop={handleImgSelect} accept=".png, .jpg">
                        {({ getRootProps, getInputProps, isDragActive }) => (
                            <div
                                {...getRootProps()}
                                style={{
                                    border: isDragActive
                                        ? "2px dashed blue"
                                        : "2px dashed gray",
                                    padding: "20px",
                                    textAlign: "center",
                                }}
                            >
                                <input {...getInputProps()} />
                                {previewImage ? (
                                    <img
                                        src={previewImage}
                                        alt="Preview"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "200px",
                                        }}
                                    />
                                ) : (
                                    <p>
                                        {isDragActive
                                            ? "Drop the image files here..."
                                            : "이곳에 미리보기 용도의 이미지 파일을 넣어주세요."}
                                    </p>
                                )}
                            </div>
                        )}
                    </Dropzone>
                </Grid>
                <Grid item xs={6}>
                    <Dropzone onDrop={handleFbxSelect} accept=".fbx">
                        {({ getRootProps, getInputProps, isDragActive }) => (
                            <div
                                {...getRootProps()}
                                style={{
                                    border: isDragActive
                                        ? "2px dashed blue"
                                        : "2px dashed gray",
                                    padding: "20px",
                                    textAlign: "center",
                                }}
                            >
                                <input {...getInputProps()} />
                                <p>{previewMessage}</p>
                            </div>
                        )}
                    </Dropzone>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />

            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="상품 이름"
                    variant="standard"
                    onChange={handleProductNameChange}
                />
                <TextField
                    id="standard-basic"
                    label="상품 가격"
                    variant="standard"
                    onChange={handleProductPriceChange}
                />

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                        성별
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={productDetails.sex}
                        onChange={handleProductSexChange}
                        label="Sex"
                    >
                        <MenuItem value={"man"}>man</MenuItem>
                        <MenuItem value={"woman"}>woman</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                        카테고리
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={productDetails.category}
                        onChange={handleProductCategoryChange}
                        label="Category"
                    >
                        <MenuItem value={"up"}>up</MenuItem>
                        <MenuItem value={"down"}>down</MenuItem>
                        <MenuItem value={"cap"}>cap</MenuItem>
                        <MenuItem value={"set"}>set</MenuItem>
                        <MenuItem value={"shoes"}>shoes</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {(selectedImg.length > 0 || selectedFbx.length > 0) && (
                <div style={{ textAlign: "left" }}>
                    <h3>선택된 파일</h3>
                    <ul>
                        {selectedImg.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                        {selectedFbx.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}
