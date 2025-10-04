// Routine Data
const routines = {
  "L-1 T-1": {
    times: ["8:00-9:45", "9:45-11:30", "11:30-1:15"],
    saturday: {
      "9:45-11:30": { subject: "DS 107 (Sujon Sir)", room: "5002" },
      "11:30-1:15": { subject: "HIS 109 (Sanaullah Sir)", room: "5002" }
    },
    sunday: {
      "8:00-9:45": { subject: "HIS 109 (Sanaullah Sir)", room: "5002" },
      "9:45-11:30": { subject: "PROG 101 (Ahsan Habib Sir)", room: "5002" },
      "11:30-1:15": { subject: "SEC 105 (Ahsan Habib Sir)", room: "5002" }
    },
    monday: {
      "9:45-11:30": { subject: "DS 107 (Sujon Sir)", room: "5002" },
      "11:30-1:15": { subject: "SE 103 (Mahmodul Sir)", room: "5002" }
    },
    tuesday: {
      "8:00-9:45": { subject: "PROG 102 (Ahsan Habib Sir)", room: "1201 (Admin Building)" },
      "9:45-11:30": { subject: "SE 104 (Mahmodul Sir)", room: "1201 (Admin Building)" }
    },
     wednesday: {
      "8:00-9:45": { subject: "SE 103 (Mahmodul Sir)", room: "5002" },
      "9:45-11:30": { subject: "PROG 101 (Ahsan Habib Sir)", room: "5002" },
      "11:30-1:15": { subject: "SEC 105 (Ahsan Habib Sir)", room: "5002" }
    }
  },

  "L-1 T-2": {
    times: ["8:00-10:00", "1:15-3:00", "3:10-4:55", "4:55-6:40"],
    saturday: {
      "1:15-3:00": { subject: "PROG 111 (Moshiur Sir)", room: "5002" },
      "3:10-4:55": { subject: "MATH 209 (Mehedi Sir)", room: "5002" }
    },
    sunday: {
      "8:00-10:00": { subject: "CSE 114 (Moshiur Sir)", room: "1202 (Admin Building)" },
      "1:15-3:00": { subject: "CSE 113 (Shifat Mam)", room: "5002" },
      "3:10-4:55": { subject: "SE 117 (Shifat Mam)", room: "5002" },
      "4:55-6:40": { subject: "CSE 115 (Mahmodul Sir)", room: "5002" }
    },
    monday: {
      "1:15-3:00": { subject: "CSE 115 (Mahmodul Sir)", room: "5002" },
      "3:10-4:55": { subject: "MATH 209 (Mehedi Sir)", room: "5002" },
      "4:55-6:40": { subject: "PROG 111 (Moshiur Sir)", room: "5002" }
    },
    tuesday: {
      "1:15-3:00": { subject: "SE 118 (Shifat Mam)", room: "1202 (Admin Building)" },
      "3:10-4:55": { subject: "PROG 112 (Moshiur Sir)", room: "1202 (Admin Building)" }
    },
    wednesday: {
      "1:15-3:00": { subject: "SE 118 (Shifat Mam)", room: "1002" },
      "3:10-4:55": { subject: "SE 117 (Shifat Mam)", room: "1002" }
    }
  }
};

// Function to update Time options based on selected semester
function updateTimeOptions() {
  const semester = document.getElementById("semester").value;
  const timeSelect = document.getElementById("time");

  timeSelect.innerHTML = "";

  const timeList = routines[semester].times;
  timeList.forEach(time => {
    const option = document.createElement("option");
    option.value = time;
    option.textContent = time;
    timeSelect.appendChild(option);
  });
}

// Show class based on selection
function showClass() {
  const semester = document.getElementById("semester").value;
  const day = document.getElementById("day").value;
  const time = document.getElementById("time").value;
  const resultBox = document.getElementById("result");

  if (routines[semester] && routines[semester][day] && routines[semester][day][time]) {
    const { subject, room } = routines[semester][day][time];
    resultBox.textContent = `${semester.toUpperCase()} | ${day.toUpperCase()} (${time}) → ${subject}, Room: ${room}`;
  } else {
    resultBox.textContent = "❌ কোনো ক্লাস নেই!";
  }
}

// Default load: show L1T1 times first
window.onload = updateTimeOptions;
