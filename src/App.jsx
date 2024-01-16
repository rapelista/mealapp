import { RouterProvider, createHashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MealCategoryPage } from "./pages/MealCategoryPage";
import { MealsByCategoryPage } from "./pages/MealsByCategoryPage";
import { MealDetailPage } from "./pages/MealDetailPage";

const router = createHashRouter([
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
            children: [
              {
                index: true,
                element: <MealsByCategoryPage />,
              },
              {
                path: ":idMeal",
                element: <MealDetailPage />
              }
            ]
          }
        ]
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
