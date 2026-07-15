const courseCodeMap = {
  "English": ["ENL1W", "ENG2D", "ENG2P", "ENG3U", "ENG4U"],
  "Media Studies": ["EMS3O"],
  "Presentation and Speaking Skills": ["EPS3O"],
  "Canadian Literature": ["ETC3M"],
  "The Writer's Craft": ["EWC4U"],
  "Studies in Literature": ["ETS4U"],
  "Business and Technological Communication": ["EBT4O"],
  "Ontario Secondary School Literacy Course": ["OLC4O"],
  "Mathematics": ["MTH1W"],
  "Principles of Mathematics": ["MPM2D"],
  "Functions": ["MCR3U"],
  "Functions and Applications": ["MCF3M"],
  "Advanced Functions": ["MHF4U"],
  "Calculus and Vectors": ["MCV4U"],
  "Mathematics of Data Management": ["MDM4U"],
  "Science": ["SNC1W", "SNC2D", "SNC2P"],
  "Biology": ["SBI3U", "SBI4U"],
  "Chemistry": ["SCH3U", "SCH4U"],
  "Physics": ["SPH3U", "SPH4U"],
  "Environmental Science": ["SVN3M"],
  "Earth and Space Science": ["SES4U"],
  "Exploring Canadian Geography": ["CGC1W"],
  "Civics and Citizenship": ["CHV2O"],
  "Canadian History Since World War I": ["CHC2D", "CHC2P"],
  "Travel and Tourism: A Regional Geographic Perspective": ["CGG3O"],
  "Understanding Canadian Law": ["CLU3M"],
  "The Individual and the Economy": ["CIE3M"],
  "Canadian and International Law": ["CLN4U"],
  "Analysing Current Economic Issues": ["CIA4U"],
  "World Issues: A Geographic Analysis": ["CGW4U"],
  "Canada: History, Identity, and Culture": ["CHI4U"],
  "Exploring Family Studies": ["HIF1O"],
  "Food and Nutrition": ["HFN1O", "HFN2O"],
  "Introduction to Anthropology, Psychology & Sociology": ["HSP3U"],
  "Families in Canada": ["HHS4U", "HHS4C"],
  "The Challenge and Change in Society": ["HNB4M"],
  "Nutrition and Health": ["HFA4U"],
  "Human Development Throughout the Lifespan": ["HHG4M"],
  "Philosophy: Questions and Theories": ["HZT4U"],
  "Food and Culture": ["HFC3M"],
  "Working with School-Age Children and Adolescents": ["HPW3C"],
  "Challenge and Change in Society": ["HSB4U"],
  "Building the entrepreneurial Mindset": ["BEM1O"],
  "Launching a Leading  Business": ["BEP2O"],
  "Financial Accounting Fundamentals": ["BAF3M"],
  "Financial Accounting Principles": ["BAT4M"],
  "International Business Fundamentals": ["BBB4M"],
  "Business Leadership: Management Fundamentals": ["BOH4M"],
  "Digital Technology and Innovations in the Changing World": ["ICD2O"],
  "Introduction to Computer Science": ["ICS3U"],
  "Computer Science": ["ICS4U"],
  "Technology and the Skilled Trades": ["TAS1O", "TAS2O"],
  "Communications Technology": ["TGJ3M", "TGJ4M"],
  "Construction Technology": ["TCJ2O", "TCJ3E", "TCJ4E"],
  "Computer Technology": ["TEJ2O"],
  "Computer Engineering Technology": ["TEJ3M", "TEJ4M"],
  "Transportation Technology": ["TTJ2O", "TTJ3O", "TTJ4O"],
  "Green Industries": ["THJ2O", "THJ3E", "THJ4E"],
  "Visual Arts": ["AVI1O", "AVI2O", "AVI3M", "AVI4M"],
  "Drama": ["ADA1O", "ADA2O", "ADA3M", "ADA4M"],
  "Career Studies": ["GLC2O"],
  "Learning Strategies 1: Skills for Success in Secondary School": ["GLE2O", "GLE1O"],
  "Advanced Learning Strategies: Skills for Success After Secondary School": ["GLS4O"],
  "English as a Second Language Level 1": ["ESLAO"],
  "English as a Second Language Level 2": ["ESLBO"],
  "English as a Second Language Level 3": ["ESLCO"],
  "English as a Second Language Level 4": ["ESLDO"],
  "English as a Second Language Level 5": ["ESLEO"],
  "English Literacy Development Level 1": ["ELDAO"],
  "English Literacy Development Level 2": ["ELDBO"],
  "English Literacy Development Level 3": ["ELDCO"],
  "English Literacy Development Level 4": ["ELDDO"],
  "English Literacy Development Level 5": ["ELDEO"]
};

