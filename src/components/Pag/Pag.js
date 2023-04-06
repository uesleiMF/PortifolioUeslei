//import { Carousel } from 'react-responsive-carousel';
import React from "react";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import c0 from "../../components/Img/c0.jpg";
import c1 from "../../components/Img/c1.jpg";
import c2 from "../../components/Img/c2.jpg";
import c3 from "../../components/Img/c3.jpg";
import c4 from "../../components/Img/cel.png";
import c5 from "../../components/Img/c5.jpg";
import c6 from "../../components/Img/c6.jpg";
import c7 from "../../components/Img/c7.jpg";
import c8 from "../../components/Img/c8.jpg";
import c9 from "../../components/Img/c9.jpg";
import c10 from "../../components/Img/cel1.png";

import { BsFillGeoAltFill } from "react-icons/bs";

import { Icon } from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Pag() {
  return (
   
   <div className="container-fluid">
      <div className="card mt-4 bg-info bg-opacity-25">
        <div className="card-title">
          <div className="row">
            <div className="col">
            
      </div>
          </div>
        </div>

        <CCarousel controls indicators>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c0}
              height="350px"
              alt="slide 1"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c1}
              height="350px"
              alt="slide 2"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c2}
              height="350px"
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c3}
              height="350px"
              alt="slide 4"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c4}
              height="350px"
              alt="slide 5"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c5}
              height="350px"
              alt="slide 6"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c6}
              height="350px"
              alt="slide 7"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c7}
              height="350px"
              alt="slide 8"
            />
          </CCarouselItem>

          <CCarouselItem>
            <CImage
              className="d-block "
              src={c8}
              height="350px"
              alt="slide 9"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c9}
              height="350px"
              alt="slide 10"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block "
              src={c10}
              height="350px"
              alt="slide 10"
            />
          </CCarouselItem>
        </CCarousel>

        <div></div>
      </div>

    
      

      <div className="card mt-4 bg-Light bg-opacity-50">
        <div className="row mb-3">
        <p className="mx-3 my-3 mb-0 text-center fs-4 fw-bold">
            {" "}
           (MEUS-CURSOS)
          </p>
         
          <p className="mx-3 my-3 text-center fs-4 fw-bold">
         
          </p>
        

          <div class="col-4 p-3">
         
          <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img
                  src={c1}
                  alt="bo"
                 
                  height="200px"
                  className="card-img-top"
                />    </div>
    <div class="flip-card-back">
    <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
      <Icon>
    
            <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
      
      <BsFillGeoAltFill />
            
            </a>

            </Icon>
            
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c2}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c3}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>



<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c4}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c5}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c6}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
   
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c7}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
   
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c8}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c9}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c10}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
    <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
    
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>

<div class="col-4 p-3">
         
         <div class="flip-card">
 <div class="flip-card-inner">
   <div class="flip-card-front">
   <img
                 src={c0}
                 alt="bo"
                
                 height="200px"
                 className="card-img-top"
               />    </div>
   <div class="flip-card-back">
   <p className="mx-3 my-3 mb-0 text-center fs-5 fw-bold">ENDEREÇO:</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">FOLHA 10 QUADRA 00 LOTE 00</p>
   <p className="mx-3 my-3 mb-0 text-center fs-6 fw-bold">LOCALIZAÇÃO ABAIXO</p>
  
     <Icon>
   
           <a href="https://maps.app.goo.gl/e9p6hr2WNqNPU19V9">
     
     <BsFillGeoAltFill />
           
           </a>

           </Icon>
    </div>
  </div>
</div> 
</div>
  </div>
</div> 


  
   
    </div>
  );
}
