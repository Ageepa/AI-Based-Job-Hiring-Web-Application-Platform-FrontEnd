import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "@/lib/api/jobs";
import { getJobApplicationsForJob } from "@/lib/api/jobApplication";
import { Briefcase, MapPin } from "lucide-react";
import JobApplicationCard from "@/components/shared/JobApplicationCard";
import { Separator } from "@/components/ui/separator";

function AdminJobPage() {
  const [job, setJob] = useState([]);
  const [jobApplications, setJobApplications] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const params = useParams();

  useEffect(() => {
    if (!params._id) {
      return;
    }

    getJobById(params._id)
      .then((job) => {
        setJob(job);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setError(err);
      })
      .finally(() => setIsLoading(false));

    setIsLoading(true);

    getJobApplicationsForJob(params._id)
      .then((jobApplications) => {
        setJobApplications(jobApplications);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setError(err);
      })
      .finally(() => setIsLoading(false));
  }, [params._id]);

  if (isLoading) {
    <div>
      <div>Loading...</div>
    </div>;
  }

  if (isError) {
    <div>
      <div>{error.message}</div>
    </div>;
  }

  return (
    <div>
      <div>
        <h2>{job?.title}</h2>
        <div className="flex items-center gap-x-4 mt-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{job?.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{job?.location}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 py-4">
        <p>{job?.description}</p>
      </div>
      <Separator />
      <div className="py-8">
        <h2>Job Applications</h2>
        <div className="mt-4 flex flex-col gap-y-4">
          {jobApplications.map((application) => (
            <JobApplicationCard
              key={application._id}
              fullName={application.fullName}
              _id={application._id}
              jobId={params._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminJobPage;