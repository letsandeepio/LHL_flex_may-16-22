
$(document).ready(function(){

    $(".buy-btn").on("click",function(){
    
    const $section = $(this).closest(".coin-section");

    const $balance = $section.find(".balance")

    $balance.append(' 💰 ')

    })

})