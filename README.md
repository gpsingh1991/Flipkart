Design page.html




<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>

	<title> Welcome to flipkart.com!</title>
	
	
<style type="text/css">

</style>
  

    <link rel="stylesheet" type="text/css" href="http://img6a.flixcart.com/www/prod/basic-cd05cb9e-nogz.css" />
</head>
<body class="">
    <div class="homepg fkart fksk-body line  ">

<div id="fk-mainhead-id" class="new-vd">
    <div class="fk-mainhead trustBar">  
<div class="fk-trustBar">
     <center> 
<hr> 
<table background="http://www.angelfire.com/ar/maxine/images/scen5.jpg" 
height=1 width=1500> 
<tr><td><center> 
<font size="1" color="white"> 
<marquee scrolldelay=200 >Welcome to flipkart.com! Online Shopping India - Shop Online for Books, Mobile Phones, Digital Cameras, Watches & More at Flipkart.com</marquee> 
</font></center></tr></td></table><hr>

    <div class="gu16 ourWidth">
        <!--  <center> 
<hr> 
<table background="http://www.angelfire.com/ar/maxine/images/scen5.jpg" 
height=10 width=600> 
<tr><td><center> 
<font size="4" color="white"> 
<marquee>MY MARQUEE</marquee> 
</font></center></tr></td></table><hr>
 -->
     

<!-- 
        <marquee class="gd-col gu4 fk-text-center" class="gd-col gu4" class="flrt content gd-row"> welcome to flipkart!</marquee> -->
       <!--  <div class="flrt content gd-row">
            <div class="gd-col gu4">
                <a href="/tv-ads#happyShopping"><span class="fk-check rmargin5"></span><span>100% Original Products</span></a>
            </div>
            <div class="gd-col gu4 fk-text-center">
                <a href="/tv-ads#happyShopping"><span class="fk-check rmargin5"></span><span>Cash on Delivery</span></a>
            </div>
            <div class="gd-col gu4 fk-text-center">
                <a href="/tv-ads#happyShopping"><span class="fk-check rmargin5"></span><span>Free & Easy Returns</span></a>
            </div>
            <div class="gd-col gu4 text_right">
                <a href="/tv-ads"><span class="fk-tv rmargin5"></span><span>Watch Our Latest Ad</span></a>
            </div>
        </div> -->
        <!-- <a href="/tv-ads" class="fkKaroLogo"></a> -->
    </div>
</div>                      <div class="fk-content">
                <div class="unit fk-logo-nav">
                    <div class="line fk-logo"> <a href="/"><img src="http://img6a.flixcart.com/www/prod/images/flipkart_india-5ef1726d.png" alt="Flipkart.com: Online Shopping India" title="Online Shopping India | Flipkart.com" class="fk-logo-img"/></a></div>
                </div>
                <div class="fk-info-links-section">
                    <div class="fk-info-links">
                                                    
                                    <div class="line bmargin 125">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                        class="fk-cstext">24x7 Customer Support <b></b></span>
                    &nbsp;-&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/s/contact">Contact Us</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="file:///C:/Users/Sonan/Desktop/editor/pages/login_fk.html" onclick="window.open('file:///C:/Users/Sonan/Desktop/editor/pages/login_fk.html','popup','width=500,height=250,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=150,top=150'); return false">About</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;


            <!-- <a class="login-required" href="/account/">Account</a>&nbsp;&nbsp;|&nbsp;&nbsp; -->
            <a class="login-required" href="pages\login_fk.html">Cart</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a class="track-order-details-required">Order</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="file:///C:/Users/Sonan/Desktop/editor/pages/login_fk.html" onclick="window.open('file:///C:/Users/Sonan/Desktop/editor/pages/login_fk.html','popup','width=500,height=250,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=150,top=150'); return false">Login</a>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="file:///C:/Users/Sonan/Desktop/editor/pages/reg1.html?" onclick="window.open('file:///C:/Users/Sonan/Desktop/editor/pages/reg1.html?','popup','width=500,height=250,scrollbars=no,resizable=no,toolbar=no,directories=no,location=no,menubar=no,status=no,left=150,top=150'); return false">Signup</a>
        </div>
        </body>

    </html>
    
    
    
    
    Registration page
    
    
    <!doctype html>
<html>
    <head>
        <style type="text/css">
 
            body {font-family:Arial, Sans-Serif;}
 
            #container {width:300px; margin:0 auto;}
 
            /* Nicely lines up the labels. */
            form label {display:inline-block; width:140px;}
 
            /* You could add a class to all the input boxes instead, if you like. That would be safer, and more backwards-compatible */
            form input[type="text"],
            form input[type="password"],
            form input[type="email"] {width:160px;}
 
            form .line {clear:both;}
            form .line.submit {text-align:right;}
 
        </style>
        <script type="text/javascript">
