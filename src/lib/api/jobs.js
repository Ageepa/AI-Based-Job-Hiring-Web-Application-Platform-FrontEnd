export const getJobs = async () => {
    //   fetch("http://localhost:8000/api/jobs", {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res);
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
  
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