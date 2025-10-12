// Calendrier interactif (génère le mois courant, style agenda foncé)
document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    if (calendar) {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        let table = '<table><tr><th>Lun</th><th
