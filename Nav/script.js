//Português
$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".nav-links").children().eq(0).text("Home");
        $(".nav-links").children().eq(1).text("Livros");
        $(".nav-links").children().eq(2).text("Categorias");
        $(".nav-links").children().eq(3).text("Sobre Nós");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-br");
        //seção
        $("#title").text("Uma Webpage simples com opção de Milti-language");
        //sobre
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-links").children().eq(0).text("Home");
        $(".nav-links").children().eq(1).text("Books");
        $(".nav-links").children().eq(2).text("Categories");
        $(".nav-links").children().eq(3).text("About Us");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("A simple webpage with Milti-language option");
        
    });
});