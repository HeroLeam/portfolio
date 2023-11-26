document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('.element');
    var tooltip = document.getElementById('tooltip');

    elements.forEach(function (element) {
        element.addEventListener('mousemove', function (e) {
            var tooltipText = element.getAttribute('data-tooltip');
            tooltip.innerHTML = tooltipText;
            tooltip.style.display = 'block';
            tooltip.style.top = e.clientY + 0 + 'px';
            tooltip.style.left = e.clientX + 0 + 'px';
        });

        element.addEventListener('mouseout', function () {
            tooltip.style.display = 'none';
        });
    });
});
