import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "@mui/material";
//import logo from "./image.png";
const doc = new jsPDF();

const exportPDF = (tableData) => {
  
  doc.setFontSize(18);
  

 
  autoTable(doc, { html: "#my-table" });
  const data = tableData.map((event) => [
    event.name,
    event.description,
    event.author,
    event.price,
  ]);
  // Or use javascript directly:
  autoTable(doc, {
    head: [["Name", "Description", "Category", "Price"]],
    body: data,
    startY: 60,
  });

  doc.save("package.pdf");
};
const ItemPDF = ({ tableData }) => {
  return (
    <div>
      <Button
        color="secondary"
        className="exportbtn"
        onClick={() => {
          exportPDF(tableData);
        }}
        variant="contained"
      >
        Export as PDF
      </Button>
    </div>
  );
};


export default ItemPDF;
