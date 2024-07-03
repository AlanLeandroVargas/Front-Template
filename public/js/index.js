// Recupero los datos a traves del microservicio starter y muestro dichos datos en pantalla
document.addEventListener('DOMContentLoaded', () =>
    {
        document.getElementById('get')?.addEventListener('click', async () =>
            {
                const starters = await getStarters();
                console.log(starters);
                renderData(starters);
            });
    });

// Cargo los datos obtenidos en una lista desordenada
function renderData(data)
{
    const startersContainer = document.querySelector('.starter-container');
    const startersList = document.createElement('ul');
    data.forEach(starter => {
        const li = document.createElement('li');
        Object.assign(li, { textContent: starter });
        startersList.appendChild(li);
    });
    startersContainer.appendChild(startersList);
}
// Utilizo fetch API para realizar una solicitud HTTP GET al servidor que esta corriendo el microservicio
// starter
async function getStarters()
{
    try
    {
        const response = await fetch("http://localhost:4000/api");
        if(!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = response.json();
        return data;
    }    
    catch (error)
    {
        console.error('Error fetching data:', error);
    }
}