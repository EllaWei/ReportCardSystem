const courseCodeMap = {
  "English": ["ENG1D", "ENG2D", "ENG3U", "ENG4U", "EAE1D", "EAE2D", "EAE3U", "EAE4U"],
  "Canadian Literature": ["ETC3M", "ETC4M"],
  "Mathematics": ["MTH1W", "MPM2D", "MCR3U", "MCF3M"],
  "Advanced Functions": ["MHF4U"],
  "Calculus and Vectors": ["MCV4U"],
  "Data Management": ["MDM4U"],
  "Physics": ["SPH3U", "SPH4U"],
  "Chemistry": ["SCH3U", "SCH4U"],
  "Biology": ["SBI3U", "SBI4U"],
  "Computer Science": ["ICS3U", "ICS4U"],
  "Economics": ["CIE3M", "CIA4U"],
  "Business": ["BBI2O", "BAF3M", "BAT4M", "BOH4M"],
  "Accounting": ["BAF3M", "BAT4M"],
  "History": ["CHC2D", "CHA3U", "CHY4U"],
  "Geography": ["CGC1D", "CGF3M", "CGW4U"],
  "Visual Arts": ["AVI1O", "AVI2O", "AVI3M", "AVI4M"]
};

const courseDescriptionMap = {
  "ENG1D": "English, Grade 9, Academic",
  "ENG2D": "English, Grade 10, Academic",
  "ENG3U": "English, Grade 11, University Prep",
  "ENG4U": "English, Grade 12, University Prep",
  "EAE1D": "English, Grade 9, Academic",
  "EAE2D": "English, Grade 10, Academic",
  "EAE3U": "English, Grade 11, University Prep",
  "EAE4U": "English, Grade 12, University Prep",

  "ETC3M": "Canadian Literature, Grade 11, University/College Prep",
  "ETC4M": "Canadian Literature, Grade 12, University/College Prep",

  "MTH1W": "Mathematics, Grade 9",
  "MPM2D": "Principles of Mathematics, Grade 10, Academic",
  "MCR3U": "Functions, Grade 11, University Prep",
  "MCF3M": "Functions and Applications, Grade 11, University/College Prep",
  "MHF4U": "Advanced Functions, Grade 12, University Prep",
  "MCV4U": "Calculus and Vectors, Grade 12, University Prep",
  "MDM4U": "Mathematics of Data Management, Grade 12, University Prep",

  "SPH3U": "Physics, Grade 11, University Prep",
  "SPH4U": "Physics, Grade 12, University Prep",

  "SCH3U": "Chemistry, Grade 11, University Prep",
  "SCH4U": "Chemistry, Grade 12, University Prep",

  "SBI3U": "Biology, Grade 11, University Prep",
  "SBI4U": "Biology, Grade 12, University Prep",

  "ICS3U": "Introduction to Computer Science, Grade 11, University Prep",
  "ICS4U": "Computer Science, Grade 12, University Prep",

  "CIE3M": "Economics, Grade 11, University/College Prep",
  "CIA4U": "Analyzing Current Economic Issues, Grade 12, University Prep",

  "BBI2O": "Introduction to Business, Grade 10, Open",
  "BAF3M": "Financial Accounting Fundamentals, Grade 11, University/College Prep",
  "BAT4M": "Financial Accounting Principles, Grade 12, University/College Prep",
  "BOH4M": "Business Leadership, Grade 12, University/College Prep",

  "CHC2D": "Canadian History since World War I, Grade 10, Academic",
  "CHA3U": "American History, Grade 11, University Prep",
  "CHY4U": "World History, Grade 12, University Prep",

  "CGC1D": "Issues in Canadian Geography, Grade 9, Academic",
  "CGF3M": "Physical Geography, Grade 11, University/College Prep",
  "CGW4U": "World Issues, Grade 12, University Prep",

  "AVI1O": "Visual Arts, Grade 9, Open",
  "AVI2O": "Visual Arts, Grade 10, Open",
  "AVI3M": "Visual Arts, Grade 11, University/College Prep",
  "AVI4M": "Visual Arts, Grade 12, University/College Prep"
};

let courseCount = 0;

const coursesContainer = document.getElementById("coursesContainer");
const courseTemplate = document.getElementById("courseTemplate");

const addCourseBtn = document.getElementById("addCourseBtn");
const generateBtn = document.getElementById("generateBtn");
const printBtn = document.getElementById("printBtn");

addCourseBtn.addEventListener("click", addCourse);
generateBtn.addEventListener("click", generateReport);
printBtn.addEventListener("click", function () {
  generateReport();
  window.print();
});

function addCourse() {
  courseCount++;

  const templateContent = courseTemplate.content.cloneNode(true);
  const courseCard = templateContent.querySelector(".course-form-card");

  courseCard.dataset.courseNumber = courseCount;
  courseCard.querySelector(".course-number").textContent = courseCount;

  const courseSelect = courseCard.querySelector(".course-select");
  const codeSelect = courseCard.querySelector(".course-code-select");
  const removeBtn = courseCard.querySelector(".remove-course-btn");
  const commentsBox = courseCard.querySelector(".course-comments");
  const wordCount = courseCard.querySelector(".word-count");

  courseSelect.addEventListener("change", function () {
    updateCourseCodeOptions(courseSelect, codeSelect);
    generateReport();
  });

  codeSelect.addEventListener("change", generateReport);

  removeBtn.addEventListener("click", function () {
    courseCard.remove();
    updateCourseNumbers();
    generateReport();
  });

  commentsBox.addEventListener("input", function () {
    limitCommentsTo50Words(commentsBox, wordCount);
    generateReport();
  });

  courseCard.querySelectorAll("input, select, textarea").forEach(function (field) {
    field.addEventListener("input", generateReport);
    field.addEventListener("change", generateReport);
  });

  coursesContainer.appendChild(courseCard);
  generateReport();
}

