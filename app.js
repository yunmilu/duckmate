const STORAGE_KEY = 'duckz_fandom_app_v14';

const DEFAULT_MISSIONS = [
  { id: 'm1', title: '최애 직캠 1편 정주행하기', reward: 20, completedDate: null },
  { id: 'm2', title: '오늘의 덕질 일기 한 줄 남기기', reward: 30, completedDate: null },
  { id: 'm3', title: '음원 스트리밍 스밍 인증하기', reward: 25, completedDate: null },
  { id: 'm4', title: '공식 스케줄 캘린더 확인하기', reward: 15, completedDate: null },
  { id: 'm5', title: '앨범 저장소에 사진 구경하기', reward: 15, completedDate: null },
  { id: 'm6', title: '오늘의 덕질 유형 테스트 참여', reward: 20, completedDate: null },
];

const TEST_QUESTIONS = [
  {
    q: '1. 최애의 새 앨범 티저가 뜬 자정, 나의 반응은?',
    options: [
      { text: '알람 맞춰두고 00시 정각에 바로 해석·분석 시작!', type: 'analyst' },
      { text: '예판 사이트부터 열어 버전별 특전·포카 구성 확인!', type: 'collector' },
      { text: '스밍 총공팀 공지 확인하고 플레이리스트 세팅!', type: 'streamer' },
      { text: '주접 멘트 100줄 쓰면서 친구들에게 영업 시작!', type: 'preacher' }
    ]
  },
  {
    q: '2. 내가 가장 행복을 느끼는 덕질 순간은?',
    options: [
      { text: '콘서트·사녹 현장에서 응원법 목 터져라 외칠 때', type: 'offline' },
      { text: '위시리스트에 있던 레어 포토카드 드래곤볼 완성할 때', type: 'collector' },
      { text: '음원 차트 1위 & 음악방송 1위 트로피 안겨줄 때', type: 'streamer' },
      { text: '최애의 사소한 습관·서사·세계관 떡밥을 꿰뚫어 볼 때', type: 'analyst' }
    ]
  },
  {
    q: '3. 유튜브에서 최애 영상을 볼 때 나의 스타일은?',
    options: [
      { text: '4K 직캠 프레임 단위로 돌려보며 춤선·표정 분석', type: 'analyst' },
      { text: '댓글창에 주접 댓글 남기고 좋아요 누르며 분위기 메이킹', type: 'preacher' },
      { text: '조회수 공약 달성을 위해 권장 스밍 리스트대로 재생', type: 'streamer' },
      { text: '비하인드 속 착용 아이템·착장 정보 손민수 검색', type: 'collector' }
    ]
  },
  {
    q: '4. 콘서트 티켓팅 날, 나의 모습은?',
    options: [
      { text: 'PC방 + 듀얼모니터 + 서버시간 초단위 세팅 완료', type: 'offline' },
      { text: '취켓팅까지 밤새 새로고침하며 기어코 내 자리 쟁취', type: 'offline' },
      { text: '현장 나눔용 비공식 굿즈·포카 미리 제작해서 준비', type: 'preacher' },
      { text: '온라인 생중계 안방 1열에서 고화질 녹화·캡처 준비', type: 'analyst' }
    ]
  },
  {
    q: '5. 친구가 "요즘 누구 좋아해?"라고 물어본다면?',
    options: [
      { text: '입덕 가이드 PPT 수준으로 입덕 직캠 3개 바로 전송', type: 'preacher' },
      { text: '폰 뒤에 끼워둔 최애 포카를 자랑스럽게 보여줌', type: 'collector' },
      { text: '최근 음원 성적과 역대급 기록부터 브리핑함', type: 'streamer' },
      { text: '이번 컨셉의 예술성과 음악적 서사를 진지하게 설명', type: 'analyst' }
    ]
  },
  {
    q: '6. 내 방 책상이나 앨범장에 가장 많은 것은?',
    options: [
      { text: '버전별 앨범, 포카 바인더, 아크릴 스탠드 풀세트', type: 'collector' },
      { text: '콘서트 슬로건, 응원봉, 티켓 홀더 등 현장 전리품', type: 'offline' },
      { text: '스밍 인증용 공기계와 충전 케이블 군단', type: 'streamer' },
      { text: '최애 멘트와 가사를 적어둔 덕질 다이어리·스크랩북', type: 'preacher' }
    ]
  },
  {
    q: '7. 내가 생각하는 "최고의 팬"이란?',
    options: [
      { text: '숫자와 결과로 최애의 커리어를 지켜주는 든든한 화력 팬', type: 'streamer' },
      { text: '어디든 달려가 함성으로 힘을 실어주는 현장 올출 팬', type: 'offline' },
      { text: '최애의 모든 순간을 기록하고 세상에 널리 알리는 홍보 팬', type: 'preacher' },
      { text: '변치 않는 애정으로 앨범과 굿즈를 소중히 간직하는 수집 팬', type: 'collector' }
    ]
  }
];

