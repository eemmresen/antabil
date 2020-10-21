<template>
  <div class="he">
<body>
		
	
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container">
            <a class="navbar-brand logo-image" href="anasayfa"><img src="http://bilfen.storage.cubecdn.net/antabil/images/logo.png" alt="alternative"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-awesome fas fa-bars"></span><span class="navbar-toggler-awesome fas fa-times"></span></button>
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown"> <a class="nav-link page-scroll" href="#hakkimizda">Hakkımızda</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle page-scroll" href="#" id="egitimOgretim" role="button" aria-haspopup="true" aria-expanded="false">Eğitim - Öğretim</a>
                        <div class="dropdown-menu" aria-labelledby="egitimOgretim"> <a class="nav-link page-scroll" href="anaokulu">Anaokulu</a> <a class="nav-link page-scroll" href="ilkogretim">İlköğretim</a> <a class="nav-link page-scroll" href="lise">Lise</a></div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle page-scroll" href="#video" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Birimler</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="nav-link page-scroll" href="siniflar">Sınıflar</a> <a class="nav-link page-scroll" href="bilim-alanlari">Bilim Alanları</a> <a class="nav-link page-scroll" href="psikolojik-danisma">Psikolojik Danışma</a> <a class="nav-link page-scroll" href="spor-alanlari">Spor Alanları</a> <a class="nav-link page-scroll" href="yemekhane">Yemekhane</a> <a class="nav-link page-scroll" href="guvenlik">Güvenlik</a> <a class="nav-link page-scroll" href="bahce">Bahçe</a></div>
                    </li>
                    <li class="nav-item"> <a class="nav-link page-scroll" href="galeri">Galeri</a></li>
                </ul>
                <span class="nav-item"> <a class="btn-outline-sm" href="iletisim">İletişim</a> </span>
            </div>
        </div>
    </nav>
   

   
   
</body>
  </div>
</template>
	

		
<script>







export default {
  name: 'Header',
  props: {
    msg: String
  }
}
		
	
</script>



