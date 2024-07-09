<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Wait for the document to be fully loaded before running the script

        const hands = document.querySelectorAll('.second');

        hands.forEach(hand => {
            hand.addEventListener('click', function() {
                const initialColor = this.dataset.color || '#d4af37'; // Default color if dataset is not set

                const input = document.createElement('input');
                input.type = 'color';
                input.value = initialColor;

                input.addEventListener('input', function() {
                    const newColor = this.value;
                    hand.style.backgroundColor = newColor;
                    hand.dataset.color = newColor;
                });

                input.click(); // Trigger the color picker dialog to open
            });
        });
    });
</script>