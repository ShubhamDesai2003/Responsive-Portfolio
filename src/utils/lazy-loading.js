const lazyLoading = ()=>{
    
    const lazyimgs = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;

                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });        
    });
    
    lazyimgs.forEach(img => {
        observer.observe(img);
    });
}


export default lazyLoading;




// const observer = new IntersectionObserver(()=>{}, {
//     root:null,
//     rootMargin:'0px',
//     threshold:0,
// });