'use client'

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";


pdfMake.vfs = pdfFonts.pdfMake.vfs;


export default function Home() {
const downloadInvoice = ()=>{
  var docDefinition = {
    content: [
       
      {
        style: 'tableExample',
        table: {
          widths: [170, '*' , 170, '*'],
          body: [
            [{text: 'Order Number', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: 'MFS3791218825', fontSize: 9, italics: false, color: 'black'},{text: 'Pin No.', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: '3791218825', fontSize: 9, italics: false, color: 'black'}],
            [{text: 'Transaction', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: '02/09/2023', fontSize: 9, italics: false, color: 'black'},{text: 'Operator: ', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: '', fontSize: 9, italics: false, color: 'black'}],
            [{text: 'Sender Information', italics: false, bold: true, fontSize: 11, color: 'black'}, '', {text: 'Payment Information', italics: false, bold: true, fontSize: 11, color: 'black'}, ''],
            [{text: 'Customer Name', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: 'Marie Forster\nTel:07710417871',fontSize: 9, italics: false, color: 'black'},{text: 'Transfer Reason', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: 'Family Assistance', italics: false,fontSize: 9,  color: 'black'}],
            [{text: 'Customer Address', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: '',fontSize: 9, italics: false, color: 'black'},{text: 'Amount to be delivered', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: 'GMD 11,400.00', fontSize: 9, italics: false, color: 'black'}],
            [{text: 'Recipient Information', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: '', italics: false, color: 'black'},{text: 'Exchange Rate' , italics: false, bold: true, fontSize: 11, color: 'black'}, {text: ' GMD/GBP 76.00', fontSize: 9, italics: false, color: 'black'}],
            [{text: 'Beneficiary Name', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: 'Dimiga ( Amie) Mendy\nTel:7669334',fontSize: 9, italics: false, color: 'black'},{text: 'Amount to be Transmitted', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: 'GBP	150.00', fontSize: 9, italics: false, color: 'black'}],
            [{text: 'Beneficiary Address', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: 'Farato, The Gambia', fontSize: 9, italics: false, color: 'black'},{text: 'Charge', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: 'GBP	0.00', fontSize: 9, italics: false, color: 'black'}],
            [{text: 'Paying Agent Information', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: '', fontSize:9, italics: false, color: 'black'},{text: 'Surcharge ', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: 'GBP 0.00', fontSize:9, italics: false, color: 'black'}],
            [{text: 'Paying Agent', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: 'Mai Service Ltd', fontSize:9, italics: false, color: 'black'},{text: 'TOTAL', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: 'GBP 150.00', fontSize:9, italics: false, color: 'black'}],
            [{text: 'Delivery Method', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: 'Cash Pick-Up', fontSize:9, italics: false, color: 'black'},{text: 'Payment method', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: 'Bank transfer',fontSize:9, italics: false, color: 'black'}],
            [{text: 'Address', italics: false, bold: true, fontSize: 11, color: 'black'}, {text: 'Brikama', fontSize:9, italics: false, color: 'black'},{text: 'Card issuer', italics: false, bold: true, fontSize: 11, color: 'black'} , {text: ' Visa', fontSize:9, italics: false, color: 'black'}]
          ]
        }
      },
       
      {text: 'Mai Financial Services Ltd is trading as Mai Money Transfer, is registered in England (13485595) with its registered office at 176 Gillies house, Eastbourne, BN212YJ. We are authorised by the Financial Conduct Authority (FRN981348)', margin:[0,20,0,0]},
      'Tables support the same width definitions as standard columns:',
      {
        
      },
  ]}
  
  pdfMake.createPdf(docDefinition).open()

  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={downloadInvoice} className="text-white">Download Invoice</button>
    </main>
  )
}