const TEST_RESULTS = {
  streamer_analyst: { title: '📊 전략적 스밍 총공 사령관형', desc: '치밀한 데이터 분석력과 화력 집중력을 겸비한 핵심 팬!' },
  streamer_offline: { title: '🔥 온·오프라인 올인원 화력 만수르형', desc: '안방과 현장을 모두 책임지는 전천후 열정 팬!' },
  collector_offline: { title: '🛍️ 현장 올출 & 포카 드래곤볼 재벌형', desc: '굿즈와 특전 포카를 완벽히 수집하는 진성 컬렉터!' },
  collector_analyst: { title: '🏛️ 최애 아카이브 박물관 관장형', desc: '앨범 사양과 떡밥을 체계적으로 정리하는 장인 팬!' },
  preacher_offline: { title: '📢 현장 나눔 & 영업 천재 인간 확성기형', desc: '주접 멘트와 응원으로 분위기를 주도하는 홍보대사!' },
  preacher_streamer: { title: '🚀 트렌드 세터 밈·바이럴 메이커형', desc: '대중적 인기와 화력을 동시에 끌어올리는 센스 만점 팬!' },
  analyst_preacher: { title: '✍️ 감성 서사 장인 & 입덕 가이드 작가형', desc: '최애의 의미를 감동적인 글로 풀어내는 작가형 팬!' },
  default: { title: '💎 육각형 올라운더 밸런스 덕후형', desc: '어느 하나 빠지지 않는 완벽한 밸런스의 행복한 덕후!' }
};

let state = loadState();
let currentTab = 'home';
let isMissionExpanded = false;
let testStep = 0;
let testScores = { streamer: 0, collector: 0, analyst: 0, offline: 0, preacher: 0 };

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        points: typeof parsed.points === 'number' ? parsed.points : 50,
        theme: parsed.theme || 'system',
        biases: Array.isArray(parsed.biases) ? parsed.biases : getInitialBiases(),
        missions: Array.isArray(parsed.missions) ? parsed.missions : DEFAULT_MISSIONS,
        rankings: Array.isArray(parsed.rankings) ? parsed.rankings : getInitialRankings(),
        drawTimestamps: Array.isArray(parsed.drawTimestamps) ? parsed.drawTimestamps : [],
        userAlbum: Array.isArray(parsed.userAlbum) ? parsed.userAlbum : [],
        collectedCards: Array.isArray(parsed.collectedCards) ? parsed.collectedCards : [],
        schedules: Array.isArray(parsed.schedules) ? parsed.schedules : [{ id: 's1', title: '새 미니앨범 컴백 쇼케이스', date: '2026-12-05' }],
        diaries: Array.isArray(parsed.diaries) ? parsed.diaries : [],
        playlist: Array.isArray(parsed.playlist) ? parsed.playlist : [
          { id: 'p1', videoId: '6ZUIwj3FgUY', title: 'IVE 아이브 - I AM MV' },
          { id: 'p2', videoId: 'pSUydWEqKwE', title: 'NewJeans - Ditto MV' }
        ]
      };
    } catch (e) {}
  }
  return {
    points: 50,
    theme: 'system',
    biases: getInitialBiases(),
    missions: DEFAULT_MISSIONS,
    rankings: getInitialRankings(),
    drawTimestamps: [],
    userAlbum: [],
    collectedCards: [],
    schedules: [{ id: 's1', title: '새 미니앨범 컴백 쇼케이스', date: '2026-12-05' }],
    diaries: [],
    playlist: [
      { id: 'p1', videoId: '6ZUIwj3FgUY', title: 'IVE 아이브 - I AM MV' },
      { id: 'p2', videoId: 'pSUydWEqKwE', title: 'NewJeans - Ditto MV' }
    ]
  };
}

function getInitialBiases() {
  return [{
    id: 'b1',
    name: '장원영',
    group: 'IVE',
    nickname: '럭키비키',
    birthday: '2004-08-31',
    debutDate: '2021-12-01',
    photo: './icon-192.png'
  }];
}

function getInitialRankings() {
  return [
    { id: 'r_bias_1', name: '장원영 (IVE)', score: 200 },
    { id: 'r2', name: 'aespa (에스파)', score: 130 },
    { id: 'r3', name: 'ZEROBASEONE', score: 110 }
  ];
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    showToast('저장 공간이 부족하여 일부 이미지가 저장되지 않을 수 있습니다.');
  }
  updatePointDisplays();
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'light') {
    root.classList.remove('dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.classList.toggle('dark', prefersDark);
  }
}

function changeTheme(val) {
  state.theme = val;
  saveState();
  applyTheme(val);
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (state.theme === 'system') applyTheme('system');
});

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('opacity-0');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.add('opacity-0'), 2300);
}

function getInitialAvatar(name, sizeClass = 'w-12 h-12 text-base') {
  const char = (name || '덕').trim().charAt(0);
  const colors = ['from-sky-400 to-blue-500', 'from-pink-400 to-rose-500', 'from-amber-400 to-orange-500', 'from-emerald-400 to-teal-500', 'from-violet-400 to-purple-500'];
  const idx = char.charCodeAt(0) % colors.length;
  return `<div class="${sizeClass} rounded-2xl bg-gradient-to-br ${colors[idx]} text-white font-extrabold flex items-center justify-center shrink-0 shadow-xs cursor-pointer">${char}</div>`;
}

function calcBirthdayDday(dateStr) {
  if (!dateStr) return '미등록';
  const parts = dateStr.split('-');
  if (parts.length < 3) return '';
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let nextBday = new Date(now.getFullYear(), month, day);
  if (nextBday < today) nextBday = new Date(now.getFullYear() + 1, month, day);
  const diff = Math.round((nextBday - today) / (1000 * 60 * 60 * 24));
  return diff === 0 ? '🎉 오늘 생일 (D-Day)' : `D-${diff}`;
}

