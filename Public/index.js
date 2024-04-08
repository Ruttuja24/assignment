
//Get Dom Data
const length = document.getElementById("length");
const password = document.getElementById("password");
const button = document.getElementById("sendButton");

button.addEventListener("click", async () => {
  try {
    if (length.value < 6 || length.value > 20) {
      alert('Password length should be between 6 and 20 characters');
      return;
    }
    const response = await fetch("/generate-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        length: length.value,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const pass = await response.text();
    password.value = pass;
  } catch (error) {
    console.log('Error fetching password:', error);
  }
});

