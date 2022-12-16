const FAQ = document.querySelectorAll('.question-row');
for (let i = 0; i < FAQ.length; i++) {
    FAQ[i].addEventListener('click', function() {
        const answerTxt = this.children[1];
        const openBtn = this.children[0].children[0];
        const closeBtn = this.children[0].children[1];
        const questionRow = this.children[0];
        if (this.classList.contains("active")) {
            answerTxt.classList.add("d-none");
            questionRow.classList.remove("mb-3");
            openBtn.classList.remove("d-none");
            closeBtn.classList.add("d-none");
            this.classList.remove("active");
        } else {
            answerTxt.classList.remove("d-none");
            questionRow.classList.add("mb-3");
            closeBtn.classList.remove("d-none");
            openBtn.classList.add("d-none");
            this.classList.add("active");
        }
    })
}