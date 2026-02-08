
async function loadGuest() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  if (!code) return;

  try {
    const res = await fetch("guests.json");
    const guests = await res.json();

    if (guests[code]) {
      document.getElementById("guest-name").innerText = guests[code];
    } else {
      document.getElementById("guest-name").innerText = "Quý khách";
    }
  } catch (e) {
    console.error("Không tải được danh sách khách");
  }
}

loadGuest();

