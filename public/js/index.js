document.addEventListener('DOMContentLoaded', () =>
    {
        document.getElementById('get')?.addEventListener('click', async () =>
            {
                alert(await getData());
            });
    });

async function getData()
{
    try
    {
        const response = await fetch("http://localhost:4000/example");
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