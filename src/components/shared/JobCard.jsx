import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function JobCard(props) {
  return (
    <Link
      to={
        props.isAdmin ? `/admin/job/${props.job._id}` : `/job/${props.job._id}`
      }
    >
      <Card>
        <CardHeader>
          <CardTitle>{props.job.title}</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="gap-x-4">
          <div className="flex items-center gap-x-2">
            <Briefcase />
            <span>{props.job.type}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPin />
            <span>{props.job.location}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default JobCard;