var db = window.openDatabase("registration", "1.0", "city stats", 1000000);
window.onload = function() {
  if (!window.openDatabase) {
    status("Database not supported");
    return;
  }
  db.transaction(function(tx) {
  tx.executeSql("drop table if exists registration");
    tx.executeSql("create table if not exists registration ("
      + "userid integer primary key,"
      + "username text,"
      + "lastname text,"
      + "password text,"
      + "confirmpassword text,"
      + "dob Date,"
      + "email text,"
      + "telephone integer,"
      + "address text,"
      + "postalcode integer"
      + ")",null,null, logger);  
    showRecords();
     console.log("done");
  });

  // function status(status) {
  //   document.getElementById("status").innerHTML = status;
  // }
  function logger(tx, error) {
    console.log("Error", error.message);
  }
  function logArguments() {
    console.log(arguments);
  }
  function $_(selector) {
    return document.querySelector(selector);
  }

  $_("#save").onclick = function() {
    db.transaction(function(tx) {
      console.log("running2");
      tx.executeSql(
          "insert into registration (username, lastname , password , confirmpassword, dob, email, telephone, address, postalcode ) "
        + "values (?,?,?,?,?,?,?,?,?)", [$_("#username").value, $_("#names").value, $_("#pwd").value, $_("#cpwd").value, $_("#dob").value, $_("#email").value, $_("#tel").value, $_("#add").value, $_("#ptc").value],
        null, logger
      );
      console.log("done");
      showRecords();
    });
  };

  // $_("#population").onkeyup = function(ev) {
  //   if (ev.keyCode==13) $_("#save").onclick();
  // };

  // $_("#records").onclick = function(ev) {
  //   if (ev.target.className!="remove") return;
  //   var recordID = ev.target.id;
  //   console.log(recordID);
  //   db.transaction(function(tx) {
  //     tx.executeSql("delete from registration where id=?", [recordID], null, logger);
  //     showRecords();
  //   });
  // }

  function showRecords() {
    console.log("db", db);
    html = "";
    db.transaction(function(tx) {
      tx.executeSql("select * from registration", [], function(tx, results) {
        for (var i=0; i<results.rows.length; i++) {
          var record = results.rows.item(i);
          // html+="<button id='"+record.id+"' class='remove'>x</button> "
          //   +record.name+" - "+record.population + "<br/>";
        }
        // $_("#records").innerHTML = html;
      });
    });
  }

};
</script>
    </head>
    <body>
        <div id="container">
            <form>
                <h1>Create Logon</h1>
                <div class="line"><label for="username">Username *: </label><input type="text" id="username" /></div>
                <div class="line"><label for="other_names">Other Names *: </label><input type="text" id="names" /></div>
                <div class="line"><label for="pwd">Password *: </label><input type="password" id="pwd" /></div>
                <!-- You may want to consider adding a "confirm" password box also -->
                <div class="line"><label for="surname">Confirm password*: </label><input type="password" id="cpwd" /></div>
                
                <div class="line"><label for="dob">Date of Birth *: </label><input type="text" id="dob" /></div>
                <div class="line"><label for="email">Email *: </label><input type="email" id="email" /></div>
                <!-- Valid input types: http://www.w3schools.com/html5/html5_form_input_types.asp -->
                <div class="line"><label for="tel">Telephone: </label><input type="text" id="tel" /></div>
                <div class="line"><label for="add">Address *: </label><input type="text" id="add" /></div>
                <div class="line"><label for="ptc">Post Code *: </label><input type="text" id="ptc" /></div>
                <div class="line submit"><input type="button" value="save" id="save"/>save</div>
 
                <p>Note: Please make sure your details are correct before submitting form and that all fields marked with * are completed!.</p>
            </form>
        </div>
    </body>
</html>



Login page
<html>
<head>
<title> login </title>

<style type="text/css">
html, body {   
 width: 100%;   
height: 100%;   
font-family: "Helvetica Neue", Helvetica, sans-serif;   
color: #444;   
-webkit-font-smoothing: antialiased;    background: #f0f0f0;
}
#container {
position: fixed;
width: 340px;
height: 280px;
top: 50%;
left: 50%;
margin-top: -140px;
margin-left: -170px;
}
form {
    margin: 0 auto;
    margin-top: 20px;
}
label {
    color: #555;
    display: inline-block;
    margin-left: 18px;
    padding-top: 10px;
    font-size: 14px;
}

