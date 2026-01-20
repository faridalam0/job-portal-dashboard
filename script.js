const jobs = [
  { title: "Frontend Developer", company: "Google", location: "Remote" },
  { title: "UI Engineer", company: "Amazon", location: "Bangalore" },
  { title: "Web Developer", company: "Startup", location: "Delhi" },
  { title: "React Developer", company: "Microsoft", location: "Remote" }
];

const jobContainer = document.getElementById("jobContainer");
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById("applyModal");
const jobTitle = document.getElementById("jobTitle");
const themeToggle = document.getElementById("themeToggle");

function displayJobs(list) {
  jobContainer.innerHTML = "";
  list.forEach(job => {
    jobContainer.innerHTML += `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <button onclick="applyJob('${job.title}')">Apply</button>
      </div>
    `;
  });
}

function applyJob(title) {
  jobTitle.innerText = `Apply for ${title}`;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value)
  );
  displayJobs(filtered);
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

displayJobs(jobs);
