let roomCount = 3; // Początkowa liczba pokoi

document.getElementById('addRoomBtn').addEventListener('click', function() {
    roomCount++;
    const newRoom = document.createElement('button');
    newRoom.classList.add('room-btn');
    newRoom.textContent = `Pokój ${roomCount}`;
    const roomContainer = document.getElementById('roomContainer');
    roomContainer.insertBefore(newRoom, this); // Dodaj nowy przycisk przed przyciskiem dodawania
});

// Funkcja wyświetlająca szczegóły pokoju
function showRoomDetails(roomName) {
    const roomDetails = document.getElementById('roomDetails');
    const roomNameHeading = document.getElementById('roomName');

    roomNameHeading.textContent = roomName; // Ustaw nazwę pokoju
    roomDetails.style.display = 'block'; // Wyświetl blok
}

// Przykład jak podłączyć do przycisków
const roomButtons = document.querySelectorAll('.room-btn');
roomButtons.forEach(button => {
    button.addEventListener('click', () => {
        const roomName = button.textContent; // Pobierz nazwę pokoju z przycisku
        showRoomDetails(roomName); // Wywołaj funkcję wyświetlającą szczegóły
    });
});

// Funkcja zamykająca blok
document.getElementById('closeBtn').addEventListener('click', function() {
    const roomDetails = document.getElementById('roomDetails');
    roomDetails.style.display = 'none'; // Ukryj blok
});
