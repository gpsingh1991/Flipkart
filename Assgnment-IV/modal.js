
function tables_creation(){
	var db = window.openDatabase("flipkart", "1.0", "flipkart", 1000000);

	  db.transaction(function(tx){
      tx.executeSql("drop table if exists cart");
      tx.executeSql("drop table if exists categories");

      function getCurrentFormattedDate()
        {
          var currentDateTime = new Date();
          var currentFormattedDate = currentDateTime.getMonth()+"/"+currentDateTime.getDate()+"/"+currentDateTime.getFullYear();
          return currentFormattedDate;
        }
           tx.executeSql("create table if not exists order_details("+"order_id integer,"
           + "orderdetails_id integer primary key autoincrement,"
           + "user_id integer,"
           + "image url,"
           + "item_name text,"
           + "price integer,"
           + "quantity integer,"
           + "created_date datetime DEFAULT '"+getCurrentFormattedDate()+"'"
           +")",null,success_order_details,logger_order_details);
            function success_order_details(tx){
      console.log("order details table created");
    }
    function logger_order_details(tx,error){
      console.log("Error", error.message);
  }
    tx.executeSql("create table if not exists orders("+"order_id integer primary key autoincrement,"
           + "userid integer,"
           + "price integer,"
           + "quantity integer,"
           + "created_date datetime DEFAULT '"+getCurrentFormattedDate()+"'"
           +")",null,success_orders,logger_orders);
   
    function success_orders(tx){
      console.log("order table created");
    }
    function logger_orders(tx,error){
      console.log("Error", error.message);
  }
    tx.executeSql("create table if not exists items("+"item_id integer primary key,"
            + "category_id integer,"
            + "image url,"
            + "item_name text,"
            + "item_cost integer"+")",null,success_items,logger_items);
          function success_items(tx){
             tx.executeSql('select * from items',[],function(tx,results){
              if(results.rows.length==0){
                tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(1,1,"images/books1.jpg","Literature & Fiction",350)');
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(2,1,"images/books2.jpg","Entrance exam preparation",550)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(3,1,"images/books3.jpg","Academic & professional",500)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(4,2,"http://img7a.flixcart.com/www/promos/new/20130822-171144-vis-nav.jpg","Titan steel",2795)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(5,2,"images/watch1.jpeg","Sonata yuva Analog watch",1199)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(6,2,"images/watch2.jpg","sonata fashion fibre",649)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(7,2,"images/watch5.jpeg","Sonata pair analog watch", 2799)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(8,2,"images/watch7.jpeg","Titan raga analog watch",7495)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(9,3,"images/phone5.jpg","Google nexus 4(black)",48995)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(10,3,"images/phone3.jpg","Nokia Lumia 720",23499)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(11,4,"images/laptop1.jpg","HP Pavilion notebook",30500)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(12,4,"images/laptop2.jpg","Dell vastro laptop",35995)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(13,4,"images/laptop3.jpg","lenovo ultra pro laptops",48995)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(14,5,"images/tv1.jpg","Micromax HD LED TV ",8810)',[],success,logger);
           tx.executeSql('insert into items(item_id,category_id,image,item_name,item_cost ) values(15,5,"images/tv2.jpg","Living Arts LA TV HD Ready LCD ",6990)',[],success,logger);
           function success(tx){
            console.log("inserted into items");
           }
           function logger(tx,error){
            console.log("could not insert into items table",error.message);
           }

              }
              else{
                console.log("category table already exists");
              }
            });

          }
           function logger_items(tx, error) {
    console.log("Error", error.message);
  }


      
              function getCurrentFormattedDate()
        {
          var currentDateTime = new Date();
          var currentFormattedDate = currentDateTime.getMonth()+"/"+currentDateTime.getDate()+"/"+currentDateTime.getFullYear();
          return currentFormattedDate;
        }
     


    tx.executeSql("create table if not exists registration ("
      + "userid integer primary key autoincrement,"
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
 
     
      function logger(tx, error) {
    console.log("couldn't create registration table", error.message);
  }


          tx.executeSql("create table if not exists category("+"category_id integer primary key,"
            + "category_name text,"
            + "created_date datetime DEFAULT '"+getCurrentFormattedDate()+"'"
            
            +")",[],success_category,logger_category);
           function success_category(tx){
            console.log("done creating category table");
            tx.executeSql('select * from category',[],function(tx,results){
              if(results.rows.length==0){
                tx.executeSql('insert into category( category_id, category_name) values ( 1, "books")',[]);
  tx.executeSql('insert into category( category_id, category_name) values ( 2, "watches")',[]);
  tx.executeSql('insert into category( category_id, category_name) values ( 3, "mobiles")',[]);
  tx.executeSql('insert into category( category_id, category_name) values ( 4, "laptops")',[]);
  tx.executeSql('insert into category( category_id, category_name) values ( 5, "television")',[]);



              }
              else{
                console.log("records have already been inserted");
              }
            });

           }
           function logger_category(tx,error){
            console.log("error",error.message);
           }


     
           
         
             tx.executeSql("create table if not exists cartdetails("+"cart_id integer,"
             + "cartdetails_id integer primary key autoincrement,"
             + "item_id integer,"
             + "quantity integer,"
             + "price integer,"
             + "created_date datetime DEFAULT '"+getCurrentFormattedDate()+"',"
             + "updated_date datetime DEFAULT '"+getCurrentFormattedDate()+"'"
            
             +")",[],success_cartdetails,loggers_cartdetails);


function loggers_cartdetails(tx, error) {
    console.log("Error has occured", error.message);
  }
  function success_cartdetails(tx){

          console.log("done creating cartdetails table");
        }


if (window.sessionStorage.getItem("username")!==null && window.sessionStorage.getItem("username")!=="") 
        {
          var valu=window.sessionStorage.getItem("username");
       
          var txt=document.getElementById("nameSpanEle");
          txt.innerHTML="welcome " + window.sessionStorage.getItem("username");
          document.getElementsByTagName("div").innerHTML="Welcome "+window.sessionStorage.getItem("username");
         
         $(".usecenter").hide();
         $(".logout").show();
        }
        else
        {
          document.getElementById("nameSpanEle").innerHTML="Please login";
        }
  });
}
