let roomCount = 3; // Keep track of the current number of rooms
let flowerCount = 3; // Keep track of the current number of flowers

// Function to show room details
function showRoomDetails(roomName, roomButton) {
    const roomDetails = document.getElementById('roomDetails');
    const roomNameInput = document.getElementById('roomNameInput');
    roomNameInput.value = roomName; // Set the input value to current room name

    // Save the current room button for name update
    document.getElementById('saveRoomNameBtn').setAttribute('data-room-btn', roomButton);

    roomDetails.style.display = 'block'; // Show the room details
}

// Event listeners for room buttons to show details
const roomButtons = document.querySelectorAll('.room-btn');
roomButtons.forEach(button => {
    button.addEventListener('click', () => {
        const roomName = button.getAttribute('data-room');
        showRoomDetails(roomName, button);
    });
});

// Close the room details block
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('roomDetails').style.display = 'none';
});

// Save the new room name and update the button name
document.getElementById('saveRoomNameBtn').addEventListener('click', function() {
    const roomNameInput = document.getElementById('roomNameInput').value;
    const roomButton = this.getAttribute('data-room-btn');

    // Find the specific room button
    const selectedRoomButton = roomButton;
    selectedRoomButton.textContent = roomNameInput;
    selectedRoomButton.setAttribute('data-room', roomNameInput);
});

// Add new flower
document.getElementById('addFlowerBtn').addEventListener('click', function() {
    flowerCount++;
    const flowerContainer = document.getElementById('flowerContainer');

    const newFlowerBlock = document.createElement('div');
    newFlowerBlock.classList.add('param-block');
    newFlowerBlock.innerHTML = `
        <input type="text" class="flower-name" value="Kwiat ${flowerCount}">
        <p>Wilgotność: 60%</p>
        <p>Światło: 80%</p>
        <p>Temperatura: 25°C</p>
        <button class="delete-flower-btn">Usuń rośline</button>
    `;

    flowerContainer.appendChild(newFlowerBlock);
    addFlowerDeleteFunctionality();
});

// Add delete functionality to each flower
function addFlowerDeleteFunctionality() {
    const deleteFlowerButtons = document.querySelectorAll('.delete-flower-btn');
    deleteFlowerButtons.forEach(button => {
        button.addEventListener('click', function() {
            const flowerBlock = button.parentElement;
            flowerBlock.remove();
        });
    });
}

// Initialize delete functionality for current flowers
addFlowerDeleteFunctionality();

// Add new room
document.getElementById('addRoomBtn').addEventListener('click', function() {
    roomCount++;
    const roomContainer = document.getElementById('roomContainer');

    const newRoomButton = document.createElement('button');
    newRoomButton.classList.add('room-btn');
    newRoomButton.setAttribute('data-room', `Pokój ${roomCount}`);
    newRoomButton.textContent = `Pokój ${roomCount}`;
    roomContainer.insertBefore(newRoomButton, this); // Insert new room before the add button

    newRoomButton.addEventListener('click', () => {
        showRoomDetails(`Pokój ${roomCount}`, newRoomButton);
    });
});
