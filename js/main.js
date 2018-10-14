'use strict';
console.log('Starting up');


function init() {
  renderProjs()
}

function renderProjs() {
  console.log('hey');
  // var proj = gProj
  var projs = getProgsForDisplay();
  var strHtmls = projs.map(function (proj) {
    return `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a onclick="renderModal('${proj.id}')" class="portfolio-link card-img-size" data-toggle="modal" href="#portfolioModal${proj.id}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid card-img-size" src="${proj.img}" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.labels[0]} ${proj.labels[1]}</p>
            </div>
        </div>
        `
  })
  document.querySelector(".project-cards").innerHTML = strHtmls.join('')
}

function renderModal(projId) {
  var proj = getProj(projId);
  var strHtml = `
 <div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="close-modal" data-dismiss="modal">
         <div class="lr">
           <div class="rl"></div>
         </div>
       </div>
       <div class="container">
         <div class="row">
           <div class="col-lg-8 mx-auto">
             <div class="modal-body">
               <!-- Project Details Go Here -->
               <h2>${proj.name}</h2>
               <p class="item-intro text-muted">${proj.title}.</p>
               <img class="img-fluid d-block mx-auto modal-img-size" src="${proj.img}" alt="">
               <p>${proj.desc}</p>
               <ul class="list-inline">
               <li>Date: ${proj.publishedAt}</li>
               <li>Client: ${proj.client}</li>
               <li>Category: ${proj.labels}</li>
               </ul>
               <button class="btn btn-primary" data-dismiss="modal" type="button">
               <i class="fa fa-times"></i>
               Close Project</button>
               <button onclick="goToProj('${proj.name}')" type="button" data-dismiss="modal" class="btn btn-success">GO TO PROJECT</button>
               
               </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>`
  //  document.querySelector("#portfolioModal1").innerHTML = strHtml;
  document.querySelector('.render-modal-area').innerHTML = strHtml;

}

function contactMe() {
  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=thegabibi@gmail.com&su=SUBJECT&b ody=BODY ")
}

function goToProj(projname) {
  window.open(`proj/${projname}/index.html`)

}