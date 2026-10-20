// 최고 점수 저장/불러오기 (localStorage, 실패해도 게임은 동작)
const Score = {
  get(key) {
    try { return Number(localStorage.getItem('arcade:' + key)) || 0; }
    catch (e) { return 0; }
  },
  set(key, value) {
    try { localStorage.setItem('arcade:' + key, String(value)); } catch (e) {}
  },
  // 높을수록 좋은 점수
  submitHigh(key, value) {
    if (value > this.get(key)) { this.set(key, value); return true; }
    return false;
  },
  // 낮을수록 좋은 점수 (예: 시도 횟수)
  submitLow(key, value) {
    const cur = this.get(key);
    if (!cur || value < cur) { this.set(key, value); return true; }
    return false;
  }
};
