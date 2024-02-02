import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { AiOutlineFolder, AiOutlineFilePdf, AiOutlineFileWord } from "react-icons/ai";
import { MdImage, MdVideoLibrary } from "react-icons/md";

const FileList = ({ files }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseModal = () => {
    setSelectedFile(null);
  };

  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "folder":
        return <AiOutlineFolder size={30} />;
      case "pdf":
        return <AiOutlineFilePdf size={30} />;
      case "word":
        return <AiOutlineFileWord size={30} />;
      case "image":
        return <MdImage size={30} />;
      case "video":
        return <MdVideoLibrary size={30} />;
      default:
        return null;
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        {files.map((file) => (
          <Col key={file.id} xs={12}>
            <Card className="mb-3" onClick={() => handleFileClick(file)}>
              <Card.Body>
                <Card.Title>{getFileIcon(file.type)} {file.name}</Card.Title>
                <Card.Text>
                  <strong>Tipo:</strong> {file.type === "folder" ? "Folder" : "Archivo"}
                  <br />
                  <strong>Tamaño:</strong> {file.size}
                  <br />
                  <strong>Fecha de modificación:</strong> {file.modifiedDate}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={selectedFile !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedFile && selectedFile.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedFile && (
            <div>
              <p><strong>Tipo:</strong> {selectedFile.type === "folder" ? "Folder" : "Archivo"}</p>
              <p><strong>Tamaño:</strong> {selectedFile.size}</p>
              <p><strong>Fecha de modificación:</strong> {selectedFile.modifiedDate}</p>
              {/* Add more details or actions as needed */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FileList;
