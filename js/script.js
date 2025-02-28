document.getElementById('downloadBtn').addEventListener('click', function() {
    // Ruta al archivo que queremos descargar
    const fileUrl = 'assets/NewGold.exe';

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'NewGold.exe'; // Nombre del archivo al descargar
    document.body.appendChild(link);

    // Simular un clic en el enlace
    link.click();

    // Eliminar el enlace temporal
    document.body.removeChild(link);
});