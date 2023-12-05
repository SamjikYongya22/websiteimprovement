function filterPlants() {
    const filter = document.getElementById('filter').value;


    let plants = {
        flowers: ['Rose', 'Tulip', 'Daisy'],
        vegetables: ['Tomato', 'Cucumber', 'Pepper'],
        fruits: ['Apple', 'Pear', 'Cherry']
    };

    let filteredPlants = []; 

    if (filter === 'all') {
        //making all the list of the plants in the box
        filteredPlants = plants.flowers.concat(plants.vegetables, plants.fruits) ;   
    } else {

        filteredPlants = plants[filter];
    }

    let plantListHTML = '';
    filteredPlants.forEach(function(plant) {
        plantListHTML += '<p>' + plant + '</p>'; 
    });
    document.getElementById('plantList').innerHTML = plantListHTML;
}

document.getElementById('forumPostForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;


    if (postTitle === '' || postContent === '') {
        alert('Please fill in both title and content for your post.');
    } else {
        
        alert(`Your post titled "${postTitle}" has been added.`);
    }
});