function calcDebutDday(dateStr) {
  if (!dateStr) return '미등록';
  const parts = dateStr.split('-');
  if (parts.length < 3) return '';
  const debut = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.round((today - debut) / (1000 * 60 * 60 * 24));
  if (diff === 0) return '🎉 오늘 데뷔 (D-Day)';
  return diff > 0 ? `데뷔 D+${diff.toLocaleString()}일` : `데뷔까지 D${diff}`;
}

function checkMidnightMissionReset() {
  const todayStr = new Date().toDateString();
  let changed = false;
  state.missions.forEach(m => {
    if (m.completedDate && m.completedDate !== todayStr) {
      m.completedDate = null;
      changed = true;
    }
  });
  if (changed) saveState();
}

function formatTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
  const diffMs = midnight - now;
  const totalSec = Math.floor(diffMs / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function scrollToMissions() {
  if (currentTab !== 'home') switchTab('home');
  setTimeout(() => {
    const target = document.getElementById('homeMissionSection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('ring-4', 'ring-emerald-300');
      setTimeout(() => target.classList.remove('ring-4', 'ring-emerald-300'), 1200);
    }
  }, 100);
}

function switchTab(tabName) {
  currentTab = tabName;
  document.querySelectorAll('.tab-section').forEach(sec => sec.classList.add('hidden'));
  const target = document.getElementById(`tab-${tabName}`);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.tab-btn').forEach(btn => {
    const active = btn.dataset.tab === tabName;
    btn.className = active
      ? 'tab-btn py-1.5 rounded-lg transition bg-sky-500 text-white shadow-xs'
      : 'tab-btn py-1.5 rounded-lg transition bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700';
  });

  renderAll();
}

function updatePointDisplays() {
  const pText = `${state.points.toLocaleString()} P`;
  ['headerPoints', 'homePoints', 'rankingPointsDisplay'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = pText;
  });
}

function renderAll() {
  checkMidnightMissionReset();
  updatePointDisplays();
  renderHome();
  renderBiases();
  renderMissions();
  renderRankings();
  renderSchedules();
  renderDiaries();
  renderPlaylist();
  renderTest();
  renderAlbumStorage();
  renderDrawSection();
}

// ==================== 모바일 왼쪽 스와이프(슬라이딩) 탭 이동 ====================
const TAB_ORDER = ['home', 'bias', 'album', 'draw', 'schedule'];
let touchStartX = 0;
let touchStartY = 0;

const appContainer = document.getElementById('appContainer');
if (appContainer) {
  appContainer.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  appContainer.addEventListener('touchend', (e) => {
    if (!e.changedTouches || e.changedTouches.length !== 1) return;
    if (!document.getElementById('biasModal').classList.contains('hidden')) return;
    if (!document.getElementById('photoZoomModal').classList.contains('hidden')) return;
    if (e.target.closest('.overflow-x-auto') || e.target.closest('input, textarea, select')) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      const currentIndex = TAB_ORDER.indexOf(currentTab);
      if (currentIndex === -1) return;

      if (diffX < 0) {
        const nextIndex = (currentIndex + 1) % TAB_ORDER.length;
        switchTab(TAB_ORDER[nextIndex]);
      }
    }
  }, { passive: true });
}

function renderHome() {
  const mainBiasBox = document.getElementById('homeMainBias');
  if (state.biases.length === 0) {
    mainBiasBox.innerHTML = `<div class="text-xs opacity-90 py-2">등록된 최애가 없습니다. 최애 탭에서 추가해보세요!</div>`;
  } else {
    const b = state.biases[0];
    const avatar = b.photo
      ? `<img src="${b.photo}" onerror="this.src='./icon-192.png'" onclick="openPhotoZoomByBiasId('${b.id}')" class="w-12 h-12 rounded-2xl object-cover border-2 border-white/40 cursor-pointer hover:opacity-95 transition" />`
      : `<div onclick="openPhotoZoomByBiasId('${b.id}')" class="w-12 h-12 rounded-2xl bg-white/25 font-extrabold text-lg flex items-center justify-center cursor-pointer">${b.name.charAt(0)}</div>`;
    mainBiasBox.innerHTML = `
      <div class="flex items-center gap-3">
        ${avatar}
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="font-extrabold text-base truncate">${b.name}</span>
            ${b.group ? `<span class="text-[11px] bg-white/20 px-2 py-0.5 rounded-full">${b.group}</span>` : ''}
          </div>
          <div class="text-[11px] text-sky-100 mt-1 flex flex-wrap gap-x-3 gap-y-0.5">
            <span>🎂 생일 ${calcBirthdayDday(b.birthday)}</span>
            <span>✨ ${calcDebutDday(b.debutDate)}</span>
          </div>
        </div>
      </div>
    `;
  }

  const todayStr = new Date().toDateString();
  const completedCount = state.missions.filter(m => m.completedDate === todayStr).length;
  document.getElementById('homeMissionStatus').textContent = `${completedCount} / ${state.missions.length}`;

  const sorted = [...state.rankings].sort((a, b) => b.score - a.score).slice(0, 3);
  document.getElementById('homeTopRanking').innerHTML = sorted.map((r, i) => `
    <div class="flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-800/80 px-3 py-2 rounded-xl">
      <div class="flex items-center gap-2 font-bold">
        <span class="w-5 h-5 rounded-full ${i === 0 ? 'bg-amber-400 text-white' : 'bg-slate-200 dark:bg-slate-700'} text-[11px] flex items-center justify-center">${i + 1}</span>
        <span>${r.name}</span>
      </div>
      <span class="font-extrabold text-sky-500">${r.score.toLocaleString()}점</span>
    </div>
  `).join('');
  
  renderMissions();
}

