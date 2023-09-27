document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan elemen-elemen input
  const namaInput = document.getElementById("namaInput");
  const roleInput = document.getElementById("roleInput");
  const availabilityInput = document.getElementById("availabilityInput");
  const usiaInput = document.getElementById("usiaInput");
  const lokasiInput = document.getElementById("lokasiInput");
  const experienceInput = document.getElementById("experienceInput");
  const emailInput = document.getElementById("emailInput");

  // Mendapatkan elemen-elemen yang akan diubah
  const namaElement = document.getElementById("nama");
  const roleElement = document.getElementById("role");
  const availabilityElement = document.getElementById("availability");
  const usiaElement = document.getElementById("usia");
  const lokasiElement = document.getElementById("lokasi");
  const experienceElement = document.getElementById("experience");
  const emailElement = document.getElementById("email");

  // Mendapatkan tombol submit
  const submitButton = document.getElementById("btn-submit");

  // Menambahkan event listener pada tombol submit
  submitButton.addEventListener("click", function () {
    // Mengambil nilai dari input
    const nama = namaInput.value;
    const role = roleInput.value;
    const availability = availabilityInput.value;
    const usia = usiaInput.value;
    const lokasi = lokasiInput.value;
    const experience = experienceInput.value;
    const email = emailInput.value;

    // Mengganti konten elemen-elemen dengan nilai yang diinputkan
    namaElement.innerText = nama;
    roleElement.innerText = role;
    availabilityElement.innerText = availability;
    usiaElement.innerText = usia;
    lokasiElement.innerText = lokasi;
    experienceElement.innerText = experience;
    emailElement.innerText = email;
  });
});
