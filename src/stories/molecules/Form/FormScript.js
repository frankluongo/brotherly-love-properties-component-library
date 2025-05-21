export default function formScript(id) {
  try {
    if (!id) throw new Error("Form ID is required");
    document.addEventListener("DOMContentLoaded", observeForm);
    function observeForm() {
      const form = document.querySelector(`#${id}`);

      form.addEventListener("submit", onFormSubmit);

      async function onFormSubmit(event) {
        event.preventDefault();

        const response = await fetch(form.action, {
          method: form.method,
          body: urlEncode(new FormData(form)),
          headers: {
            "Content-Type": form.enctype,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        console.log(form.action);
      }
    }
  } catch (error) {
    console.error("Error in formScript:", error);
  }
}

function urlEncode(object) {
  return Object.keys(object)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(object[key])
    )
    .join("&");
}
