export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "text",
      description: "Which tech stacks this project uses",
    },
  ],
};
