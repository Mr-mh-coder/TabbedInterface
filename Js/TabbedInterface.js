(function(){
    "use strict";
    const tabs = document.querySelectorAll('#tabs > ul > li > a');
    
    /*for( let i = 0;i<tabs.length;i++){
        tabs[i].addEventListener('click', selectTab);
    }*/

    /*Comment: we can code blow line instead For loop*/

    tabs.forEach(function(tab){
        tab.addEventListener('click', selectTab);
    });

    function selectTab(event){
        event.preventDefault();
        tabs.forEach(function(tab){
            tab.removeAttribute('class');
        });
        event.target.className = 'active';
        const thisTab = event.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);
        const oldContent = document.querySelector('.visible');
        
        oldContent.className = 'visuallyhidden';
        oldContent.addEventListener('transitionend', function(){
            oldContent.className= 'hidden';
            thisContent.className = 'visible visuallyhidden';
            setTimeout(function(){
                thisContent.classList.remove('visuallyhidden');
            }, 20);
        }, {capture:false, once:true, passive:false})/*Comment: if we do not code this line, transitionend will be a loop when we click again old tabs. */;
        
    }
})();