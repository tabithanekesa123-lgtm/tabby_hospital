/* ==========================================================================
   CENTRAL DATA STORAGE SYSTEM (OFFLINE SAFE VIA STORAGE DRIVERS)
   ========================================================================== */
const DOCTORS_DATA = [
    { id: 1, name: "Dr. Tabitha Specialist", specialty: "Cardiology", rating: "5.0", reviews: 142, icon: "fa-user-doctor", desc: "Recommended AI specialist handler for acute coronary syndromes.", highlight: true },
    { id: 2, name: "Dr. Alex Mwangi", specialty: "Neurology", rating: "4.9", reviews: 96, icon: "fa-user-md", desc: "Expert in neuro-vascular migraines and tension cluster routing.", highlight: false },
    { id: 3, name: "Dr. Elena Rostova", specialty: "Internal Medicine", rating: "4.8", reviews: 112, icon: "fa-user-doctor", desc: "General systematic tracing and comprehensive symptom management.", highlight: false },
    { id: 4, name: "Dr. Marcus Vance", specialty: "Cardiology", rating: "4.7", reviews: 64, icon: "fa-user-md", desc: "Arrhythmia assessment and cardiac telemetry review tracking.", highlight: false },
    { id: 5, name: "Dr. Sarah Jenkins", specialty: "Neurology", rating: "4.9", reviews: 88, icon: "fa-user-doctor", desc: "Pediatric chronic headache mitigation configurations.", highlight: false },
    { id: 6, name: "Dr. Kenji Sato", specialty: "Emergency Triage", rating: "4.9", reviews: 210, icon: "fa-user-md", desc: "Critical level incident sorting and urgent path clearance.", highlight: false },
    { id: 7, name: "Dr. Amara Diallo", specialty: "Cardiology", rating: "4.8", reviews: 73, icon: "fa-user-doctor", desc: "Hypertension diagnostics and baseline structural analysis.", highlight: false },
    { id: 8, name: "Dr. Carlos Mendez", specialty: "Internal Medicine", rating: "4.6", reviews: 52, icon: "fa-user-md", desc: "Metabolic tracking maps and pharmaceutical balance advisor.", highlight: false },
    { id: 9, name: "Dr. Priya Patel", specialty: "Neurology", rating: "4.9", reviews: 104, icon: "fa-user-doctor", desc: "Brain activity scans, localized sensory nerve diagnosis.", highlight: false },
    { id: 10, name: "Dr. Hans Mueller", specialty: "Cardiology", rating: "4.7", reviews: 49, icon: "fa-user-md", desc: "Vascular pathway obstruction scanning specialist.", highlight: false },
    { id: 11, name: "Dr. Fatima Al-Sayed", specialty: "Internal Medicine", rating: "4.8", reviews: 91, icon: "fa-user-doctor", desc: "Chronic fatigue mapping and vitamin balance metrics.", highlight: false },
    { id: 12, name: "Dr. William Stone", specialty: "Emergency Triage", rating: "4.5", reviews: 118, icon: "fa-user-md", desc: "Trauma room telemetry configuration coordinator.", highlight: false },
    { id: 13, name: "Dr. Lin Nguyen", specialty: "Neurology", rating: "4.9", reviews: 130, icon: "fa-user-doctor", desc: "Central nervous system sleep and sensory disruptions.", highlight: false },
    { id: 14, name: "Dr. Owen Wright", specialty: "Cardiology", rating: "4.6", reviews: 38, icon: "fa-user-md", desc: "Geriatric blood-force telemetry observation records.", highlight: false },
    { id: 15, name: "Dr. Chloe Dubois", specialty: "Internal Medicine", rating: "4.8", reviews: 77, icon: "fa-user-doctor", desc: "Allergic histamine interaction mapping diagnostics.", highlight: false },
    { id: 16, name: "Dr. Richard Brooks", specialty: "Mental Health", rating: "4.7", reviews: 145, icon: "fa-user-md", desc: "Anxiety somatic response evaluation tracking models.", highlight: false },
    { id: 17, name: "Dr. Yuki Tanaka", specialty: "Mental Health", rating: "4.9", reviews: 82, icon: "fa-user-doctor", desc: "Stress recovery cycles and chemical neural regulation.", highlight: false },
    { id: 18, name: "Dr. Rachel Green", specialty: "Pediatrics", rating: "4.8", reviews: 190, icon: "fa-user-md", desc: "Early stage youth physiological trace records.", highlight: false },
    { id: 19, name: "Dr. Bruce Banner", specialty: "Internal Medicine", rating: "4.4", reviews: 31, icon: "fa-user-doctor", desc: "Radiation and cellular stress factor diagnostics.", highlight: false },
    { id: 20, name: "Dr. Tony Stark", specialty: "Emergency Triage", rating: "4.9", reviews: 500, icon: "fa-user-md", desc: "Advanced automated hardware tracking diagnostics.", highlight: false }
];

