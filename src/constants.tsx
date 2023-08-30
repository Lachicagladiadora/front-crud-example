export const INPUT_TYPE = {
  TEXT: "text",
  NUMBER: "number",
  EMAIL: "email",
  SUBMIT: "submit",
}

export const LABEL_CHILDREN = {
  NAME : "Name",
  AGE : "Age",
  EMAIL : "Email"
}

export const REGULAR_EXPRESSIONS = {
	NAME: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	AGE: /^\d{1,2}$/, 
	EMAIL: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}