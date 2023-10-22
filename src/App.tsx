import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Idcard from "./components/Idcard";
import InputLabel from "@mui/material/InputLabel";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState<FieldValues | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target?.result as string;

        setSelectedFile(result);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    setFormData({
      ...data,
      image: selectedFile,
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          padding: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      >
        <div style={{ width: "100%" }}>
          <TextField
            style={{ width: "100%" }}
            {...register("name", { required: true })}
            type="text"
            label="Full Name"
          />
          {errors.name?.type === "required" && (
            <p style={{ color: "red" }}>The name field is required</p>
          )}
        </div>
        <div style={{ width: "100%" }}>
          <InputLabel htmlFor="dob">Date of Birth:</InputLabel>
          <TextField
            style={{ width: "100%" }}
            {...register("dob", { required: true })}
            type="date"
            id="dob"
          />
          {errors.dob?.type === "required" && (
            <p style={{ color: "red" }}>The DOB is required</p>
          )}
        </div>
        <div>
          <Button variant="text" size="small" sx={{ color: "black" }}>
            Upload image:
            <Input
              {...register("image", { required: true })}
              type="file"
              onChange={handleImageChange}
            />
            {errors.image?.type === "required" && (
              <p style={{ color: "red" }}>image upload is required</p>
            )}
          </Button>
        </div>
        <div>
          <Button size="small" variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>

      {selectedFile && formData && (
        <Idcard formData={formData} selectedFile={selectedFile} />
      )}
    </div>
  );
}

export default App;
