// --- AMBIL ELEMEN DOM ---
const subForm = document.getElementById("sub-form");
const subNameInput = document.getElementById("sub-name");
const subCostInput = document.getElementById("sub-cost");
const subContainer = document.getElementById("sub-container");

const totalMonthlyEl = document.getElementById("total-monthly");
const totalYearlyEl = document.getElementById("total-yearly");

// Load data dari LocalStorage atau array kosong
let subscriptions = JSON.parse(localStorage.getItem("subscriptions_list")) || [];

// --- FUNGSI FORMAT RUPIAH ---
function formatRupiah(amount) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(amount);
}

// --- 1. RENDER DAFTAR & KALKULASI TOTAL ---
function renderSubscriptions() {
    subContainer.innerHTML = "";

    if (subscriptions.length === 0) {
        subContainer.innerHTML = `<div class="empty-state">Belum ada langganan yang dicatat.</div>`;
        totalMonthlyEl.textContent = formatRupiah(0);
        totalYearlyEl.textContent = formatRupiah(0);
        return;
    }

    let monthlySum = 0;

    subscriptions.forEach((item, index) => {
        monthlySum += item.cost;

        const card = document.createElement("div");
        card.className = "sub-item";
        card.innerHTML = `
            <div class="sub-info">
                <h3>${item.name}</h3>
                <span>${formatRupiah(item.cost)} / bulan</span>
            </div>
            <button type="button" class="btn-delete" onclick="deleteSubscription(${index})">🗑️ Hapus</button>
        `;
        subContainer.appendChild(card);
    });

    // Hitung total bulanan & tahunan (bulanan * 12)
    const yearlySum = monthlySum * 12;

    totalMonthlyEl.textContent = formatRupiah(monthlySum);
    totalYearlyEl.textContent = formatRupiah(yearlySum);
}

// --- 2. TAMBAH LANGGANAN BARU ---
subForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newSub = {
        name: subNameInput.value.trim(),
        cost: parseFloat(subCostInput.value)
    };

    subscriptions.push(newSub);
    localStorage.setItem("subscriptions_list", JSON.stringify(subscriptions));

    subForm.reset();
    renderSubscriptions();
});

// --- 3. HAPUS LANGGANAN ---
window.deleteSubscription = function(index) {
    subscriptions.splice(index, 1);
    localStorage.setItem("subscriptions_list", JSON.stringify(subscriptions));
    renderSubscriptions();
};

// Inisialisasi awal
renderSubscriptions();
