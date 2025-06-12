import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  FormControl,
} from "@mui/material";
import { User } from "../page"; // adjust the import path if needed

interface FormComponentProps {
  onSubmit: (data: User) => void;
  initialData: User | null;
}

interface FormData {
  id: number | null;
  firstname: string;
  lastname: string;
  gender: string;
  score: string;
}

interface ValidationErrors {
  firstname?: { msg: string };
  lastname?: { msg: string };
  gender?: { msg: string };
  score?: { msg: string };
}

const FormComponent: React.FC<FormComponentProps> = ({
  onSubmit,
  initialData,
}) => {
  const [formData, setFormData] = useState<FormData>({
    id: null,
    firstname: "",
    lastname: "",
    gender: "",
    score: "",
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        score: String(initialData.score),
      });
    }
  }, [initialData]);

  const isEmpty = (value: string) => !value?.trim();

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    if (isEmpty(formData.firstname)) {
      errors.firstname = { msg: "First name is required." };
    }

    if (isEmpty(formData.lastname)) {
      errors.lastname = { msg: "Last name is required." };
    }

    if (isEmpty(formData.gender)) {
      errors.gender = { msg: "Gender is required." };
    }

    const score = Number(formData.score);
    if (!formData.score || isNaN(score)) {
      errors.score = { msg: "Score is required." };
    } else if (score < 0) {
      errors.score = { msg: "Minimum score is 0." };
    } else if (score > 100) {
      errors.score = { msg: "Maximum score is 100." };
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        id: formData.id !== null ? formData.id : 0,
        score: Number(parseFloat(formData.score).toFixed(2)),
      });
      setFormData({
        id: null,
        firstname: "",
        lastname: "",
        gender: "",
        score: "",
      });
      setValidationErrors({});
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 2, maxWidth: 400, mx: "auto" }}
    >
      <Typography variant="h6" gutterBottom>
        User Form
      </Typography>

      <FormControl fullWidth size="small">
        <TextField
          label="First Name"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          error={!!validationErrors.firstname}
          helperText={validationErrors.firstname?.msg}
          margin="dense"
        />
        <TextField
          label="Last Name"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          error={!!validationErrors.lastname}
          helperText={validationErrors.lastname?.msg}
          margin="dense"
        />
        <TextField
          select
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          error={!!validationErrors.gender}
          helperText={validationErrors.gender?.msg}
          margin="dense"
        >
          <MenuItem aria-label="None" value="" sx={{ height: 30 }} />
          {/* <MenuItem value="M">Male</MenuItem> */}

          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
          <MenuItem value="U">Unknown</MenuItem>
        </TextField>
      </FormControl>

      <TextField
        label="Score"
        name="score"
        type="number"
        value={formData.score}
        onChange={handleChange}
        error={!!validationErrors.score}
        helperText={validationErrors.score?.msg}
        fullWidth
        size="small"
        margin="dense"
      />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        {formData.id ? "Edit" : "Add"}
      </Button>
      <Button
        variant="outlined"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => {
          setFormData({
            id: null,
            firstname: "",
            lastname: "",
            gender: "",
            score: "",
          });
          setValidationErrors({});
        }}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default FormComponent;
