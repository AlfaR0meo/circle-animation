document.addEventListener('DOMContentLoaded', () => {
    
    const circleElement = document.querySelector('.circle');
    const circleParentElement = circleElement.parentElement;
    const finalChangePoint = circleParentElement.offsetTop;
    const circleInitialHeight = 200;
    // :::::::::::::::::::::::::::::::::::
    const sizeChangingSpeedCoefficient = 1; // 0-1 – очень быстро, =1 – быстро, >1 – медленнее
    // :::::::::::::::::::::::::::::::::::

    function scrollFunction() {
        if (window.scrollY >= 0 && window.scrollY <= finalChangePoint) {
            circleSizeChange();
            console.log('размер круга меняется..');
        }
    }

    function circleSizeChange() {
        let circleSize = circleInitialHeight + (window.scrollY / sizeChangingSpeedCoefficient);

        circleElement.style.setProperty('--circle-height', circleSize + 'px');
    }

    window.addEventListener('scroll', scrollFunction);
});