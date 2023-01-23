function toogleMode(){
    //documentElement é o <html></html>
    const html = document.documentElement
    //o toggle adiciona uma classe na lista de classe se o elemento não tiver e remove se tiver
    html.classList.toggle('light')
    /*O toogle significa isto:
        if(html.classList.contains('light')){
            html.classList.remove('light')
        }else{
            html.classList.add('light')
        }
    */

    //MUDAR FOTO DE PERFIL DE ACORDO COM O TEMA
    const tagImg = document.querySelector("#profile img")
    //Se o html tiver a classe 'light' em sua lista de classes o JS irá tocar a foto de perfil
    if(html.classList.contains('light')){
        tagImg.setAttribute("src", "./assets/HS_LightMode.jpg")
    }else{
        tagImg.setAttribute("src", "./assets/imgProfil_HelenaOliveira.jpeg")
    }    
}