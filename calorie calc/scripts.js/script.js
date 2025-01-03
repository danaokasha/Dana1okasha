function calculateCalories() {
    const tdee = parseFloat(document.getElementById('tdee').value);
    const breakfastPercentage = parseFloat(document.getElementById('breakfast').value) || 0;
    const lunchPercentage = parseFloat(document.getElementById('lunch').value) || 0;
    const dinnerPercentage = parseFloat(document.getElementById('dinner').value) || 0;
    const snacksPercentage = parseFloat(document.getElementById('snacks').value) || 0;

    const totalPercentage = breakfastPercentage + lunchPercentage + dinnerPercentage + snacksPercentage;

    if (totalPercentage !== 100) {
        alert("يجب أن يكون مجموع النسب 100%");
        return;
    }

    const breakfastCalories = (breakfastPercentage / 100) * tdee;
    const lunchCalories = (lunchPercentage / 100) * tdee;
    const dinnerCalories = (dinnerPercentage / 100) * tdee;
    const snacksCalories = (snacksPercentage / 100) * tdee;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>توزيع السعرات الحرارية:</h3>
        <p>الإفطار: ${breakfastCalories.toFixed(2)} سعر حراري</p>
        <p>الغداء: ${lunchCalories.toFixed(2)} سعر حراري</p>
        <p>العشاء: ${dinnerCalories.toFixed(2)} سعر حراري</p>
        <p>الوجبات الخفيفة: ${snacksCalories.toFixed(2)} سعر حراري</p>
    `;
}