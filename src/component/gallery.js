function Gallery(){
return(
  <div class="container">
  <h2>Carousel Example</h2>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    
    <div class="carousel-inner">
      <div class="item active">
        <img src="../../assets/images/piccc.jpg" alt="Los Angeles" style="width:100%;"></img>
      </div>

      <div class="item">
        <img src="../../assets/images/pic.jpg" alt="Chicago" style="width:100%;"></img>
      </div>
    

    </div>

   
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
);
}

export default Gallery;