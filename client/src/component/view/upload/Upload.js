import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

export default function Upload() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (files) => {
        setSelectedFiles(files);
    };

    const handleUpload = () => {
        if (selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append("product", file);
            });

            axios
                .post("/api/product/add", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((response) => {
                    console.log("Files uploaded successfully");
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
            <Dropzone
                onDrop={handleFileSelect}
                accept=".png, .jpg, .fbx"
                multiple
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>
                            Drag and drop files here, or click to select files
                        </p>
                    </div>
                )}
            </Dropzone>

            {selectedFiles.length > 0 && (
                <div>
                    <p>Selected files:</p>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    <button onClick={handleUpload}>Upload</button>
                </div>
            )}
        </div>
    );
}
