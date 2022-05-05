const shop = document.querySelector(".home-container");

const url ="https://ssite.one/sweettooth/wp-json/wp/v2/posts?per_page=100";


function error(message="error"){
    return `<div class"error">${message}</div>`;
}

async function getApi () {
    try{
        const response = await fetch(url);
        const results = await response.json();
        const posts = results;

        console.log(results);
        

        for(let i = 0; i < results.length; i++){

            shop.innerHTML += `<a href="Product.html?id=${results[i].id}" class="posts-card">
            <div><h3>${results[i].title.rendered}</h3></div>
            <div><img src ="${results[i].featured_media_src_url}"></img></div>
            <div><p>${results[i].excerpt.rendered}</p></div>
            </a>`;
        }       
            

    } catch (error) {
       console.log(error);
    }
  
}

getApi();

