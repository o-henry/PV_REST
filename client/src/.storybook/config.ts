import { configure } from "@storybook/react";

// const loadStories = () => {
//   require("../components/atoms/Count/index.stories.tsx");
// };

// configure(loadStories, module);

configure(require.context("../src", true, /\.stories\.(js|mdx|tsx)$/), module);
