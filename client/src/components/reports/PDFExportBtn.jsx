import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PDFExportBtn = ({ healthData, userName }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Clinical Health Summary", 14, 20);
    doc.text(`Patient: ${userName}`, 14, 30);

    const tableData = healthData.map(day => [
      new Date(day.date).toLocaleDateString(),
      day.metrics.steps,
      day.metrics.avg_heart_rate
    ]);

    doc.autoTable({
      startY: 40,
      head: [['Date', 'Steps', 'Avg Heart Rate']],
      body: tableData,
    });

    doc.save(`Health_Report_${userName}.pdf`);
  };

  return (
    <button 
      onClick={generatePDF}
      style={{ backgroundColor: '#4f46e5', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}
    >
      Download Doctor's Report
    </button>
  );
};

export default PDFExportBtn;