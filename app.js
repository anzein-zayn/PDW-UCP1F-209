/**
 * app.js — Shared JavaScript untuk Tech Community Website
 * Data disimpan sementara dalam array (tanpa database)
 */

// ═══════════════════════════════════════════════════════════
//  MEMBER DATA ARRAY (simulasi penyimpanan sementara)
// ═══════════════════════════════════════════════════════════

const members = [
  { name: 'Arif Budiman',    email: 'arif.budiman@email.com',   interest: 'Web Development',      status: 'Aktif' },
  { name: 'Bintang Kusuma',  email: 'bintang.k@email.com',      interest: 'Artificial Intelligence', status: 'Aktif' },
  { name: 'Citra Dewi',      email: 'citra.dewi@email.com',     interest: 'UI/UX Design',          status: 'Aktif' },
  { name: 'Dimas Pratama',   email: 'dimas.p@email.com',        interest: 'Cybersecurity',         status: 'Aktif' },
  { name: 'Eva Maharani',    email: 'eva.maha@email.com',       interest: 'Mobile Development',   status: 'Aktif' },
  { name: 'Fajar Ramadhan',  email: 'fajar.r@email.com',        interest: 'Cloud Computing',       status: 'Aktif' },
  { name: 'Gilang Saputra',  email: 'gilang.s@email.com',       interest: 'Data Science',          status: 'Aktif' },
  { name: 'Hana Putri',      email: 'hana.putri@email.com',     interest: 'Game Development',      status: 'Tidak Aktif' },
  { name: 'Irfan Hakim',     email: 'irfan.h@email.com',        interest: 'Blockchain',            status: 'Aktif' },
  { name: 'Jasmine Aulia',   email: 'jasmine.a@email.com',      interest: 'Web Development',      status: 'Aktif' },
];

/**
 * Tambah anggota baru ke dalam array
 * @param {string} name
 * @param {string} email
 * @param {string} interest
 */
function addMember(name, email, interest) {
  members.push({ name, email, interest, status: 'Baru' });
}

// ═══════════════════════════════════════════════════════════
//  RENDER TABLE (digunakan di index.html)
// ═══════════════════════════════════════════════════════════

/**
 * Render tabel anggota
 * @param {string} [filter=''] - kata kunci pencarian
 */
function renderTable(filter = '') {
  const tbody = document.getElementById('memberTbody');
  const countEl = document.getElementById('tableCount');
  if (!tbody) return;

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(filter) ||
    m.email.toLowerCase().includes(filter) ||
    m.interest.toLowerCase().includes(filter)
  );

  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="empty-row">
          <span>🔍</span> Tidak ada anggota yang cocok dengan pencarian.
        </td>
      </tr>`;
  } else {
    filtered.forEach((m, i) => {
      const tr = document.createElement('tr');
      const statusClass = m.status === 'Aktif' ? 'status-aktif'
                        : m.status === 'Baru' ? 'status-baru'
                        : 'status-inactive';
      tr.innerHTML = `
        <td>${i + 1}</td>
        <td>
          <div class="member-name-cell">
            <div class="member-avatar">${m.name.charAt(0)}</div>
            ${m.name}
          </div>
        </td>
        <td class="email-cell">${m.email}</td>
        <td><span class="interest-badge">${m.interest}</span></td>
        <td><span class="status-badge ${statusClass}">${m.status}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  if (countEl) {
    countEl.textContent = `Menampilkan ${filtered.length} dari ${members.length} anggota`;
  }
}
