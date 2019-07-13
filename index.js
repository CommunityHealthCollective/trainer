function takeQuiz(){
    var slides = document.getElementById('slides');
    slides.setAttribute("style", "display: none;");
    var quiz = document.getElementById('quiz');
    quiz.setAttribute("style", "display: block;");
    var showSlidesButton = document.getElementById('show-slides-btn');
    showSlidesButton.setAttribute("style", "display: block;");
    var takeQuizButton = document.getElementById('take-quiz-btn');
    takeQuizButton.setAttribute("style", "display: none;");
}

function showSlides(){
    var slides = document.getElementById('slides');
    slides.setAttribute("style", "display: block;");
    var quiz = document.getElementById('quiz');
    quiz.setAttribute("style", "display: none;");
    var showSlidesButton = document.getElementById('show-slides-btn');
    showSlidesButton.setAttribute("style", "display: none;");
    var takeQuizButton = document.getElementById('take-quiz-btn');
    takeQuizButton.setAttribute("style", "display: block;");
}