const courseDescriptionMap = {
  "ENL1W": "English, Grade 9",
  "ENG2D": "English, Grade 10, Academic",
  "ENG2P": "English, Grade 10, Applied",
  "ENG3U": "English, Grade 11, University Prep",
  "ENG4U": "English, Grade 12, University Prep",
  "EMS3O": "Media Studies, Grade 11, Open",
  "EPS3O": "Presentation and Speaking Skills, Grade 11, Open",
  "ETC3M": "Canadian Literature, Grade 11, University/College Prep",
  "EWC4U": "The Writer's Craft, Grade 12, University Prep",
  "ETS4U": "Studies in Literature, Grade 12, University Prep",
  "EBT4O": "Business and Technological Communication, Grade 12, Open",
  "OLC4O": "Ontario Secondary School Literacy Course, Grade 12, Open",
  "MTH1W": "Mathematics, Grade 9",
  "MPM2D": "Principles of Mathematics, Grade 10, Academic",
  "MCR3U": "Functions, Grade 11, University Prep",
  "MCF3M": "Functions and Applications, Grade 11, University/College Prep",
  "MHF4U": "Advanced Functions, Grade 12, University Prep",
  "MCV4U": "Calculus and Vectors, Grade 12, University Prep",
  "MDM4U": "Mathematics of Data Management, Grade 12, University Prep",
  "SNC1W": "Science, Grade 9",
  "SNC2D": "Science, Grade 10, Academic",
  "SNC2P": "Science, Grade 10, Applied",
  "SBI3U": "Biology, Grade 11, University Prep",
  "SCH3U": "Chemistry, Grade 11, University Prep",
  "SPH3U": "Physics, Grade 11, University Prep",
  "SVN3M": "Environmental Science, Grade 11, University/College Prep",
  "SBI4U": "Biology, Grade 12, University Prep",
  "SCH4U": "Chemistry, Grade 12, University Prep",
  "SPH4U": "Physics, Grade 12, University Prep",
  "SES4U": "Earth and Space Science, Grade 12, University Prep",
  "CGC1W": "Exploring Canadian Geography, Grade 9",
  "CHV2O": "Civics and Citizenship, Grade 10, Open",
  "CHC2D": "Canadian History Since World War I, Grade 10, Academic",
  "CHC2P": "Canadian History Since World War I, Grade 10, Applied",
  "CGG3O": "Travel and Tourism: A Regional Geographic Perspective, Grade 11, Open",
  "CLU3M": "Understanding Canadian Law, Grade 11, University/College Prep",
  "CIE3M": "The Individual and the Economy, Grade 11, University/College Prep",
  "CLN4U": "Canadian and International Law, Grade 12, University Prep",
  "CIA4U": "Analysing Current Economic Issues, Grade 12, University Prep",
  "CGW4U": "World Issues: A Geographic Analysis, Grade 12, University Prep",
  "CHI4U": "Canada: History, Identity, and Culture, Grade 12, University Prep",
  "HIF1O": "Exploring Family Studies, Grade 9, Open",
  "HFN1O": "Food and Nutrition, Grade 9, Open",
  "HSP3U": "Introduction to Anthropology, Psychology & Sociology, Grade 11, University Prep",
  "HHS4U": "Families in Canada, Grade 12, University Prep",
  "HNB4M": "The Challenge and Change in Society, Grade 12, University/College Prep",
  "HFA4U": "Nutrition and Health, Grade 12, University Prep",
  "HHG4M": "Human Development Throughout the Lifespan, Grade 12, University/College Prep",
  "HZT4U": "Philosophy: Questions and Theories, Grade 12, University Prep",
  "HFN2O": "Food and Nutrition, Grade 10, Open",
  "HFC3M": "Food and Culture, Grade 11, University/College Prep",
  "HPW3C": "Working with School-Age Children and Adolescents, Grade 11, College Prep",
  "HSB4U": "Challenge and Change in Society, Grade 12, University Prep",
  "HHS4C": "Families in Canada, Grade 12, College Prep",
  "BEM1O": "Building the entrepreneurial Mindset, Grade 9, Open",
  "BEP2O": "Launching a Leading  Business, Grade 10, Open",
  "BAF3M": "Financial Accounting Fundamentals, Grade 11, University/College Prep",
  "BAT4M": "Financial Accounting Principles, Grade 12, University/College Prep",
  "BBB4M": "International Business Fundamentals, Grade 12, University/College Prep",
  "BOH4M": "Business Leadership: Management Fundamentals, Grade 12, University/College Prep",
  "ICD2O": "Digital Technology and Innovations in the Changing World, Grade 10, Open",
  "ICS3U": "Introduction to Computer Science, Grade 11, University Prep",
  "ICS4U": "Computer Science, Grade 12, University Prep",
  "TAS1O": "Technology and the Skilled Trades, Grade 9, Open",
  "TAS2O": "Technology and the Skilled Trades, Grade 10, Open",
  "TGJ3M": "Communications Technology, Grade 11, University/College Prep",
  "TGJ4M": "Communications Technology, Grade 12, University/College Prep",
  "TCJ2O": "Construction Technology, Grade 10, Open",
  "TCJ3E": "Construction Technology, Grade 11, Workplace Prep",
  "TCJ4E": "Construction Technology, Grade 12, Workplace Prep",
  "TEJ2O": "Computer Technology, Grade 10, Open",
  "TEJ3M": "Computer Engineering Technology, Grade 11, University/College Prep",
  "TEJ4M": "Computer Engineering Technology, Grade 12, University/College Prep",
  "TTJ2O": "Transportation Technology, Grade 10, Open",
  "TTJ3O": "Transportation Technology, Grade 11, Open",
  "TTJ4O": "Transportation Technology, Grade 12, Open",
  "THJ2O": "Green Industries, Grade 10, Open",
  "THJ3E": "Green Industries, Grade 11, Workplace Prep",
  "THJ4E": "Green Industries, Grade 12, Workplace Prep",
  "AVI1O": "Visual Arts, Grade 9, Open",
  "AVI2O": "Visual Arts, Grade 10, Open",
  "AVI3M": "Visual Arts, Grade 11, University/College Prep",
  "AVI4M": "Visual Arts, Grade 12, University/College Prep",
  "ADA1O": "Drama, Grade 9, Open",
  "ADA2O": "Drama, Grade 10, Open",
  "ADA3M": "Drama, Grade 11, University/College Prep",
  "ADA4M": "Drama, Grade 12, University/College Prep",
  "GLC2O": "Career Studies, Grade 10, Open",
  "GLE2O": "Learning Strategies 1: Skills for Success in Secondary School, Grade 10, Open",
  "GLE1O": "Learning Strategies 1: Skills for Success in Secondary School, Grade 9, Open",
  "GLS4O": "Advanced Learning Strategies: Skills for Success After Secondary School, Grade 12, Open",
  "ESLAO": "English as a Second Language Level 1",
  "ESLBO": "English as a Second Language Level 2",
  "ESLCO": "English as a Second Language Level 3",
  "ESLDO": "English as a Second Language Level 4",
  "ESLEO": "English as a Second Language Level 5",
  "ELDAO": "English Literacy Development Level 1",
  "ELDBO": "English Literacy Development Level 2",
  "ELDCO": "English Literacy Development Level 3",
  "ELDDO": "English Literacy Development Level 4",
  "ELDEO": "English Literacy Development Level 5"
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
