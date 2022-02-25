import Slider from "./slider";
export default class MainSlider extends Slider {
    constructor(page, btns) {
        super(page, btns);

    }
    showSlide(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }
        try {
            this.visitCard.style.display = "none";
            this.visitCard.classList.add("animated", "slideInUp");
            if (n == 3) {
                setTimeout(() => {
                    this.visitCard.style.display = "block";
                }, 3000);
            } else {
                this.visitCard.classList.remove("slideInUp");
            }
        } catch (e) { }

        this.slides.forEach(slider => {
            slider.style.display = "none";
            slider.classList.add("animated");
        });
        this.slides[this.slideIndex - 1].classList.add("fadeIn");
        this.slides[this.slideIndex - 1].style.display = "block";
    }
    plusSlides(n) {
        this.showSlide(this.slideIndex += n);
    }

    render() {
        try {
            this.visitCard = document.querySelector(".hanson");
        } catch (e) { }


        this.btns.forEach(btn => {
            btn.addEventListener("click", () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener("click", (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlide(this.slideIndex);
            });



        });
        this.showSlide(this.slideIndex);

    }
}