import { Button, Flex, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate } from "react-router-dom";
import JobList from "./components/JobList";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading level={3}>Jobs</Heading>
        <Button
          variation="primary"
          onClick={() => navigate("jobs/new")}
          minWidth="fit-content"
        >
          Add a new Job
        </Button>
      </Flex>
      <JobList />
    </>
  );
}

export default App;
