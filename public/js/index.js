document.addEventListener('DOMContentLoaded', () =>
    {
        document.getElementById('get')?.addEventListener('click', async () =>
            {
                const starters = await getStarters();
                console.log(starters);
                renderData(starters);
            });
    });

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

async function getStarters()
{
    try
    {
        const response = await fetch("http://localhost:4000/starter/getStarters");
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