function updateCourseCodeOptions(courseSelect, codeSelect) {
  const selectedCourse = courseSelect.value;
  const codes = courseCodeMap[selectedCourse] || [];

  codeSelect.innerHTML = '<option value="">Select course code</option>';

  codes.forEach(function (code) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = code;
    codeSelect.appendChild(option);
  });
}

function limitCommentsTo50Words(textarea, wordCountElement) {
  let words = textarea.value.trim().split(/\s+/).filter(Boolean);

  if (words.length > 50) {
    words = words.slice(0, 50);
    textarea.value = words.join(" ");
  }

  wordCountElement.textContent = words.length + " / 50 words";
}

function updateCourseNumbers() {
  const cards = document.querySelectorAll(".course-form-card");

  cards.forEach(function (card, index) {
    card.querySelector(".course-number").textContent = index + 1;
  });
}

function generateReport() {
  document.getElementById("previewStudentName").textContent =
    document.getElementById("studentName").value;

  document.getElementById("previewStudentOEN").textContent =
    document.getElementById("studentOEN").value;

  document.getElementById("previewStudentGrade").textContent =
    document.getElementById("studentGrade").value;

  document.getElementById("previewDate").textContent =
    formatDate(document.getElementById("reportDate").value);

  document.getElementById("previewReportPeriod").textContent =
    document.getElementById("reportPeriod").value;

  document.getElementById("previewStudentAverage").textContent =
    document.getElementById("studentAverage").value;

  document.getElementById("previewReportType").textContent =
    document.getElementById("reportType").value;

  document.getElementById("previewHeaderTerm").textContent =
    document.getElementById("reportPeriod").value;

  const previewCourseRows = document.getElementById("previewCourseRows");
  previewCourseRows.innerHTML = "";

  const courseCards = document.querySelectorAll(".course-form-card");

  courseCards.forEach(function (card) {
    const course = getValue(card, ".course-select");
    const code = getValue(card, ".course-code-select");
    const teacher = getValue(card, ".course-teacher");
    const mark = getValue(card, ".percentage-grade");
    const median = getValue(card, ".course-median");
    const credit = getValue(card, ".credit-earned");
    const missed = getValue(card, ".classes-missed");
    const total = getValue(card, ".total-classes");
    const lates = getValue(card, ".lates");
    const comments = getValue(card, ".course-comments");

    const responsibility = getValue(card, ".responsibility");
    const organization = getValue(card, ".organization");
    const independentWork = getValue(card, ".independent-work");
    const collaboration = getValue(card, ".collaboration");
    const initiative = getValue(card, ".initiative");
    const selfRegulation = getValue(card, ".self-regulation");

    const description = courseDescriptionMap[code] || "";

    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="preview-course-cell">
        <strong>Course Title:</strong><br>
        ${escapeHTML(course)}<br>
        ${escapeHTML(description)}<br><br>
        <strong>Course Code:</strong> ${escapeHTML(code)}<br>
        <strong>Course Teacher:</strong><br>
        ${escapeHTML(teacher)}
      </td>

      <td class="center">${escapeHTML(mark)}</td>
      <td class="center">${escapeHTML(median)}</td>
      <td class="center">${escapeHTML(credit)}</td>

      <td class="preview-comments-cell">
        ${escapeHTML(comments)}
      </td>

      <td class="center">
        ${escapeHTML(missed)}
        <hr>
        ${escapeHTML(total)}
      </td>

      <td class="center">${escapeHTML(lates)}</td>

      <td class="center">${escapeHTML(responsibility)}</td>
      <td class="center">${escapeHTML(organization)}</td>
      <td class="center">${escapeHTML(independentWork)}</td>
      <td class="center">${escapeHTML(collaboration)}</td>
      <td class="center">${escapeHTML(initiative)}</td>
      <td class="center">${escapeHTML(selfRegulation)}</td>
    `;

    previewCourseRows.appendChild(row);
  });
}

function getValue(parent, selector) {
  const element = parent.querySelector(selector);
  return element ? element.value : "";
}

function formatDate(dateValue) {
  if (!dateValue) {
    return "";
  }

  const parts = dateValue.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];

  return month + "/" + day + "/" + year;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.getElementById("studentName").addEventListener("input", generateReport);
document.getElementById("studentOEN").addEventListener("input", generateReport);
document.getElementById("studentGrade").addEventListener("input", generateReport);
document.getElementById("reportDate").addEventListener("input", generateReport);
document.getElementById("reportPeriod").addEventListener("input", generateReport);
document.getElementById("studentAverage").addEventListener("input", generateReport);

addCourse();
generateReport();

document.getElementById("saveBtn").addEventListener("click", function () {
  console.log("Save button clicked");
});