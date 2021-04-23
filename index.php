<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Admin pannel</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
    <link rel="stylesheet" href="css/style.css">

   
   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
   

    <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>

        <!-- TODO: Add SDKs for Firebase products that you want to use
            https://firebase.google.com/docs/web/setup#available-libraries -->
    <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>

    <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase.js"></script>
    
    <script src="js/index.js"></script>
    <style type="text/css">td{border: 1px solid #000; text-align: center;}
            th{border: 1px solid #000 !important; text-align: center;}
            tr:hover{background-color: #fff;}


        </style>

</head>

<body>
    <div class="wrapper" style="    background-image: linear-gradient(to right, #fff,#5e57cd6b);">
        <nav id="sidebar" style="background-color: #5e57cd4f !important;">

            <div class="sidebar-header" style="background-color: rgb(83 95 120 / 38%);">
                <h3 style="cursor: pointer;">Admin Pannel</h3>
            </div>
            <ul class="lisst-unstyled components">

                <p>Educate</p>
                <li class="active">
                    <ul class="lisst-unstyled components">
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                        <li>
                            <a href="student.html">Student</a>
                        </li>
                    </ul>
                   

            </ul>
        </nav>
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button type="button" id="sidebarCollapse" class="btn btn-info" style="background: #22538e;">
                        <i class="fas fa-align-left"></i>
                        <span>
                            Full Screen
                        </span>

                    </button>
                </div>
            </nav>
            <br><br>
            <h2>Dashboard</h2>
          
            <div class="line">

            </div>
            <div class="container">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                    ADD subject +
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add Subject</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                      <label>Subject Name</label>
                                      <input type="text" class="form-control" id="subjectname" aria-describedby="emailHelp" placeholder="Enter Subject Name">
                                      <!-- <small id="emailHelp" class="form-text text-muted"></small> -->
                                    </div>
                                    <div class="form-group">
                                      <label>Description</label>
                                      <input type="text" class="form-control" id="subjectdescrip" placeholder="Enter Subject Description">
                                    </div>
                                    <div class="form-group">
                                      <label>Format</label>
                                      <!-- <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Subject Format"> -->
                                     <tr>
                                        <td>
                                             <select id="format">
                                                 <option value="word">Notes</option>
                                                 <option value="pdf">Pdf</option>
                                                 <option value="link">Links</option>
                                                </select>
                                            </td>
                                            <td style="text-align: right;">
                                                <label>Type</label>
                                             <select id="ftype">
                                                 <option value="Free">Free</option>
                                                 <option value="Paid">Paid</option>
                                                 
                                                </select>
                                            </td>
                                        </tr>
                                    </div>
                                     <div class="form-group">
                                      <label>User Status</label>
                                      
                                     <tr>
                                        <td>
                                             <select id="user_status">
                                                 <option value="Offline">Offline</option>
                                                 <option value="Active">Active</option>
                                               
                                                </select>
                                            </td>
                                           
                                        </tr>
                                    </div>
                            
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal" onclick="pushData()">Add Information</button>
                                    </div>
                                    
                                  </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <table class="table" id="myTable">
                    <thead>
                        <tr style="text-align: center;     background: #e4e6f1;">
                            <th scope="col">index</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Description</th>
                            <th scope="col">Format</th>
                            <th scope="col">Status</th>
                             <th colspan="2">Action</th>
                            <th scope="col">Activation</th>

                        </tr>
                    </thead>
                    <tbody id="tabel">

                        
                    </tbody>
                </table>
            </div>

        </div>
    </div>



    



    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script>

        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });

        $(document).ready(function () {
            $('#myTable').DataTable();
        });
    </script>
</body>

</html>
