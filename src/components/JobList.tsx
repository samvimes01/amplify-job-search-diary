import {
  Alert,
  Button,
  Flex,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Text,
} from "@aws-amplify/ui-react";
import LinkIcon from "@mui/icons-material/Link";
import Snackbar from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Schema } from "../../amplify/data/resource";
import { useAmplifyClient } from "../store";

const JobList = () => {
  const navigate = useNavigate();
  const getJobs = useAmplifyClient((state) => state.getJobs);
  const deleteJob = useAmplifyClient((state) => state.deleteJob);

  const [jobs, setJobs] = useState<Array<Schema["JobItem"]["type"]>>([]);
  const [toast, setToast] = useState<string>("");

  const deleteItem = async (id: string) => {
    await deleteJob(id);
    setToast("deleted");
    setJobs(jobs.filter((j) => j.id !== id));
  };

  useEffect(() => {
    getJobs().then((jobs) => setJobs(jobs));
  }, [getJobs]);
  if (!jobs.length) {
    return <Text>No jobs applied yet</Text>;
  }

  const handleToastClose = (
    _: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setToast("");
  };
  return (
    <div>
      <Table caption="" highlightOnHover={false} variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">Company</TableCell>
            <TableCell as="th">Job</TableCell>
            <TableCell as="th">Status</TableCell>
            <TableCell as="th">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((j) => (
            <TableRow key={`${j.id}`}>
              <TableCell>{j.company}</TableCell>
              <TableCell>
                <Flex alignItems="flex-start" gap="0.5rem">
                  {j.link && (
                    <Link href={j.link} target="_blank">
                      <LinkIcon />
                    </Link>
                  )}
                  {j.name}
                </Flex>
              </TableCell>
              <TableCell>{j.status}</TableCell>
              <TableCell>
                <Flex gap="2rem">
                  <Button
                    variation="primary"
                    colorTheme="error"
                    onClick={() => deleteItem(j.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variation="primary"
                    colorTheme="info"
                    onClick={() => navigate(`jobs/${j.id}`)}
                  >
                    Edit
                  </Button>
                </Flex>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Snackbar
        open={!!toast}
        autoHideDuration={3000}
        onClose={handleToastClose}
      >
        <Alert variation="success">Job Deleted</Alert>
      </Snackbar>
    </div>
  );
};

export default JobList;
