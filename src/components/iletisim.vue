<template>
  <div class="foote">
<header id="header" class="ex-header">  
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1>{{$route.name}}</h1>
                </div>
            </div>
        </div>
    </header>
  <div class="container">
        <form id="contact" action="" method="">
            <h2>İletişim Sayfası</h2>
            <div class="form-control">
                <input placeholder="Adınız Soyadınız" type="text" required autofocus>
            </div>
            <div class="form-control">
                <input placeholder="E-Posta Adresiniz" type="email" required>
            </div>
            <div class="form-control">
                <input placeholder="Konu" type="text" required>
            </div>
            <div class="form-control">
                <textarea placeholder="Lütfen Mesajınızı Buraya Yazın.." required></textarea>
            </div>
            <br>
            <div class="form-control">
                <button name="submit" type="submit" id="submit">GÖNDER</button>
            </div>
        </form>
    </div>


  </div>
</template>
		
		
<script>
export default {
  name: 'Footer',
 
}
		
	
</script>

<style>

 
.container {
    max-width: 1200px;
    width: 300%;
    margin: 0 auto;
    position: relative;
}
 
#contact input[type="text"],
#contact input[type="email"],
#contact textarea,
#contact button[type="submit"] {
    font: 500 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}
 
#contact {
    background: #F9F9F9;
    padding: 25px;
    margin: 100px 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
 
#contact h2 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 15px;
}
 
.form-control{
    border: none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
}
 
#contact input[type="text"],
#contact input[type="email"],
#contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
}
 
#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact textarea:hover {
    -webkit-transition: border-color 0.4s ease-in-out;
    -moz-transition: border-color 0.4s ease-in-out;
    transition: border-color 0.4s ease-in-out;
    border: 1px solid #aaa;
}
 
#contact textarea {
    height: 120px;
    max-width: 100%;
    resize: none;
}
 
#contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #79A7A8;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
}
 

</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->

