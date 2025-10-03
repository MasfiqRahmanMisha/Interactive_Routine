const schedule = {
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
};

function showClass() {
  const day = document.getElementById("day").value;
  const time = document.getElementById("time").value;
  const resultBox = document.getElementById("result");

  if (schedule[day] && schedule[day][time]) {
    const { subject, room } = schedule[day][time];
    resultBox.textContent = `${day.toUpperCase()} (${time}) → ${subject}, Room: ${room}`;
  } else {
    resultBox.textContent = "❌ কোনো ক্লাস নেই!";
  }
}
