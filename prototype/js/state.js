/* ==========================================================================
   SPADA UNS Mobile — State Persistence (localStorage) & Reset Engine
   ========================================================================== */

(function () {
  const STORAGE_KEY = "spada_uns_mobile_proto_v4";

  function createInitialState() {
    const initialTaskReceipts = {};
    window.SPADA_DATA.tasks.forEach((t) => {
      if (t.defaultSubmitted && t.defaultReceipt) {
        initialTaskReceipts[t.id] = { ...t.defaultReceipt };
      }
    });

    return {
      loggedIn: false,
      // Hanya Interaksi Manusia & Komputer (Kelas A) yang sudah di-enroll di awal
      enrolledCourseIds: ["imk-a"],
      openedMaterialIds: ["imk-m1-ppt", "imk-m1-pdf"],
      taskReceipts: initialTaskReceipts,
      quiz: {
        started: false,
        submitted: false,
        currentIndex: 0,
        remainingSeconds: window.SPADA_DATA.quiz.durationSeconds,
        answers: {},
        submittedAt: null,
        durationUsedText: null
      },
      settings: {
        deadlineReminder: true
      },
      telemetry: {
        t1Done: false,
        t2Done: false,
        t3ErrorSeen: false,
        t3Done: false,
        t4DrawerUsed: false,
        t4Done: false,
        enrolDone: false,
        searchMaterialDone: false
      }
    };
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createInitialState();
      const parsed = JSON.parse(raw);
      const base = createInitialState();
      return {
        ...base,
        ...parsed,
        quiz: { ...base.quiz, ...(parsed.quiz || {}) },
        settings: { ...base.settings, ...(parsed.settings || {}) },
        telemetry: { ...base.telemetry, ...(parsed.telemetry || {}) }
      };
    } catch (err) {
      return createInitialState();
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      // Ignore storage errors
    }
  }

  function resetState() {
    const fresh = createInitialState();
    saveState(fresh);
    return fresh;
  }

  function formatNowWIB() {
    const months = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const now = new Date();
    const d = now.getDate();
    const m = months[now.getMonth()];
    const y = now.getFullYear();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    return `${d} ${m} ${y} · ${hh}:${mm} WIB`;
  }

  function formatTimer(seconds) {
    const safe = Math.max(0, Math.floor(seconds));
    const mm = String(Math.floor(safe / 60)).padStart(2, "0");
    const ss = String(safe % 60).padStart(2, "0");
    return `${mm}:${ss}`;
  }

  function formatDurationWords(secondsUsed) {
    const safe = Math.max(1, Math.floor(secondsUsed));
    const mm = String(Math.floor(safe / 60)).padStart(2, "0");
    const ss = String(safe % 60).padStart(2, "0");
    return `${mm} menit ${ss} detik`;
  }

  window.SPADA_STATE = {
    createInitialState,
    loadState,
    saveState,
    resetState,
    formatNowWIB,
    formatTimer,
    formatDurationWords
  };
})();
