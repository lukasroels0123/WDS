let tile = document.getElementById('row').children;

for(let i = 0; i < tile.length; i++){
        tile[i].addEventListener('click', () => {
            if(tile[i].firstElementChild != null) {
                onclick(tile[i].children[0].id);
            } else {
                move(tile[i].id);
            }
        });
}

