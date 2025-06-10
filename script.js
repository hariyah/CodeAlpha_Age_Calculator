function calculateAge() {
    // Get input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Clear previous messages
    resultDiv.innerHTML = '';
    errorDiv.innerHTML = '';

    // Validate inputs
    if (!day || !month || !year) {
        errorDiv.innerHTML = 'Please fill in all fields.';
        return;
    }

    // Create date object for input
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    // Validate date
    if (birthDate.getDate() !== day || 
        birthDate.getMonth() !== month - 1 || 
        birthDate.getFullYear() !== year) {
        errorDiv.innerHTML = 'Please enter a valid date.';
        return;
    }

    // Check if birth date is in the future
    if (birthDate > today) {
        errorDiv.innerHTML = 'Birth date cannot be in the future.';
        return;
    }

    // Calculate age
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust for negative months or days
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display result
    resultDiv.innerHTML = `You are ${years} years, ${months} months, and ${days} days old.`;
}