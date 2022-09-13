
window.addEventListener("click", function(event) {
  let eventTarget = event.target;
  if(eventTarget.closest('.question-item-arrow')) {
    let arrow = eventTarget;
    let item = eventTarget.closest('.question-item');

    item.classList.toggle('question-item-active')
    arrow.classList.toggle('arrow-open')
  }
  if(eventTarget.closest('.request-content-btn')) {
    let requestBnt = eventTarget;

    requestBnt.classList.toggle('request-content-btn-active')
  }
  if(eventTarget.closest('.step-six-btn')) {
    let contentBtn = eventTarget;

    contentBtn.classList.toggle('step-six-btn-active')
  }
})


window.onscroll = function(){
   var html = document.documentElement, body = document.body;
   var BlkStyle = document.getElementById('block').style;
   if(html.scrollTop>100||body.scrollTop>100) {
       BlkStyle.background="linear-gradient(278.04deg, #FFC83E 31.99%, #FF9F47 81.27%)";
   } else BlkStyle.background="transparent";
    }
  