function toggleMissionExpand() {
  isMissionExpanded = !isMissionExpanded;
  renderMissions();
}

function renderMissions() {
  const todayStr = new Date().toDateString();
  const box = document.getElementById('missionList');
  const toggleText = document.getElementById('missionToggleText');
  const toggleArrow = document.getElementById('missionToggleArrow');
  if (!box) return;

  const displayMissions = isMissionExpanded ? state.missions : state.missions.slice(0, 2);
  const hiddenCount = state.missions.length - 2;

  if (toggleText && toggleArrow) {
    if (isMissionExpanded) {
      toggleText.textContent = '퀘스트 접기';
      toggleArrow.style.transform = 'rotate(180deg)';
    } else {
      toggleText.textContent = `나머지 퀘스트 더보기 (${hiddenCount}개 더)`;
      toggleArrow.style.transform = 'rotate(0deg)';
    }
  }

  box.innerHTML = displayMissions.map(m => {
    const isDone = m.completedDate === todayStr;

    return `
      <div class="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/20 ${isDone ? 'opacity-75' : ''}">
        <div class="pr-2">
          <div class="text-xs font-bold text-white ${isDone ? 'line-through opacity-70' : ''}">${m.title}</div>
          <div class="text-[11px] mt-0.5 font-semibold ${isDone ? 'text-amber-200' : 'text-emerald-100'}">
            ${isDone ? '⏳ 오늘 완료함 (자정 리셋)' : `보상: +${m.reward} P`}
          </div>
        </div>
        <button onclick="completeMission('${m.id}')" ${isDone ? 'disabled' : ''}
          class="px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition ${isDone ? 'bg-white/20 text-white/50 cursor-not-allowed' : 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-xs active:scale-95'}">
          ${isDone ? '완료됨' : '퀘스트 완료'}
        </button>
      </div>
    `;
  }).join('');
}

function completeMission(id) {
  checkMidnightMissionReset();
  const todayStr = new Date().toDateString();
  const mission = state.missions.find(m => m.id === id);
  if (!mission || mission.completedDate === todayStr) return;

  mission.completedDate = todayStr;
  state.points += mission.reward;
  saveState();
  renderAll();
  showToast(`퀘스트 완료! +${mission.reward}P 획득 🎉`);
}

function openPhotoZoomByBiasId(biasId) {
  const bias = state.biases.find(b => b.id === biasId);
  if (!bias) return;
  const targetUrl = bias.photo || './icon-192.png';
  openPhotoZoom(targetUrl, `${bias.name}${bias.group ? ' (' + bias.group + ')' : ''}`, bias.nickname ? `애칭: ${bias.nickname}` : '');
}

function openPhotoZoomByAlbumId(albumId) {
  const item = state.userAlbum.find(p => p.id === albumId);
  if (!item) return;
  openPhotoZoom(item.url, item.title);
}

function openPhotoZoomByCardId(cardId) {
  const card = state.collectedCards.find(c => c.id === cardId);
  if (!card) return;
  openPhotoZoom(card.url, `${card.title} [${card.rarity}]`, card.biasName);
}

