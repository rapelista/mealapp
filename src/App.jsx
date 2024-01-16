import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MealCategoryPage } from "./pages/MealCategoryPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'meals',
        children: [
          {
            index: true,
            element: <MealCategoryPage />,
          },
          {
            path: ":mealCategory",
            element: <>Meal Category Name: List Meals</>
          }
        ]
      },
      {
        path: "ingredients",
        element: <>Ingredients Category</>,
      },
      {
        path: "local-culinary",
        element: <>Local Culinary Category</>,
      },
    ]
  }
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
