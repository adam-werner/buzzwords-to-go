import { buzzwords } from './buzzwords.js';

// Pick `n` unique random items from `arr` (up to arr.length)
function pickRandomItems(arr, n = 3) {
  const result = [];
  const used = new Set();
  const limit = Math.min(n, arr.length);
  while (result.length < limit) {
    const i = Math.floor(Math.random() * arr.length);
    if (!used.has(i)) {
      used.add(i);
      result.push(arr[i]);
    }
  }
  return result;
}

// Render picks into elements with class `buzzword`
function renderThree(arr) {
  const items = Array.from(document.querySelectorAll('.buzzword'));
  const picks = pickRandomItems(arr, items.length || 3);
  items.forEach((el, idx) => {
    el.textContent = picks[idx] || '';
  });
}

function attachContainerRefresh() {
  const container = document.getElementById('buzzwords') || document.querySelector('.buzz-container');
  if (!container) return;

  // Refresh on any click/tap within the box (including buzzwords).
  container.addEventListener('click', (e) => {
    renderThree(buzzwords);
  });
}

function startShakeDetection(onShake) {
  if (typeof window === 'undefined') return;
  if (typeof window.DeviceMotionEvent === 'undefined') return;
  if (typeof onShake !== 'function') return;

  const G = 9.81;
  // Lower threshold = more sensitive (smaller shakes trigger).
  // We also require multiple quick "hits" to avoid accidental triggers.
  const thresholdG = 2.2;
  const hitsRequired = 2;
  const hitWindowMs = 700;
  const cooldownMs = 1200;
  let lastShakeAt = 0;
  let hitCount = 0;
  let firstHitAt = 0;

  const handler = (event) => {
    const a = event.accelerationIncludingGravity || event.acceleration;
    if (!a) return;

    const x = typeof a.x === 'number' ? a.x : 0;
    const y = typeof a.y === 'number' ? a.y : 0;
    const z = typeof a.z === 'number' ? a.z : 0;

    const gForce = Math.sqrt(x * x + y * y + z * z) / G;
    const now = Date.now();
    if ((now - lastShakeAt) < cooldownMs) return;

    if (gForce >= thresholdG) {
      if (hitCount === 0) firstHitAt = now;
      if ((now - firstHitAt) > hitWindowMs) {
        hitCount = 0;
        firstHitAt = now;
      }
      hitCount += 1;

      if (hitCount >= hitsRequired) {
        hitCount = 0;
        lastShakeAt = now;
        onShake();
      }
    }
  };

  const enable = () => {
    window.addEventListener('devicemotion', handler, { passive: true });
  };

  // iOS requires a permission prompt, which must be triggered by user gesture.
  if (typeof window.DeviceMotionEvent.requestPermission === 'function') {
    const requestOnce = async () => {
      try {
        const result = await window.DeviceMotionEvent.requestPermission();
        if (result === 'granted') enable();
      } catch {
        // ignore
      }
    };
    document.addEventListener('click', requestOnce, { once: true });
    document.addEventListener('touchstart', requestOnce, { once: true, passive: true });
  } else {
    enable();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderThree(buzzwords);
  attachContainerRefresh();

  // Shake-to-refresh on supported devices
  startShakeDetection(() => renderThree(buzzwords));
});

// Expose render function for manual refresh/testing
window.renderBuzzwords = () => {
  renderThree(buzzwords);
};