function openPhotoZoom(url, caption, subCaption = '') {
  if (!url) {
    showToast('표시할 사진이 없습니다!');
    return;
  }
  const modal = document.getElementById('photoZoomModal');
  const img = document.getElementById('zoomedImg');
  const cap = document.getElementById('zoomedCaption');
  const subCap = document.getElementById('zoomedSubCaption');

  img.src = url;
  cap.textContent = caption || '사진 크게 보기';
  subCap.textContent = subCaption;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePhotoZoom() {
  const modal = document.getElementById('photoZoomModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function addPhotoToAlbum() {
  const titleInput = document.getElementById('albumTitleInput');
  const fileInput = document.getElementById('albumFileInput');
  const title = titleInput.value.trim() || '나의 소중한 최애 사진';

  if (!fileInput.files || fileInput.files.length === 0) {
    showToast('저장할 사진 파일을 선택해주세요!');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const imageUrl = e.target.result;
    state.userAlbum.unshift({
      id: 'img_' + Date.now(),
      title,
      url: imageUrl
    });

    titleInput.value = '';
    fileInput.value = '';
    saveState();
    renderAlbumStorage();
    showToast('앨범에 사진이 저장되었습니다! 📁');
  };
  reader.readAsDataURL(file);
}

function deleteAlbumPhoto(id) {
  state.userAlbum = state.userAlbum.filter(p => p.id !== id);
  saveState();
  renderAlbumStorage();
  showToast('앨범에서 사진이 삭제되었습니다.');
}

function renderAlbumStorage() {
  const countEl = document.getElementById('albumCount');
  if (countEl) countEl.textContent = state.userAlbum.length;

  const grid = document.getElementById('albumPhotosGrid');
  if (grid) {
    if (state.userAlbum.length === 0) {
      grid.innerHTML = `<div class="col-span-2 text-center py-6 text-xs text-indigo-200">저장된 사진이 없습니다. 위에서 사진을 추가해보세요!</div>`;
    } else {
      grid.innerHTML = state.userAlbum.map(p => `
        <div class="relative group bg-black/30 rounded-xl overflow-hidden border border-white/25 flex flex-col h-32 shadow-xs">
          <div class="h-24 w-full relative">
            <img src="${p.url}" onclick="openPhotoZoomByAlbumId('${p.id}')" class="w-full h-full object-cover cursor-pointer hover:scale-105 transition" />
            <button onclick="deleteAlbumPhoto('${p.id}')" class="absolute top-1 right-1 bg-black/60 hover:bg-rose-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center transition">✕</button>
          </div>
          <div class="p-1.5 flex-1 flex items-center justify-center bg-black/40">
            <span class="text-[10px] font-bold text-white truncate px-1">${p.title}</span>
          </div>
        </div>
      `).join('');
    }
  }
}

const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;
function cleanOldDraws() {
  const now = Date.now();
  state.drawTimestamps = state.drawTimestamps.filter(ts => (now - ts) < TWENTY_FOUR_HOURS_MS);
}

function renderDrawSection() {
  cleanOldDraws();
  const used = state.drawTimestamps.length;
  const remain = Math.max(0, 3 - used);

  const badge = document.getElementById('drawRemainingBadge');
  if (badge) badge.textContent = `남은 횟수: ${remain}/3`;

  const btn = document.getElementById('drawCardBtn');
  const timerEl = document.getElementById('drawResetTimer');
  if (btn) {
    if (remain === 0) {
      btn.disabled = true;
      btn.classList.add('opacity-50', 'cursor-not-allowed');
      const oldest = Math.min(...state.drawTimestamps);
      const leftMs = TWENTY_FOUR_HOURS_MS - (Date.now() - oldest);
      const h = String(Math.floor(leftMs / 3600000)).padStart(2, '0');
      const m = String(Math.floor((leftMs % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((leftMs % 60000) / 1000)).padStart(2, '0');
      if (timerEl) timerEl.textContent = `다음 뽑기 가능까지 ${h}:${m}:${s} 남음`;
    } else {
      btn.disabled = false;
      btn.classList.remove('opacity-50', 'cursor-not-allowed');
      if (timerEl) timerEl.textContent = '';
    }
  }

  const countEl = document.getElementById('collectedCount');
  if (countEl) countEl.textContent = state.collectedCards.length;

  const strip = document.getElementById('photoCollection');
  if (strip) {
    if (state.collectedCards.length === 0) {
      strip.innerHTML = `<div class="text-[11px] text-purple-200 py-2">아직 뽑은 포토카드가 없습니다. 뽑기 버튼을 눌러보세요!</div>`;
    } else {
      strip.innerHTML = state.collectedCards.map(c => `
        <div class="shrink-0 w-28 bg-black/40 rounded-xl overflow-hidden border border-white/25 flex flex-col h-28 shadow-xs">
          <div class="h-16 w-full relative">
            <img src="${c.url}" onclick="openPhotoZoomByCardId('${c.id}')" class="w-full h-full object-cover cursor-pointer" />
            <span class="absolute top-1 left-1 text-[8px] font-extrabold bg-black/60 text-white px-1.5 py-0.5 rounded">${c.rarity}</span>
          </div>
          <div class="p-1.5 flex-1 flex flex-col justify-center">
            <div class="text-[10px] font-extrabold text-white truncate">${c.title}</div>
            <div class="text-[8px] text-purple-200 truncate">${c.biasName}</div>
          </div>
        </div>
      `).join('');
    }
  }
}

function drawCustomPhotoCard() {
  cleanOldDraws();
  if (state.userAlbum.length === 0) {
    showToast('먼저 [📁 앨범] 카테고리에 사진을 저장해주세요!');
    return;
  }
  if (state.drawTimestamps.length >= 3) {
    showToast('오늘의 랜덤 뽑기 횟수(3회)를 모두 사용했습니다!');
    return;
  }

  const randomPhoto = state.userAlbum[Math.floor(Math.random() * state.userAlbum.length)];
  const rarities = ['R 🩵', 'SR 🌟', 'SSR ✨'];
  const rarity = rarities[Math.floor(Math.random() * rarities.length)];
  const biasName = state.biases[0]?.name || 'DUCKZ';

  state.drawTimestamps.push(Date.now());
  state.collectedCards.unshift({
    id: 'card_' + Date.now(),
    title: randomPhoto.title,
    url: randomPhoto.url,
    rarity,
    biasName
  });
  state.points += 5;

  saveState();
  renderAll();
  showToast(`[${rarity}] ${randomPhoto.title} 포카 뽑기 성공! (+5P) ✨`);
}

function renderBiases() {
  const list = document.getElementById('biasList');
  if (!list) return;
  if (state.biases.length === 0) {
    list.innerHTML = `<div class="text-center py-10 text-xs text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-2xl">상단 '+ 최애 등록' 버튼을 눌러 첫 최애를 등록해보세요!</div>`;
    return;
  }

  list.innerHTML = state.biases.map((b, idx) => {
    const photoSrc = b.photo || './icon-192.png';
    const avatarHtml = `<img src="${photoSrc}" onerror="this.outerHTML=\`${getInitialAvatar(b.name, 'w-14 h-14 text-lg').replace(/"/g, '&quot;')}\`" class="w-14 h-14 rounded-2xl object-cover shrink-0 shadow-xs ring-2 ring-sky-400/40" />`;

    return `
      <div onclick="openPhotoZoomByBiasId('${b.id}')" class="bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 hover:border-sky-400/80 rounded-2xl p-4 shadow-xs cursor-pointer transition">
        <div class="flex items-start justify-between gap-2">
          <div class="flex items-center gap-3 min-w-0">
            ${avatarHtml}
            <div class="min-w-0">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-extrabold text-sm truncate">${b.name}</span>
                ${b.group ? `<span class="text-[11px] font-semibold bg-sky-100 dark:bg-sky-900/70 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-full">${b.group}</span>` : ''}
                ${idx === 0 ? `<span class="text-[10px] font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 px-1.5 py-0.5 rounded">대표최애</span>` : ''}
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                ${b.nickname ? `애칭: ${b.nickname} · ` : ''}<span class="text-sky-500 font-medium">터치 시 사진 보기</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1 shrink-0" onclick="event.stopPropagation()">
            <button onclick="openEditBiasModal('${b.id}')" class="text-[11px] font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/70 hover:bg-sky-100 px-2 py-1 rounded-lg transition">수정</button>
            <button onclick="deleteBias('${b.id}')" class="text-[11px] font-bold text-slate-400 hover:text-rose-500 px-1.5 py-1 rounded-lg transition">삭제</button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/70">
          <div class="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-2.5">
            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">🎂 생일</div>
            <div class="text-xs font-bold mt-0.5">${b.birthday || '미입력'}</div>
            <div class="text-[10px] font-bold text-pink-500 dark:text-pink-400 mt-0.5">${calcBirthdayDday(b.birthday)}</div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-2.5">
            <div class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">✨ 데뷔일</div>
            <div class="text-xs font-bold mt-0.5">${b.debutDate || '미입력'}</div>
            <div class="text-[10px] font-bold text-sky-500 dark:text-sky-400 mt-0.5">${calcDebutDday(b.debutDate)}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openBiasModal() {
  document.getElementById('biasModalTitle').textContent = '💖 최애 프로필 등록';
  document.getElementById('editBiasId').value = '';
  ['biasNameInput', 'biasGroupInput', 'biasNickInput', 'biasBirthInput', 'biasDebutInput', 'biasFileInput'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('biasModal').classList.remove('hidden');
  document.getElementById('biasModal').classList.add('flex');
}

function openEditBiasModal(id) {
  const bias = state.biases.find(b => b.id === id);
  if (!bias) return;

  document.getElementById('biasModalTitle').textContent = '✏️ 최애 프로필 수정';
  document.getElementById('editBiasId').value = bias.id;
  document.getElementById('biasNameInput').value = bias.name || '';
  document.getElementById('biasGroupInput').value = bias.group || '';
  document.getElementById('biasNickInput').value = bias.nickname || '';
  document.getElementById('biasBirthInput').value = bias.birthday || '';
  document.getElementById('biasDebutInput').value = bias.debutDate || '';
  document.getElementById('biasFileInput').value = '';

  document.getElementById('biasModal').classList.remove('hidden');
  document.getElementById('biasModal').classList.add('flex');
}

function closeBiasModal() {
  document.getElementById('biasModal').classList.add('hidden');
  document.getElementById('biasModal').classList.remove('flex');
}

function saveBias() {
  const editId = document.getElementById('editBiasId').value;
  const name = document.getElementById('biasNameInput').value.trim();
  const group = document.getElementById('biasGroupInput').value.trim();
  if (!name) {
    showToast('최애 이름을 입력해주세요!');
    return;
  }

  const fileInput = document.getElementById('biasFileInput');
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      finishSavingBias(editId, name, group, e.target.result);
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    finishSavingBias(editId, name, group, null);
  }
}

function finishSavingBias(editId, name, group, newPhotoUrl) {
  const nickname = document.getElementById('biasNickInput').value.trim();
  const birthday = document.getElementById('biasBirthInput').value;
  const debutDate = document.getElementById('biasDebutInput').value;

  if (editId) {
    const idx = state.biases.findIndex(b => b.id === editId);
    if (idx !== -1) {
      const oldBias = state.biases[idx];
      const oldFullName = oldBias.group ? `${oldBias.name} (${oldBias.group})` : oldBias.name;
      const newFullName = group ? `${name} (${group})` : name;

      state.biases[idx] = {
        ...oldBias,
        name,
        group,
        nickname,
        birthday,
        debutDate,
        photo: newPhotoUrl !== null ? newPhotoUrl : oldBias.photo
      };

      const rankItem = state.rankings.find(r => r.name === oldFullName);
      if (rankItem) {
        rankItem.name = newFullName;
      }
    }
    showToast(`${name} 프로필이 수정되었습니다! ✏️`);
  } else {
    state.biases.push({
      id: 'b_' + Date.now(),
      name,
      group,
      nickname,
      birthday,
      debutDate,
      photo: newPhotoUrl || './icon-192.png'
    });

    const fullName = group ? `${name} (${group})` : name;
    state.rankings.unshift({
      id: 'r_bias_' + Date.now(),
      name: fullName,
      score: 50
    });
    showToast(`${name} 프로필 등록 및 랭킹 자동 연동 완료! 💖`);
  }

  ['biasNameInput', 'biasGroupInput', 'biasNickInput', 'biasBirthInput', 'biasDebutInput', 'biasFileInput'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('editBiasId').value = '';

  saveState();
  closeBiasModal();
  renderAll();
}

function deleteBias(id) {
  state.biases = state.biases.filter(b => b.id !== id);
  saveState();
  renderAll();
  showToast('최애 프로필이 삭제되었습니다.');
}

function renderRankings() {
  const sorted = [...state.rankings].sort((a, b) => b.score - a.score);
  const box = document.getElementById('rankingList');
  if (!box) return;

  box.innerHTML = sorted.map((item, idx) => `
    <div class="flex items-center justify-between bg-white dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700 rounded-2xl p-3.5">
      <div class="flex items-center gap-3">
        <span class="w-7 h-7 rounded-xl font-extrabold text-xs flex items-center justify-center ${idx === 0 ? 'bg-amber-400 text-white' : idx === 1 ? 'bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-white' : idx === 2 ? 'bg-amber-700/80 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}">
          ${idx + 1}
        </span>
        <div>
          <div class="text-xs font-extrabold">${item.name}</div>
          <div class="text-[11px] font-bold text-sky-500 mt-0.5">${item.score.toLocaleString()} 응원점수</div>
        </div>
      </div>
      <button onclick="cheerCandidate('${item.id}')"
        class="bg-sky-500 hover:bg-sky-600 active:scale-95 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs transition">
        응원 (-10P)
      </button>
    </div>
  `).join('');
}

function addRankingCandidate() {
  const input = document.getElementById('newRankName');
  const name = input.value.trim();
  if (!name) {
    showToast('후보 이름을 입력해주세요!');
    return;
  }
  state.rankings.push({ id: 'r_' + Date.now(), name, score: 0 });
  input.value = '';
  saveState();
  renderAll();
  showToast(`${name} 후보가 랭킹에 등록되었습니다!`);
}

function cheerCandidate(id) {
  if (state.points < 10) {
    showToast('포인트가 부족합니다! 일일 퀘스트를 완료해 포인트를 모아보세요.');
    return;
  }
  const target = state.rankings.find(r => r.id === id);
  if (!target) return;

  state.points -= 10;
  target.score += 10;
  saveState();
  renderAll();
  showToast(`${target.name} 응원 완료! (-10P 차감) 💙`);
}

function addSchedule() {
  const title = document.getElementById('schedTitle').value.trim();
  const date = document.getElementById('schedDate').value;
  if (!title || !date) {
    showToast('일정 제목과 날짜를 모두 입력해주세요!');
    return;
  }
  state.schedules.push({ id: 's_' + Date.now(), title, date });
  state.schedules.sort((a, b) => a.date.localeCompare(b.date));
  document.getElementById('schedTitle').value = '';
  saveState();
  renderAll();
  showToast('일정이 추가되었습니다!');
}

function renderSchedules() {
  const box = document.getElementById('scheduleList');
  if (!box) return;
  if (state.schedules.length === 0) {
    box.innerHTML = `<div class="text-center py-4 text-xs text-slate-400">등록된 일정이 없습니다.</div>`;
    return;
  }
  box.innerHTML = state.schedules.map(s => `
    <div class="flex items-center justify-between bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-3 rounded-xl text-xs">
      <div>
        <div class="font-bold">${s.title}</div>
        <div class="text-[11px] text-sky-500 font-semibold mt-0.5">${s.date}</div>
      </div>
      <button onclick="deleteSchedule('${s.id}')" class="text-slate-400 hover:text-rose-500">삭제</button>
    </div>
  `).join('');
}

function deleteSchedule(id) {
  state.schedules = state.schedules.filter(s => s.id !== id);
  saveState();
  renderAll();
}

function addDiary() {
  const title = document.getElementById('diaryTitle').value.trim();
  const content = document.getElementById('diaryContent').value.trim();
  if (!title || !content) {
    showToast('제목과 내용을 입력해주세요!');
    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  state.diaries.unshift({ id: 'd_' + Date.now(), title, content, date: today });
  document.getElementById('diaryTitle').value = '';
  document.getElementById('diaryContent').value = '';
  saveState();
  renderAll();
  showToast('덕질 일기가 저장되었습니다! ✍️');
}

function renderDiaries() {
  const box = document.getElementById('diaryList');
  if (!box) return;
  if (state.diaries.length === 0) {
    box.innerHTML = `<div class="text-center py-4 text-xs text-slate-400">첫 번째 덕질 일기를 기록해보세요!</div>`;
    return;
  }
  box.innerHTML = state.diaries.map(d => `
    <div class="bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 p-3.5 rounded-2xl space-y-1">
      <div class="flex justify-between items-center">
        <span class="text-xs font-extrabold">${d.title}</span>
        <span class="text-[10px] text-slate-400">${d.date}</span>
      </div>
      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">${d.content}</p>
    </div>
  `).join('');
}

function renderTest() {
  const container = document.getElementById('testContainer');
  const badge = document.getElementById('testProgressBadge');
  if (!container) return;

  if (testStep >= TEST_QUESTIONS.length) {
    if (badge) badge.textContent = '결과 완료';
    const sortedTypes = Object.entries(testScores).sort((a, b) => b[1] - a[1]);
    const top1 = sortedTypes[0][0];
    const top2 = sortedTypes[1][0];
    const res = TEST_RESULTS[`${top1}_${top2}`] || TEST_RESULTS[`${top2}_${top1}`] || TEST_RESULTS.default;

    container.innerHTML = `
      <div class="bg-white dark:bg-slate-900 border border-sky-200 dark:border-slate-700 rounded-2xl p-4 space-y-3 animate-pop">
        <div class="text-[11px] font-bold text-sky-500">당신의 심층 덕질 유형은?</div>
        <div class="text-base font-extrabold leading-snug">${res.title}</div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${res.desc}</p>
        <button onclick="resetTest()" class="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold rounded-xl transition">
          🔄 테스트 다시 하기
        </button>
      </div>
    `;
    return;
  }

  if (badge) badge.textContent = `${testStep + 1} / ${TEST_QUESTIONS.length}`;
  const currentQ = TEST_QUESTIONS[testStep];
  container.innerHTML = `
    <div class="space-y-2.5 animate-pop">
      <div class="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
        <div class="bg-sky-500 h-full transition-all duration-300" style="width: ${((testStep + 1) / TEST_QUESTIONS.length) * 100}%"></div>
      </div>
      <p class="text-xs font-extrabold pt-1">${currentQ.q}</p>
      <div class="space-y-2">
        ${currentQ.options.map(opt => `
          <button onclick="answerTest('${opt.type}')"
            class="w-full text-left p-3 bg-white dark:bg-slate-900 hover:bg-sky-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-sky-400 rounded-xl text-xs font-semibold transition">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function answerTest(type) {
  testScores[type] = (testScores[type] || 0) + 1;
  testStep++;
  renderTest();
}

function resetTest() {
  testStep = 0;
  testScores = { streamer: 0, collector: 0, analyst: 0, offline: 0, preacher: 0 };
  renderTest();
}

function togglePlaylistForm() {
  document.getElementById('playlistForm').classList.toggle('hidden');
}

function extractYoutubeId(url) {
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

async function addYoutubeAuto() {
  const input = document.getElementById('ytUrlInput');
  const btn = document.getElementById('ytAddBtn');
  const url = input.value.trim();

  if (!url) {
    showToast('유튜브 링크를 붙여넣어 주세요!');
    return;
  }

  const videoId = extractYoutubeId(url);
  if (!videoId) {
    showToast('올바른 유튜브 영상 주소가 아닙니다!');
    return;
  }

  btn.disabled = true;
  btn.textContent = '연동 중...';

  let autoTitle = `유튜브 영상 (${videoId})`;
  try {
    const res = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
    const data = await res.json();
    if (data && data.title) autoTitle = data.title;
  } catch (e) {}

  state.playlist.unshift({ id: 'p_' + Date.now(), videoId, title: autoTitle });
  input.value = '';
  btn.disabled = false;
  btn.textContent = '자동 추가';
  togglePlaylistForm();
  saveState();
  renderPlaylist();
  showToast(`'${autoTitle}' 자동 추가 완료! ▶️`);
}

function playYoutubeInApp(videoId, title) {
  const wrapper = document.getElementById('ytPlayerWrapper');
  const iframe = document.getElementById('ytIframe');
  const titleEl = document.getElementById('ytNowPlayingTitle');
  if (!wrapper || !iframe) return;

  titleEl.textContent = `🎵 ${title}`;
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  wrapper.classList.remove('hidden');
}

function closeYtPlayer() {
  const wrapper = document.getElementById('ytPlayerWrapper');
  const iframe = document.getElementById('ytIframe');
  if (iframe) iframe.src = '';
  if (wrapper) wrapper.classList.add('hidden');
}

function removePlaylistSong(e, id) {
  e.stopPropagation();
  state.playlist = state.playlist.filter(p => p.id !== id);
  saveState();
  renderPlaylist();
}

function renderPlaylist() {
  const box = document.getElementById('playlistItems');
  if (!box) return;
  if (state.playlist.length === 0) {
    box.innerHTML = `<div class="text-[11px] text-slate-400 py-1">우측 '+ 유튜브 링크 추가'를 눌러 곡을 등록해보세요!</div>`;
    return;
  }
  box.innerHTML = state.playlist.map(p => `
    <div onclick="playYoutubeInApp('${p.videoId}', '${p.title.replace(/'/g, "\\'")}')"
      class="shrink-0 max-w-[200px] cursor-pointer bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 transition">
      <span class="text-rose-500">▶</span>
      <span class="truncate">${p.title}</span>
      <button onclick="removePlaylistSong(event, '${p.id}')" class="text-slate-400 hover:text-rose-500 ml-1">✕</button>
    </div>
  `).join('');
}

setInterval(() => {
  checkMidnightMissionReset();
  if (currentTab === 'home') renderMissions();
  if (currentTab === 'draw') renderDrawSection();

  const homeCd = document.getElementById('homeMissionCountdown');
  if (homeCd) {
    homeCd.textContent = `자정(00:00)까지 ${formatTimeUntilMidnight()}`;
  }
}, 1000);

document.getElementById('themeSelect').value = state.theme;
applyTheme(state.theme);
switchTab('home');
