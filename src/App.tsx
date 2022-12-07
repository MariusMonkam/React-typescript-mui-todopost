import { ChangeEvent, useState } from "react";
import { TextField, Box } from "@mui/material";
import Heading from "./components/Heading";
import ButtonPost from "./components/ButtonPost";
import { IPost } from "./components/Interfaces";
import { Divider } from "@mui/material";
import TodoPost from "./models/TodoPost";

import "./styles.css";

export default function App() {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>();
  const [posts, setPosts] = useState<IPost[]>([]);

  const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  const AddPost = (): void => {
    const newPost = {
      title: title,
      description: description,
      postId: title + 1
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setDescription("");
    console.log(posts);
  };

  return (
    <div className="App">
      <div>
        <Heading title="ToDo Posts" />
      </div>

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-error"
          name="title"
          label="Title"
          variant="filled"
          value={title}
          onChange={HandleChange}
        />
        <TextField
          id="filled-multiline-static"
          label="Description"
          name="description"
          multiline
          rows={4}
          variant="filled"
          value={description}
          onChange={HandleChange}
        />
      </Box>
      <ButtonPost text="AddPost" onClick={AddPost} />
      <Divider />
      {posts.length > 0 &&
        posts.map((item) => {
          return (
            <TodoPost
              key={item.postId}
              postId={item.postId}
              title={item.title}
              description={item.description}
            />
          );
        })}
    </div>
  );
}
