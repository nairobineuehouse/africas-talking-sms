document
  .getElementById("messageForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // retrieve form data
    const formData = new FormData(event.target);
    const to = formData.get("to");
    const message = formData.get("message");

    console.log("To:", to);
    console.log("Message:", message);

    // for displaying success or error
    const success = document.getElementById("success");
    const errorDisplay = document.getElementById("error");

    // sending the POST request
    fetch("http://localhost:3004/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ to, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);

        // process the response
        const smsData = data.data.SMSMessageData;

        // display the message summary
        if (smsData && smsData.Recipients && smsData.Recipients.length > 0) {
          const recipient = smsData.Recipients[0];
          if (recipient.statusCode === 101) {
            success.textContent = `Message sent successfully to ${recipient.number}. Cost: ${recipient.cost}`;
            success.style.display = "block";
            errorDisplay.style.display = "none";
          } else {
            errorDisplay.textContent = `Failed to send message to ${recipient.number}. Status: ${recipient.status}`;
            errorDisplay.style.display = "block";
            success.style.display = "none";
          }
        } else {
          errorDisplay.textContent = `Unexpected response: ${smsData.Message}`;
          errorDisplay.style.display = "block";
          success.style.display = "none";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        errorDisplay.textContent =
          "An error occurred while sending the message.";
        errorDisplay.style.display = "block";
        success.style.display = "none";
      });
  });
