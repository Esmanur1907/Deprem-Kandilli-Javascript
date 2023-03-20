
// document.writeln(
// '<table id="tablemain" border="1">' +
// '<tr>'                           +                                
//     '<td>Şehir</td>'+
//     '<td>Tarih</td>'+
//     '<td>Enlem</td>'+
//     '<td>Boylam</td>' +
//     '<td>Derinlik</td>' +
//     '<td>MD</td>' +
//     '<td>ML</td>' +
//     '<td>MW</td>' +
//     '<td>YER</td>' +
//     '<td>Çözüm Niteliği</td>' +
   
// '</tr>' +
// '</table>' 
// );



// fetch("https://api.orhanaydogdu.com.tr/deprem/kandilli/live").then((response) => response.json()) //parse json data
// .then(function(data){
       
//     data.result.forEach(element => { //100 tane gelecegi icin 100 kere aşağıdaki kod calisicak
       
//         document.write( 

//             '<table id="tablemain" border="1">' +
//                 '<tr>'                           +                                
//                     '<td>'+element.title+'</td>'+
//                     '<td>'+element.date+'</td>'+
//                     '<td>Enlem(N)</td>'+
//                     '<td>Boylam(E)</td>' +
//                     '<td>'+element.depth+'</td>' +
//                     '<td>MD</td>' +
//                     '<td>ML</td>' +
//                     '<td>Mw</td>' +
//                     '<td>Yer</td>' +
//                     '<td>ÇözümNiteliği</td>' +
                   
//                 '</tr>' +
//             '</table>' 
//             );
            
        
        
//     });


    
// //     '<table id="tablemain" border="1">' +
// //     '<tr>'                           +                                
// //         '<td>'+element.title+'</td>'+
// //         '<td>'+element.date+'</td>'+
// //         '<td>'+Enlem(N)+'</td>'+
// //         '<td>'+Boylam(E)+'</td>' +
// //         '<td>'+element.depth+'</td>' +
// //         '<td>'+MD+'</td>' +
// //         '<td>'+ML+'</td>' +
// //         '<td>'+Mw+'</td>' +
// //         '<td>'+Yer+'</td>' +
// //         '<td>'+ÇözümNiteliği+'</td>' +
       
// //     '</tr>' +
// // '</table>' 
// // );

    


//     });
//     // <table id="tablemain" border="1">
//     //         <tr>                                                           
//     //             <td>İl</td>
//     //             <td>Tarih</td>
//     //             <td>Enlem(N)</td>
//     //             <td>Boylam(E)</td>
//     //             <td>Derinlik(km)</td>
//     //             <td>MD</td>
//     //             <td>ML</td>
//     //             <td>Mw</td>
//     //             <td>Yer</td>
//     //             <td>Çözüm Niteliği</td>
               
//     //         </tr>
//     //     </table>




fetch("https://api.orhanaydogdu.com.tr/deprem/kandilli/live")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data.result);
    // Tablo elemanlarını içeren HTML kodlarını bir değişkene atayalım
    var tableHtml = '<table id="earthquakeTable" border="1">';
    tableHtml += '<thead><tr>';
    tableHtml += '<th>Şehir</th>';
    tableHtml += '<th>Tarih</th>';
    tableHtml += '<th>Enlem (N)</th>';
    tableHtml += '<th>Boylam (E)</th>';
    tableHtml += '<th>Derinlik</th>';
    tableHtml += '<th>MD</th>';
    tableHtml += '<th>ML</th>';
    tableHtml += '<th>MW</th>';
    tableHtml += '<th>YER</th>';
    tableHtml += '<th>Çözüm Niteliği</th>';
    tableHtml += '</tr></thead>';
    tableHtml += '<tbody>';

    // Verileri tablo elemanları olarak ekleyelim
    data.result.forEach(function (element) {
      tableHtml += '<tr>';
      tableHtml += '<td>' + element.title + '</td>';
      tableHtml += '<td>' + element.date + '</td>';
      tableHtml += '<td>' + element.lat + '</td>';
      tableHtml += '<td>' + element.lng + '</td>';
      tableHtml += '<td>' + element.depth + '</td>';
      tableHtml += '<td>' + element.geojson.coordinates[0] + element.geojson.coordinates[1]+ '</td>';
      tableHtml += '<td>' + element.magnitude_ml + '</td>';
      tableHtml += '<td>' + element.magnitude_mw + '</td>';
      tableHtml += '<td>' + element.location + '</td>';
      tableHtml += '<td>' + element.quality + '</td>';
      tableHtml += '</tr>';
    });

    tableHtml += '</tbody></table>';
       // Oluşturulan tablo elemanlarını sayfada gösterelim
       document.write(tableHtml);
    })
    .catch(function (error) {
      console.log(error);
    });