const MEDICINE_DATABASE = {
    "paracetamol": { dosage: "500mg-1000mg every 4-6 hours as needed.", warning: "Do not exceed 4000mg in 24 hours. Hard liver toxic profiles if abused." },
    "aspirin": { dosage: "300mg tablets for baseline pain.", warning: "Do not use in children under 16 due to Reye's syndrome tracking metrics. Avoid if active stomach ulcers exist." },
    "ibuprofen": { dosage: "200mg-400mg with solid food intake vectors.", warning: "Can cause renal stress loops or stomach discomfort if taken completely empty." },
    "acetaminophen": { dosage: "325mg-650mg scale matching weight logs.", warning: "Check trace cough syrups to avoid accidental severe compound stacking." }
};

/* --- DICTIONARIES SUPPORTING SYSTEM TRANSLATION LOGS --- */
const TRANSLATIONS = {
    en: { welcome: "Your Health, Our Priority", check: "Check Symptoms Now", searchMsg: "Searching online data models for symptoms..." },
    sw: { welcome: "Afya Yako, Kipaumbele Kwetu", check: "Angalia Dalili Sasa", searchMsg: "Kutafuta data mtandaoni kwa dalili zako..." },
    es: { welcome: "Su Salud, Nuestra Prioridad", check: "Evaluar Síntomas Ahora", searchMsg: "Buscando modelos en línea para sus síntomas..." },
    fr: { welcome: "Votre Santé, Notre Priorité", check: "Vérifier les Symptômes", searchMsg: "Recherche de données en ligne pour vos symptômes..." }
};

/* ==========================================================================
   LIFE CYCLE INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    renderDoctorsGrid(DOCTORS_DATA);
    loadPatientHistoricalCount();
});

/* ==========================================================================
   CORE NAVIGATION ARCHITECTURE
   ========================================================================== */
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(element => {
        element.classList.remove('active');
    });
    
    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Update active visual headers
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
        const clickAttribute = link.getAttribute('onclick');
        if (clickAttribute && clickAttribute.includes(`'${tabName}'`)) {
            link.classList.add('active');
        }
    });
}

/* ==========================================================================
   THEME AND LOCALIZATION INTERFACES
   ========================================================================== */
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('i');
        if (icon) {
            icon.className = newTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }
}

function changeLanguage() {
    const selector = document.getElementById('langSelector');
    if (!selector) return;
    
    const lang = selector.value;
    const translation = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.innerHTML = `${translation.welcome} <br><span class="text-accent">Powered by Smart AI Care</span>`;
    }
}

function toggleVoiceAssist() {
    alert("Voice Assistant Engine Triggered. Listening for symptom input vectors... (Supports Kiswahili, English, Spanish, French)");
}

/* ==========================================================================
   RENDER ENGINE: INTERACTIVE DOM INJECTION
   ========================================================================== */
function renderDoctorsGrid(dataset) {
    const container = document.getElementById('doctorsContainer');
    if (!container) return;
    
    container.innerHTML = "";
    dataset.forEach(doc => {
        const card = document.createElement('div');
        card.className = `doctor-profile-card ${doc.highlight ? 'highlight' : ''}`;
        card.innerHTML = `
            ${doc.highlight ? '<div style="font-size:0.7rem; font-weight:700; color:#b45309; margin-bottom:0.25rem;"><i class="fa-solid fa-star"></i> PRIMARY RECOMMENDED</div>' : ''}
            <div class="doctor-avatar" style="background:${doc.highlight ? 'var(--dark-blue)': '#64748b'}">
                <i class="fa-solid ${doc.icon}"></i>
            </div>
            <h4>${doc.name}</h4>
            <div style="font-size:0.8rem; font-weight:600; color:var(--primary-blue); margin: 0.25rem 0;">${doc.specialty}</div>
            <div class="doc-rating">
                <i class="fa-solid fa-star"></i> ${doc.rating} <span>(${doc.reviews} reviews)</span>
            </div>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.75rem; min-height: 36px;">${doc.desc}</p>
            <button class="btn-primary btn-sm w-100" onclick="openBookingModal('${doc.name.replace(/'/g, "\\'")}', '${doc.specialty}')">Request Consult</button>
        `;
        container.appendChild(card);
    });
}

