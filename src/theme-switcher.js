// CSSテーマ切り替え機能
document.addEventListener('DOMContentLoaded', () => {
  const themeSelector = document.getElementById('theme-selector');
  const styleLink = document.getElementById('theme-style');

  // ローカルストレージから保存されたテーマを読み込む
  const savedTheme = localStorage.getItem('selectedTheme') || 'css/styles.css';
  styleLink.href = savedTheme;
  themeSelector.value = savedTheme;

  // テーマ変更イベント
  themeSelector.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    styleLink.href = selectedTheme;
    localStorage.setItem('selectedTheme', selectedTheme);
  });
});
