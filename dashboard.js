// const sideMenu = document.querySelector("aside");
// const menuBtn = document.querySelector("#menu-btn");
// const closeBtn = document.querySelector("#close-btn");
// const themeToggler = document.querySelector(".theme-toggler");

// //show sidebar
// menuBtn.addEventListener('click',() =>{
//     sideMenu.style.display ='block';
// })

// //close sidebar
// closeBtn.addEventListener('click',() =>{
//     sideMenu.style.display ='none';
// })

// //change theme
// themeToggler.addEventListener('click',() =>{
//     document.body.classList.toggle('dark-theme-variables');

//     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
//     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
// })

$(document).ready(function () {


    $.getJSON("dashboard.json",
        function (data) {
            var xyz = '';


            $.each(data, function (key,value) {


                xyz += '<tr>';
                xyz += '<td>' +
                    value.id + '</td>';

                xyz += '<td>' +
                    value.com_name + '</td>';

                xyz += '<td>' +
                    value.mail + '</td>';

                xyz += '<td>' +
                    value.mob_no + '</td>';

                 xyz += '<td>' +
                    value.project_name + '</td>';

                //  xyz += '<td>' +
                //     value.project_description + '</td>';

                 xyz += '<td>' +
                    value.created_at.toString().replace('T',' ') + '</td>';
                   
               
                xyz += '<td>' +
                    value.updated_at.toString().replace('T',' ')+'</td>';

                xyz += '</tr>';
            });
            
            // $('#table').append(xyz);
            document.getElementById('table').innerHTML=xyz;
            // document.writeln$(xyz);
          
                    // sakshi = then the  only console print
            var T='2022-08-17T15:05:41.032042';
          var  d =T.toString().replace('T',' ')
            console.log(d, "");
               
            toString().replace('T','') + '</td>';;
            toString().replace('T','') + '</td>';
         
        });
        
});

// private string SanitizeReceivedJson(string xyz.Json)
// {
//     var xyz = new StringBuilder(uglyJson);
//     xyz.Replace("\\\t", "\t");
//     xyz.Replace("\\\n", "\n");
//     xyz.Replace("\\\r", "\r");
//     return xyz.ToString();
// }

//  // Student_Name = document.getElementById('Student_Name').value;
//     // Number = document.getElementById('Number ').value;

//     // if(Student_Name && Number ){
//     //     // books = books.replace("[","").replace("]","");
//     //     let Student_Name = {"Number": 1, "Student_Name": Student_Name, "Number ": Number };
//     //     Student_Name = JSON.stringify(Student_Name);

//     //     books = "["+books+", "+Student_Name+"]";

//     //     for (var i = JSON.parse(books).length - 1; i >= 0; i--) {
//     //         console.log(JSON.parse(books)[i].id);
//     //         //replace the current rows from a table by this object books.
//     //     }

//     // }

//     document.getElementById('Student_Name').value = '';
//     document.getElementById('Number ').value = '';