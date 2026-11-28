/* ==========================================================================
   SPADA UNS Mobile — Interactive SPA Prototype Engine (Final Polish HTML)
   ========================================================================== */

(function () {
  const DATA = window.SPADA_DATA;
  const ST = window.SPADA_STATE;

  let state = ST.loadState();

  // Router & overlay state
  let route = {
    name: state.loggedIn ? "beranda" : "login",
    params: {}
  };
  let historyStack = [];
  let activeOverlay = null;
  let toastTimer = null;

  // S04 Cari kelas di UNS — Default filter TIDAK AKTIF
  let catalogQuery = "";
  let catalogFilterState = {
    applied: false,
    faculty: null,
    prodi: null,
    semester: null
  };
  let draftFilterState = {
    faculty: null,
    prodi: null,
    semester: null
  };

  // S05 Cari Materi — Filter mata kuliah + jenis berkas
  let openMatQuery = "";
  let openMatCourseFilter = "Semua";
  let openMatFilter = "Semua";

  // S06 Tugas — Filter Mata Kuliah + Status (Semua / Belum / Terkirim / Dinilai)
  let taskCourseFilter = "Semua";
  let taskTabFilter = "Semua";

  // S07 Detail Kelas
  let courseDetailTab = "materi";
  let expandedMeetings = { m3: true };

  // S08 & S09
  let currentSlideIdx = 0;
  let videoState = { playing: false, currentSec: 250, timerId: null };

  // S10 Upload Flow (real file picker, no dummy shortcuts)
  let uploadFlow = {
    taskId: null,
    stage: "idle",
    errorMessage: "",
    rejectedFileName: "",
    selectedFile: null,
    progress: 0,
    intervalId: null
  };

  let quizIntervalId = null;

  // Official Microsoft Fluent SVG Paths
  const FLUENT = {
    arrowLeft: {
      vb: "0 0 20 20",
      d: "M9.15898 16.8666C9.36292 17.0528 9.67918 17.0384 9.86536 16.8345C10.0515 16.6305 10.0371 16.3143 9.8332 16.1281L3.66535 10.4974H17.4961C17.7722 10.4974 17.9961 10.2735 17.9961 9.99736C17.9961 9.72122 17.7722 9.49736 17.4961 9.49736H3.66824L9.8332 3.86927C10.0371 3.68309 10.0515 3.36684 9.86536 3.16289C9.67918 2.95895 9.36292 2.94456 9.15898 3.13074L2.24263 9.44478C2.10268 9.57254 2.02285 9.74008 2.00314 9.91323C1.99851 9.94058 1.99609 9.96869 1.99609 9.99736C1.99609 10.0242 1.99821 10.0506 2.00229 10.0763C2.02047 10.2522 2.10058 10.4229 2.24263 10.5526L9.15898 16.8666Z"
    },
    search: {
      vb: "0 0 20 20",
      d: "M13.7291 14.4362C12.5924 15.411 11.115 16 9.5 16C5.91015 16 3 13.0899 3 9.5C3 5.91015 5.91015 3 9.5 3C13.0899 3 16 5.91015 16 9.5C16 11.115 15.411 12.5924 14.4361 13.7292L17.8535 17.1465C18.0487 17.3417 18.0487 17.6583 17.8535 17.8536C17.6799 18.0271 17.4105 18.0464 17.2156 17.9114L17.1464 17.8536L13.7291 14.4362ZM13.0196 13.7266C13.276 13.5128 13.5127 13.2761 13.7265 13.0197C14.5216 12.0659 15 10.8388 15 9.5C15 6.46243 12.5376 4 9.5 4C6.46243 4 4 6.46243 4 9.5C4 12.5376 6.46243 15 9.5 15C10.8388 15 12.0658 14.5217 13.0196 13.7266Z"
    },
    searchFilled: {
      vb: "0 0 24 24",
      d: "M10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C11.7115 17.5 13.2892 16.9267 14.5515 15.9617L19.7929 21.2071C20.1834 21.5976 20.8166 21.5976 21.2071 21.2071C21.5976 20.8166 21.5976 20.1834 21.2071 19.7929L15.9617 14.5515C16.9267 13.2892 17.5 11.7115 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10Z"
    },
    homeRegular: {
      vb: "0 0 24 24",
      d: "M10.55 2.53374C11.3967 1.82209 12.6033 1.82209 13.45 2.53374L20.1999 8.20874C20.7073 8.63532 21 9.26433 21 9.92746V19.25C21 20.4926 19.9926 21.5 18.75 21.5H15.25C14.0074 21.5 13 20.4926 13 19.25V14.75C13 14.3358 12.6642 14 12.25 14H11.75C11.3358 14 11 14.3358 11 14.75V19.25C11 20.4926 9.99264 21.5 8.75 21.5H5.25C4.00736 21.5 3 20.4926 3 19.25V9.92746C3 9.26433 3.29273 8.63532 3.80005 8.20874L10.55 2.53374ZM12.485 3.68191C12.2028 3.44469 11.7972 3.44469 11.515 3.68191L4.76502 9.35691C4.59591 9.4991 4.5 9.70878 4.5 9.92746V19.25C4.5 19.6642 4.83579 20 5.25 20H8.75C9.16421 20 9.5 19.6642 9.5 19.25V14.75C9.5 13.5074 10.5074 12.5 11.75 12.5H12.25C13.4926 12.5 14.5 13.5074 14.5 14.75V19.25C14.5 19.6642 14.8358 20 15.25 20H18.75C19.1642 20 19.5 19.6642 19.5 19.25V9.92746C19.5 9.70878 19.4041 9.4991 19.235 9.35691L12.485 3.68191Z"
    },
    homeFilled: {
      vb: "0 0 24 24",
      d: "M10.55 2.53374C11.3967 1.82209 12.6033 1.82209 13.45 2.53374L20.1999 8.20874C20.7073 8.63532 21 9.26433 21 9.92746V19.25C21 20.4926 19.9926 21.5 18.75 21.5H15.25C14.0074 21.5 13 20.4926 13 19.25V14.75C13 14.3358 12.6642 14 12.25 14H11.75C11.3358 14 11 14.3358 11 14.75V19.25C11 20.4926 9.99264 21.5 8.75 21.5H5.25C4.00736 21.5 3 20.4926 3 19.25V9.92746C3 9.26433 3.29273 8.63532 3.80005 8.20874L10.55 2.53374Z"
    },
    bookRegular: {
      vb: "0 0 24 24",
      d: "M3.25 4C2.55964 4 2 4.55964 2 5.25V17.75C2 18.4404 2.55964 19 3.25 19H9.5C10.5435 19 11.4549 19.5661 11.943 20.4084C12.0114 20.5265 12.1381 20.5 12.1381 20.5C12.6288 19.6079 13.5499 19 14.6143 19H20.75C21.4404 19 22 18.4404 22 17.75V5.25C22 4.55964 21.4404 4 20.75 4H14.5C13.4892 4 12.5968 4.50463 12 5.27574C11.4032 4.50463 10.5108 4 9.5 4H3.25ZM11.25 6.75V17.717C10.7131 17.5754 10.119 17.5 9.5 17.5H3.5V5.5H9.5C10.4665 5.5 11.25 6.2835 11.25 7.25V6.75ZM12.75 7.25C12.75 6.2835 13.5335 5.5 14.5 5.5H20.5V17.5H14.5C13.881 17.5 13.2869 17.5754 12.75 17.717V7.25Z"
    },
    bookFilled: {
      vb: "0 0 24 24",
      d: "M12 5.25C11.4032 4.47889 10.5108 4 9.5 4H3.25C2.55964 4 2 4.55964 2 5.25V17.75C2 18.4404 2.55964 19 3.25 19H9.5C10.2202 19 10.8736 19.2951 11.3452 19.7722C11.4342 19.8622 11.5 19.8004 11.5 19.674V6.75C11.5 6.19772 11.7239 5.69772 12 5.25ZM12.5 19.674C12.5 19.8004 12.5658 19.8622 12.6548 19.7722C13.1264 19.2951 13.7798 19 14.5 19H20.75C21.4404 19 22 18.4404 22 17.75V5.25C22 4.55964 21.4404 4 20.75 4H14.5C13.4892 4 12.5968 4.47889 12 5.25C12.2761 5.69772 12.5 6.19772 12.5 6.75V19.674Z"
    },
    taskRegular: {
      vb: "0 0 24 24",
      d: "M8.75 3C7.7835 3 7 3.7835 7 4.75V5H6.25C5.00736 5 4 6.00736 4 7.25V19.75C4 20.9926 5.00736 22 6.25 22H17.75C18.9926 22 20 20.9926 20 19.75V7.25C20 6.00736 18.9926 5 17.75 5H17V4.75C17 3.7835 16.2165 3 15.25 3H8.75ZM8.5 4.75C8.5 4.61193 8.61193 4.5 8.75 4.5H15.25C15.3881 4.5 15.5 4.61193 15.5 4.75V5.75C15.5 5.88807 15.3881 6 15.25 6H8.75C8.61193 6 8.5 5.88807 8.5 5.75V4.75ZM5.5 7.25C5.5 6.83579 5.83579 6.5 6.25 6.5H7.25C7.66421 7.09761 8.17445 7.5 8.75 7.5H15.25C15.8256 7.5 16.3358 7.09761 16.75 6.5H17.75C18.1642 6.5 18.5 6.83579 18.5 7.25V19.75C18.5 20.1642 18.1642 20.5 17.75 20.5H6.25C5.83579 20.5 5.5 20.1642 5.5 19.75V7.25ZM15.7803 11.4697C16.0732 11.7626 16.0732 12.2374 15.7803 12.5303L11.5303 16.7803C11.2374 17.0732 10.7626 17.0732 10.4697 16.7803L8.46967 14.7803C8.17678 14.4874 8.17678 14.0126 8.46967 13.7197C8.76256 13.4268 9.23744 13.4268 9.53033 13.7197L11 15.1893L14.7197 11.4697C15.0126 11.1768 15.4874 11.1768 15.7803 11.4697Z"
    },
    taskFilled: {
      vb: "0 0 24 24",
      d: "M8.75 3C7.7835 3 7 3.7835 7 4.75V5H6.25C5.00736 5 4 6.00736 4 7.25V19.75C4 20.9926 5.00736 22 6.25 22H17.75C18.9926 22 20 20.9926 20 19.75V7.25C20 6.00736 18.9926 5 17.75 5H17V4.75C17 3.7835 16.2165 3 15.25 3H8.75ZM8.75 4.5H15.25C15.3881 4.5 15.5 4.61193 15.5 4.75V5.75C15.5 5.88807 15.3881 6 15.25 6H8.75C8.61193 6 8.5 5.88807 8.5 5.75V4.75C8.5 4.61193 8.61193 4.5 8.75 4.5ZM15.7803 11.4697C16.0732 11.7626 16.0732 12.2374 15.7803 12.5303L11.5303 16.7803C11.2374 17.0732 10.7626 17.0732 10.4697 16.7803L8.46967 14.7803C8.17678 14.4874 8.17678 14.0126 8.46967 13.7197C8.76256 13.4268 9.23744 13.4268 9.53033 13.7197L11 15.1893L14.7197 11.4697C15.0126 11.1768 15.4874 11.1768 15.7803 11.4697Z"
    },
    clock: {
      vb: "0 0 16 16",
      d: "M2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8ZM8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM8 4.5C8 4.22386 7.77614 4 7.5 4C7.22386 4 7 4.22386 7 4.5V8.5C7 8.77614 7.22386 9 7.5 9H10.5C10.7761 9 11 8.77614 11 8.5C11 8.22386 10.7761 8 10.5 8H8V4.5Z"
    },
    info: {
      vb: "0 0 16 16",
      d: "M8.49902 7.49998C8.49902 7.22384 8.27517 6.99998 7.99902 6.99998C7.72288 6.99998 7.49902 7.22384 7.49902 7.49998V10.5C7.49902 10.7761 7.72288 11 7.99902 11C8.27517 11 8.49902 10.7761 8.49902 10.5V7.49998ZM8.74807 5.50001C8.74807 5.91369 8.41271 6.24905 7.99903 6.24905C7.58535 6.24905 7.25 5.91369 7.25 5.50001C7.25 5.08633 7.58535 4.75098 7.99903 4.75098C8.41271 4.75098 8.74807 5.08633 8.74807 5.50001ZM8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z"
    },
    star: {
      vb: "0 0 16 16",
      d: "M7.19426 2.10118C7.52369 1.43375 8.47545 1.43375 8.80488 2.10118L10.2212 4.9708L13.3881 5.43096C14.1246 5.53798 14.4187 6.44314 13.8857 6.96265L11.5941 9.19645L12.135 12.3504C12.2608 13.0839 11.4909 13.6433 10.8322 13.297L7.99957 11.8078L5.1669 13.297C4.5082 13.6433 3.73832 13.0839 3.86414 12.3504L4.40508 9.19645L2.11342 6.96265C1.58046 6.44314 1.87456 5.53798 2.61108 5.43096L5.77798 4.9708L7.19426 2.10118Z"
    },
    grid: {
      vb: "0 0 20 20",
      d: "M4.5 3C3.67157 3 3 3.67157 3 4.5V7.5C3 8.32843 3.67157 9 4.5 9H7.5C8.32843 9 9 8.32843 9 7.5V4.5C9 3.67157 8.32843 3 7.5 3H4.5ZM4 4.5C4 4.22386 4.22386 4 4.5 4H7.5C7.77614 4 8 4.22386 8 4.5V7.5C8 7.77614 7.77614 8 7.5 8H4.5C4.22386 8 4 7.77614 4 7.5V4.5ZM12.5 3C11.6716 3 11 3.67157 11 4.5V7.5C11 8.32843 11.6716 9 12.5 9H15.5C16.3284 9 17 8.32843 17 7.5V4.5C17 3.67157 16.3284 3 15.5 3H12.5ZM12 4.5C12 4.22386 12.2239 4 12.5 4H15.5C15.7761 4 16 4.22386 16 4.5V7.5C16 7.77614 15.7761 8 15.5 8H12.5C12.2239 8 12 7.77614 12 7.5V4.5ZM4.5 11C3.67157 11 3 11.6716 3 12.5V15.5C3 16.3284 3.67157 17 4.5 17H7.5C8.32843 17 9 16.3284 9 15.5V12.5C9 11.6716 8.32843 11 7.5 11H4.5ZM4 12.5C4 12.2239 4.22386 12 4.5 12H7.5C7.77614 12 8 12.2239 8 12.5V15.5C8 15.7761 7.77614 16 7.5 16H4.5C4.22386 16 4 15.7761 4 15.5V12.5ZM12.5 11C11.6716 11 11 11.6716 11 12.5V15.5C11 16.3284 11.6716 17 12.5 17H15.5C16.3284 17 17 16.3284 17 15.5V12.5C17 11.6716 16.3284 11 15.5 11H12.5ZM12 12.5C12 12.2239 12.2239 12 12.5 12H15.5C15.7761 12 16 12.2239 16 12.5V15.5C16 15.7761 15.7761 16 15.5 16H12.5C12.2239 16 12 15.7761 12 15.5V12.5Z"
    },
    chevronRight: {
      vb: "0 0 20 20",
      d: "M7.64582 4.14708C7.84073 3.95147 8.15731 3.9509 8.35292 4.14582L13.8374 9.6108C14.0531 9.82574 14.0531 10.1751 13.8374 10.39L8.35292 15.855C8.15731 16.0499 7.84073 16.0493 7.64582 15.8537C7.4509 15.6581 7.45147 15.3415 7.64708 15.1466L12.8117 10.0004L7.64708 4.85418C7.45147 4.65927 7.4509 4.34269 7.64582 4.14708Z"
    },
    chevronDown: {
      vb: "0 0 20 20",
      d: "M15.8537 7.64582C16.0493 7.84073 16.0499 8.15731 15.855 8.35292L10.39 13.8374C10.1751 14.0531 9.82574 14.0531 9.6108 13.8374L4.14582 8.35292C3.9509 7.84073 3.95147 7.84073 4.14708 7.64582C4.34269 7.4509 4.65927 7.45147 4.85418 7.64708L10.0004 12.8117L15.1466 7.64708C15.3415 7.45147 15.6581 7.4509 15.8537 7.64582Z"
    },
    chevronUp: {
      vb: "0 0 20 20",
      d: "M4.14626 12.3542C3.95066 12.1593 3.9501 11.8427 4.14502 11.6471L9.61 6.1626C9.82494 5.9469 10.1743 5.9469 10.3892 6.1626L15.8542 11.6471C16.0491 11.8427 16.0485 12.1593 15.8529 12.3542C15.6573 12.5491 15.3407 12.5485 15.1458 12.3529L9.9996 7.1883L4.8534 12.3529C4.6585 12.5485 4.34187 12.5491 4.14626 12.3542Z"
    },
    key: {
      vb: "0 0 24 24",
      d: "M18.2493 6.99982C18.2493 7.69017 17.6896 8.24982 16.9993 8.24982C16.3089 8.24982 15.7493 7.69017 15.7493 6.99982C15.7493 6.30946 16.3089 5.74982 16.9993 5.74982C17.6896 5.74982 18.2493 6.30946 18.2493 6.99982ZM15.4992 2.0498C11.885 2.0498 8.94922 4.98559 8.94922 8.5998C8.94922 8.98701 8.99939 9.36017 9.05968 9.70382C9.07749 9.80529 9.04493 9.89344 8.99046 9.94791L2.75467 16.1837C2.23895 16.6994 1.94922 17.3989 1.94922 18.1282V20.2998C1.94922 21.2663 2.73272 22.0498 3.69922 22.0498H6.19922C7.16572 22.0498 7.94922 21.2663 7.94922 20.2998V19.0498H9.69922C10.3896 19.0498 10.9492 18.4902 10.9492 17.7998V16.0498H12.6992C13.3741 16.0498 13.9241 15.515 13.9484 14.846C14.4451 14.9738 14.9689 15.0498 15.4992 15.0498C19.1134 15.0498 22.0492 12.114 22.0492 8.4998C22.0492 4.86866 19.0963 2.0498 15.4992 2.0498ZM10.4492 8.5998C10.4492 5.81402 12.7134 3.5498 15.4992 3.5498C18.3021 3.5498 20.5492 5.73095 20.5492 8.4998C20.5492 11.2856 18.285 13.5498 15.4992 13.5498C14.8199 13.5498 14.1206 13.3787 13.4947 13.1104C13.2629 13.0111 12.9968 13.0349 12.7864 13.1737C12.5759 13.3125 12.4492 13.5477 12.4492 13.7998V14.5498H10.6992C10.0089 14.5498 9.44922 15.1094 9.44922 15.7998V17.5498H7.69922C7.00886 17.5498 6.44922 18.1094 6.44922 18.7998V20.2998C6.44922 20.4379 6.33729 20.5498 6.19922 20.5498H3.69922C3.56115 20.5498 3.44922 20.4379 3.44922 20.2998V18.1282C3.44922 17.7967 3.58091 17.4788 3.81534 17.2443L10.0511 11.0086C10.4695 10.5902 10.6349 10.0018 10.5371 9.44461C10.4834 9.13865 10.4492 8.8622 10.4492 8.5998Z"
    },
    lock: {
      vb: "0 0 20 20",
      d: "M10 2C7.79086 2 6 3.79086 6 6V7H5.5C4.67157 7 4 7.67157 4 8.5V15.5C4 16.3284 4.67157 17 5.5 17H14.5C15.3284 17 16 16.3284 16 15.5V8.5C16 7.67157 15.3284 7 14.5 7H14V6C14 3.79086 12.2091 2 10 2ZM13 7H7V6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6V7ZM5 8.5C5 8.22386 5.22386 8 5.5 8H14.5C14.7761 8 15 8.22386 15 8.5V15.5C15 15.7761 14.7761 16 14.5 16H5.5C5.22386 16 5 15.7761 5 15.5V8.5ZM10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z"
    },
    filter: {
      vb: "0 0 20 20",
      d: "M2.5 5C2.22386 5 2 5.22386 2 5.5C2 5.77614 2.22386 6 2.5 6H17.5C17.7761 6 18 5.77614 18 5.5C18 5.22386 17.7761 5 17.5 5H2.5ZM5 9.5C5 9.22386 5.22386 9 5.5 9H14.5C14.7761 9 15 9.22386 15 9.5C15 9.77614 14.7761 10 14.5 10H5.5C5.22386 10 5 9.77614 5 9.5ZM8.5 13C8.22386 13 8 13.2239 8 13.5C8 13.7761 8.22386 14 8.5 14H11.5C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13H8.5Z"
    },
    doc: {
      vb: "0 0 20 20",
      d: "M6.5 10C6.22386 10 6 10.2239 6 10.5C6 10.7761 6.22386 11 6.5 11H13.5C13.7761 11 14 10.7761 14 10.5C14 10.2239 13.7761 10 13.5 10H6.5ZM6.5 12C6.22386 12 6 12.2239 6 12.5C6 12.7761 6.22386 13 6.5 13H13.5C13.7761 13 14 12.7761 14 12.5C14 12.2239 13.7761 12 13.5 12H6.5ZM6.5 14C6.22386 14 6 14.2239 6 14.5C6 14.7761 6.22386 15 6.5 15H13.5C13.7761 15 14 14.7761 14 14.5C14 14.2239 13.7761 14 13.5 14H6.5ZM4 4C4 2.89543 4.89543 2 6 2H10.5858C10.9836 2 11.3651 2.15804 11.6464 2.43934L15.5607 6.35355C15.842 6.63486 16 7.01639 16 7.41421V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4ZM6 3C5.44772 3 5 3.44772 5 4V16C5 16.5523 5.44772 17 6 17H14C14.5523 17 15 16.5523 15 16V8H11.5C10.6716 8 10 7.32843 10 6.5V3H6ZM11.5 7H14.7929L11 3.20711V6.5C11 6.77614 11.2239 7 11.5 7Z"
    },
    checkbox: {
      vb: "0 0 20 20",
      d: "M6 3C4.34315 3 3 4.34315 3 6V14C3 15.6569 4.34315 17 6 17H14C15.6569 17 17 15.6569 17 14V6C17 4.34315 15.6569 3 14 3H6ZM4 6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6V14C16 15.1046 15.1046 16 14 16H6C4.89543 16 4 15.1046 4 14V6ZM13.8536 7.85355C14.0488 7.65829 14.0488 7.34171 13.8536 7.14645C13.6583 6.95118 13.3417 6.95118 13.1464 7.14645L8.5 11.7929L6.85355 10.1464C6.65829 9.95118 6.34171 9.95118 6.14645 10.1464C5.95118 10.3417 5.95118 10.6583 6.14645 10.8536L8.14645 12.8536C8.34171 13.0488 8.65829 13.0488 8.85355 12.8536L13.8536 7.85355Z"
    }
  };

  function svgIcon(name, size = 18, color = "currentColor") {
    const def = FLUENT[name];
    if (!def) return "";
    return `<svg width="${size}" height="${size}" viewBox="${def.vb}" fill="none" aria-hidden="true" style="flex-shrink:0"><path d="${def.d}" fill="${color}"/></svg>`;
  }

  function materialIconSrc(type) {
    if (type === "PPT") return "assets/icons/slide-ppt.svg";
    if (type === "Video") return "assets/icons/video.svg";
    return "assets/icons/dokumen-pdf.svg";
  }

  function esc(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showToast(msg) {
    const root = document.getElementById("toast-root");
    root.innerHTML = `<div class="toast">${esc(msg)}</div>`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      root.innerHTML = "";
    }, 2600);
  }

  function stopTimers() {
    if (videoState.timerId) {
      clearInterval(videoState.timerId);
      videoState.timerId = null;
      videoState.playing = false;
    }
    if (quizIntervalId) {
      clearInterval(quizIntervalId);
      quizIntervalId = null;
    }
    if (uploadFlow.intervalId) {
      clearInterval(uploadFlow.intervalId);
      uploadFlow.intervalId = null;
    }
  }

  function navigate(name, params = {}, options = {}) {
    const { replace = false, rootTab = false } = options;
    stopTimers();
    activeOverlay = null;

    if (rootTab) {
      historyStack = [];
    } else if (!replace) {
      historyStack.push({ name: route.name, params: { ...route.params } });
    }

    route = { name, params };

    if (name === "ppt") currentSlideIdx = params.slideIdx ?? 0;
    if (name === "video") {
      videoState.currentSec = 250;
      videoState.playing = false;
    }
    if (name === "task-detail") {
      const tid = params.taskId || "tugas-2";
      if (uploadFlow.taskId !== tid) {
        uploadFlow = { taskId: tid, stage: "idle", errorMessage: "", rejectedFileName: "", selectedFile: null, progress: 0, intervalId: null };
      }
    }

    render();
    window.scrollTo({ top: 0, behavior: "instant" });

    if (name === "quiz-play" || name === "quiz-review") {
      startQuizTimer();
    }
  }

  function goBack(fallback = "beranda") {
    stopTimers();
    activeOverlay = null;
    if (historyStack.length > 0) {
      route = historyStack.pop();
    } else {
      route = { name: fallback, params: fallback === "course-detail" ? { courseId: "imk-a" } : {} };
    }
    render();
    window.scrollTo({ top: 0, behavior: "instant" });
    if (route.name === "quiz-play" || route.name === "quiz-review") {
      startQuizTimer();
    }
  }

  function returnToCourseDetail(courseId = "imk-a", keepTab = true) {
    stopTimers();
    activeOverlay = null;
    // Unwind to existing course-detail in historyStack so Back NEVER loops into S10c/S14
    let foundIdx = -1;
    for (let i = historyStack.length - 1; i >= 0; i--) {
      if (historyStack[i].name === "course-detail") {
        foundIdx = i;
        break;
      }
    }
    if (foundIdx >= 0) {
      const existing = historyStack[foundIdx];
      historyStack = historyStack.slice(0, foundIdx);
      route = { name: "course-detail", params: { courseId: existing.params.courseId || courseId } };
    } else {
      historyStack = [{ name: "kelas", params: {} }];
      route = { name: "course-detail", params: { courseId } };
    }
    if (!keepTab) courseDetailTab = "materi";
    render();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function getCourseById(id) {
    return DATA.courses.find((c) => c.id === id) || DATA.courses[0];
  }

  function getEnrolledCourses() {
    return DATA.courses.filter((c) => state.enrolledCourseIds.includes(c.id));
  }

  function getCourseProgress(course) {
    const allIds = course.meetings.flatMap((m) => m.materials.map((mat) => mat.id));
    if (allIds.length === 0) return { opened: 0, total: course.totalMaterials || 6, pct: 0 };
    const opened = allIds.filter((id) => state.openedMaterialIds.includes(id)).length;
    const total = course.totalMaterials || allIds.length;
    return { opened, total, pct: total ? Math.round((opened / total) * 100) : 0 };
  }

  function getEnrolledMaterials() {
    const list = [];
    DATA.courses.forEach((c) => {
      if (!state.enrolledCourseIds.includes(c.id)) return;
      c.meetings.forEach((m) => {
        m.materials.forEach((mat) => {
          list.push({ ...mat, courseId: c.id, courseTitle: c.title, courseLecturer: c.lecturer, courseKelas: c.kelas });
        });
      });
    });
    return list;
  }

  function findMaterialById(materialId) {
    for (const c of DATA.courses) {
      for (const m of c.meetings) {
        const found = m.materials.find((x) => x.id === materialId);
        if (found) return { material: found, course: c };
      }
    }
    return null;
  }

  function markMaterialOpened(material) {
    if (!state.openedMaterialIds.includes(material.id)) {
      state.openedMaterialIds.push(material.id);
    }
    if (material.isT1Target) state.telemetry.t1Done = true;
    if (material.isT2Target) state.telemetry.t2Done = true;
    ST.saveState(state);
  }

  function hasPendingImkTask() {
    return !state.taskReceipts["tugas-2"];
  }

  function getQuizAnsweredCount() {
    return DATA.quiz.questions.filter((q) => {
      const ans = state.quiz.answers[q.id];
      return ans && String(ans).trim().length > 0;
    }).length;
  }

  function startQuizTimer() {
    if (state.quiz.submitted) return;
    if (quizIntervalId) clearInterval(quizIntervalId);
    quizIntervalId = setInterval(() => {
      if (state.quiz.remainingSeconds > 0) {
        state.quiz.remainingSeconds -= 1;
        ST.saveState(state);
        const el = document.getElementById("quiz-timer-val");
        if (el) el.textContent = ST.formatTimer(state.quiz.remainingSeconds);
      } else {
        clearInterval(quizIntervalId);
        submitQuizFinal();
      }
    }, 1000);
  }

  function submitQuizFinal() {
    stopTimers();
    const used = DATA.quiz.durationSeconds - state.quiz.remainingSeconds;
    const origin = route.params.origin || "course-detail";
    state.quiz.submitted = true;
    state.quiz.submittedAt = ST.formatNowWIB();
    state.quiz.durationUsedText = ST.formatDurationWords(used);
    state.telemetry.t4Done = true;
    ST.saveState(state);
    // Unwind all intermediate quiz screens so Back from S14 returns straight to origin
    while (
      historyStack.length > 0 &&
      ["quiz-intro", "quiz-play", "quiz-review"].includes(historyStack[historyStack.length - 1].name)
    ) {
      historyStack.pop();
    }
    navigate("quiz-done", { origin }, { replace: true });
    showToast("Kuis berhasil dikirim!");
  }

  /* ========================================================================
     Shared UI — Profile Trigger, Bottom Nav, Contextual Header
     ======================================================================== */

  function renderProfileButton(variant = "on-light") {
    const s = DATA.student;
    return `
      <button class="profile-btn ${variant}" data-go="account" aria-label="Buka akun dan pengaturan ${esc(s.name)}">
        <span class="profile-avatar">${esc(s.initials)}</span>
        <span>Akun</span>
        ${svgIcon("chevronDown", 13, variant === "on-hero" ? "#0B63CE" : "#FFFFFF")}
      </button>`;
  }

  function renderBottomNav(activeTab) {
    const tabs = [
      { id: "beranda", label: "Beranda", reg: "homeRegular", fill: "homeFilled" },
      { id: "kelas", label: "Kelas", reg: "bookRegular", fill: "bookFilled" },
      { id: "cari-materi", label: "Cari Materi", reg: "search", fill: "searchFilled" },
      { id: "tugas", label: "Tugas", reg: "taskRegular", fill: "taskFilled" }
    ];
    return `
      <div class="bottom-nav-wrap">
        <nav class="bottom-nav" aria-label="Navigasi utama">
          ${tabs
            .map((t) => {
              const isAct = t.id === activeTab;
              return `
                <button class="nav-item ${isAct ? "active" : ""}" data-nav="${t.id}" aria-current="${isAct ? "page" : "false"}">
                  <span class="nav-item-pill">
                    ${svgIcon(isAct ? t.fill : t.reg, 21, isAct ? "#0B63CE" : "#475569")}
                  </span>
                  <span>${t.label}</span>
                </button>`;
            })
            .join("")}
        </nav>
      </div>`;
  }

  function renderCtxHeader(title, subtitle = "", rightHtml = "", backFallback = "beranda") {
    return `
      <header class="ctx-header">
        <div class="ctx-header-left">
          <button class="icon-btn on-light" data-action="back" data-fallback="${backFallback}" aria-label="Kembali">
            ${svgIcon("arrowLeft", 18, "#0F172A")}
          </button>
          <div class="ctx-titles">
            <h1 class="ctx-title">${esc(title)}</h1>
            ${subtitle ? `<p class="ctx-sub">${esc(subtitle)}</p>` : ""}
          </div>
        </div>
        ${rightHtml ? `<div>${rightHtml}</div>` : ""}
      </header>`;
  }

  /* ========================================================================
     SCREENS (S01 – S15)
     ======================================================================== */

  // S01 · Masuk SSO UNS
  function renderS01Login() {
    const s = DATA.student;
    return `
      <main class="screen">
        <div style="padding: 36px 20px 24px; display:flex; flex-direction:column; gap:18px; flex:1;">
          <div>
            <div class="brand-wordmark" style="font-size:22px;">
              <strong style="color:var(--brand-spada-blue)">SPADA</strong>
              <span style="color:var(--text-primary); font-weight:700;">UNS</span>
            </div>
            <p class="page-subtitle" style="margin-top:4px; font-size:12.5px;">Universitas Sebelas Maret · Mobile Learning</p>
          </div>

          <section class="mascot-card">
            <div class="mascot-card-copy">
              <span class="pill pill-info" style="margin-bottom:12px;">AKSES MAHASISWA</span>
              <h1 style="margin:0; font-size:20px; font-weight:800; line-height:1.28;">Belajar lebih ringkas di ponsel</h1>
              <p class="secondary text-sm" style="margin:8px 0 0;">Akses kelas, materi, tugas, dan kuis SPADA dengan satu akun SSO UNS.</p>
            </div>
            <div class="mascot-card-art">
              <img src="assets/mascots/panduan.png" alt="Maskot SPADA UNS" />
            </div>
          </section>

          <section class="card" style="padding:20px;">
            <h2 style="margin:0; font-size:16px; font-weight:700;">Masuk dengan SSO UNS</h2>
            <p class="muted text-sm" style="margin:6px 0 16px;">Gunakan akun @student.uns.ac.id untuk menyinkronkan kelas dan tugas semester ini.</p>

            <div style="display:flex; align-items:center; gap:12px; padding:12px; border-radius:14px; background:var(--bg-canvas); border:1px solid var(--border-subtle); margin-bottom:18px;">
              <div class="avatar-static" style="width:40px; height:40px; font-size:13px;">${s.initials}</div>
              <div style="min-width:0;">
                <div class="fw-bold" style="font-size:13.5px;">${esc(s.name)}</div>
                <div class="muted text-xs">${esc(s.email)}</div>
              </div>
            </div>

            <button class="btn btn-primary btn-lg btn-block" data-action="login-sso">
              Masuk dengan SSO UNS
            </button>
          </section>

          <p class="muted text-xs" style="text-align:center; margin-top:auto; padding-top:12px;">
            Terhubung ke SSO UNS · Tahun Akademik 2026/2027
          </p>
        </div>
      </main>`;
  }

  // S02 · Beranda
  function renderS02Beranda() {
    const s = DATA.student;
    const imk = getCourseById("imk-a");
    const tugas2 = DATA.tasks.find((t) => t.id === "tugas-2");
    const t2Done = Boolean(state.taskReceipts["tugas-2"]);

    return `
      <main class="screen">
        <header class="hero-header">
          <div class="hero-top-row">
            <div class="brand-wordmark"><strong>SPADA</strong> <span>UNS</span></div>
            ${renderProfileButton("on-hero")}
          </div>
          <div class="hero-beranda-body">
            <div class="hero-beranda-copy">
              <div class="semester-badge">${s.semester}</div>
              <h1 class="hero-greeting">Halo, ${esc(s.firstName)}!</h1>
              <p class="hero-sub">${s.shortProdi}</p>
              <p class="hero-year">${s.academicYear}</p>
            </div>
            <div class="hero-mascot-wrap">
              <img src="assets/mascots/sambutan.png" alt="Maskot SPADA UNS" />
            </div>
          </div>
        </header>

        <div class="screen-scroll with-bottom-nav">
          <section class="shortcuts-grid" aria-label="Pintasan cepat">
            <button class="shortcut-item" data-nav="kelas">
              <span class="shortcut-tile"><img src="assets/icons/kelas-saya.svg" alt="" /></span>
              <span class="shortcut-label">Kelas saya</span>
            </button>
            <button class="shortcut-item" data-nav="cari-materi">
              <span class="shortcut-tile"><img src="assets/icons/cari-materi.svg" alt="" /></span>
              <span class="shortcut-label">Cari materi</span>
            </button>
            <button class="shortcut-item" data-nav="tugas">
              <span class="shortcut-tile"><img src="assets/icons/aktivitas.svg" alt="" /></span>
              <span class="shortcut-label">Tugas</span>
            </button>
          </section>

          <div class="section-head">
            <h2 class="section-title">Perlu dikerjakan</h2>
          </div>

          ${
            !t2Done
              ? `
            <article class="task-card urgent">
              <div class="row-between" style="margin-bottom:10px;">
                <span class="muted text-xs fw-bold">${esc(tugas2.courseTag)}</span>
                <span class="pill pill-danger">
                  ${svgIcon("clock", 12, "#B91C1C")}
                  <span>${esc(tugas2.deadline)}</span>
                </span>
              </div>
              <h3 style="margin:0 0 14px; font-size:15px; font-weight:700; line-height:1.35;">${esc(tugas2.title)}</h3>
              <div class="row-between">
                <span class="row-gap-2 text-xs fw-bold" style="color:var(--status-danger);">
                  ${svgIcon("info", 14, "#B91C1C")}
                  <span>Belum dikumpulkan</span>
                </span>
                <button class="btn btn-primary btn-sm" data-open-task="tugas-2">Buka tugas</button>
              </div>
            </article>`
              : `
            <article class="task-card submitted">
              <div class="row-between" style="margin-bottom:8px;">
                <span class="muted text-xs fw-bold">${esc(tugas2.courseTag)}</span>
                <span class="pill pill-info">Terkirim · Menunggu nilai</span>
              </div>
              <h3 style="margin:0 0 10px; font-size:14.5px; font-weight:700;">${esc(tugas2.title)}</h3>
              <div class="row-between">
                <span class="muted text-xs">${esc(state.taskReceipts["tugas-2"].submittedAt)}</span>
                <button class="btn btn-soft btn-sm" data-open-task="tugas-2">Lihat bukti</button>
              </div>
            </article>`
          }

          <div class="section-head" style="margin-top:4px;">
            <h2 class="section-title">Kelas saya</h2>
            <button class="section-link" data-nav="kelas">Lihat semua ›</button>
          </div>

          <button class="card-row-clickable" data-open-course="imk-a">
            <span class="icon-square">${svgIcon("bookRegular", 21, "#0B63CE")}</span>
            <span style="flex:1; min-width:0;">
              <span class="fw-bold" style="display:block; font-size:14.5px;">${esc(imk.title)}</span>
              <span class="muted text-xs" style="display:block; margin-top:2px;">${esc(imk.lecturer)} · ${esc(imk.kelas)}</span>
            </span>
            ${svgIcon("chevronRight", 16, "#0B63CE")}
          </button>
        </div>

        ${renderBottomNav("beranda")}
      </main>`;
  }

  // S03 · Kelas Saya
  function renderS03Kelas() {
    const s = DATA.student;
    const imk = getCourseById("imk-a");
    const imkProg = getCourseProgress(imk);

    const extraEnrolled = DATA.courses.filter(
      (c) => c.id !== "imk-a" && c.id !== "imk-b" && state.enrolledCourseIds.includes(c.id)
    );
    const unenrolledSem5 = DATA.courses.filter(
      (c) => c.id !== "imk-a" && c.id !== "imk-b" && !state.enrolledCourseIds.includes(c.id)
    );

    return `
      <main class="screen">
        <header class="tab-header">
          <div>
            <div class="eyebrow">SPADA / AKADEMIK</div>
            <h1 class="page-title">Kelas saya</h1>
            <p class="page-subtitle">${s.semester} · ${s.shortProdi}</p>
          </div>
          ${renderProfileButton("on-light")}
        </header>

        <div class="screen-scroll with-bottom-nav">
          <article class="card-featured-imk">
            <div class="featured-icon-orbit">
              <div class="featured-icon-orbit-inner">
                <img src="assets/icons/kelas-saya.svg" alt="" />
              </div>
            </div>
            <div class="eyebrow" style="margin-bottom:8px;">${esc(imk.code)} / ${esc(imk.kelas).toUpperCase()}</div>
            <h2 style="margin:0; font-size:20px; font-weight:800; line-height:1.25; max-width:236px;">${esc(imk.title)}</h2>
            <p class="secondary text-xs fw-bold" style="margin:6px 0 0;">${esc(imk.lecturer)}</p>
            <p class="muted text-xs" style="margin:2px 0 0;">${esc(imk.activeTopic)}</p>

            <div class="prog-block">
              <div class="prog-meta">
                <span>Progres materi</span>
                <strong>${imkProg.opened}/${imkProg.total} materi (${imkProg.pct}%)</strong>
              </div>
              <div class="prog-track">
                <div class="prog-fill" style="width:${imkProg.pct}%"></div>
              </div>
            </div>

            <button class="btn btn-primary" style="margin-top:16px; min-width:154px;" data-open-course="imk-a">
              Buka kelas
            </button>
          </article>

          ${
            extraEnrolled.length > 0
              ? `
            <div class="section-head" style="margin-top:2px;">
              <h2 class="section-title">Kelas baru diikuti</h2>
            </div>
            <div class="stack-2">
              ${extraEnrolled
                .map(
                  (c) => `
                <button class="card-row-clickable" data-open-enrolled-limited="${c.id}">
                  <span class="icon-square">${svgIcon("bookRegular", 20, "#0B63CE")}</span>
                  <span style="flex:1; min-width:0;">
                    <span class="fw-bold" style="display:block; font-size:14px;">${esc(c.title)}</span>
                    <span class="muted text-xs" style="display:block; margin-top:2px;">${esc(c.lecturer)} · ${esc(c.kelas)}</span>
                  </span>
                  <span class="pill pill-success">Diikuti</span>
                </button>`
                )
                .join("")}
            </div>`
              : ""
          }

          ${
            unenrolledSem5.length > 0
              ? `
            <div class="section-head" style="margin-top:4px;">
              <h2 class="section-title">Mata kuliah Semester 5</h2>
            </div>
            <div class="stack-2">
              ${unenrolledSem5
                .map(
                  (c) => `
                <button class="card-row-clickable card-row-locked" data-open-locked-course="${c.id}">
                  <span class="icon-square">${svgIcon("lock", 19, "#64748B")}</span>
                  <span style="flex:1; min-width:0;">
                    <span class="fw-bold" style="display:block; font-size:14px; color:#334155;">${esc(c.title)}</span>
                    <span class="muted text-xs" style="display:block; margin-top:2px;">${esc(c.lecturer)} · ${esc(c.kelas)}</span>
                  </span>
                  <span class="pill pill-neutral">Belum diikuti</span>
                </button>`
                )
                .join("")}
            </div>`
              : ""
          }

          <button class="btn btn-soft btn-lg btn-block" style="margin-top:4px;" data-go="catalog">
            ${svgIcon("search", 17, "#0B63CE")}
            <span>Cari kelas di UNS</span>
          </button>
        </div>

        ${renderBottomNav("kelas")}
      </main>`;
  }

  // S04 · Cari kelas di UNS (DEFAULT FILTER TIDAK AKTIF — hasil muncul setelah filter diaktifkan atau dicari)
  function renderS04Catalog() {
    const f = catalogFilterState;
    const q = catalogQuery.trim().toLowerCase();
    const hasFilter = f.applied;
    const isPrototypeScope = hasFilter && f.faculty === "FATISDA" && f.prodi === "S1 Informatika" && f.semester === 5;

    let list = [];
    if (hasFilter) {
      list = isPrototypeScope
        ? DATA.courses.filter((c) => !q || `${c.code} ${c.kelas} ${c.title} ${c.lecturer}`.toLowerCase().includes(q))
        : [];
    } else if (q) {
      list = DATA.courses.filter((c) => `${c.code} ${c.kelas} ${c.title} ${c.lecturer}`.toLowerCase().includes(q));
    }

    return `
      <main class="screen">
        ${renderCtxHeader("Cari kelas di UNS", "Telusuri berdasarkan fakultas, prodi & semester", "", "kelas")}

        <div class="screen-scroll">
          <label class="search-box">
            ${svgIcon("search", 17, "#64748B")}
            <input id="catalog-search-input" type="search" value="${esc(catalogQuery)}" placeholder="Cari nama mata kuliah atau dosen..." aria-label="Cari nama mata kuliah atau dosen" />
          </label>

          ${
            hasFilter
              ? `
            <div class="filter-summary-bar">
              <div style="min-width:0;">
                <div class="eyebrow" style="font-size:10px; margin-bottom:2px;">FILTER AKTIF</div>
                <div class="fw-bold" style="font-size:12.5px; color:#0F172A; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                  ${esc(f.faculty)} › ${esc(f.prodi)} › Sem ${f.semester}
                </div>
              </div>
              <div class="row-gap-2">
                <button class="btn btn-soft btn-sm" style="min-height:34px; padding:6px 10px;" data-action="clear-uns-filter">Reset</button>
                <button class="btn btn-primary btn-sm" style="min-height:34px; padding:6px 12px;" data-action="open-uns-filter">Ubah</button>
              </div>
            </div>`
              : `
            <div class="card" style="padding:14px 16px;">
              <div class="row-between">
                <div>
                  <div class="fw-bold" style="font-size:13.5px;">Filter Fakultas, Prodi &amp; Semester</div>
                  <div class="muted text-xs" style="margin-top:2px;">Belum ada filter aktif</div>
                </div>
                <button class="btn btn-primary btn-sm" data-action="open-uns-filter">
                  ${svgIcon("filter", 15, "#FFFFFF")}
                  <span>Pilih filter</span>
                </button>
              </div>
            </div>`
          }

          ${
            !hasFilter && !q
              ? `
            <div class="card" style="text-align:center; padding:30px 20px;">
              <div style="width:48px; height:48px; border-radius:14px; background:var(--brand-spada-soft); color:var(--brand-spada-blue); display:inline-flex; align-items:center; justify-content:center; margin-bottom:12px;">
                ${svgIcon("filter", 22, "#0B63CE")}
              </div>
              <h2 style="margin:0 0 6px; font-size:15.5px; font-weight:800;">Pilih filter kelas terlebih dulu</h2>
              <p class="muted text-sm" style="margin:0 0 18px;">Tentukan Fakultas, Program Studi, dan Semester di UNS untuk menampilkan daftar mata kuliah yang sesuai, atau ketik langsung di kolom pencarian.</p>
              <button class="btn btn-primary btn-block" data-action="open-uns-filter">
                ${svgIcon("filter", 16, "#FFFFFF")}
                <span>Aktifkan filter kelas UNS</span>
              </button>
            </div>`
              : hasFilter && !isPrototypeScope
              ? `
            <div class="card" style="text-align:center; padding:26px 20px;">
              <div class="eyebrow" style="margin-bottom:6px;">CAKUPAN PROTOTIPE</div>
              <h3 style="margin:0 0 6px; font-size:15px;">Data kelas belum tersedia untuk filter ini</h3>
              <p class="muted text-sm" style="margin:0 0 16px;">Prototipe saat ini memuat daftar mata kuliah riil <strong>FATISDA › S1 Informatika › Semester 5</strong>.</p>
              <button class="btn btn-primary btn-block" data-action="open-uns-filter">Ubah filter kelas</button>
            </div>`
              : list.length === 0
              ? `
            <div class="card" style="text-align:center; padding:26px 20px;">
              <h3 style="margin:0 0 6px; font-size:15px;">Kelas belum ditemukan</h3>
              <p class="muted text-sm" style="margin:0 0 16px;">Coba kata kunci mata kuliah atau nama dosen lain.</p>
              <button class="btn btn-soft btn-block" data-action="clear-uns-filter">Reset pencarian &amp; filter</button>
            </div>`
              : `
            <div class="section-head">
              <h2 class="section-title">Daftar kelas (${list.length})</h2>
            </div>
            ${list
              .map((c) => {
                const isEnrolled = state.enrolledCourseIds.includes(c.id);
                if (isEnrolled) {
                  return `
                    <article class="card">
                      <div class="row-between" style="margin-bottom:8px;">
                        <span class="muted text-xs fw-bold">${esc(c.code)} · ${esc(c.kelas)}</span>
                        <span class="pill pill-success">Diikuti</span>
                      </div>
                      <h3 style="margin:0 0 4px; font-size:15px; font-weight:700;">${esc(c.title)}</h3>
                      <p class="secondary text-xs" style="margin:0 0 14px;">Dosen: <strong>${esc(c.lecturer)}</strong></p>
                      <button class="btn btn-primary btn-block" ${c.prototypeFullAccess ? `data-open-course="${c.id}"` : `data-open-enrolled-limited="${c.id}"`}>Buka kelas</button>
                    </article>`;
                }
                if (c.accessType === "restricted") {
                  return `
                    <article class="card">
                      <div class="row-between" style="margin-bottom:8px;">
                        <span class="muted text-xs fw-bold">${esc(c.code)} · ${esc(c.kelas)}</span>
                        <span class="pill pill-warning">Akses dibatasi</span>
                      </div>
                      <h3 style="margin:0 0 4px; font-size:15px; font-weight:700;">${esc(c.title)}</h3>
                      <p class="secondary text-xs" style="margin:0 0 6px;">Dosen: <strong>${esc(c.lecturer)}</strong></p>
                      <p class="muted text-xs" style="margin:0 0 14px;">${esc(c.restrictionNote)}</p>
                      <button class="btn btn-outline btn-block" data-open-restricted="${c.id}">Lihat akses kelas</button>
                    </article>`;
                }
                return `
                  <article class="card">
                    <div class="row-between" style="margin-bottom:8px;">
                      <span class="muted text-xs fw-bold">${esc(c.code)} · ${esc(c.kelas)}</span>
                      <span class="pill pill-info">Memerlukan key</span>
                    </div>
                    <h3 style="margin:0 0 4px; font-size:15px; font-weight:700;">${esc(c.title)}</h3>
                    <p class="secondary text-xs" style="margin:0 0 14px;">Dosen: <strong>${esc(c.lecturer)}</strong></p>
                    <button class="btn btn-soft btn-block" data-open-enrol="${c.id}">
                      ${svgIcon("key", 16, "#0B63CE")}
                      <span>Gabung kelas</span>
                    </button>
                  </article>`;
              })
              .join("")}`
          }
        </div>
      </main>`;
  }

  // S05 · Cari Materi (Filter Mata Kuliah diikuti + PPT/PDF/Video + Placeholder umum)
  function renderS05CariMateri() {
    const enrolledCourses = getEnrolledCourses();
    const enrolledMats = getEnrolledMaterials();
    const q = openMatQuery.trim().toLowerCase();

    const list = enrolledMats.filter((m) => {
      if (openMatCourseFilter !== "Semua" && m.courseId !== openMatCourseFilter) return false;
      if (openMatFilter !== "Semua" && m.type !== openMatFilter) return false;
      if (!q) return true;
      return `${m.title} ${m.courseTitle} ${m.meetingLabel} ${m.type} ${m.courseLecturer}`.toLowerCase().includes(q);
    });

    const activeCourseObj = openMatCourseFilter === "Semua" ? null : getCourseById(openMatCourseFilter);
    const activeFilterLabel = activeCourseObj
      ? `${activeCourseObj.title} (${activeCourseObj.kelas})`
      : "Semua mata kuliah diikuti";

    return `
      <main class="screen">
        <header class="tab-header">
          <div>
            <div class="eyebrow">SPADA / MATERI SAYA</div>
            <h1 class="page-title">Cari materi</h1>
            <p class="page-subtitle">Materi dari kelas yang kamu ikuti</p>
          </div>
          ${renderProfileButton("on-light")}
        </header>

        <div class="screen-scroll with-bottom-nav">
          <label class="search-box">
            ${svgIcon("search", 17, "#64748B")}
            <input id="openmat-search-input" type="search" value="${esc(openMatQuery)}" placeholder="Cari judul atau materi kelas Anda..." aria-label="Cari judul atau materi kelas Anda" />
          </label>

          <div class="filter-summary-bar" style="padding:10px 14px;">
            <div style="min-width:0;">
              <div class="eyebrow" style="font-size:10px; margin-bottom:1px;">MATA KULIAH</div>
              <div class="fw-bold" style="font-size:12.5px; color:#0F172A; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                ${esc(activeFilterLabel)}
              </div>
            </div>
            <button class="btn btn-primary btn-sm" style="min-height:32px; padding:5px 11px; font-size:12px;" data-action="open-mat-course-filter">
              ${svgIcon("filter", 14, "#FFFFFF")}
              <span>Filter</span>
            </button>
          </div>

          <div class="chips-row">
            ${["Semua", "PPT", "PDF", "Video"]
              .map(
                (ch) =>
                  `<button class="chip ${openMatFilter === ch ? "active" : ""}" data-openmat-filter="${ch}">${ch}</button>`
              )
              .join("")}
          </div>

          <div class="section-head">
            <h2 class="section-title">Hasil materi (${list.length})</h2>
            <span class="muted text-xs">${enrolledCourses.length} kelas diikuti</span>
          </div>

          ${
            list.length === 0
              ? `
            <div class="card" style="text-align:center; padding:26px 20px;">
              <h3 style="margin:0 0 6px; font-size:15px;">Materi belum ditemukan</h3>
              <p class="muted text-sm" style="margin:0 0 16px;">Coba kata kunci lain atau ubah filter mata kuliah dan jenis berkas.</p>
              <button class="btn btn-soft btn-block" data-action="reset-openmat">Reset filter</button>
            </div>`
              : `
            <div class="stack-3">
              ${list
                .map(
                  (m) => `
                <button class="material-row" data-open-material="${m.id}">
                  <img class="material-icon" src="${materialIconSrc(m.type)}" alt="${m.type}" />
                  <span class="material-text">
                    <span class="material-title" style="display:block;">${esc(m.title)}</span>
                    <span class="material-source" style="display:block;">${esc(m.meetingLabel)} · ${esc(m.courseTitle)}</span>
                    <span class="material-meta" style="display:block;">${esc(m.meta)}</span>
                  </span>
                  ${svgIcon("chevronRight", 16, "#0B63CE")}
                </button>`
                )
                .join("")}
            </div>`
          }
        </div>

        ${renderBottomNav("cari-materi")}
      </main>`;
  }

  // S06 · Tugas (Filter Mata Kuliah + Status + 3 Bagian Terpisah: Merah Belum / Putih Terkirim / Hijau Dinilai)
  function renderS06Tugas() {
    const t2Receipt = state.taskReceipts["tugas-2"];
    const t3Receipt = state.taskReceipts["tugas-3"];
    const t1Receipt = state.taskReceipts["tugas-1"];
    const quizDone = state.quiz.submitted;

    const items = [
      {
        kind: "task",
        id: "tugas-2",
        courseId: "imk-a",
        statusCat: t2Receipt ? (t2Receipt.graded ? "Dinilai" : "Terkirim") : "Belum",
        cardVariant: t2Receipt ? (t2Receipt.graded ? "graded" : "submitted") : "urgent",
        courseTag: "TIF305 · IMK Kelas A",
        title: "Tugas 2 — Audit Usability Aplikasi Mobile",
        badgeHtml: t2Receipt
          ? `<span class="pill pill-info">Terkirim · Menunggu nilai</span>`
          : `<span class="pill pill-danger">${svgIcon("clock", 12, "#B91C1C")}<span>Besok, 23:59 WIB</span></span>`,
        metaIcon: t2Receipt ? "doc" : "info",
        metaColor: t2Receipt ? "#0B63CE" : "#B91C1C",
        metaText: t2Receipt ? t2Receipt.fileName : "Belum dikumpulkan · Segera kirim",
        ctaLabel: t2Receipt ? "Lihat bukti" : "Buka tugas",
        ctaClass: t2Receipt ? "btn-soft" : "btn-primary"
      },
      {
        kind: "quiz",
        id: "kuis-1",
        courseId: "imk-a",
        statusCat: quizDone ? "Terkirim" : "Belum",
        cardVariant: quizDone ? "submitted" : "urgent",
        courseTag: "TIF305 · IMK Kelas A",
        title: "Kuis 1 — Evaluasi Usability & Prinsip Desain Mobile",
        badgeHtml: quizDone
          ? `<span class="pill pill-info">Terkirim · Menunggu nilai</span>`
          : `<span class="pill pill-danger">Belum dikerjakan</span>`,
        metaIcon: "checkbox",
        metaColor: quizDone ? "#0B63CE" : "#B91C1C",
        metaText: quizDone ? `Terkirim · ${state.quiz.submittedAt}` : "5 soal · 15 menit · Belum dikerjakan",
        ctaLabel: quizDone ? "Lihat status" : "Mulai kuis",
        ctaClass: quizDone ? "btn-soft" : "btn-primary"
      },
      {
        kind: "task",
        id: "tugas-3",
        courseId: "imk-a",
        statusCat: t3Receipt ? "Terkirim" : "Belum",
        cardVariant: t3Receipt ? "submitted" : "urgent",
        courseTag: "TIF305 · IMK Kelas A",
        title: "Tugas 3 — Pengumpulan Draft Artikel UAS",
        badgeHtml: t3Receipt
          ? `<span class="pill pill-info">Terkirim · Menunggu nilai</span>`
          : `<span class="pill pill-danger">Belum dikumpulkan</span>`,
        metaIcon: t3Receipt ? "doc" : "clock",
        metaColor: t3Receipt ? "#0B63CE" : "#B91C1C",
        metaText: t3Receipt ? t3Receipt.fileName : "Tenggat belum ditetapkan",
        ctaLabel: t3Receipt ? "Lihat bukti" : "Buka tugas",
        ctaClass: t3Receipt ? "btn-soft" : "btn-primary"
      },
      {
        kind: "task",
        id: "tugas-1",
        courseId: "imk-a",
        statusCat: "Dinilai",
        cardVariant: "graded",
        courseTag: "TIF305 · IMK Kelas A",
        title: "Tugas 1 — Laporan Wawancara Pengguna",
        badgeHtml: `<span class="pill pill-success">✓ Dinilai · ${t1Receipt && t1Receipt.score ? t1Receipt.score : 92}</span>`,
        metaIcon: "doc",
        metaColor: "#15803D",
        metaText: t1Receipt ? t1Receipt.fileName : "Laporan_Wawancara_Kelompok9.pdf",
        ctaLabel: "Lihat bukti",
        ctaClass: "btn-soft"
      }
    ];

    const filtered = items.filter((it) => {
      if (taskCourseFilter !== "Semua" && it.courseId !== taskCourseFilter) return false;
      if (taskTabFilter !== "Semua" && it.statusCat !== taskTabFilter) return false;
      return true;
    });

    const pendingList = filtered.filter((it) => it.statusCat === "Belum");
    const submittedList = filtered.filter((it) => it.statusCat === "Terkirim");
    const gradedList = filtered.filter((it) => it.statusCat === "Dinilai");

    const activeCourseObj = taskCourseFilter === "Semua" ? null : getCourseById(taskCourseFilter);
    const activeCourseLabel = activeCourseObj
      ? `${activeCourseObj.title} (${activeCourseObj.kelas})`
      : "Semua mata kuliah diikuti";

    function renderTaskCard(it) {
      return `
        <article class="task-card ${it.cardVariant}">
          <div class="row-between" style="margin-bottom:8px;">
            <span class="muted text-xs fw-bold">${esc(it.courseTag)}</span>
            ${it.badgeHtml}
          </div>
          <h3 style="margin:0 0 12px; font-size:14.5px; font-weight:700; line-height:1.35;">${esc(it.title)}</h3>
          <div class="row-between">
            <span class="row-gap-2 text-xs fw-bold" style="color:${it.metaColor}; min-width:0; overflow:hidden;">
              ${svgIcon(it.metaIcon, 14, it.metaColor)}
              <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${esc(it.metaText)}</span>
            </span>
            <button class="btn ${it.ctaClass} btn-sm" ${it.kind === "quiz" ? `data-open-quiz="1"` : `data-open-task="${it.id}"`}>
              ${it.ctaLabel}
            </button>
          </div>
        </article>`;
    }

    return `
      <main class="screen">
        <header class="tab-header">
          <div>
            <div class="eyebrow">SPADA / TUGAS</div>
            <h1 class="page-title">Tugas</h1>
            <p class="page-subtitle">Tugas dan kuis dari kelas yang diikuti</p>
          </div>
          ${renderProfileButton("on-light")}
        </header>

        <div class="screen-scroll with-bottom-nav">
          <div class="filter-summary-bar" style="padding:10px 14px;">
            <div style="min-width:0;">
              <div class="eyebrow" style="font-size:10px; margin-bottom:1px;">FILTER MATA KULIAH</div>
              <div class="fw-bold" style="font-size:12.5px; color:#0F172A; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                ${esc(activeCourseLabel)}
              </div>
            </div>
            <button class="btn btn-primary btn-sm" style="min-height:32px; padding:5px 11px; font-size:12px;" data-action="open-task-course-filter">
              ${svgIcon("filter", 14, "#FFFFFF")}
              <span>Filter</span>
            </button>
          </div>

          <div class="chips-row">
            ${["Semua", "Belum", "Terkirim", "Dinilai"]
              .map(
                (ch) =>
                  `<button class="chip ${taskTabFilter === ch ? "active" : ""}" data-act-filter="${ch}">${ch}</button>`
              )
              .join("")}
          </div>

          ${
            filtered.length === 0
              ? `
            <div class="card" style="text-align:center; padding:26px 20px;">
              <h3 style="margin:0 0 6px; font-size:15px;">Belum ada tugas di filter ini</h3>
              <p class="muted text-sm" style="margin:0 0 14px;">Ubah filter mata kuliah atau pilih status Semua untuk melihat seluruh tugas dan kuis.</p>
              <button class="btn btn-soft btn-block" data-action="reset-task-filters">Tampilkan semua tugas</button>
            </div>`
              : `
            ${
              pendingList.length > 0
                ? `
              <div class="section-head">
                <h2 class="section-title">Belum dikumpulkan (${pendingList.length})</h2>
              </div>
              <div class="stack-3">${pendingList.map(renderTaskCard).join("")}</div>`
                : ""
            }
            ${
              submittedList.length > 0
                ? `
              <div class="section-head" style="margin-top:${pendingList.length > 0 ? "8px" : "0"};">
                <h2 class="section-title">Terkirim · Menunggu nilai (${submittedList.length})</h2>
              </div>
              <div class="stack-3">${submittedList.map(renderTaskCard).join("")}</div>`
                : ""
            }
            ${
              gradedList.length > 0
                ? `
              <div class="section-head" style="margin-top:${pendingList.length > 0 || submittedList.length > 0 ? "8px" : "0"};">
                <h2 class="section-title">Sudah dinilai (${gradedList.length})</h2>
              </div>
              <div class="stack-3">${gradedList.map(renderTaskCard).join("")}</div>`
                : ""
            }`
          }
        </div>

        ${renderBottomNav("tugas")}
      </main>`;
  }

  // S07 · Detail Kelas IMK
  function renderS07CourseDetail() {
    const course = getCourseById(route.params.courseId || "imk-a");
    const prog = getCourseProgress(course);
    const showTugasDot = course.id === "imk-a" && hasPendingImkTask();

    let tabBodyHtml = "";
    if (courseDetailTab === "materi") {
      tabBodyHtml = course.meetings
        .map((m) => {
          const isExp = Boolean(expandedMeetings[m.id]);
          const allOpened = m.materials.length > 0 && m.materials.every((mat) => state.openedMaterialIds.includes(mat.id));
          const isDone = m.completedByDefault || allOpened;
          const badgeClass = isExp ? "active" : isDone ? "done" : "";

          return `
            <section class="meeting-card ${isExp ? "expanded" : ""}">
              <button class="meeting-trigger" data-toggle-meeting="${m.id}" aria-expanded="${isExp}">
                <span class="meeting-badge ${badgeClass}">${esc(m.num)}</span>
                <span class="meeting-title-wrap">
                  ${isExp ? `<span class="meeting-eyebrow" style="display:block;">PERTEMUAN ${parseInt(m.num, 10)}</span>` : ""}
                  <span class="meeting-title" style="display:block;">${esc(m.title)}</span>
                </span>
                ${svgIcon(isExp ? "chevronUp" : "chevronDown", 17, isExp ? "#0B63CE" : "#64748B")}
              </button>
              ${
                isExp
                  ? `
                <div class="meeting-body">
                  ${m.materials
                    .map(
                      (mat) => `
                    <button class="material-row" data-open-material="${mat.id}">
                      <img class="material-icon" src="${materialIconSrc(mat.type)}" alt="${mat.type}" />
                      <span class="material-text">
                        <span class="material-title" style="display:block;">${esc(mat.title)}</span>
                        <span class="material-meta" style="display:block;">${esc(mat.meta)}</span>
                      </span>
                      ${svgIcon("chevronRight", 15, "#0B63CE")}
                    </button>`
                    )
                    .join("")}
                </div>`
                  : ""
              }
            </section>`;
        })
        .join("");
    } else if (courseDetailTab === "tugas") {
      const courseTasks = DATA.tasks.filter((t) => t.courseId === course.id);
      const pendingT = courseTasks.filter((t) => !state.taskReceipts[t.id]);
      const submittedT = courseTasks.filter((t) => state.taskReceipts[t.id] && !state.taskReceipts[t.id].graded);
      const gradedT = courseTasks.filter((t) => state.taskReceipts[t.id] && state.taskReceipts[t.id].graded);

      function renderCourseTaskCard(t) {
        const rec = state.taskReceipts[t.id];
        const isGraded = rec && rec.graded;
        const variant = isGraded ? "graded" : rec ? "submitted" : "urgent";
        return `
          <article class="task-card ${variant}">
            <div class="row-between" style="margin-bottom:8px;">
              <span class="muted text-xs fw-bold">${esc(t.courseTag)}</span>
              ${
                isGraded
                  ? `<span class="pill pill-success">✓ Dinilai · ${rec.score}</span>`
                  : rec
                  ? `<span class="pill pill-info">Terkirim · Menunggu nilai</span>`
                  : t.deadlineUrgent
                  ? `<span class="pill pill-danger">${svgIcon("clock", 12, "#B91C1C")}<span>${esc(t.deadline)}</span></span>`
                  : `<span class="pill pill-danger">Belum dikumpulkan</span>`
              }
            </div>
            <h3 style="margin:0 0 12px; font-size:14.5px; font-weight:700;">${esc(t.title)}</h3>
            <div class="row-between">
              <span class="row-gap-2 text-xs fw-bold" style="color:${isGraded ? "#15803D" : rec ? "#0B63CE" : "#B91C1C"}; min-width:0; overflow:hidden;">
                ${svgIcon(rec ? "doc" : "clock", 13, isGraded ? "#15803D" : rec ? "#0B63CE" : "#B91C1C")}
                <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${esc(rec ? rec.fileName : t.deadline)}</span>
              </span>
              <button class="btn ${rec ? "btn-soft" : "btn-primary"} btn-sm" data-open-task="${t.id}">
                ${rec ? "Lihat bukti" : "Buka tugas"}
              </button>
            </div>
          </article>`;
      }

      tabBodyHtml = `
        ${
          pendingT.length > 0
            ? `<div class="section-head"><h3 class="section-title">Belum dikumpulkan (${pendingT.length})</h3></div>
               <div class="stack-3">${pendingT.map(renderCourseTaskCard).join("")}</div>`
            : ""
        }
        ${
          submittedT.length > 0
            ? `<div class="section-head" style="margin-top:${pendingT.length > 0 ? "8px" : "0"};"><h3 class="section-title">Terkirim · Menunggu nilai (${submittedT.length})</h3></div>
               <div class="stack-3">${submittedT.map(renderCourseTaskCard).join("")}</div>`
            : ""
        }
        ${
          gradedT.length > 0
            ? `<div class="section-head" style="margin-top:${pendingT.length > 0 || submittedT.length > 0 ? "8px" : "0"};"><h3 class="section-title">Sudah dinilai (${gradedT.length})</h3></div>
               <div class="stack-3">${gradedT.map(renderCourseTaskCard).join("")}</div>`
            : ""
        }`;
    } else {
      const done = state.quiz.submitted;
      tabBodyHtml = `
        <article class="task-card ${done ? "submitted" : "urgent"}">
          <div class="row-between" style="margin-bottom:10px;">
            <img src="assets/icons/kuis.svg" alt="" style="width:36px; height:36px;" />
            <span class="pill ${done ? "pill-info" : "pill-danger"}">${done ? "Terkirim · Menunggu nilai" : "Belum dikerjakan"}</span>
          </div>
          <h3 style="margin:0 0 6px; font-size:15.5px; font-weight:700;">${esc(DATA.quiz.title)}</h3>
          <p class="muted text-xs" style="margin:0 0 14px;">5 soal (4 Pilgan · 1 Esai) · Durasi 15 menit</p>
          <button class="btn ${done ? "btn-soft" : "btn-primary"} btn-block" data-open-quiz="1">
            ${done ? "Lihat ringkasan kuis" : "Buka petunjuk kuis"}
          </button>
        </article>`;
    }

    return `
      <main class="screen">
        <header class="hero-header course-hero-header">
          <div class="hero-back-row">
            <button class="icon-btn on-hero" data-action="back" data-fallback="kelas" aria-label="Kembali">
              ${svgIcon("arrowLeft", 18, "#FFFFFF")}
            </button>
            <h1 class="hero-nav-title">Detail kelas</h1>
          </div>

          <div class="course-code-pill">${esc(course.code)} · ${esc(course.kelas).toUpperCase()}</div>
          <h2 class="course-hero-title">${esc(course.title)}</h2>
          <p class="course-hero-lecturer">Dosen pengampu: ${esc(course.lecturer)}</p>

          <div class="hero-progress-meta">
            <span>Progres materi</span>
            <strong>${prog.opened} dari ${prog.total} dibuka (${prog.pct}%)</strong>
          </div>
          <div class="hero-progress-track">
            <div class="hero-progress-fill" style="width:${prog.pct}%"></div>
          </div>
        </header>

        <div class="floating-tabs-wrap">
          <div class="segmented-tabs" role="tablist">
            <button class="seg-tab ${courseDetailTab === "materi" ? "active" : ""}" data-course-tab="materi">
              <span class="seg-tab-icon">${svgIcon("bookRegular", 16, courseDetailTab === "materi" ? "#0B63CE" : "#475569")}</span>
              <span>Materi</span>
            </button>
            <button class="seg-tab ${courseDetailTab === "tugas" ? "active" : ""}" data-course-tab="tugas">
              <span class="seg-tab-icon">
                ${svgIcon("doc", 16, courseDetailTab === "tugas" ? "#0B63CE" : "#475569")}
                ${showTugasDot ? `<span class="notif-dot" aria-label="Ada tugas aktif"></span>` : ""}
              </span>
              <span>Tugas</span>
            </button>
            <button class="seg-tab ${courseDetailTab === "kuis" ? "active" : ""}" data-course-tab="kuis">
              <span class="seg-tab-icon">${svgIcon("checkbox", 16, courseDetailTab === "kuis" ? "#0B63CE" : "#475569")}</span>
              <span>Kuis</span>
            </button>
          </div>
        </div>

        <div class="screen-scroll" style="padding-top:16px;">
          ${tabBodyHtml}
        </div>
      </main>`;
  }

  // S08 · Pratinjau Materi PPT / PDF
  function renderS08PptViewer() {
    const found = findMaterialById(route.params.materialId || "imk-m3-ppt");
    const mat = found ? found.material : DATA.courses[0].meetings[2].materials[0];

    if (mat.singlePage || !mat.slides) {
      const paras = mat.paragraphs || ["Ringkasan materi perkuliahan siap dibaca."];
      return `
        <main class="screen">
          ${renderCtxHeader(mat.title, `${mat.courseLabel} · ${mat.meetingLabel}`, "", "course-detail")}

          <div class="screen-scroll">
            <div class="card" style="padding:12px 14px;">
              <div class="row-between">
                <div class="row-gap-3" style="min-width:0;">
                  <img src="${materialIconSrc(mat.type)}" alt="${mat.type}" style="width:30px; height:30px; flex-shrink:0;" />
                  <div style="min-width:0;">
                    <div class="fw-bold" style="font-size:12.5px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${esc(mat.fileName)}</div>
                    <div class="muted text-xs">${esc(mat.meta)} · ${esc(mat.size || "1.2 MB")}</div>
                  </div>
                </div>
                <button class="btn btn-soft btn-sm" data-action="download-doc" data-file="${esc(mat.fileName)}">Unduh</button>
              </div>
            </div>

            <article class="doc-sheet">
              <div class="doc-sheet-top">
                <span>${esc(mat.courseLabel).toUpperCase()}</span>
                <span>${esc(mat.meetingLabel).toUpperCase()}</span>
              </div>
              <div class="doc-sheet-body">
                <h2 style="margin:0; font-size:18.5px; font-weight:800; line-height:1.3;">${esc(mat.title)}</h2>
                <div class="muted text-xs" style="margin-top:4px;">Pengampu: ${esc(mat.lecturer || "Rini Anggrainingsih")}</div>
                <div class="slide-accent-line"></div>
                <div class="doc-prose">
                  ${paras.map((p) => `<p>${esc(p)}</p>`).join("")}
                </div>
              </div>
            </article>
          </div>
        </main>`;
    }

    const slides = mat.slides;
    const idx = Math.max(0, Math.min(currentSlideIdx, slides.length - 1));
    const slide = slides[idx];

    return `
      <main class="screen">
        ${renderCtxHeader(mat.title, `${mat.courseLabel} · ${mat.meetingLabel}`, "", "course-detail")}

        <div class="screen-scroll with-sticky-footer">
          <div class="card" style="padding:12px 14px;">
            <div class="row-between">
              <div class="row-gap-3" style="min-width:0;">
                <img src="${materialIconSrc(mat.type)}" alt="${mat.type}" style="width:30px; height:30px; flex-shrink:0;" />
                <div style="min-width:0;">
                  <div class="fw-bold" style="font-size:12.5px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${esc(mat.fileName)}</div>
                  <div class="muted text-xs">${esc(mat.meta)} · ${esc(mat.size || "1.8 MB")}</div>
                </div>
              </div>
              <button class="btn btn-soft btn-sm" data-action="download-doc" data-file="${esc(mat.fileName)}">Unduh</button>
            </div>
          </div>

          <article class="doc-sheet">
            <div class="doc-sheet-top">
              <span>${esc(mat.meetingLabel).toUpperCase()} · ${esc(mat.lecturer || "Rini Anggrainingsih").toUpperCase()}</span>
              <span>SLIDE ${idx + 1} / ${slides.length}</span>
            </div>
            <div class="doc-sheet-body">
              <h2 style="margin:0; font-size:18.5px; font-weight:800; line-height:1.3;">${esc(slide.heading)}</h2>
              <div class="slide-accent-line"></div>
              <div class="doc-prose">
                ${slide.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
              </div>
            </div>
          </article>

          <div class="slide-dots" aria-label="Indikator slide">
            ${slides
              .map(
                (_, i) =>
                  `<button class="slide-dot ${i === idx ? "active" : ""}" data-slide-goto="${i}" aria-label="Slide ${i + 1}"></button>`
              )
              .join("")}
          </div>
        </div>

        <footer class="sticky-footer">
          <div class="row-between">
            <button class="btn btn-neutral" style="min-width:124px; ${idx === 0 ? "opacity:0.45;" : ""}" data-slide-step="-1" ${idx === 0 ? "disabled" : ""}>
              Sebelumnya
            </button>
            <strong style="font-size:13.5px;">${idx + 1} / ${slides.length}</strong>
            <button class="btn btn-primary" style="min-width:124px;" data-slide-step="1">
              ${idx === slides.length - 1 ? "Selesai" : "Berikutnya"}
            </button>
          </div>
        </footer>
      </main>`;
  }

  // S09 · Pemutar Video
  function renderS09VideoPlayer() {
    const found = findMaterialById(route.params.materialId || "imk-m3-video");
    const mat = found ? found.material : DATA.courses[0].meetings[2].materials[1];
    const totalSec = mat.durationSeconds || 760;
    const curSec = Math.min(videoState.currentSec, totalSec);
    const chapters = mat.chapters || [];
    let activeChapIdx = 0;
    chapters.forEach((ch, idx) => {
      if (curSec >= ch.time) activeChapIdx = idx;
    });

    return `
      <main class="screen">
        ${renderCtxHeader("Pemutar video", `${mat.courseLabel} · ${mat.meetingLabel}`, "", "course-detail")}

        <div class="screen-scroll with-sticky-footer">
          <section class="video-player">
            <div class="video-stage">
              <div>
                <div style="font-size:10.5px; font-weight:700; color:#94A3B8; letter-spacing:0.04em;">IMK KELAS A · ${esc(mat.meetingLabel).toUpperCase()}</div>
                <div style="font-size:14px; font-weight:700; color:#F8FAFC; margin-top:4px;">${esc(mat.title)}</div>
              </div>
              <button class="play-toggle-btn" data-action="video-toggle" aria-label="${videoState.playing ? "Jeda video" : "Putar video"}">
                ${
                  videoState.playing
                    ? `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="2" width="4" height="14" rx="1.5" fill="white"/><rect x="11" y="2" width="4" height="14" rx="1.5" fill="white"/></svg>`
                    : `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 3.2C5 2.42 5.85 1.94 6.52 2.34L15.18 7.64C15.81 8.03 15.81 8.97 15.18 9.36L6.52 14.66C5.85 15.06 5 14.58 5 13.8V3.2Z" fill="white"/></svg>`
                }
              </button>
              <div style="font-size:11px; color:#94A3B8;">${videoState.playing ? "Sedang diputar..." : "Ketuk untuk memutar video"}</div>
            </div>

            <input id="video-scrubber" class="video-scrubber" type="range" min="0" max="${totalSec}" value="${curSec}" aria-label="Posisi waktu video" />
            <div class="video-times">
              <span id="video-cur-time">${ST.formatTimer(curSec)}</span>
              <span>${esc(mat.durationLabel || ST.formatTimer(totalSec))}</span>
            </div>
          </section>

          <section class="card">
            <div class="row-gap-2" style="margin-bottom:8px;">
              <img src="assets/icons/video.svg" alt="" style="width:28px; height:28px;" />
              <span class="eyebrow">VIDEO PEMBAHASAN · ${esc(mat.durationLabel)}</span>
            </div>
            <h2 style="margin:0 0 6px; font-size:17px; font-weight:800;">${esc(mat.title)}</h2>
            <p class="secondary text-sm" style="margin:0;">${esc(mat.description || "")}</p>
          </section>

          <section class="card">
            <h3 style="margin:0 0 12px; font-size:14.5px; font-weight:700;">Pokok bahasan</h3>
            <div class="stack-2">
              ${chapters
                .map(
                  (ch, i) => `
                <button class="chapter-btn ${i === activeChapIdx ? "active" : ""}" data-video-seek="${ch.time}">
                  <span class="chapter-time">${esc(ch.label)}</span>
                  <span>${esc(ch.title)}</span>
                </button>`
                )
                .join("")}
            </div>
          </section>
        </div>

        <footer class="sticky-footer">
          <button class="btn btn-primary btn-lg btn-block" data-action="video-complete">
            Tandai selesai &amp; lanjut
          </button>
        </footer>
      </main>`;
  }

  // S10 / S10b / S10c · Detail Tugas (Real File Picker ONLY, Unsubmit, Context-Aware Back tanpa loop)
  function renderS10Task() {
    const taskId = route.params.taskId || "tugas-2";
    const task = DATA.tasks.find((t) => t.id === taskId) || DATA.tasks[0];
    const receipt = state.taskReceipts[task.id];
    const origin = route.params.origin || "course-detail";
    const returnLabel =
      origin === "tugas"
        ? "Kembali ke Tugas"
        : origin === "beranda"
        ? "Kembali ke Beranda"
        : "Kembali ke Detail Kelas";

    // S10c · Bukti Pengumpulan Terkirim (Putih/Biru) / Dinilai (Hijau)
    if (receipt) {
      const isGraded = Boolean(receipt.graded);
      return `
        <main class="screen">
          ${renderCtxHeader("Bukti pengumpulan", task.courseTag, "", origin)}

          <div class="screen-scroll">
            <section class="mascot-card ${isGraded ? "success" : "submitted"}">
              <div class="mascot-card-copy">
                ${
                  isGraded
                    ? `<span class="pill pill-success" style="margin-bottom:10px;">✓ Dinilai · ${receipt.score}</span>`
                    : `<span class="pill pill-info" style="margin-bottom:10px;">Terkirim · Menunggu nilai</span>`
                }
                <div style="margin-bottom:8px;">
                  <img src="assets/icons/bukti-terkirim.svg" alt="" style="width:40px; height:40px;" />
                </div>
                <h2 style="margin:0; font-size:18px; font-weight:800; line-height:1.28;">${isGraded ? "Tugas sudah dinilai" : "Tugas berhasil dikumpulkan"}</h2>
                <p class="secondary text-xs" style="margin:6px 0 0;">Bukti penerimaan otomatis tersimpan di riwayat kelas.</p>
              </div>
              <div class="mascot-card-art">
                <img src="assets/mascots/bukti.png" alt="Maskot bukti pengumpulan UNS" />
              </div>
            </section>

            <section class="card">
              <h3 style="margin:0 0 8px; font-size:14.5px; font-weight:700;">Rincian bukti pengumpulan</h3>
              <div class="receipt-list">
                <div class="receipt-item">
                  <div class="receipt-label">Tugas</div>
                  <div class="receipt-value">${esc(task.title)}</div>
                </div>
                <div class="receipt-item">
                  <div class="receipt-label">Berkas diterima</div>
                  <div class="receipt-value">${esc(receipt.fileName)} (${esc(receipt.sizeText)})</div>
                </div>
                <div class="receipt-item">
                  <div class="receipt-label">Waktu pengiriman</div>
                  <div class="receipt-value">${esc(receipt.submittedAt)}</div>
                </div>
                <div class="receipt-item row-between">
                  <span class="receipt-label" style="font-size:12px;">Status penilaian</span>
                  ${
                    isGraded
                      ? `<span class="pill pill-success">✓ Dinilai · ${receipt.score}</span>`
                      : `<span class="pill pill-info">${esc(receipt.gradeStatus || "Menunggu dinilai")}</span>`
                  }
                </div>
              </div>
            </section>

            <div class="stack-2" style="margin-top:auto; padding-top:16px;">
              <button class="btn btn-primary btn-lg btn-block" data-action="back" data-fallback="${origin}">${returnLabel}</button>
              ${
                !isGraded
                  ? `<button class="btn btn-danger-soft btn-lg btn-block" data-action="confirm-unsubmit" data-task-id="${task.id}">Batalkan pengumpulan</button>`
                  : `<p class="muted text-xs" style="text-align:center; margin:4px 0 0;">Tugas sudah dinilai dosen sehingga pengumpulan tidak dapat dibatalkan.</p>`
              }
            </div>
          </div>
        </main>`;
    }

    // S10 / S10b · Real Native File Picker (tanpa tombol shortcut dummy!)
    const stage = uploadFlow.taskId === task.id ? uploadFlow.stage : "idle";

    let uploadCardHtml = "";
    if (stage === "idle") {
      uploadCardHtml = `
        <section class="card">
          <div class="dropzone">
            <img src="assets/icons/dokumen-pdf.svg" alt="" style="width:42px; height:42px; margin-bottom:8px;" />
            <div class="fw-bold" style="font-size:14px;">Pilih berkas laporan PDF kamu</div>
            <div class="muted text-xs" style="margin-top:4px;">Langsung pilih berkas dari perangkat tanpa mengisi metadata tambahan</div>
          </div>

          <input id="real-file-input" type="file" style="display:none;" />
          <button class="btn btn-primary btn-lg btn-block" style="margin-top:14px;" data-action="trigger-file-input">
            Pilih berkas
          </button>
        </section>`;
    } else if (stage === "error") {
      uploadCardHtml = `
        <section class="error-box">
          <span class="pill pill-danger" style="margin-bottom:10px;">Berkas ditolak</span>
          <div class="fw-bold" style="font-size:14.5px; word-break:break-word;">${esc(uploadFlow.rejectedFileName)}</div>
          <p style="margin:6px 0 14px; font-size:12.5px; color:#991B1B; line-height:1.45;">${esc(uploadFlow.errorMessage)}</p>

          <input id="real-file-input" type="file" style="display:none;" />
          <button class="btn btn-block" style="background:#FFFFFF; color:#B91C1C; border:1px solid #FCA5A5;" data-action="trigger-file-input">
            Pilih berkas lain / Ganti berkas
          </button>
        </section>`;
    } else if (stage === "ready") {
      const f = uploadFlow.selectedFile;
      uploadCardHtml = `
        <section class="card" style="border:1.5px solid var(--border-brand);">
          <span class="pill pill-info" style="margin-bottom:12px;">Berkas siap dikirim</span>

          <div class="row-gap-3" style="padding:12px; border-radius:12px; background:var(--bg-canvas); border:1px solid var(--border-subtle); margin-bottom:14px;">
            <img src="assets/icons/dokumen-pdf.svg" alt="" style="width:34px; height:34px; flex-shrink:0;" />
            <div style="min-width:0;">
              <div class="fw-bold" style="font-size:13px; word-break:break-word;">${esc(f.name)}</div>
              <div style="font-size:11.5px; font-weight:600; color:var(--status-success); margin-top:2px;">PDF · ${f.sizeText} · Lolos validasi</div>
            </div>
          </div>

          <input id="real-file-input" type="file" style="display:none;" />
          <div class="row-gap-2">
            <button class="btn btn-neutral" style="min-width:104px;" data-action="trigger-file-input">Ganti</button>
            <button class="btn btn-primary" style="flex:1;" data-action="submit-task" data-task-id="${task.id}">Kirim tugas</button>
          </div>
        </section>`;
    } else if (stage === "uploading") {
      const f = uploadFlow.selectedFile;
      uploadCardHtml = `
        <section class="card">
          <div class="row-between" style="margin-bottom:10px;">
            <strong style="font-size:13.5px;">Mengunggah berkas...</strong>
            <strong id="upload-pct-text" style="font-size:13.5px; color:var(--brand-spada-blue);">${uploadFlow.progress}%</strong>
          </div>
          <div class="prog-track subtle" style="height:8px;">
            <div id="upload-pct-fill" class="prog-fill" style="width:${uploadFlow.progress}%"></div>
          </div>
          <p class="muted text-xs" style="margin:10px 0 0;">${esc(f ? f.name : "")} · Mohon tunggu sebentar</p>
        </section>`;
    }

    return `
      <main class="screen">
        ${renderCtxHeader("Detail tugas", task.courseTag, "", origin)}

        <div class="screen-scroll">
          <section class="task-card urgent">
            <div class="row-between" style="margin-bottom:10px;">
              <span class="pill pill-danger">Belum dikumpulkan</span>
              <span class="row-gap-2 text-xs fw-bold" style="color:var(--status-danger);">
                ${svgIcon("clock", 13, "#B91C1C")}
                <span>${esc(task.deadline)}</span>
              </span>
            </div>
            <h2 style="margin:0 0 8px; font-size:16.5px; font-weight:800; line-height:1.3;">${esc(task.title)}</h2>
            <p class="secondary text-sm" style="margin:0;">${esc(task.instruction)}</p>
          </section>

          <section class="info-box">
            <div class="row-gap-2" style="color:var(--brand-spada-blue); font-size:12px; font-weight:700; margin-bottom:4px;">
              ${svgIcon("info", 15, "#0B63CE")}
              <span>Aturan pengumpulan berkas</span>
            </div>
            <div style="font-size:12.5px; font-weight:600; color:#1E3A8A; padding-left:23px;">${esc(task.rules.summary)}</div>
          </section>

          ${uploadCardHtml}
        </div>
      </main>`;
  }

  // S11 · Petunjuk Kuis
  function renderS11QuizIntro() {
    const q = DATA.quiz;
    const origin = route.params.origin || "course-detail";
    return `
      <main class="screen">
        ${renderCtxHeader("Petunjuk kuis", q.courseTag, "", origin)}

        <div class="screen-scroll with-sticky-footer">
          <section class="card" style="padding:20px;">
            <div class="row-between" style="margin-bottom:14px;">
              <img src="assets/icons/kuis.svg" alt="" style="width:42px; height:42px;" />
              <span class="pill pill-info">Tersedia</span>
            </div>
            <h2 style="margin:0 0 6px; font-size:17.5px; font-weight:800; line-height:1.3;">${esc(q.title)}</h2>
            <p class="muted text-sm" style="margin:0;">${esc(q.coverage)}</p>
          </section>

          <div class="grid-2">
            <div class="card">
              <div class="eyebrow" style="color:var(--text-muted);">JUMLAH SOAL</div>
              <div class="fw-extra" style="font-size:19px; margin:4px 0 2px;">5 Soal</div>
              <div class="secondary text-xs">4 Pilgan · 1 Esai</div>
            </div>
            <div class="card">
              <div class="eyebrow" style="color:var(--text-muted);">DURASI KUIS</div>
              <div class="fw-extra" style="font-size:19px; color:var(--brand-spada-blue); margin:4px 0 2px;">15 Menit</div>
              <div class="secondary text-xs">Timer aktif berjalan</div>
            </div>
          </div>

          <section class="card">
            <h3 style="margin:0 0 12px; font-size:14.5px; font-weight:700;">Aturan pengerjaan</h3>
            <ul style="margin:0; padding-left:18px; display:flex; flex-direction:column; gap:10px; color:var(--text-secondary); font-size:12.5px;">
              <li>Ketuk langsung nomor soal di bagian atas atau tombol daftar soal di bawah untuk berpindah cepat.</li>
              <li>Jawaban pilihan ganda maupun esai otomatis tersimpan di perangkat.</li>
              <li>Tinjau kelengkapan seluruh jawaban terlebih dulu sebelum konfirmasi kirim.</li>
            </ul>
          </section>
        </div>

        <footer class="sticky-footer">
          <button class="btn btn-primary btn-lg btn-block" data-action="start-quiz">
            ${state.quiz.started ? "Lanjutkan kuis" : "Mulai kuis sekarang"}
          </button>
        </footer>
      </main>`;
  }

  // S12 · Layar Soal Kuis (Ruangguru-inspired Inline 1-5 Pill Strip + Thumb-Zone Daftar Soal Button)
  function renderS12QuizPlay() {
    const qs = DATA.quiz.questions;
    const idx = Math.max(0, Math.min(state.quiz.currentIndex, qs.length - 1));
    const q = qs[idx];
    const currentAns = state.quiz.answers[q.id] || "";
    const answered = getQuizAnsweredCount();

    return `
      <main class="screen">
        <header class="ctx-header">
          <div>
            <div class="fw-extra" style="font-size:16px;">Soal ${idx + 1} dari ${qs.length}</div>
            <div class="muted text-xs">${q.type === "essay" ? "Esai singkat" : q.tag === "STUDI KASUS" ? "Pilihan ganda · Studi kasus" : "Pilihan ganda"}</div>
          </div>
          <span class="pill pill-info" style="padding:6px 11px; font-size:12.5px;">
            ${svgIcon("clock", 13, "#0B63CE")}
            <span id="quiz-timer-val">${ST.formatTimer(state.quiz.remainingSeconds)}</span>
          </span>
        </header>

        <div class="quiz-strip" aria-label="Navigasi cepat nomor soal">
          <div class="quiz-strip-pills">
            ${qs
              .map((item, i) => {
                const ans = state.quiz.answers[item.id];
                const isAns = ans && String(ans).trim().length > 0;
                const isCur = i === idx;
                const cls = isCur ? "current" : isAns ? "answered" : "";
                return `<button class="quiz-pill ${cls}" data-jump-question="${i}" aria-label="Soal ${i + 1}${isAns ? " terjawab" : ""}">${i + 1}${isAns && !isCur ? "✓" : ""}</button>`;
              })
              .join("")}
          </div>
        </div>

        <div class="screen-scroll with-sticky-footer">
          <section class="card" style="padding:18px;">
            <div class="eyebrow" style="margin-bottom:6px;">${esc(q.tag)}</div>
            ${q.heading ? `<h2 style="margin:0 0 10px; font-size:16px; font-weight:700;">${esc(q.heading)}</h2>` : ""}
            <p style="margin:0; font-size:14px; line-height:1.58; color:#1E293B;">${esc(q.prompt)}</p>

            ${
              q.type === "essay"
                ? `
              <div style="margin-top:16px;">
                <textarea id="essay-input" class="essay-textarea" placeholder="${esc(q.placeholder)}">${esc(currentAns)}</textarea>
                <div id="essay-char-status" class="text-xs fw-bold" style="margin-top:8px; color:${currentAns.trim() ? "var(--status-success)" : "var(--text-muted)"};">
                  ${currentAns.trim() ? `${currentAns.trim().length} karakter · Tersimpan otomatis` : "Belum dijawab"}
                </div>
              </div>`
                : ""
            }
          </section>

          ${
            q.type === "mcq"
              ? `
            <div class="stack-2" role="radiogroup" aria-label="Pilihan jawaban">
              ${q.options
                .map((opt) => {
                  const sel = currentAns === opt.key;
                  return `
                    <button class="quiz-option ${sel ? "selected" : ""}" data-select-opt="${esc(opt.key)}" role="radio" aria-checked="${sel}">
                      <span class="radio-circle"></span>
                      <span>${esc(opt.text)}</span>
                    </button>`;
                })
                .join("")}
            </div>`
              : ""
          }
        </div>

        <footer class="sticky-footer">
          <div class="quiz-footer-bar">
            <button class="btn btn-neutral" style="flex:1; ${idx === 0 ? "opacity:0.45;" : ""}" data-quiz-step="-1" ${idx === 0 ? "disabled" : ""}>Sebelumnya</button>
            <button class="quiz-drawer-trigger" data-action="open-qnum-drawer" aria-label="Buka ringkasan daftar nomor soal">
              ${svgIcon("grid", 16, "currentColor")}
              <span>${answered}/${qs.length}</span>
            </button>
            ${
              idx === qs.length - 1
                ? `<button class="btn btn-primary" style="flex:1;" data-go="quiz-review">Tinjau</button>`
                : `<button class="btn btn-primary" style="flex:1;" data-quiz-step="1">Selanjutnya</button>`
            }
          </div>
        </footer>
      </main>`;
  }

  // S13 · Tinjauan Jawaban Kuis
  function renderS13QuizReview() {
    const qs = DATA.quiz.questions;
    const answered = getQuizAnsweredCount();

    const timerPill = `
      <span class="pill pill-info" style="padding:6px 10px; font-size:12px;">
        ${svgIcon("clock", 13, "#0B63CE")}
        <span id="quiz-timer-val">${ST.formatTimer(state.quiz.remainingSeconds)}</span>
      </span>`;

    return `
      <main class="screen">
        ${renderCtxHeader("Tinjauan jawaban", "", timerPill, "quiz-play")}

        <div class="screen-scroll with-sticky-footer">
          <section class="info-box">
            <div class="fw-extra" style="font-size:15px; color:var(--brand-spada-blue);">${answered} dari ${qs.length} soal terjawab</div>
            <div style="font-size:12px; color:#1E3A8A; margin-top:3px;">
              ${answered === qs.length ? "Semua soal sudah terisi. Ketuk salah satu baris bila ingin mengubah jawaban." : "Masih ada soal yang belum dijawab. Ketuk baris soal untuk melengkapinya."}
            </div>
          </section>

          <div class="stack-2">
            ${qs
              .map((q, i) => {
                const ans = state.quiz.answers[q.id];
                const ok = ans && String(ans).trim().length > 0;
                const meta =
                  q.type === "essay"
                    ? ok
                      ? `Esai · ${String(ans).trim().length} karakter terisi`
                      : "Esai · Belum dijawab"
                    : ok
                    ? `Pilihan ganda · Jawaban ${ans}`
                    : "Pilihan ganda · Belum dijawab";
                return `
                  <button class="card-row-clickable" style="padding:12px 14px;" data-jump-question="${i}">
                    <span class="meeting-badge ${ok ? "done" : ""}">0${i + 1}</span>
                    <span style="flex:1; min-width:0;">
                      <span class="fw-bold" style="display:block; font-size:13.5px;">${esc(q.shortTitle)}</span>
                      <span class="muted text-xs" style="display:block; margin-top:2px;">${esc(meta)}</span>
                    </span>
                    <span class="pill ${ok ? "pill-success" : "pill-neutral"}">${ok ? "Terjawab" : "Belum"}</span>
                  </button>`;
              })
              .join("")}
          </div>
        </div>

        <footer class="sticky-footer">
          <p class="muted text-xs" style="text-align:center; margin:0 0 10px;">Setelah dikirim, jawaban kuis tidak dapat diubah lagi.</p>
          <button class="btn btn-primary btn-lg btn-block" data-action="confirm-submit-quiz">Kirim semua jawaban</button>
        </footer>
      </main>`;
  }

  // S14 · Konfirmasi Kuis Terkirim (Context-aware back tanpa loop + tetap punya Lihat di Tugas)
  function renderS14QuizDone() {
    const q = DATA.quiz;
    const answered = getQuizAnsweredCount();
    const origin = route.params.origin || "course-detail";

    return `
      <main class="screen">
        ${renderCtxHeader("Status kuis", q.courseTag, "", origin)}

        <div class="screen-scroll">
          <section class="mascot-card submitted">
            <div class="mascot-card-copy">
              <span class="pill pill-info" style="margin-bottom:10px;">Terkirim · Menunggu nilai</span>
              <div style="margin-bottom:8px;">
                <img src="assets/icons/bukti-terkirim.svg" alt="" style="width:40px; height:40px;" />
              </div>
              <h2 style="margin:0; font-size:18px; font-weight:800; line-height:1.28;">Kuis berhasil dikirim</h2>
              <p class="secondary text-xs" style="margin:6px 0 0;">Jawaban pilihan ganda dan esai kamu telah tersimpan di SPADA.</p>
            </div>
            <div class="mascot-card-art">
              <img src="assets/mascots/perayaan.png" alt="Maskot perayaan kuis UNS" />
            </div>
          </section>

          <section class="card">
            <h3 style="margin:0 0 8px; font-size:14.5px; font-weight:700;">Ringkasan pengiriman kuis</h3>
            <div class="receipt-list">
              <div class="receipt-item">
                <div class="receipt-label">Kuis</div>
                <div class="receipt-value">${esc(q.shortTitle)}</div>
              </div>
              <div class="receipt-item">
                <div class="receipt-label">Kelengkapan jawaban</div>
                <div class="receipt-value" style="color:var(--status-success);">${answered} dari ${q.questions.length} soal terjawab</div>
              </div>
              <div class="receipt-item">
                <div class="receipt-label">Waktu pengiriman</div>
                <div class="receipt-value">${esc(state.quiz.submittedAt || ST.formatNowWIB())}</div>
              </div>
              <div class="receipt-item row-between">
                <span class="receipt-label" style="font-size:12px;">Durasi pengerjaan</span>
                <strong style="font-size:13px;">${esc(state.quiz.durationUsedText || "06 menit 46 detik")}</strong>
              </div>
            </div>
          </section>

          <div class="stack-2" style="margin-top:auto; padding-top:16px;">
            <button class="btn btn-primary btn-lg btn-block" data-action="return-to-course" data-course-id="imk-a">Kembali ke Detail Kelas</button>
            <button class="btn btn-soft btn-lg btn-block" data-nav="tugas">Lihat di Tugas</button>
          </div>
        </div>
      </main>`;
  }

  // S15 · Account & Settings
  function renderS15Account() {
    const s = DATA.student;
    return `
      <main class="screen">
        ${renderCtxHeader("Akun & pengaturan", "", "", "beranda")}

        <div class="screen-scroll">
          <section class="card" style="padding:18px;">
            <div class="row-gap-3" style="margin-bottom:14px;">
              <div class="avatar-static" style="width:54px; height:54px; font-size:17px;">${s.initials}</div>
              <div>
                <h2 style="margin:0; font-size:17px; font-weight:800;">${esc(s.name)}</h2>
                <div class="secondary text-xs" style="margin-top:2px;">${esc(s.nim)} · ${esc(s.prodi)}</div>
                <div class="muted text-xs" style="margin-top:2px;">${esc(s.email)}</div>
              </div>
            </div>
            <span class="pill pill-success">Sesi SSO UNS aktif · ${s.semester}</span>
          </section>

          <section class="card">
            <h3 style="margin:0 0 8px; font-size:14px; font-weight:700;">Preferensi &amp; pengujian</h3>
            <div class="receipt-list">
              <div class="receipt-item row-between">
                <span class="fw-bold" style="font-size:13.5px;">Pengingat tenggat tugas</span>
                <button class="toggle-switch ${state.settings.deadlineReminder ? "on" : ""}" data-action="toggle-reminder" role="switch" aria-checked="${state.settings.deadlineReminder}" aria-label="Pengingat tenggat tugas"></button>
              </div>
              <div class="receipt-item row-between">
                <span class="fw-bold" style="font-size:13.5px;">Panduan uji T1–T4</span>
                <button class="section-link" data-action="open-helper">Buka ›</button>
              </div>
              <div class="receipt-item row-between">
                <span class="fw-bold" style="font-size:13.5px;">Reset data prototipe</span>
                <button class="section-link" data-action="reset-proto">Ulang uji ›</button>
              </div>
            </div>
          </section>

          <section class="card">
            <div class="fw-bold" style="font-size:13.5px;">SPADA UNS Mobile · Prototipe V1</div>
            <div class="muted text-xs" style="margin-top:4px;">Kelompok 9 IMK · Informatika Universitas Sebelas Maret</div>
          </section>

          <button class="btn btn-danger-soft btn-lg btn-block" style="margin-top:auto;" data-action="logout-sso">
            Keluar dari SSO UNS
          </button>
        </div>
      </main>`;
  }

  /* ========================================================================
     OVERLAYS
     ======================================================================== */

  function renderOverlay() {
    const root = document.getElementById("overlay-root");
    if (!activeOverlay) {
      root.innerHTML = "";
      return;
    }

    // Locked Course Dark Modal (S03)
    if (activeOverlay.type === "locked-course") {
      const c = getCourseById(activeOverlay.courseId);
      root.innerHTML = `
        <div class="sheet-backdrop centered" data-close-overlay="1">
          <div class="modal-card" role="dialog" aria-modal="true" aria-label="Kelas belum diikuti">
            <div class="row-gap-3" style="margin-bottom:14px;">
              <span class="icon-square" style="background:var(--status-warning-soft); border-color:#FDE68A; color:#92400E;">
                ${svgIcon("lock", 20, "#92400E")}
              </span>
              <div>
                <span class="pill pill-warning" style="margin-bottom:4px;">Belum di-enroll</span>
                <h2 style="margin:0; font-size:16.5px; font-weight:800; line-height:1.25;">${esc(c.title)}</h2>
              </div>
            </div>
            <p class="secondary text-sm" style="margin:0 0 12px;">
              Dosen: <strong>${esc(c.lecturer)}</strong> (${esc(c.kelas)})
            </p>
            <div style="padding:12px 14px; border-radius:12px; background:var(--bg-canvas); border:1px solid var(--border-subtle); font-size:12.5px; color:#334155; margin-bottom:18px;">
              Kamu belum terdaftar (<em>enroll</em>) di kelas ini sehingga materi dan tugasnya belum dapat diakses. Lakukan enroll menggunakan enrollment key dari dosen pengampu terlebih dulu.
            </div>
            <div class="stack-2">
              <button class="btn btn-primary btn-block" data-open-enrol="${c.id}">
                ${svgIcon("key", 16, "#FFFFFF")}
                <span>Enroll sekarang (Masukkan key)</span>
              </button>
              <button class="btn btn-neutral btn-block" data-action="close-overlay">Tutup</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // Enrolled Course Prototype Scope Modal
    if (activeOverlay.type === "enrolled-limited") {
      const c = getCourseById(activeOverlay.courseId);
      root.innerHTML = `
        <div class="sheet-backdrop centered" data-close-overlay="1">
          <div class="modal-card" role="dialog" aria-modal="true" aria-label="Cakupan pratinjau prototipe">
            <span class="pill pill-success" style="margin-bottom:10px;">Berhasil diikuti</span>
            <h2 style="margin:0 0 4px; font-size:17px; font-weight:800;">${esc(c.title)}</h2>
            <p class="secondary text-xs" style="margin:0 0 14px;">${esc(c.lecturer)} · ${esc(c.kelas)}</p>
            <div style="padding:12px 14px; border-radius:12px; background:var(--brand-spada-soft); border:1px solid var(--border-brand); font-size:12.5px; color:#1E3A8A; margin-bottom:18px;">
              Keanggotaan kelas ini sudah tersimpan. Pada prototipe V1 ini, konten penuh (materi, video, tugas T3, dan kuis T4) difokuskan pada kelas <strong>Interaksi Manusia &amp; Komputer — Kelas A</strong>.
            </div>
            <div class="stack-2">
              <button class="btn btn-primary btn-block" data-open-course="imk-a">Buka IMK Kelas A</button>
              <button class="btn btn-neutral btn-block" data-action="close-overlay">Tutup</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // Hierarchical UNS Filter Bottom Sheet (Start empty / pick Fakultas -> Prodi -> Semester)
    if (activeOverlay.type === "uns-filter") {
      const facObj = DATA.unsHierarchy.faculties.find((x) => x.id === draftFilterState.faculty) || null;
      const scopeHint = activeOverlay.hint || "";
      const readyToApply = Boolean(draftFilterState.faculty && draftFilterState.prodi && draftFilterState.semester);

      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Filter fakultas, prodi, dan semester UNS">
            <div class="sheet-handle"></div>
            <div class="row-between" style="margin-bottom:4px;">
              <h2 style="margin:0; font-size:18px; font-weight:800;">Filter kelas UNS</h2>
              <button class="section-link" data-action="draft-filter-clear">Kosongkan</button>
            </div>
            <p class="muted text-xs" style="margin:0 0 16px;">Pilih Fakultas, Program Studi, dan Semester, lalu ketuk Terapkan.</p>

            <div class="stack-3">
              <div>
                <div class="eyebrow" style="color:var(--text-muted); margin-bottom:8px;">1. FAKULTAS</div>
                <div class="filter-wrap">
                  ${DATA.unsHierarchy.faculties
                    .map((fac) => {
                      const sel = draftFilterState.faculty === fac.id;
                      return `
                        <button class="filter-pill ${sel ? "selected" : !fac.available ? "outside" : ""}" data-pick-faculty="${fac.id}">
                          <span>${esc(fac.label)}</span>
                        </button>`;
                    })
                    .join("")}
                </div>
              </div>

              <div>
                <div class="eyebrow" style="color:var(--text-muted); margin-bottom:8px;">2. PROGRAM STUDI${facObj ? ` (${esc(facObj.label)})` : ""}</div>
                ${
                  facObj
                    ? `
                  <div class="filter-wrap">
                    ${facObj.prodis
                      .map((pr) => {
                        const sel = draftFilterState.prodi === pr.id;
                        return `
                          <button class="filter-pill ${sel ? "selected" : !pr.available ? "outside" : ""}" data-pick-prodi="${esc(pr.id)}">
                            <span>${esc(pr.label)}</span>
                          </button>`;
                      })
                      .join("")}
                  </div>`
                    : `<div class="muted text-xs" style="padding:10px 12px; border-radius:12px; background:var(--bg-canvas); border:1px dashed var(--border-strong);">Pilih Fakultas terlebih dulu untuk melihat Program Studi.</div>`
                }
              </div>

              <div>
                <div class="eyebrow" style="color:var(--text-muted); margin-bottom:8px;">3. SEMESTER</div>
                <div class="sem-circle-grid">
                  ${DATA.unsHierarchy.semesters
                    .map((num) => {
                      const sel = draftFilterState.semester === num;
                      const avail = facObj && facObj.available && draftFilterState.prodi === "S1 Informatika" && num === 5;
                      return `
                        <button class="sem-circle ${sel ? "selected" : !avail ? "outside" : ""}" data-pick-sem="${num}">
                          Sem ${num}
                        </button>`;
                    })
                    .join("")}
                </div>
              </div>

              ${
                scopeHint
                  ? `<div style="padding:10px 12px; border-radius:12px; background:var(--status-warning-soft); color:var(--status-warning); font-size:12px; font-weight:600;">${esc(scopeHint)}</div>`
                  : readyToApply
                  ? `<div style="padding:10px 12px; border-radius:12px; background:var(--brand-spada-soft); border:1px solid var(--border-brand); font-size:12px; color:#1E3A8A;">Siap diterapkan: <strong>${esc(draftFilterState.faculty)} › ${esc(draftFilterState.prodi)} › Semester ${draftFilterState.semester}</strong></div>`
                  : `<div style="padding:10px 12px; border-radius:12px; background:var(--bg-canvas); border:1px solid var(--border-subtle); font-size:12px; color:var(--text-muted);">Lengkapi pilihan Fakultas, Prodi, dan Semester.</div>`
              }
            </div>

            <div class="row-gap-2" style="margin-top:20px;">
              <button class="btn btn-neutral btn-lg" style="min-width:106px;" data-action="close-overlay">Batal</button>
              <button class="btn btn-primary btn-lg" style="flex:1; ${!readyToApply ? "opacity:0.5;" : ""}" data-action="apply-uns-filter" ${!readyToApply ? "disabled" : ""}>Terapkan filter</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // Course Filter Sheet on S05 Cari Materi
    if (activeOverlay.type === "mat-course-filter") {
      const enrolled = getEnrolledCourses();
      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Filter mata kuliah pada Cari Materi">
            <div class="sheet-handle"></div>
            <h2 style="margin:0 0 4px; font-size:18px; font-weight:800;">Filter mata kuliah</h2>
            <p class="muted text-xs" style="margin:0 0 16px;">Hanya mata kuliah yang sudah kamu ikuti yang ditampilkan.</p>

            <div class="stack-2" style="margin-bottom:18px;">
              <button class="filter-pill ${openMatCourseFilter === "Semua" ? "selected" : ""}" style="width:100%; justify-content:space-between; padding:12px 16px;" data-pick-mat-course="Semua">
                <span>Semua mata kuliah diikuti (${enrolled.length})</span>
                <span>${openMatCourseFilter === "Semua" ? "✓" : ""}</span>
              </button>
              ${enrolled
                .map(
                  (c) => `
                <button class="filter-pill ${openMatCourseFilter === c.id ? "selected" : ""}" style="width:100%; justify-content:space-between; padding:12px 16px; text-align:left;" data-pick-mat-course="${c.id}">
                  <span>${esc(c.title)} · ${esc(c.kelas)}</span>
                  <span>${openMatCourseFilter === c.id ? "✓" : ""}</span>
                </button>`
                )
                .join("")}
            </div>

            <button class="btn btn-neutral btn-lg btn-block" data-action="close-overlay">Tutup</button>
          </div>
        </div>`;
      return;
    }

    // Course Filter Sheet on S06 Tugas
    if (activeOverlay.type === "task-course-filter") {
      const enrolled = getEnrolledCourses();
      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Filter mata kuliah pada Tugas">
            <div class="sheet-handle"></div>
            <h2 style="margin:0 0 4px; font-size:18px; font-weight:800;">Filter mata kuliah</h2>
            <p class="muted text-xs" style="margin:0 0 16px;">Pilih mata kuliah untuk menyaring daftar tugas dan kuis.</p>

            <div class="stack-2" style="margin-bottom:18px;">
              <button class="filter-pill ${taskCourseFilter === "Semua" ? "selected" : ""}" style="width:100%; justify-content:space-between; padding:12px 16px;" data-pick-task-course="Semua">
                <span>Semua mata kuliah diikuti (${enrolled.length})</span>
                <span>${taskCourseFilter === "Semua" ? "✓" : ""}</span>
              </button>
              ${enrolled
                .map(
                  (c) => `
                <button class="filter-pill ${taskCourseFilter === c.id ? "selected" : ""}" style="width:100%; justify-content:space-between; padding:12px 16px; text-align:left;" data-pick-task-course="${c.id}">
                  <span>${esc(c.title)} · ${esc(c.kelas)}</span>
                  <span>${taskCourseFilter === c.id ? "✓" : ""}</span>
                </button>`
                )
                .join("")}
            </div>

            <button class="btn btn-neutral btn-lg btn-block" data-action="close-overlay">Tutup</button>
          </div>
        </div>`;
      return;
    }

    // Confirm Unsubmit Task Modal (S10c)
    if (activeOverlay.type === "confirm-unsubmit") {
      const taskId = activeOverlay.taskId;
      root.innerHTML = `
        <div class="sheet-backdrop centered" data-close-overlay="1">
          <div class="modal-card" role="dialog" aria-modal="true" aria-label="Konfirmasi batal pengumpulan tugas">
            <span class="pill pill-danger" style="margin-bottom:10px;">Batalkan pengumpulan</span>
            <h2 style="margin:0 0 6px; font-size:17px; font-weight:800;">Tarik kembali berkas tugas?</h2>
            <p class="secondary text-sm" style="margin:0 0 18px;">
              Status tugas akan kembali ke <strong>Belum dikumpulkan</strong> dan kamu dapat mengunggah berkas PDF baru sebelum tenggat berakhir.
            </p>
            <div class="row-gap-2">
              <button class="btn btn-neutral" style="flex:1;" data-action="close-overlay">Kembali</button>
              <button class="btn btn-danger-soft" style="flex:1;" data-action="do-unsubmit" data-task-id="${esc(taskId)}">Ya, batalkan</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // S04b · Enrollment Key Sheet
    if (activeOverlay.type === "enrol") {
      const course = getCourseById(activeOverlay.courseId);
      const err = activeOverlay.error || "";
      const val = activeOverlay.value || "";

      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Masukkan enrollment key">
            <div class="sheet-handle"></div>
            <div class="row-gap-3" style="margin-bottom:18px;">
              <img src="assets/icons/enrollment-key.svg" alt="" style="width:42px; height:42px;" />
              <div>
                <h2 style="margin:0; font-size:18px; font-weight:800;">Gabung kelas</h2>
                <p class="secondary text-xs" style="margin:2px 0 0;">${esc(course.title)} · ${esc(course.lecturer)} (${esc(course.kelas)})</p>
              </div>
            </div>

            <label for="enrol-key-input" class="fw-bold" style="display:block; font-size:13px; margin-bottom:8px;">Enrollment key</label>
            <input id="enrol-key-input" class="input-field ${err ? "error" : ""}" type="text" value="${esc(val)}" placeholder="Masukkan key dari dosen" autocomplete="off" />

            ${
              err
                ? `
              <div class="row-gap-2" style="margin-top:10px; align-items:flex-start; color:var(--status-danger); font-size:12px; font-weight:600;">
                ${svgIcon("info", 15, "#DC2626")}
                <span>${esc(err)}</span>
              </div>`
                : ""
            }

            <div style="margin-top:14px; padding:12px 14px; border-radius:12px; background:var(--bg-canvas); border:1px solid var(--border-subtle); font-size:12px; color:var(--text-secondary);">
              Masukkan key kelas yang valid (contoh uji: <strong>${esc(course.enrollmentKey)}</strong>) untuk mendaftar ke kelas ini.
            </div>

            <div class="row-gap-2" style="margin-top:20px;">
              <button class="btn btn-neutral btn-lg" style="min-width:110px;" data-action="close-overlay">Batal</button>
              <button class="btn btn-primary btn-lg" style="flex:1;" data-action="submit-enrol" data-course-id="${course.id}">Gabung kelas</button>
            </div>
          </div>
        </div>`;

      const inp = document.getElementById("enrol-key-input");
      if (inp) setTimeout(() => inp.focus(), 60);
      return;
    }

    // Restricted Access Sheet (IMK Kelas B)
    if (activeOverlay.type === "restricted") {
      const course = getCourseById(activeOverlay.courseId);
      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Informasi akses dibatasi">
            <div class="sheet-handle"></div>
            <span class="pill pill-warning" style="margin-bottom:10px;">Akses dibatasi</span>
            <h2 style="margin:0 0 6px; font-size:18px; font-weight:800;">${esc(course.title)} (${esc(course.kelas)})</h2>
            <p class="secondary text-sm" style="margin:0 0 14px;">Dosen pengampu: <strong>${esc(course.lecturer)}</strong></p>
            <div style="padding:14px; border-radius:12px; background:var(--bg-canvas); border:1px solid var(--border-subtle); font-size:13px; color:#334155; margin-bottom:18px;">
              Kelas ini hanya dibuka untuk mahasiswa yang terdaftar pada <strong>${esc(course.kelas)}</strong>. Kamu sudah terdaftar pada <strong>Interaksi Manusia &amp; Komputer — Kelas A</strong>, atau hubungi dosen pengampu bila memerlukan enrollment key.
            </div>
            <div class="stack-2">
              <button class="btn btn-primary btn-lg btn-block" data-open-course="imk-a">Buka IMK Kelas A milikmu</button>
              <button class="btn btn-soft btn-block" data-open-enrol="${course.id}">Sudah punya key? Masukkan key</button>
              <button class="btn btn-neutral btn-block" data-action="close-overlay">Tutup</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // S12b · Drawer Nomor Soal
    if (activeOverlay.type === "qnum-drawer") {
      const qs = DATA.quiz.questions;
      const answered = getQuizAnsweredCount();
      const missingNums = qs
        .filter((q) => !(state.quiz.answers[q.id] && String(state.quiz.answers[q.id]).trim()))
        .map((q) => `Soal ${q.id}`);

      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Navigasi nomor soal">
            <div class="sheet-handle"></div>
            <h2 style="margin:0; font-size:18px; font-weight:800;">Daftar nomor soal</h2>
            <p class="secondary text-xs" style="margin:4px 0 16px;">${answered} dari ${qs.length} soal terjawab · Ketuk nomor untuk melompat</p>

            <div class="qnum-grid">
              ${qs
                .map((q, i) => {
                  const ans = state.quiz.answers[q.id];
                  const isAns = ans && String(ans).trim().length > 0;
                  const isCur = i === state.quiz.currentIndex;
                  const cls = isCur ? "current" : isAns ? "answered" : "";
                  return `<button class="qnum-cell ${cls}" data-jump-question="${i}">${i + 1}${isAns ? " ✓" : ""}</button>`;
                })
                .join("")}
            </div>

            <div class="row-gap-3" style="margin-top:16px; font-size:11.5px; color:var(--text-secondary); flex-wrap:wrap;">
              <span class="row-gap-2"><span style="width:9px; height:9px; border-radius:50%; background:#16A34A; display:inline-block;"></span>Terjawab</span>
              <span class="row-gap-2"><span style="width:9px; height:9px; border-radius:50%; background:#0B63CE; display:inline-block;"></span>Soal aktif</span>
              <span class="row-gap-2"><span style="width:9px; height:9px; border-radius:50%; background:#CBD5E1; display:inline-block;"></span>Belum dijawab</span>
            </div>

            <div style="margin-top:16px; padding:12px 14px; border-radius:12px; background:var(--bg-canvas); border:1px solid var(--border-subtle); font-size:12px; color:var(--text-secondary);">
              ${
                missingNums.length > 0
                  ? `Belum dijawab: <strong>${missingNums.join(", ")}</strong>. Kamu tetap dapat meninjau sebelum mengirim.`
                  : "Semua soal sudah terjawab! Kamu siap meninjau dan mengirim jawaban."
              }
            </div>

            <div class="row-gap-2" style="margin-top:18px;">
              <button class="btn btn-neutral btn-lg" style="min-width:106px;" data-action="close-overlay">Tutup</button>
              <button class="btn btn-primary btn-lg" style="flex:1;" data-go="quiz-review">Tinjau jawaban</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // Confirm Quiz Submit
    if (activeOverlay.type === "confirm-quiz") {
      const answered = getQuizAnsweredCount();
      const total = DATA.quiz.questions.length;
      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Konfirmasi kirim jawaban kuis">
            <div class="sheet-handle"></div>
            <h2 style="margin:0 0 6px; font-size:18px; font-weight:800;">Kirim semua jawaban kuis?</h2>
            <p class="secondary text-sm" style="margin:0 0 18px;">
              Kamu telah menjawab <strong>${answered} dari ${total} soal</strong>. Setelah dikirim, jawaban tidak dapat diubah lagi.
            </p>
            <div class="row-gap-2">
              <button class="btn btn-neutral btn-lg" style="min-width:112px;" data-action="close-overlay">Periksa lagi</button>
              <button class="btn btn-primary btn-lg" style="flex:1;" data-action="final-submit-quiz">Ya, kirim sekarang</button>
            </div>
          </div>
        </div>`;
      return;
    }

    // Floating Helper ("Panduan Uji T1–T4")
    if (activeOverlay.type === "helper") {
      const t = state.telemetry;
      const checks = [
        { code: "T1", done: t.t1Done, title: "Akses Materi PPT", desc: "Buka IMK Kelas A → Pertemuan 3 → Slide Usability & Heuristik." },
        { code: "T2", done: t.t2Done, title: "Putar Video Pembahasan", desc: "Buka IMK Kelas A → Pertemuan 3 → Video Studi kasus mobile usability." },
        { code: "T3", done: t.t3Done, title: "Unggah Tugas + Validasi Berkas", desc: "Buka Tugas 2 → pilih berkas non-PDF/besar (uji error) → ganti berkas .pdf ≤20MB → Kirim (bisa dibatalkan/unsubmit)." },
        { code: "T4", done: t.t4Done, title: "Kuis 5 Soal + Navigasi & Esai", desc: "Kerjakan Kuis 1 (4 Pilgan + 1 Esai), lompat antarsoal via strip/daftar soal, Tinjau, lalu Kirim." },
        { code: "K05", done: t.enrolDone, title: "Filter & Enroll Kelas UNS", desc: "Buka Cari kelas di UNS → aktifkan filter FATISDA › S1 Informatika › Sem 5 → enroll (mis. ML-2026)." },
        { code: "EX", done: t.searchMaterialDone, title: "Cari Materi Kelas Saya", desc: "Buka tab Cari Materi, filter mata kuliah & jenis berkas, lalu buka materi." }
      ];

      root.innerHTML = `
        <div class="sheet-backdrop" data-close-overlay="1">
          <div class="sheet-panel" role="dialog" aria-modal="true" aria-label="Panduan Uji Prototipe T1 sampai T4">
            <div class="sheet-handle"></div>
            <div class="row-between" style="margin-bottom:4px;">
              <h2 style="margin:0; font-size:17.5px; font-weight:800;">Panduan Uji T1–T4</h2>
              <span class="pill pill-info">SPADA V1</span>
            </div>
            <p class="muted text-xs" style="margin:0 0 14px;">Checklist otomatis tercentang saat skenario diselesaikan di prototipe ini.</p>

            <div class="stack-2" style="margin-bottom:16px;">
              ${checks
                .map(
                  (c) => `
                <div class="helper-check-item ${c.done ? "done" : ""}">
                  <span class="helper-badge">${c.done ? "✓" : c.code}</span>
                  <div>
                    <div class="fw-bold" style="font-size:12.5px;">${c.title}</div>
                    <div class="muted text-xs" style="margin-top:1px;">${c.desc}</div>
                  </div>
                </div>`
                )
                .join("")}
            </div>

            <div class="stack-2">
              <a class="btn btn-soft btn-block" href="${DATA.evaluationFormUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
                Isi Kuesioner Evaluasi V1 (Google Form)
              </a>
              <div class="row-gap-2">
                <button class="btn btn-danger-soft" style="flex:1;" data-action="reset-proto">Reset Prototipe</button>
                <button class="btn btn-neutral" style="min-width:100px;" data-action="close-overlay">Tutup</button>
              </div>
            </div>
          </div>
        </div>`;
    }
  }

  /* ========================================================================
     MAIN RENDER & EVENT DELEGATION
     ======================================================================== */

  function render() {
    const app = document.getElementById("app");
    let html = "";
    switch (route.name) {
      case "login": html = renderS01Login(); break;
      case "beranda": html = renderS02Beranda(); break;
      case "kelas": html = renderS03Kelas(); break;
      case "catalog": html = renderS04Catalog(); break;
      case "cari-materi": html = renderS05CariMateri(); break;
      case "tugas": html = renderS06Tugas(); break;
      case "course-detail": html = renderS07CourseDetail(); break;
      case "ppt": html = renderS08PptViewer(); break;
      case "video": html = renderS09VideoPlayer(); break;
      case "task-detail": html = renderS10Task(); break;
      case "quiz-intro": html = renderS11QuizIntro(); break;
      case "quiz-play": html = renderS12QuizPlay(); break;
      case "quiz-review": html = renderS13QuizReview(); break;
      case "quiz-done": html = renderS14QuizDone(); break;
      case "account": html = renderS15Account(); break;
      default: html = renderS02Beranda();
    }

    app.innerHTML = html;
    renderOverlay();
    bindDynamicInputs();
  }

  function bindDynamicInputs() {
    const catInp = document.getElementById("catalog-search-input");
    if (catInp) {
      catInp.addEventListener("input", (e) => {
        catalogQuery = e.target.value;
        const pos = e.target.selectionStart;
        render();
        const next = document.getElementById("catalog-search-input");
        if (next) { next.focus(); next.setSelectionRange(pos, pos); }
      });
    }

    const matInp = document.getElementById("openmat-search-input");
    if (matInp) {
      matInp.addEventListener("input", (e) => {
        openMatQuery = e.target.value;
        if (openMatQuery.trim()) {
          state.telemetry.searchMaterialDone = true;
          ST.saveState(state);
        }
        const pos = e.target.selectionStart;
        render();
        const next = document.getElementById("openmat-search-input");
        if (next) { next.focus(); next.setSelectionRange(pos, pos); }
      });
    }

    const scrubber = document.getElementById("video-scrubber");
    if (scrubber) {
      scrubber.addEventListener("input", (e) => {
        videoState.currentSec = parseInt(e.target.value, 10) || 0;
        const lbl = document.getElementById("video-cur-time");
        if (lbl) lbl.textContent = ST.formatTimer(videoState.currentSec);
      });
      scrubber.addEventListener("change", () => render());
    }

    const essayInp = document.getElementById("essay-input");
    if (essayInp) {
      essayInp.addEventListener("input", (e) => {
        const q = DATA.quiz.questions[state.quiz.currentIndex];
        state.quiz.answers[q.id] = e.target.value;
        ST.saveState(state);
        const stEl = document.getElementById("essay-char-status");
        if (stEl) {
          const len = e.target.value.trim().length;
          stEl.textContent = len > 0 ? `${len} karakter · Tersimpan otomatis` : "Belum dijawab";
          stEl.style.color = len > 0 ? "var(--status-success)" : "var(--text-muted)";
        }
      });
    }

    const fileInp = document.getElementById("real-file-input");
    if (fileInp) {
      fileInp.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        validateSelectedFile(file.name, file.size / (1024 * 1024));
      });
    }
  }

  function validateSelectedFile(fileName, sizeMB) {
    const taskId = route.params.taskId || "tugas-2";
    const task = DATA.tasks.find((t) => t.id === taskId) || DATA.tasks[0];
    const isPdf = fileName.toLowerCase().endsWith(".pdf");
    const sizeText = sizeMB < 0.1 ? `${Math.max(1, Math.round(sizeMB * 1024))} KB` : `${sizeMB.toFixed(1)} MB`;

    if (!isPdf || sizeMB > task.rules.maxSizeMB) {
      const ext = fileName.includes(".") ? "." + fileName.split(".").pop().toLowerCase() : "tidak dikenal";
      let reason = "";
      if (!isPdf && sizeMB > task.rules.maxSizeMB) {
        reason = `Format ${ext} (${sizeText}) tidak sesuai aturan. Pilih berkas berformat .pdf dengan ukuran maks. ${task.rules.maxSizeMB} MB.`;
      } else if (!isPdf) {
        reason = `Format ${ext} tidak didukung. Hanya berkas berformat .pdf yang diterima.`;
      } else {
        reason = `Ukuran berkas (${sizeText}) melebihi batas maksimal ${task.rules.maxSizeMB} MB.`;
      }
      uploadFlow = { taskId: task.id, stage: "error", rejectedFileName: fileName, errorMessage: reason, selectedFile: null, progress: 0, intervalId: null };
      state.telemetry.t3ErrorSeen = true;
      ST.saveState(state);
      render();
      return;
    }

    uploadFlow = { taskId: task.id, stage: "ready", rejectedFileName: "", errorMessage: "", selectedFile: { name: fileName, sizeText }, progress: 0, intervalId: null };
    render();
  }

  function startTaskUpload(taskId) {
    if (!uploadFlow.selectedFile) return;
    uploadFlow.stage = "uploading";
    uploadFlow.progress = 12;
    render();

    uploadFlow.intervalId = setInterval(() => {
      uploadFlow.progress = Math.min(100, uploadFlow.progress + 22);
      const txt = document.getElementById("upload-pct-text");
      const fill = document.getElementById("upload-pct-fill");
      if (txt) txt.textContent = `${uploadFlow.progress}%`;
      if (fill) fill.style.width = `${uploadFlow.progress}%`;

      if (uploadFlow.progress >= 100) {
        clearInterval(uploadFlow.intervalId);
        uploadFlow.intervalId = null;

        state.taskReceipts[taskId] = {
          fileName: uploadFlow.selectedFile.name,
          sizeText: uploadFlow.selectedFile.sizeText,
          submittedAt: ST.formatNowWIB(),
          graded: false,
          gradeStatus: "Menunggu dinilai"
        };
        if (taskId === "tugas-2") state.telemetry.t3Done = true;
        ST.saveState(state);
        uploadFlow = { taskId: null, stage: "idle", errorMessage: "", rejectedFileName: "", selectedFile: null, progress: 0, intervalId: null };
        render();
        showToast("Tugas berhasil dikumpulkan!");
      }
    }, 240);
  }

  // Global Click Delegation
  document.addEventListener("click", (e) => {
    const target = e.target.closest("button, [data-close-overlay]");
    if (!target) return;

    if (target.dataset.closeOverlay && e.target === target) {
      activeOverlay = null;
      renderOverlay();
      return;
    }

    if (target.id === "helper-fab") {
      activeOverlay = { type: "helper" };
      renderOverlay();
      return;
    }

    if (target.dataset.nav) {
      navigate(target.dataset.nav, {}, { rootTab: true });
      return;
    }

    if (target.dataset.go) {
      const dest = target.dataset.go;
      if (dest === "quiz-review") {
        activeOverlay = null;
        navigate(dest, { origin: route.params.origin || "course-detail" });
        return;
      }
      navigate(dest);
      return;
    }

    if (target.dataset.openCourse) {
      courseDetailTab = "materi";
      navigate("course-detail", { courseId: target.dataset.openCourse });
      return;
    }

    if (target.dataset.openLockedCourse) {
      activeOverlay = { type: "locked-course", courseId: target.dataset.openLockedCourse };
      renderOverlay();
      return;
    }

    if (target.dataset.openEnrolledLimited) {
      activeOverlay = { type: "enrolled-limited", courseId: target.dataset.openEnrolledLimited };
      renderOverlay();
      return;
    }

    if (target.dataset.openMaterial) {
      const found = findMaterialById(target.dataset.openMaterial);
      if (!found) return;
      markMaterialOpened(found.material);
      if (route.name === "cari-materi") {
        state.telemetry.searchMaterialDone = true;
        ST.saveState(state);
      }
      if (found.material.type === "Video") {
        navigate("video", { materialId: found.material.id });
      } else {
        navigate("ppt", { materialId: found.material.id, slideIdx: 0 });
      }
      return;
    }

    if (target.dataset.openTask) {
      const origin = route.name === "tugas" || route.name === "beranda" || route.name === "course-detail" ? route.name : "course-detail";
      navigate("task-detail", { taskId: target.dataset.openTask, origin });
      return;
    }

    if (target.dataset.openQuiz) {
      const origin = route.name === "tugas" || route.name === "beranda" || route.name === "course-detail" ? route.name : "course-detail";
      if (state.quiz.submitted) navigate("quiz-done", { origin });
      else navigate("quiz-intro", { origin });
      return;
    }

    if (target.dataset.courseTab) {
      courseDetailTab = target.dataset.courseTab;
      render();
      return;
    }

    if (target.dataset.toggleMeeting) {
      const mid = target.dataset.toggleMeeting;
      expandedMeetings[mid] = !expandedMeetings[mid];
      render();
      return;
    }

    if (target.dataset.openmatFilter) {
      openMatFilter = target.dataset.openmatFilter;
      state.telemetry.searchMaterialDone = true;
      ST.saveState(state);
      render();
      return;
    }

    if (target.dataset.pickMatCourse) {
      openMatCourseFilter = target.dataset.pickMatCourse;
      state.telemetry.searchMaterialDone = true;
      ST.saveState(state);
      activeOverlay = null;
      render();
      return;
    }

    if (target.dataset.pickTaskCourse) {
      taskCourseFilter = target.dataset.pickTaskCourse;
      activeOverlay = null;
      render();
      return;
    }

    if (target.dataset.actFilter) {
      taskTabFilter = target.dataset.actFilter;
      render();
      return;
    }

    // Hierarchical UNS Filter Selections
    if (target.dataset.pickFaculty) {
      const fac = DATA.unsHierarchy.faculties.find((x) => x.id === target.dataset.pickFaculty);
      if (!fac) return;
      draftFilterState.faculty = fac.id;
      draftFilterState.prodi = fac.prodis[0].id;
      activeOverlay.hint = fac.available
        ? ""
        : `${fac.fullName} berada di luar cakupan prototipe (data tersedia: FATISDA · S1 Informatika · Sem 5).`;
      renderOverlay();
      return;
    }

    if (target.dataset.pickProdi) {
      const fac = DATA.unsHierarchy.faculties.find((x) => x.id === draftFilterState.faculty);
      const pr = fac && fac.prodis.find((x) => x.id === target.dataset.pickProdi);
      draftFilterState.prodi = target.dataset.pickProdi;
      activeOverlay.hint = pr && pr.available
        ? ""
        : `${target.dataset.pickProdi} belum memiliki daftar kelas di prototipe ini.`;
      renderOverlay();
      return;
    }

    if (target.dataset.pickSem) {
      const num = parseInt(target.dataset.pickSem, 10);
      draftFilterState.semester = num;
      activeOverlay.hint =
        draftFilterState.faculty === "FATISDA" && draftFilterState.prodi === "S1 Informatika" && num === 5
          ? ""
          : `Data kelas Semester ${num} belum dimuat (prototipe tersedia untuk Semester 5).`;
      renderOverlay();
      return;
    }

    if (target.dataset.openEnrol) {
      activeOverlay = { type: "enrol", courseId: target.dataset.openEnrol, value: "", error: "" };
      renderOverlay();
      return;
    }

    if (target.dataset.openRestricted) {
      activeOverlay = { type: "restricted", courseId: target.dataset.openRestricted };
      renderOverlay();
      return;
    }

    if (target.dataset.slideGoto !== undefined) {
      currentSlideIdx = parseInt(target.dataset.slideGoto, 10) || 0;
      render();
      return;
    }

    if (target.dataset.slideStep !== undefined) {
      const found = findMaterialById(route.params.materialId || "imk-m3-ppt");
      const total = found && found.material.slides ? found.material.slides.length : 1;
      const step = parseInt(target.dataset.slideStep, 10);
      if (step > 0 && currentSlideIdx >= total - 1) {
        showToast("Materi selesai dibaca");
        goBack("course-detail");
        return;
      }
      currentSlideIdx = Math.max(0, Math.min(total - 1, currentSlideIdx + step));
      render();
      return;
    }

    if (target.dataset.videoSeek !== undefined) {
      videoState.currentSec = parseInt(target.dataset.videoSeek, 10) || 0;
      render();
      return;
    }

    if (target.dataset.selectOpt !== undefined) {
      const q = DATA.quiz.questions[state.quiz.currentIndex];
      state.quiz.answers[q.id] = target.dataset.selectOpt;
      ST.saveState(state);
      render();
      return;
    }

    if (target.dataset.quizStep !== undefined) {
      const delta = parseInt(target.dataset.quizStep, 10);
      state.quiz.currentIndex = Math.max(0, Math.min(DATA.quiz.questions.length - 1, state.quiz.currentIndex + delta));
      ST.saveState(state);
      render();
      return;
    }

    if (target.dataset.jumpQuestion !== undefined) {
      const origin = route.params.origin || "course-detail";
      state.quiz.currentIndex = parseInt(target.dataset.jumpQuestion, 10) || 0;
      ST.saveState(state);
      activeOverlay = null;
      while (
        historyStack.length > 0 &&
        ["quiz-play", "quiz-review"].includes(historyStack[historyStack.length - 1].name)
      ) {
        historyStack.pop();
      }
      navigate("quiz-play", { origin }, { replace: true });
      return;
    }

    const act = target.dataset.action;
    if (!act) return;

    switch (act) {
      case "login-sso":
        state.loggedIn = true;
        ST.saveState(state);
        navigate("beranda", {}, { rootTab: true });
        showToast(`Berhasil masuk sebagai ${DATA.student.name}`);
        break;

      case "logout-sso":
        state.loggedIn = false;
        ST.saveState(state);
        navigate("login", {}, { rootTab: true });
        showToast("Kamu telah keluar dari sesi SSO UNS");
        break;

      case "back":
        goBack(target.dataset.fallback || "beranda");
        break;

      case "close-overlay":
        activeOverlay = null;
        renderOverlay();
        break;

      case "open-uns-filter":
        draftFilterState = catalogFilterState.applied
          ? { faculty: catalogFilterState.faculty, prodi: catalogFilterState.prodi, semester: catalogFilterState.semester }
          : { faculty: null, prodi: null, semester: null };
        activeOverlay = { type: "uns-filter", hint: "" };
        renderOverlay();
        break;

      case "draft-filter-clear":
        draftFilterState = { faculty: null, prodi: null, semester: null };
        activeOverlay.hint = "";
        renderOverlay();
        break;

      case "apply-uns-filter":
        if (!draftFilterState.faculty || !draftFilterState.prodi || !draftFilterState.semester) return;
        catalogFilterState = {
          applied: true,
          faculty: draftFilterState.faculty,
          prodi: draftFilterState.prodi,
          semester: draftFilterState.semester
        };
        activeOverlay = null;
        render();
        showToast(`Filter aktif: ${catalogFilterState.faculty} · ${catalogFilterState.prodi} · Sem ${catalogFilterState.semester}`);
        break;

      case "clear-uns-filter":
        catalogQuery = "";
        catalogFilterState = { applied: false, faculty: null, prodi: null, semester: null };
        render();
        break;

      case "open-mat-course-filter":
        activeOverlay = { type: "mat-course-filter" };
        renderOverlay();
        break;

      case "open-task-course-filter":
        activeOverlay = { type: "task-course-filter" };
        renderOverlay();
        break;

      case "reset-task-filters":
        taskCourseFilter = "Semua";
        taskTabFilter = "Semua";
        render();
        break;

      case "return-to-course":
        returnToCourseDetail(target.dataset.courseId || "imk-a", true);
        break;

      case "reset-openmat":
        openMatQuery = "";
        openMatCourseFilter = "Semua";
        openMatFilter = "Semua";
        render();
        break;

      case "submit-enrol": {
        const course = getCourseById(target.dataset.courseId);
        const inp = document.getElementById("enrol-key-input");
        const val = (inp ? inp.value : "").trim();
        if (!val) {
          activeOverlay = { type: "enrol", courseId: course.id, value: val, error: "Isi enrollment key untuk melanjutkan." };
          renderOverlay();
          return;
        }
        if (val.toUpperCase() !== String(course.enrollmentKey || "").toUpperCase()) {
          activeOverlay = {
            type: "enrol",
            courseId: course.id,
            value: val,
            error: "Key tidak cocok untuk kelas ini. Periksa kembali atau minta key dari dosen pengampu."
          };
          renderOverlay();
          return;
        }
        if (!state.enrolledCourseIds.includes(course.id)) {
          state.enrolledCourseIds.push(course.id);
        }
        state.telemetry.enrolDone = true;
        ST.saveState(state);
        activeOverlay = { type: "enrolled-limited", courseId: course.id };
        render();
        showToast(`Berhasil bergabung ke ${course.title} (${course.kelas})`);
        break;
      }

      case "download-doc":
        showToast(`Mengunduh ${target.dataset.file || "berkas"}...`);
        break;

      case "video-toggle": {
        const found = findMaterialById(route.params.materialId || "imk-m3-video");
        const totalSec = found && found.material.durationSeconds ? found.material.durationSeconds : 760;
        if (videoState.playing) {
          clearInterval(videoState.timerId);
          videoState.timerId = null;
          videoState.playing = false;
          render();
        } else {
          videoState.playing = true;
          render();
          videoState.timerId = setInterval(() => {
            if (videoState.currentSec < totalSec) {
              videoState.currentSec += 1;
              const scrub = document.getElementById("video-scrubber");
              const lbl = document.getElementById("video-cur-time");
              if (scrub) scrub.value = videoState.currentSec;
              if (lbl) lbl.textContent = ST.formatTimer(videoState.currentSec);
            } else {
              clearInterval(videoState.timerId);
              videoState.playing = false;
              render();
            }
          }, 1000);
        }
        break;
      }

      case "video-complete":
        showToast("Video ditandai selesai ditonton");
        goBack("course-detail");
        break;

      case "trigger-file-input": {
        const fi = document.getElementById("real-file-input");
        if (fi) {
          fi.value = "";
          fi.click();
        }
        break;
      }

      case "submit-task":
        startTaskUpload(target.dataset.taskId || "tugas-2");
        break;

      case "confirm-unsubmit":
        activeOverlay = { type: "confirm-unsubmit", taskId: target.dataset.taskId || "tugas-2" };
        renderOverlay();
        break;

      case "do-unsubmit": {
        const tid = target.dataset.taskId || "tugas-2";
        delete state.taskReceipts[tid];
        if (tid === "tugas-2") state.telemetry.t3Done = false;
        ST.saveState(state);
        uploadFlow = { taskId: tid, stage: "idle", errorMessage: "", rejectedFileName: "", selectedFile: null, progress: 0, intervalId: null };
        activeOverlay = null;
        render();
        showToast("Pengumpulan dibatalkan. Kamu dapat mengunggah berkas baru.");
        break;
      }

      case "start-quiz":
        state.quiz.started = true;
        ST.saveState(state);
        navigate("quiz-play", { origin: route.params.origin || "course-detail" }, { replace: true });
        break;

      case "open-qnum-drawer":
        state.telemetry.t4DrawerUsed = true;
        ST.saveState(state);
        activeOverlay = { type: "qnum-drawer" };
        renderOverlay();
        break;

      case "confirm-submit-quiz":
        activeOverlay = { type: "confirm-quiz" };
        renderOverlay();
        break;

      case "final-submit-quiz":
        submitQuizFinal();
        break;

      case "toggle-reminder":
        state.settings.deadlineReminder = !state.settings.deadlineReminder;
        ST.saveState(state);
        render();
        break;

      case "open-helper":
        activeOverlay = { type: "helper" };
        renderOverlay();
        break;

      case "reset-proto":
        stopTimers();
        state = ST.resetState();
        catalogQuery = "";
        catalogFilterState = { applied: false, faculty: null, prodi: null, semester: null };
        openMatQuery = "";
        openMatCourseFilter = "Semua";
        openMatFilter = "Semua";
        taskCourseFilter = "Semua";
        taskTabFilter = "Semua";
        courseDetailTab = "materi";
        uploadFlow = { taskId: null, stage: "idle", errorMessage: "", rejectedFileName: "", selectedFile: null, progress: 0, intervalId: null };
        activeOverlay = null;
        navigate("login", {}, { rootTab: true });
        showToast("Prototipe berhasil direset ke kondisi awal");
        break;
    }
  });

  render();
})();
