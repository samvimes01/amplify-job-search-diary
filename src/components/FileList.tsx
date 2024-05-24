import { Flex, Text } from "@aws-amplify/ui-react";
import { ListPaginateWithPathOutput, list } from "aws-amplify/storage";
import clsx from "clsx";
import { useEffect, useState } from "react";
import FileUpload from "./FileUpload";

const FileList = ({
  onClick,
  selected,
}: {
  selected: string;
  onClick: (path: string) => void;
}) => {
  const [files, setFiles] = useState<ListPaginateWithPathOutput["items"]>([]);

  const fetchFiles = async () => {
    try {
      const newFiles: ListPaginateWithPathOutput["items"] = [];
      const result = await list({
        path: ({ identityId }) => `profile/${identityId}/cvs/`,
      });
      result.items.forEach((res) => {
        if (res.size) {
          newFiles.push(res);
        }
      });
      setFiles(newFiles);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };
  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <h3>
          {files.length ? "Select a CV file" : "No CV files uploaded yet"}
        </h3>
        <FileUpload onUploadSuccess={fetchFiles} />
      </Flex>
      <ul style={{ maxHeight: "40vh", overflowY: "auto", cursor: "pointer" }}>
        {files.map((file, index) => (
          <li
            key={index}
            onClick={() => onClick(file.path)}
            className={clsx({ activeItem: selected == file.path })}
          >
            <strong>{file.path.split("cvs/")[1]}</strong>
            <Text>
              Last modified: {file?.lastModified?.toLocaleString() ?? ""}
            </Text>
            <Text>Size: {file.size} bytes</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
