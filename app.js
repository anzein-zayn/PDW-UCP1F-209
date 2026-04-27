

const members = [
  { name: 'Arif Budiman',    email: 'arif.budiman@email.com',   interest: 'Web Development',      status: 'Aktif' },
  { name: 'Bintang Kusuma',  email: 'bintang.k@email.com',      interest: 'Artificial Intelligence', status: 'Aktif' },
  
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