p a {
    font-size: 11px;
    color: #aaa;
    float: right;
    margin-top: -13px;
    margin-right: 20px;
}
p a:hover {
    color: #555;
}
input {
    font-family: "Helvetica Neue", Helvetica, sans-serif;
    font-size: 12px;
    outline: none;
}
input[type=text],
input[type=password] {
    color: #777;
    padding-left: 10px;
    margin: 10px;
    margin-top: 12px;
    margin-left: 18px;
    width: 290px;
    height: 35px;
}
#lower {
    background: #ecf2f5;
    width: 100%;
    height: 69px;
    margin-top: 20px;
}
input[type=checkbox] {
    margin-left: 20px;
    margin-top: 30px;
}
.check {
    margin-left: 3px;
}
input[type=submit] {
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    width: 80px;
    height: 30px;
}
background: #fff;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    #container {
    position: fixed;
    width: 340px;
    height: 280px;
    top: 50%;
    left: 50%;
    margin-top: -140px;
    margin-left: -170px;
	background: #fff;
    border-radius: 3px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    border: 1px solid #c7d0d2;
    border-radius: 2px;
    box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .4), 0 0 0 5px #f5f7f8;
}
input[type=password] {
    color: #777;
    padding-left: 10px;
    margin: 10px;
    margin-top: 12px;
    margin-left: 18px;
    width: 290px;
    height: 35px;
    border: 1px solid #c7d0d2;
    border-radius: 2px;
    box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .4), 0 0 0 5px #f5f7f8;
}
font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #acd6ef; /*IE fallback*/
    background-image: -webkit-gradient(linear, left top, left bottom, from(#acd6ef), to(#6ec2e8));
    background-image: -moz-linear-gradient(top left 90deg, #acd6ef 0%, #6ec2e8 100%);
    background-image: linear-gradient(top left 90deg, #acd6ef 0%, #6ec2e8 100%);
    border-radius: 30px;
    border: 1px solid #66add6;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3), inset 0 1px 0 rgba(255, 255, 255, .5);
    cursor: pointer;
}
input[type=submit] {
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    width: 80px;
    height: 30px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: #acd6ef; /*IE fallback*/
    background-image: -webkit-gradient(linear, left top, left bottom, from(#acd6ef), to(#6ec2e8));
    background-image: -moz-linear-gradient(top left 90deg, #acd6ef 0%, #6ec2e8 100%);
    background-image: linear-gradient(top left 90deg, #acd6ef 0%, #6ec2e8 100%);
    border-radius: 30px;
    border: 1px solid #66add6;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3), inset 0 1px 0 rgba(255, 255, 255, .5);
    cursor: pointer;
}
 -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    transition: all .4s ease;
}
p a {
    font-size: 11px;
    color: #aaa;
    float: right;
    margin-top: -13px;
    margin-right: 20px;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    transition: all .4s ease;

    box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .4), 0 0 0 5px #f5f7f8;
    -webkit-transition: all .4s ease;
    -moz-transition: all .4s ease;
    transition: all .4s ease;
}
input[type=text]:hover,
input[type=password]:hover {
    border: 1px solid #b6bfc0;
    box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .7), 0 0 0 5px #f5f7f8;
}
input[type=text]:focus,
input[type=password]:focus {
    border: 1px solid #a8c9e4;
    box-shadow: inset 0 1.5px 3px rgba(190, 190, 190, .4), 0 0 0 5px #e6f2f9;
}
input[type=submit]:hover {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#b6e2ff), to(#6ec2e8));
    background-image: -moz-linear-gradient(top left 90deg, #b6e2ff 0%, #6ec2e8 100%);
    background-image: linear-gradient(top left 90deg, #b6e2ff 0%, #6ec2e8 100%);
}
input[type=submit]:active {
    background-image: -webkit-gradient(linear, left top, left bottom, from(#6ec2e8), to(#b6e2ff));
    background-image: -moz-linear-gradient(top left 90deg, #6ec2e8 0%, #b6e2ff 100%);
    background-image: linear-gradient(top left 90deg, #6ec2e8 0%, #b6e2ff 100%);
}

</style>

</head>

 <body>
       <div id="container">       
<form>
<label for="username">Username:</label>
<input type="text" id="username" name="username">
<label for="password">Password:</label>
<input type="password" id="password" name="password">
<div id="lower">
<input type="checkbox"><label for="checkbox">Keep me logged in</label>
<input type="submit" value="Login">
</div><!--/ lower-->
</form>
</div>
</body>
<html>