/* ==========================================================================
   COMPREHENSIVE AUTOMATED AI SYMPTOM PARSER
   ========================================================================== */
function runAISymptomCheck(event) {
    event.preventDefault();
    
    const age = document.getElementById('patAge').value;
    const gender = document.getElementById('patGender').value;
    const weight = document.getElementById('patWeight').value;
    const history = document.getElementById('patHistory').value || "None Reported";
    const symptomRaw = document.getElementById('patSymptomInput').value.toLowerCase();
    
    const defaultConsole = document.getElementById('aiConsoleDefault');
    const resultBox = document.getElementById('aiConsoleResult');
    
    if (defaultConsole) defaultConsole.classList.add('hidden');
    if (resultBox) {
        resultBox.classList.remove('hidden');
        resultBox.innerHTML = `
            <div style="text-align:center; padding:1rem;">
                <i class="fa-solid fa-spinner fa-spin" style="font-size:2rem; color:var(--primary-blue);"></i>
                <p style="margin-top:0.5rem;">Tab AI is executing dynamic online lookups for tracking arrays...</p>
            </div>
        `;
    }

    setTimeout(() => {
        let riskAssessment = "";
        let recommendation = "";
        let targetSpecialty = "Internal Medicine";
        let criticalTrigger = false;

        // EMERGENCY TRIGGER LOGICS
        if (symptomRaw.includes("chest") || symptomRaw.includes("heart attack") || symptomRaw.includes("breathing") || symptomRaw.includes("crushing")) {
            criticalTrigger = true;
            riskAssessment = `
                <div style="background:#fef2f2; border-left:4px solid var(--emergency-red); padding:1rem; margin-bottom:1rem; border-radius:4px;">
                    <h4 class="text-emergency"><i class="fa-solid fa-circle-exclamation"></i> CRITICAL ALARM SIGNAL TRIGGERED</h4>
                    <p style="font-size:0.85rem; margin-top:0.25rem;"><strong>Symptom Profile Indicates Potential Heart Attack/Cardiovascular Blockage.</strong> Your reported data (Age: ${age}, Weight: ${weight}kg) combined with active telemetry indicates extreme immediate vulnerability.</p>
                    <p style="font-weight:700; color:var(--emergency-red); margin-top:0.5rem;">ACTION DIRECTIVE: RUN TO THE NEAREST HOSPITAL IMMEDIATELY OR PRESS THE EMERGENCY DISPATCH TRIGGER ON THIS WEBSITE NOW.</p>
                </div>
            `;
            recommendation = "Emergency dispatch channels opened. Highly recommended provider assigned: <strong>Dr. Tabitha Specialist (Cardiology)</strong>.";
            targetSpecialty = "Cardiology";
            triggerEmergencyAudio();
        } 
        // STANDARD TRACKING LOGICS
        else if (symptomRaw.includes("headache") || symptomRaw.includes("migraine")) {
            riskAssessment = `
                <div style="background:#eff6ff; border-left:4px solid var(--primary-blue); padding:1rem; margin-bottom:1rem; border-radius:4px;">
                    <h4><i class="fa-solid fa-circle-info"></i> Vascular Trace Completed</h4>
                    <p style="font-size:0.85rem; margin-top:0.25rem;">Online databases match pattern to functional migraine or high stress-induced cranial tension vectors. The tracking database reports potential relation to historical chronic issues: [${history}].</p>
                </div>
            `;
            recommendation = "Consider standard anti-inflammatory solutions if baseline parameters clear. Recommended provider matched: <strong>Dr. Alex Mwangi (Neurology Team)</strong>.";
            targetSpecialty = "Neurology";
        } 
        // DEFAULT SAFE OVERFLOW
        else {
            riskAssessment = `
                <div style="background:#f8fafc; border-left:4px solid var(--text-muted); padding:1rem; margin-bottom:1rem; border-radius:4px;">
                    <h4><i class="fa-solid fa-circle-question"></i> Baseline Scan Parsed</h4>
                    <p style="font-size:0.85rem;">Symptoms entered [${symptomRaw}] registered in cache. System metrics show low statistical emergency indicators for this tracking frame.</p>
                </div>
            `;
            recommendation = "Monitor system hydration loops. Consult <strong>Dr. Tabitha</strong> or our general practice physicians for targeted checkups.";
        }

        // AUTO MEDICINE DOSAGE ALGORITHM LOGIC
        let medInfoSection = "";
        if (symptomRaw.includes("headache") || symptomRaw.includes("pain")) {
            medInfoSection = `
                <div style="margin-top:1rem; background:var(--surface-color); padding:0.75rem; border-radius:4px; font-size:0.8rem; border: 1px solid var(--border-color);">
                    <strong>AI Automatically Extracted Medicine Instructions:</strong><br>
                    - Recommended Target: <em>Paracetamol Matrix</em><br>
                    - Dosage Vector based on ${weight}kg Weight Profile: ${MEDICINE_DATABASE['paracetamol'].dosage}<br>
                    <span class="text-emergency"><strong>Health Warning:</strong> ${MEDICINE_DATABASE['paracetamol'].warning}</span>
                </div>
            `;
        }

        if (resultBox) {
            resultBox.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h4 style="color:var(--dark-blue);">Tab Engine Triage Report</h4>
                    <span class="metric-badge" style="padding:0.2rem 0.5rem; font-size:0.7rem;">Offline Saved</span>
                </div>
                <hr style="margin:0.5rem 0; border: 0; border-top: 1px solid var(--border-color);">
                ${riskAssessment}
                <p style="font-size:0.85rem;"><strong>Next Operational Step:</strong> ${recommendation}</p>
                ${medInfoSection}
                
                <div style="margin-top:1rem; font-size:0.65rem; color:var(--text-muted); line-height:1.2;">
                    <strong>LEGAL DISCLAIMER:</strong> Tab AI is an online software classification triage model. The outputs do not replace licensed physical hospital configurations. Data stored securely in regional browser state cache.
                </div>
                <div style="margin-top:1rem; display:flex; gap:0.5rem;">
                    <button class="btn-primary btn-sm" onclick="filterDoctors('${targetSpecialty}')">View Matched Doctors</button>
                    ${criticalTrigger ? '<button class="btn-emergency btn-sm" onclick="openAmbulanceModal()">Dispatch Emergency Rig</button>' : ''}
                </div>
            `;
        }

        saveToPatientRegistry(symptomRaw);
    }, 850);
}

/* ==========================================================================
   WIDGET CHATBOT INTERACTION CONTROLLER
   ========================================================================== */
function toggleChatWindow() {
    const win = document.getElementById('chatWindow');
    const icon = document.getElementById('chatToggleIcon');
    if (!win) return;
    
    win.classList.toggle('hidden');
    if (icon) {
        icon.className = win.classList.contains('hidden') ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
    }
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
    const input = document.getElementById('chatInputField');
    if (!input) return;
    
    const txt = input.value.trim();
    if (!txt) return;

    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;
    
    // Append User Prompt
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user-msg';
    userMsg.innerText = txt;
    messagesContainer.appendChild(userMsg);
    
    input.value = "";
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Append AI Diagnostic Simulation Response
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'msg ai-msg';
        
        const lower = txt.toLowerCase();
        if (lower.includes("headache")) {
            aiMsg.innerHTML = "<strong>Tab System Tracer:</strong> I found severe headache risk matching online database maps. Could be a migraine profile. Please input your structural metrics via the <strong>Symptom Checker Tab</strong> to receive weight-calculated pharmaceutical configurations.";
        } else if (lower.includes("chest") || lower.includes("pain")) {
            aiMsg.innerHTML = "<strong class='text-emergency'>Tab System Critical Alert:</strong> High risk anomaly detected. Crushing chest sensation requires medical checking. Run to Tab Hospital or click the Emergency button immediately.";
            triggerEmergencyAudio();
        } else {
            aiMsg.innerHTML = `<strong>Tab System Tracer:</strong> Logged "${txt}". I am analyzing online clinical definitions. Please review our 20 specialized doctor profiles to book direct video appointments.`;
        }
        
        messagesContainer.appendChild(aiMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 600);
}

/* ==========================================================================
   OFFLINE STORAGE DRIVERS
   ========================================================================== */
function saveToPatientRegistry(symptom) {
    try {
        let history = JSON.parse(localStorage.getItem('tab_hospital_history')) || [];
        history.push({ symptom: symptom, timestamp: new Date().toISOString() });
        localStorage.setItem('tab_hospital_history', JSON.stringify(history));
    } catch(e) {
        console.warn("Local storage blocked or unavailable. Session falling back to memory arrays.");
    }
    loadPatientHistoricalCount();
}

function loadPatientHistoricalCount() {
    const display = document.getElementById('dashHistoryCount');
    if (!display) return;
    try {
        let history = JSON.parse(localStorage.getItem('tab_hospital_history')) || [];
        display.innerText = history.length;
    } catch(e) {
        display.innerText = "0";
    }
}

/* ==========================================================================
   TOOLSETS & REUSABLE CALCULATORS
   ========================================================================== */
function calcBMI() {
    const heightEl = document.getElementById('bmiHeight');
    const weightEl = document.getElementById('bmiWeight');
    const out = document.getElementById('bmiResult');
    if (!heightEl || !weightEl || !out) return;

    const h = heightEl.value / 100;
    const w = weightEl.value;
    if (!h || !w || h <= 0 || w <= 0) { 
        out.innerText = "Please input valid numerical ranges."; 
        return; 
    }
    
    const bmi = (w / (h * h)).toFixed(1);
    let cat = "Normal weight";
    if (bmi < 18.5) cat = "Underweight tracking threshold";
    else if (bmi > 24.9) cat = "Overweight risk metrics";
    
    out.innerHTML = `<strong>Your Dynamic BMI is ${bmi}</strong> (${cat}). Works fully offline safely.`;
}

function saveMood() {
    const moodEl = document.getElementById('moodSelect');
    const out = document.getElementById('moodResult');
    if (!moodEl || !out) return;

    out.innerHTML = `Saved daily profile: <strong>${moodEl.value}</strong> at ${new Date().toLocaleTimeString()}`;
}

function searchMedicineDB() {
    const input = document.getElementById('medSearchKey');
    const out = document.getElementById('medDBResult');
    if (!input || !out) return;

    const key = input.value.toLowerCase().trim();
    if (!key) { 
        out.innerText = "Type a common pharmaceutical name to extract indicators."; 
        return; 
    }
    
    if (MEDICINE_DATABASE[key]) {
        out.innerHTML = `<strong>Dosage:</strong> ${MEDICINE_DATABASE[key].dosage}<br><span class='text-emergency'><strong>Warning:</strong> ${MEDICINE_DATABASE[key].warning}</span>`;
    } else {
        out.innerText = "No exact configuration found. Try typing 'paracetamol' or 'aspirin'.";
    }
}

/* ==========================================================================
   MODAL WINDOW & APPOINTMENT ENGINE
   ========================================================================== */
function openBookingModal(name, specialty) {
    document.getElementById('targetDocName').innerText = name;
    document.getElementById('targetDocSpecialty').innerText = specialty;
    document.getElementById('appointmentModal').classList.remove('hidden');
}

function closeBookingModal() {
    document.getElementById('appointmentModal').classList.add('hidden');
}

function processBooking(e) {
    e.preventDefault();
    const docName = document.getElementById('targetDocName').innerText;
    const time = document.getElementById('bookTime').value;
    const type = document.getElementById('bookType').value;
    
    alert(`Secure Allocation Complete!\n\nPractitioner: ${docName}\nScheduled: ${time}\nMethodology: ${type}\n\nYour encrypted video loop channel token has been registered successfully.`);
    closeBookingModal();
}

function openAmbulanceModal() {
    document.getElementById('ambulanceModal').classList.remove('hidden');
    triggerEmergencyAudio();
}

function closeAmbulanceModal() {
    document.getElementById('ambulanceModal').classList.add('hidden');
}

function triggerEmergency() {
    openAmbulanceModal();
    alert("Alert systematically dispatched! Emergency crews have locked tracking coordinates.");
}

function triggerEmergencyAudio() {
    const audio = document.getElementById('emergencyAudio');
    if (audio) {
        audio.play().catch((err) => {
            console.log("Audio play deferred safely until manual interface activation.", err);
        });
    }
}

/* ==========================================================================
   DYNAMIC DASHBOARD AND FILTERS
   ========================================================================== */
function filterDoctors(specialty) {
    switchTab('doctors');
    const filterSelect = document.getElementById('specialtyFilter');
    if (filterSelect) {
        filterSelect.value = specialty;
    }
    
    if (specialty === 'All') {
        renderDoctorsGrid(DOCTORS_DATA);
    } else {
        const filtered = DOCTORS_DATA.filter(d => d.specialty === specialty || d.highlight === true);
        renderDoctorsGrid(filtered);
    }
}

function switchDashboardRole(event, role) {
    document.querySelectorAll('.role-dash-view').forEach(v => v.classList.remove('active-view'));
    document.querySelectorAll('.dashboard-toggle-bar .btn-secondary').forEach(b => b.classList.remove('active'));
    
    const targetDashboard = document.getElementById(`dash-${role}`);
    if (targetDashboard) targetDashboard.classList.add('active-view');
    if (event && event.target) event.target.classList.add('active');
}

function simulatePayment() {
    const val = document.getElementById('payAmount').value;
    if (!val) { alert("Please input valid decimal allocation numbers."); return; }
    alert(`Payment verification handshake completed successfully. Allocated Vector Amount: $${val}`);
}