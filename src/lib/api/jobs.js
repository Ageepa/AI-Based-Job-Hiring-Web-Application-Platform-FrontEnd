export const createJob = async (data) => {

  const token = await window.Clerk?.session?.getToken();

  const res = await fetch("http://localhost:8000/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({
    title: data.title,
    type: data.type,
    description: data.description,
    location: data.location,
    questions: data.questions,
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to create job");
  }
  const job = await res.json();
  return job;
}

export const getJobs = async () => {
    const res = await fetch("http://localhost:8000/api/jobs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch jobs");
    }
    const data = await res.json();
    return data;
  };
  
export const getJobById = async (id) => {
    const res = await fetch(`http://localhost:8000/api/jobs/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch job");
    }
    const data = await res.json();
    return data;
  };