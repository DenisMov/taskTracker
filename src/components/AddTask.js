import React from "react";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ operation: "", date: "", reminder: false }}
      validate={(values) => {
        const errors = {};
        if (!values.operation) {
          errors.operation = "Enter the task";
        }
        if (!values.date) {
          errors.date = "Please fill in the date and time";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        const formattedDate = values.date.replace("T", ", ");

        const newTask = {
          id: uuidv4(),
          operation: values.operation,
          date: formattedDate,
          reminder: values.reminder,
        };

        onAdd(newTask);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Task</label>
            <input
              type="text"
              name="operation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.operation}
              placeholder="Task name"
            />
            {errors.operation && touched.operation && (
              <div className="error">{errors.operation}</div>
            )}
          </div>

          <div className="form-control">
            <label>Date & Time</label>
            <input
              type="datetime-local"
              name="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
              placeholder="Date & Time"
            />
            {errors.date && touched.date && (
              <div className="error">{errors.date}</div>
            )}
          </div>

          <div className="form-control form-control-check">
            <label>Reminder</label>
            <input
              type="checkbox"
              name="reminder"
              onChange={handleChange}
              checked={values.reminder}
            />
          </div>

          <button
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
          >
            Save
          </button>
        </form>
      )}
    </Formik>
  );
};

export default AddTask;
