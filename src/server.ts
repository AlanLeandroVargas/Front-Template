import app from './app';

const PORT = process.env.PORT || 3000;

//Inicia el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Web server is running on port ${PORT}`);
});
